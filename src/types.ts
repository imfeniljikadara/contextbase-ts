export interface ContextBaseOptions {
    baseUrl: string;
    token: string;
  }
  
  export interface SetMemoryPayload {
    key: string;
    value: string;
    ttl?: number;
  }  