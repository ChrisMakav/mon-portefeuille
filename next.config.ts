import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep nodemailer as a server-only native Node.js module (no bundling)
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
