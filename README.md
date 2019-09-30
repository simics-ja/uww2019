# UWW2019

> Website for Ubiquitous Wearable Workshop 2019 (UWW2019)

## Build Setup
I have never tested this project building flow yet in other environments.
But I think maybe it goes well.
(by Shimizu)

``` bash
# edit scripts property in package.json
# rewrite this environment variable
BASE_URL='YOUR_PRODUCTION_DOMAIN'

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production
$ npm run build

# generate static project
$ npm run generate
```

After`npm run generate`, please upload the files in `/dist` directory to your server.
If you want to run this site at sub-directory, please edit `BASE_URL_SUFFIX` in `nuxt.config.js`.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
