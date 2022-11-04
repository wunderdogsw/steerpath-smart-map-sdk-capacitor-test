/* eslint-disable import/no-extraneous-dependencies */
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.wunderdog.smartmapcapacitortest",
  appName: "Steerpath Smart Map SDK Capacitor Test",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://127.0.0.1:5173/"
  }
};

export default config;
