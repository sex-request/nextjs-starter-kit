/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://your.production.site/';

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: isProduction ? productionURL : 'http://localhost:3000/',
  },
  assetPrefix: isProduction ? productionURL : ''
}
