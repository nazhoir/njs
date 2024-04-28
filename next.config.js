/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["res.cloudinary.com", "utfs.io"],
  },
};

module.exports = nextConfig;
