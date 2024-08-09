export interface IpResponse {
  ip: string;
}

export interface LocationResponse {
  data: any;
}
export interface LocationState {
  location: any;
  loading: boolean;
  error: string | null;
}
