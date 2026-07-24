<div align="center">

# Hanzo Icons

Brand assets and logos for AI / LLM providers and models, as React & React Native components — static SVG / PNG / WebP, no runtime dependencies.

`@hanzoai/icons`

</div>

## Install

```bash
# React (SVG components)
npm install @hanzoai/icons

# Static assets (no React)
npm install @hanzoai/icons-static-svg
npm install @hanzoai/icons-static-png
npm install @hanzoai/icons-static-webp
npm install @hanzoai/icons-static-avatar

# React Native
npm install @hanzoai/icons-rn
```

## Usage

```tsx
import { OpenAI, Anthropic, Gemini, Mistral } from '@hanzoai/icons';

export default () => (
  <>
    <OpenAI size={24} />
    <Anthropic.Color size={24} />
    <Gemini.Combine size={24} type="color" />
  </>
);
```

Every brand exports a mono glyph plus, where available, `.Color`, `.Avatar`, `.Text`, and `.Combine` variants. See each brand's page under `src/<Brand>/index.mdx` for the exact API.

### Static assets

```ts
import { OpenAI } from '@hanzoai/icons-static-svg';
// OpenAI → raw SVG string
```

## Packages

| Package | What it is |
|---------|-----------|
| `@hanzoai/icons` | React SVG components (mono + color + combine variants) |
| `@hanzoai/icons-static-svg` | Raw SVG strings, framework-agnostic |
| `@hanzoai/icons-static-png` | PNG assets (light / dark) |
| `@hanzoai/icons-static-webp` | WebP assets (light / dark) |
| `@hanzoai/icons-static-avatar` | Pre-composed avatar assets |
| `@hanzoai/icons-rn` | React Native components |

## Contributing

Each brand lives in `src/<Brand>/`. Add or update a logo there and run the SVG workflow; the static packages are generated from the same source.

## License

MIT. This project is a fork of [lobe-icons](https://github.com/lobehub/lobe-icons); the original MIT copyright is retained in [`LICENSE`](./LICENSE). Brand logos are the property of their respective owners and are provided for identification purposes.
