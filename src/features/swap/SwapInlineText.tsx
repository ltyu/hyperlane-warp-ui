import { links } from '../../consts/links';

type Props = { chain: string; tokenAddress: string };
export function SwapInlineText({ chain, tokenAddress }: Props) {
  const uniswapPoolUrl = `${links.uniswapTokens}/${chain}/${tokenAddress}`;
  return (
    <>
      <div className="text-xs text-blue-500 text-right">
        <a href={uniswapPoolUrl}>Swap</a>
      </div>
    </>
  );
}
