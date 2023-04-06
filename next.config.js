


const nextConfig = {



  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
  },
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "pbs.twimg.com",
      "s3.amazonaws.com",
      "img.youtube.com",
      "v5.airtableusercontent.com",
    ],
  },
};

module.exports = nextConfig;
