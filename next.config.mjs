/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dvqu8jllv/**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.10'],
};

export default nextConfig;
