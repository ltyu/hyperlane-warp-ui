import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenList: WarpTokenConfig = [
  {
    chainId: 137,
    name: 'Sepolia Ether',
    symbol: 'SEP-ETH',
    decimals: 18,
    type: 'native',
    hypNativeAddress: '0x8D519984EaAB43341Ee52fAB7f8102B445DAF747',
    logoURI: '/logos/weth.png', // See public/logos/
  },
];
