// The UOLIndoor feed swaps title/description fields. The DSPLAY app fixed
// this in version 40100, so the workaround only applies to older terminals.
const UOL_INDOOR_FIXED_APP_VERSION = 40100;

function needsUolIndoorFix(source, appVersion) {
  if (source !== 'UOLIndoor') {
    return false;
  }
  const version = Number(appVersion);
  // unknown version: assume an old app and keep the workaround
  return !Number.isFinite(version) || version < UOL_INDOOR_FIXED_APP_VERSION;
}

export default needsUolIndoorFix;
