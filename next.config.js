const REPO_NAME = 'lofi';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/' + REPO_NAME : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' + REPO_NAME : '',
  trailingSlash: true,
};
