import React from 'react';
import type { SVGProps } from "react";

const Wab321015_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M2 4h28M1 5h1m28 0h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m9 0h2m8 0h2M0 23h1m8 0h1m9 0h1M0 24h1m9 0h1m8 0h1M0 25h1m9 0h1m8 0h1M0 26h1m9 0h1m8 0h1" /><path stroke="#fff" d="M2 5h28M1 6h29M1 7h29M1 8h2m5 0h1m5 0h1m1 0h1m3 0h10M1 9h2m4 0h1m1 0h1m5 0h1m4 0h10M1 10h29M1 11h29M1 12h29M1 13h2m9 0h3m11 0h4M1 14h29M1 15h29M1 16h2m8 0h4m13 0h2M1 17h29M1 18h29M1 19h2m9 0h3m13 0h2M1 20h29M1 21h9m2 0h8m2 0h8M1 22h8m4 0h6m4 0h7M1 23h7m5 0h5m5 0h7M1 24h8m4 0h5m4 0h8M1 25h8m4 0h5m4 0h8" /><path stroke="silver" d="M30 6h1m-1 1h1M4 8h1m1 0h1m3 0h1m1 0h1m5 0h1m11 0h1M3 9h1m1 0h1m5 0h1m1 0h1m3 0h1m1 0h1m10 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-21 1h2m8 0h2m8 0h1M9 22h1m2 0h1m6 0h1m2 0h1m7 0h1M8 23h1m9 0h1m11 0h1M9 24h1m8 0h1m11 0h1M9 25h1m8 0h1m11 0h1M1 26h9m3 0h6m3 0h9" /><path stroke="#000" d="M31 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-20 1h1m9 0h1m8 0h1m-20 1h1m8 0h1m9 0h1m-20 1h1m8 0h1m9 0h1m-20 1h1m8 0h1m9 0h1M1 27h10m1 0h8m1 0h11" /><path stroke="green" d="M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h9m3 0h11M3 16h8m4 0h13M3 19h9m3 0h13" /></svg>;

export const wab321015Data = {
  '32x32_4': Wab321015_32x32_4
};

export interface Wab321015Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wab321015: React.FC<Wab321015Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wab321015Data[variant];

  return <Svg {...rest} />;
};
