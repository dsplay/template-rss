import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import { renderHook } from '@testing-library/react';

const useMedia = vi.fn();
const useConfig = vi.fn();

vi.mock('@dsplay/react-template-utils', () => ({
  useMedia: () => useMedia(),
  useConfig: () => useConfig(),
}));

const { useFeedLabel, useLegacyUolFields } = await import('./uol');

function render(hook, { media = {}, config = {} } = {}) {
  useMedia.mockReturnValue(media);
  useConfig.mockReturnValue(config);
  return renderHook(() => hook()).result.current;
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useLegacyUolFields', () => {
  const legacy = (media, config) => render(useLegacyUolFields, { media, config });

  it('is true for an Android player below 4.0.0 on a UOL feed', () => {
    // appVersion arrives as a string from the Android bridge
    expect(legacy({ source: 'UOLIndoor' }, { os: 'android', appVersion: '31200' })).toBe(true);
  });

  it('is true for an Android player that reports no version at all', () => {
    expect(legacy({ source: 'UOLIndoor' }, { os: 'android' })).toBe(true);
  });

  it('is false for an Android player from 4.0.0 on, which reads the normalised gateway shape', () => {
    expect(legacy({ source: 'UOLIndoor' }, { os: 'android', appVersion: '40000' })).toBe(false);
  });

  it('is false in the CMS preview, whatever appVersion the mock data carries', () => {
    expect(legacy({ source: 'UOLIndoor' }, { os: 'web-preview', appVersion: '99' })).toBe(false);
  });

  it('is false for any other feed source', () => {
    expect(legacy({ source: 'UOLIndoors' }, { os: 'android', appVersion: '31200' })).toBe(false);
  });
});

describe('useFeedLabel', () => {
  const label = (media) => render(useFeedLabel, { media });

  it('appends the section to UOL, whose channels all report the bare "UOL "', () => {
    expect(label({ source: 'UOLIndoor', title: 'UOL ', categories: ['Futebol'] })).toBe('UOL > Futebol');
  });

  it('falls back to the feed name when a UOL item carries no category', () => {
    expect(label({ source: 'UOLIndoor', title: 'UOL ', categories: [] })).toBe('UOL');
  });

  it('ignores blank UOL categories', () => {
    expect(label({ source: 'UOLIndoor', title: 'UOL ', categories: ['  ', 'Economia'] })).toBe('UOL > Economia');
  });

  it('leaves every other feed on its own title, which already carries the section', () => {
    expect(label({ source: 'G1', title: 'g1 > Mundo', categories: ['G1'] })).toBe('g1 > Mundo');
  });

  it('tolerates a missing title', () => {
    expect(label({ source: 'UOLIndoor', categories: ['Futebol'] })).toBe('Futebol');
  });
});
