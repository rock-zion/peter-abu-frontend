/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'plus.unsplash.com'],
  },
};

module.exports = nextConfig;
