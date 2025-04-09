[![npm version](https://img.shields.io/npm/v/contextbase-ts.svg)](https://www.npmjs.com/package/contextbase-ts)

# ContextBase TypeScript SDK

A TypeScript SDK for interacting with the ContextBase MCP API, simple key-value memory storage service with authentication and search capabilities.

## Installation

```bash
npm install contextbase-ts
```

## Usage

### Initialization

```typescript
import { context } from 'contextbase-ts';

const ctx = new context({
  baseUrl: 'https://contextbase.onrender.com'
});
```

### Authentication

```typescript
const signupToken = await ctx.signup('user@example.com', 'password');

const loginToken = await ctx.login('user@example.com', 'password');

ctx.setToken('your-auth-token');
```

### Memory Operations

```typescript
await ctx.set('myKey', 'myValue');

await ctx.set('temporaryKey', 'temporaryValue', 3600); // 1 hour TTL
await ctx.set('temporaryKey', 'temporaryValue'); // Without TTL

const memory = await ctx.get('myKey');

const allMemories = await ctx.list();

const searchResults = await ctx.search('queryString');

await ctx.delete('myKey');
```

## API Reference

### Constructor

```typescript
new context({
  baseUrl: string,
  token?: string // Optional initially, required for memory operations
})
```

### Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `setToken` | `token: string` | `void` | Sets the authentication token |
| `signup` | `email: string, password: string` | `Promise<string>` | Creates a new user account and returns a token |
| `login` | `email: string, password: string` | `Promise<string>` | Authenticates user and returns a token |
| `set` | `key: string, value: string, ttl?: number` | `Promise<any>` | Stores a memory with optional TTL (in seconds) |
| `get` | `key: string` | `Promise<any>` | Retrieves a memory by key |
| `list` | None | `Promise<any>` | Lists all memories |
| `search` | `query: string` | `Promise<any>` | Searches memories by query string |
| `delete` | `key: string` | `Promise<any>` | Deletes a memory by key |


## License

MIT
