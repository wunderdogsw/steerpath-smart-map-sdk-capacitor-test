import { registerPlugin } from "@capacitor/core";

export interface SmartMapPlugin {
  startWithConfig(options: {
    apiKey: string;
    configFilePath: string;
  }): Promise<void>;
  show(): Promise<void>;
  hide(): Promise<void>;
}

const SmartMap = registerPlugin<SmartMapPlugin>("SmartMap");

export default SmartMap;
