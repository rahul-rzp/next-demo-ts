/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co']
  },
  output: 'standalone',
  experimental: { esmExternals: true },
}

const withBlade = require('next-transpile-modules')(['@razorpay/blade']);


module.exports = withBlade(nextConfig)
