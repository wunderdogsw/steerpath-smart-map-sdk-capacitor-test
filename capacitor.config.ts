/* eslint-disable import/no-extraneous-dependencies */
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.wunderdog.smartmapcapacitortest",
  appName: "Steerpath Smart Map SDK Capacitor Test",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://localhost:5173/", // iOS
    // url: "http://192.168.0.228:5173/", // Android
    cleartext: true
  }
};

export default config;
