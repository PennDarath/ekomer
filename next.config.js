/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["localhost"],
  },

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/ekomer",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
