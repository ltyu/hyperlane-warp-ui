import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenList: WarpTokenConfig = [
  {
    "chainId": 11155111,
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18,
    "type": "native",
    "hypNativeAddress": "0xE7dee5E40a6CEA0d095BFa2E7A526C30657faf9E",
    logoURI: '/logos/weth.png', // See public/logos/
  }
];
