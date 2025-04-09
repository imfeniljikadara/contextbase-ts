# ContextBase TypeScript SDK

A TypeScript SDK for interacting with the ContextBase MCP API, a simple key-value memory storage service with authentication and search capabilities.

## Installation

```bash
npm install @contextbase/contextbase-ts
```

## Usage

### Initialization

```typescript
import { context } from 'contextbase-ts';

// Initialize the client
const ctx = new context({
  baseUrl: 'https://contextbase.onrender.com'
});
```

### Authentication

```typescript
// Sign up for a new account
const signupToken = await ctx.signup('user@example.com', 'password');

// Or login to an existing account
const loginToken = await ctx.login('user@example.com', 'password');

// Manually set a token if you already have one
ctx.setToken('your-auth-token');
```

### Memory Operations

```typescript
// Store a memory (key-value pair)
await ctx.set('myKey', 'myValue');

// Optionally specify TTL in seconds (default: 86400 - 1 day)
await ctx.set('temporaryKey', 'temporaryValue', 3600); // 1 hour TTL

// Retrieve a memory by key
const memory = await ctx.get('myKey');

// List all memories
const allMemories = await ctx.list();

// Search memories
const searchResults = await ctx.search('queryString');

// Delete a memory
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

## Development

```bash
# Install dependencies
npm install

# Build the SDK
npm run build

# Watch mode for development
npm run dev
```

## License

MIT