/** @type {import('next').NextConfig} */
const nextConfig = {
 
  experimental: {
    appDir: true,
  },
  output: 'export',
  
    images: {
      unoptimized:true,
        domains: ['fakestoreapi.com', 'anotherwebsite.com'],
      },
}

module.exports = nextConfig
