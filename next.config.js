/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

const nextConfig = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "hoomanramin",
        mongodb_password: "h2296360981HM",
        mongodb_cluster: "cluster0",
        mongodb_databasekey: "my-blog",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "hoomanramin",
      mongodb_password: "h2296360981HM",
      mongodb_cluster: "cluster0",
      mongodb_databasekey: "my-blog-production",
    },
  };
};

module.exports = nextConfig;
