import { useConfig, useMedia } from '@dsplay/react-template-utils';

// Everything UOL-specific lives here. UOL's midiaindoor XML is not standard RSS: <item><title>
// carries the category and <item><description> carries the headline, and all six channels declare
// the same generic <channel><title>UOL </title>.
const UOL_SOURCE = 'UOLIndoor';

// Android below this version parses that XML on-device and passes it through untouched, so this
// template has to swap the fields back. Every other producer — the CMS preview, and Android from
// this version on — goes through the rss-gateway, which already normalises them.
export const LEGACY_UOL_MAX_APP_VERSION = 40000;

/**
 * True when `media` carries UOL's raw, unnormalised field layout.
 *
 * Deliberately keyed on `os` as well as the version: the preview injects whatever `appVersion` the
 * template's own mock data carries, so the version alone does not identify the producer. Anything
 * that is not the Android player reads from the gateway and is already normalised.
 *
 * This hook and its two call sites are the deletable half of this module — drop them once no fleet
 * device is below the threshold.
 *
 * @returns {boolean}
 */
export function useLegacyUolFields() {
  const { source } = useMedia();
  const { os, appVersion } = useConfig();

  if (source !== UOL_SOURCE) return false;
  if (os !== 'android') return false;

  // Android too old to report a version predates the gateway either way.
  const version = Number.parseInt(appVersion, 10);
  return !Number.isFinite(version) || version < LEGACY_UOL_MAX_APP_VERSION;
}

/**
 * What the title band shows: normally the feed's own name, which for most feeds already carries
 * the section (G1's is literally "g1 > Mundo").
 *
 * UOL is the exception — every channel reports the bare "UOL ", so the feed name alone would
 * render an identical band for esporte, economia, cotidiano and the rest. Its section survives
 * normalisation as the item's category, so append that to match how the other feeds read.
 *
 * @returns {string}
 */
export function useFeedLabel() {
  const { source, title, categories } = useMedia();

  const feedName = (title ?? '').trim();
  if (source !== UOL_SOURCE) return feedName;

  const section = (Array.isArray(categories) ? categories : [])
    .map((category) => (category ?? '').trim())
    .find(Boolean);
  if (!section) return feedName;

  return feedName ? `${feedName} > ${section}` : section;
}
