/** @type {import('next').NextConfig};*/

const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zgyahmwkokrsevcdidzj.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
