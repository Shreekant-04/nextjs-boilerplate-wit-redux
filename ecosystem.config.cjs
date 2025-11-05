module.exports = {
  apps: [
    {
      name: "nextjs-boilerplate",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./",
      exec_mode: "fork",
      instances: 1,
      interpreter: "node", // ensures it uses Node, not PM2's wrapper
      node_args: "--experimental-specifier-resolution=node",
      env: {
        NODE_ENV: "production",
        PORT: 3030,
      },
    },
  ],
};
