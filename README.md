# AUREL

AUREL is a luxury-authentication experience for assessing watches, designer handbags, sneakers, jewelry, and clothing from images. It is designed to help users make more informed decisions—not to replace an in-person inspection or a professional authenticator.

## Project status

This repository currently contains a standalone web page in `index.html`. There is no package manager, build step, or backend service to configure.

## Run locally

You can open `index.html` directly in a browser. To serve it locally instead:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy

The page is static and can be hosted by any static web host. To use GitHub Pages, open the repository's **Settings → Pages**, choose the `main` branch and `/ (root)` as the publishing source, and save. GitHub Pages will publish `index.html` at the site URL shown in those settings.

## Repository layout

```text
.
├── index.html   # AUREL web experience
└── README.md    # Project overview and usage
```

## Authentication disclaimer

An image-based assessment can be limited by image quality, viewing angle, missing details, and the availability of reliable reference information. Treat results as guidance, not a guarantee of authenticity, valuation, or condition. For high-value purchases, seek an independent expert inspection and use appropriate buyer protections.

## Contributing

Improvements to the interface, accessibility, mobile experience, and documentation are welcome. Keep the site usable without a build step unless the project explicitly adopts one, and test changes in a current desktop and mobile browser before submitting them.
