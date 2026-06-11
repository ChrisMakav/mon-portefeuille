import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile @n8n/chat and its Vue 3 dependencies so webpack can process them
  transpilePackages: ["@n8n/chat", "@n8n/design-system", "@vueuse/core"],
  // Keep nodemailer as a server-only native Node.js module (no bundling)
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
