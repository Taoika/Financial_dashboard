import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental', // 对特定路线采用PPR
  },
};

export default nextConfig;
