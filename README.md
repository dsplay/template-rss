![DSPLAY - Digital Signage](https://developers.dsplay.tv/assets/images/dsplay-logo.png)

# DSPLAY - RSS Template

A [React](https://reactjs.org/) [HTML-based template](https://developers.dsplay.tv/docs/html-templates) for the [DSPLAY - Digital Signage](https://dsplay.tv/) platform — shows a single news/RSS item with a title, description, optional image, and an optional QR code linking back to the source.

> Built with [Vite](https://vitejs.dev/), requires Node.js 22.22.2+, 24.15.0+, or 26+ (see `.nvmrc`).

## Supported screen formats

| Landscape | Portrait | Square | Horizontal banner |
|-----------|----------|--------|--------------------|
| ![Landscape](docs/screenshots/landscape.png) | ![Portrait](docs/screenshots/portrait.png) | ![Square](docs/screenshots/square.png) | ![H-Banner](docs/screenshots/h-banner.png) |

## Template variables

| Key              | Type    | Description                                                          |
|-------------------|---------|-------------------------------------------------------------------------|
| `show_qr_code`    | boolean | Shows a QR code linking to `media.link`, next to the text. Defaults to `true`. |
| `bg_color`        | string  | Background color of the whole item. Defaults to `black`.             |
| `logo`            | string  | Logo image shown next to the title. Falls back to a bundled RSS icon. |
| `logo_bg_color`   | string  | Background color behind the logo. Defaults to `white`.               |
| `title_color`     | string  | Title text color. Defaults to `white`.                                |
| `title_bg_color`  | string  | Background color behind the title. Defaults to `darkorange`.         |
| `text_color`      | string  | Description text color. Defaults to `white`.                          |
| `text_bg_color`   | string  | Background color behind the description and the item image. Defaults to `black`. |
| `debug`           | boolean | Shows a debug overlay dumping the current `media`/`template`/`config`/screen-info objects. |

> Remember to also register these as Template Vars (same name and type) when configuring this template in the DSPLAY CMS.

> New variable names should use `snake_case` (e.g. `background_color`, not `backgroundColor`) — the DSPLAY CMS Manager auto-generates each variable's label from its key, and snake_case reads more naturally there.

## Expected media data (`media.*`)

Unlike a generic custom template, each item shown here is populated by DSPLAY from a JSON-service-backed feed, not typed in through Template Vars. `src/util/defaults.js` and the components under `src/components/` read the following `media` fields (see `useMedia()` call sites):

- `source` — an internal marker for which feed produced this item (e.g. `'UOLIndoor'`). Everything keyed on it lives in `src/util/uol.js`. UOL's midiaindoor XML is not standard RSS: `<item><title>` holds the category and `<item><description>` holds the headline. An Android player below `LEGACY_UOL_MAX_APP_VERSION` passes that layout through untouched, so for those payloads this template reads the title band from `itemTitle` and the body from `itemDescription`. Everything else — the CMS preview, and Android from that version on — gets the feed pre-normalised by the DSPLAY rss-gateway and uses the ordinary `title`/`itemTitle` pair.
- `title`, `itemTitle`, `itemDescription`, `itemContent` — text fields, see the `source`-dependent swap above. Normally `title` is the feed's own name (shown in the title band) and `itemTitle` is the headline (shown as the body text).
- `categories` — the item's categories. Only read for UOL: its six channels all report the same bare `UOL ` as the feed name, so `src/util/uol.js`'s `useFeedLabel()` appends the first category to it (`UOL > Futebol`). Other feeds already carry their section in `title` (G1's is `g1 > Mundo`) and are left alone.
- `hasImage`, `imageUrl` — when `hasImage` is falsy, `src/components/image` falls back to a bundled placeholder image (and hides entirely on banner screen formats).
- `link` — the item's URL. `src/components/qr-code` only renders when this is set.
- `qrCode` — when falsy, hides the QR code regardless of `show_qr_code`.

## Local development

```sh
npm install
npm start
```

`public/dsplay-data.js` defines `dsplay_config`/`dsplay_media`/`dsplay_template` mock globals used only when the template isn't running inside the actual DSPLAY app. Edit it to try out different variable values and media data — the DSPLAY Player App replaces it with real content at runtime.

## Packing (release build)

```sh
npm run zip
```

This builds the template with Vite, which also generates `template-variables.json` + `template-example-data.json` (via [@dsplay/template-manifest](https://www.npmjs.com/package/@dsplay/template-manifest)'s Vite plugin) — the DSPLAY CMS reads these two files to auto-detect this template's variables and seed default preview values. It then generates `template.zip`, ready to be deployed to the [DSPLAY Web Manager](https://manager.dsplay.tv/template/create).

## Test assets

To use test assets (images, videos, etc) during development, put them in the `public/test-assets` folder and reference them in `dsplay-data.js` using their relative path. `public/test-assets` is automatically excluded from the release build.

## Maintaining dependencies

Regular npm dependencies, not vendored files:

```sh
npm outdated
npm update
```

For a version outside the declared range (typically a major bump), apply it deliberately and verify `npm start`, `npm run build`, and `npm test` still work before committing.

### Commit conventions

See [AGENTS.md](AGENTS.md).

## More

To see more about DSPLAY HTML Templates, visit: https://developers.dsplay.tv/docs/html-templates
