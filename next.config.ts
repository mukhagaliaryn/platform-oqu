import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['127.0.0.1'], 
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
