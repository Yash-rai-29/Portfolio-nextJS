/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
      {
        protocol: "https",
        hostname: "substack-post-media.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/blog", destination: "/#blog", permanent: true },
      { source: "/blogs", destination: "/#blog", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;
