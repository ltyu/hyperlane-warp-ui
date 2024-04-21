import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenList: WarpTokenConfig = [
  {
    chainId: 80085, 
    name: 'Artio Bera',
    symbol: 'BERA',
    decimals: 18,
    type: 'native',
    hypNativeAddress: '0x1e61Eec27bdb28b23D7F9DcBea828F622BDC4504',
    logoURI: '/logos/Berachain_Black.png', // See public/logos/
  },
];
