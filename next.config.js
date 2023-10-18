/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https:/mblogthumb-phinf.pstatic.net", 
      "mblogthumb-phinf.pstatic.net",
      "cdn.indiepost.co.kr",
      "sbrxmnawtppojpfsdkwd.supabase.co"
    ],
    disableStaticImages: true,
  },
}

module.exports = nextConfig
