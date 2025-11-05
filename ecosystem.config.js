const config = {
  apps: [
    {
      name: "next-app",
      script: "node_modules/next/dist/bin/next", // directly run Next.js binary
      args: "start",
      cwd: "./", // path to your app root
      exec_mode: "fork", // single instance mode
      instances: 1, // you can increase if needed
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};

export default config;
