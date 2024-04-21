Testnet Dex

## How to add your token to the token list
1. [Deploy](https://docs.hyperlane.xyz/docs/guides/deploy-warp-route) a warp route from your chain to Arbitrum.
2. Submit pull request to update [token.js](https://github.com/ltyu/hyperlane-warp-ui/blob/main/src/consts/tokens.ts).
- A chain logo must bed added to `/public/logos`. It should be suffixed with `_chain`.
- A token logo must be added to `/public/logos`. It must be suffixed with `_token`.


## Development

### Setup

```sh
# Install dependencies
yarn

# Build Next project
yarn build
```

### Run

```sh
# Start the Next dev server
yarn dev
```

### Test

```sh
# Lint check code
yarn lint

# Check code types
yarn typecheck
```

### Format

```sh
# Format code using Prettier
yarn prettier
```

### Clean / Reset

```sh
# Delete build artifacts to start fresh 
yarn clean
```

## Deployment

The easiest hosting solution for this Next.JS app is to create a project on Vercel.

## Learn more

For more information, see the [Hyperlane documentation](https://docs.hyperlane.xyz/docs/reference/applications/warp-routes).
