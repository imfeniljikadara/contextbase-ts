import axios from 'axios';

interface ContextOptions {
  baseUrl: string;
  token?: string; // Optional initially, required for memory ops
}

interface SetMemoryPayload {
  key: string;
  value: string;
  ttl?: number;
}

export class context {
  private baseUrl: string;
  private token?: string;

  constructor(options: ContextOptions) {
    this.baseUrl = options.baseUrl;
    this.token = options.token;
  }

  private get headers() {
    return {
      Authorization: `Bearer ${this.token ?? ''}`,
      'Content-Type': 'application/json'
    };
  }

  setToken(token: string) {
    this.token = token;
  }

  async signup(email: string, password: string): Promise<string> {
    const res = await axios.post(`${this.baseUrl}/api/auth/signup`, { email, password });
    const token = res.data.token;
    this.setToken(token);
    return token;
  }

  async login(email: string, password: string): Promise<string> {
    const res = await axios.post(`${this.baseUrl}/api/auth/login`, { email, password });
    const token = res.data.token;
    this.setToken(token);
    return token;
  }

  async set(key: string, value: string, ttl = 86400) {
    const payload: SetMemoryPayload = { key, value, ttl };
    const res = await axios.post(`${this.baseUrl}/api/memory`, payload, {
      headers: this.headers
    });
    return res.data;
  }

  async get(key: string) {
    const res = await axios.get(`${this.baseUrl}/api/memory/${key}`, {
      headers: this.headers
    });
    return res.data;
  }

  async delete(key: string) {
    const res = await axios.post(`${this.baseUrl}/api/memory/delete`, { key }, {
      headers: {
        Authorization: `Bearer ${this.token ?? ''}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }  
  
  async list() {
    const res = await axios.get(`${this.baseUrl}/api/memory`, {
      headers: {
        Authorization: `Bearer ${this.token ?? ''}`,
      }
    });
    return res.data;
  }

  async search(query: string) {
    const encoded = encodeURIComponent(query);
    const res = await axios.get(`${this.baseUrl}/api/memory/search/${encoded}`, {
      headers: {
        Authorization: `Bearer ${this.token ?? ''}`,
      }
    });
    return res.data;
  }
}