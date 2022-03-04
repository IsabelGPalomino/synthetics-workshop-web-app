# Synthetics Workshop Demo App

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

This is an Express app with Tailwind to be used as part of a workshop on building a synthetics monitoring test suite. 

## Usage

### New Relic

This app uses New Relic to provide observability and monitoring. It is free to [create an account on New Relic](https://newrelic.com/signup). Once you do so, fetch your license key from your settings, and provide it in the `.env.sample` file, renaming the file to `.env` when finished.

### Running Locally

To use this app, first clone the repository to your machine. Once it is cloned, run `npm install` in the project directory, followed by `npm start`. The latter command will boot up the server. You can navigate to the site in your browser at `localhost:8000`.

### Deploying to Render

To use this app externally, you can deploy with one click of the button below to Render. You will be asked for your New Relic license key during the deployment process. Once it is finished, you can visit the link Render provides for your app.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## Attribution

The Tailwind component for the view is sourced from [tailwindcomponents](https://tailwindcomponents.com/component/meet-the-team-section).

## License

This app is released under the [MIT License](LICENSE.md).