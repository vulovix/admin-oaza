export interface Device {
  id: string;
}

export interface Experimental {
  invert: boolean;
}

export interface PersistedState {
  device: Device;
  experimental: Experimental;
}
