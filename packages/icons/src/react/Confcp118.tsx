import React from 'react';
import type { SVGProps } from "react";

const Confcp118_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M13 0h3m-4 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1M9 6h1M9 7h1M8 8h1M8 9h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m6 0h1m3 0h1M4 16h1m-1 1h1m-2 1h1m9 0h1m1 0h1M3 19h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1m0 1h1" /><path stroke="#ff0" d="M13 1h2m-3 1h4m-4 1h5m-6 1h6m-6 1h7m-8 1h8m-8 1h9M9 8h10M9 9h3m5 0h3M8 10h4m5 0h3M8 11h4m5 0h4M7 12h5m5 0h4M7 13h5m5 0h5M6 14h6m5 0h5M6 15h6m5 0h6M5 16h7m5 0h6M5 17h8m3 0h8M4 18h9m3 0h8M4 19h9m3 0h9M3 20h11m1 0h10M3 21h23M2 22h11m4 0h9M2 23h11m4 0h10M1 24h12m4 0h10M1 25h12m4 0h11M1 26h27M1 27h26M2 28h24" /><path stroke="silver" d="M15 1h1m0 1h1m0 2h1m0 2h1m0 2h1m-8 1h1m3 0h1m3 1h1m0 2h1m0 2h1m-11 2h1m3 0h1m6 0h1m0 2h1m-12 1h1m1 0h1m9 1h1m-13 2h1m2 0h1m9 0h1m0 2h1m-15 1h1m2 0h1m10 2h1m-2 1h1" /><path stroke="#000" d="M16 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-8 1h3m4 0h1m-9 1h5m4 0h1m-10 1h5m4 0h1m-10 1h5m5 0h1m-11 1h5m5 0h1m-11 1h5m6 0h1m-11 1h3m7 0h1m-11 1h3m8 0h1m-12 1h3m8 0h1m-11 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m11 0h1m-1 1h1m-13 1h2m11 0h1m-15 1h4m10 0h1m-15 1h4m11 0h1m-15 1h2m12 0h1m-1 1h1m-1 1h1m-2 1h1M3 29h24" /><path stroke="gray" d="M18 2h1m-1 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h3m-3 1h3m-4 1h4m-5 1h5M4 30h27M5 31h25" /></svg>;

export const confcp118Data = {
  '32x32_4': Confcp118_32x32_4
};

export interface Confcp118Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Confcp118: React.FC<Confcp118Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = confcp118Data[variant];

  return <Svg {...rest} />;
};
