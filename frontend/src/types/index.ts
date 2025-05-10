export interface RouterBase {
  id: string;
  name: string;
  type: 'wifi' | 'enterprise' | 'home';
  updatedAt: string;
}

export interface WifiRouter extends RouterBase {
  type: 'wifi';
  wifiChannels: number[];
  dualBand: boolean;
}

export interface EnterpriseRouter extends RouterBase {
  type: 'enterprise';
  portCount: number;
  supportedProtocols: string[];
  throughput: number;
}

export interface HomeRouter extends RouterBase {
  type: 'home';
  connectedDevicesCount: number;
  parentalControls: boolean;
  maxBandwidth: number;
}


export type Router = WifiRouter | EnterpriseRouter | HomeRouter;