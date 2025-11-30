import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1GVkSrQD9xI5eRYuEozabgbD3nUP0bmyI/view?usp=sharing",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/nissha29",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/nisha-kashyap-5972a9273/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/nissha297",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/nissha297",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        pathname: "/ct-client-logos/logos/**",
      },
    ],
  },
};

export default nextConfig;
