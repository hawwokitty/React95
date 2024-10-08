import React from 'react';
import type { SVGProps } from "react";

const Mcm3203_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M12 0h8M9 1h3m8 0h3M7 2h2m14 0h2M6 3h1m18 0h1M5 4h1m20 0h1M4 5h1m22 0h1M3 6h1m24 0h1M2 7h1m26 0h1M2 8h1m26 0h1M1 9h1m28 0h1M1 10h1m28 0h1M1 11h1m28 0h1M0 12h1m30 0h1M0 13h1m30 0h1M0 14h1m30 0h1M0 15h1m30 0h1M0 16h1m30 0h1M0 17h1m30 0h1M0 18h1m30 0h1M0 19h1m30 0h1M1 20h1m28 0h1M1 21h1m28 0h1M1 22h1m28 0h1M2 23h1m26 0h1M2 24h1m26 0h1M3 25h1m24 0h1M4 26h1m22 0h1M5 27h1m20 0h1M6 28h1m18 0h1M7 29h2m14 0h2M9 30h3m8 0h3m-11 1h8" /><path stroke="#00f" d="M12 1h2m1 0h5m-7 1h5m2 0h3M12 3h4m2 0h1m1 0h4M12 4h4m2 0h1m1 0h4M13 5h1m1 0h1m4 0h4m-5 1h6M3 7h2m14 0h6M3 8h2m14 0h7m1 0h2M2 9h3m13 0h11M2 10h3m13 0h10M2 11h3m7 0h1m5 0h9M1 12h5m6 0h1m2 0h1m2 0h9M1 13h6m3 0h7m2 0h8M1 14h6m4 0h7m1 0h9M1 15h7m3 0h18M1 16h9m2 0h18M1 17h11m3 0h15M1 18h11m3 0h16M1 19h13m2 0h1m3 0h11M2 20h12m10 0h6M2 21h12m11 0h5M2 22h12m11 0h5M3 23h11m11 0h4M3 24h13m7 0h6M4 25h12m7 0h5M5 26h13m4 0h5M6 27h12m3 0h5M7 28h11m3 0h4M9 29h10m2 0h2m-11 1h8" /><path stroke="#0f0" d="M14 1h1M9 2h4m5 0h2M7 3h5m4 0h2m1 0h1m4 0h1M6 4h6m4 0h2m1 0h1m4 0h2M5 5h8m1 0h1m1 0h4m4 0h3M4 6h15m6 0h3M5 7h14m6 0h4M5 8h14m7 0h1M5 9h13m11 0h1M5 10h13m10 0h2M5 11h7m1 0h5m9 0h3M6 12h6m1 0h2m1 0h2m9 0h4M7 13h3m7 0h2m8 0h4M7 14h4m7 0h1m9 0h3M8 15h3m18 0h2m-21 1h2m18 0h1m-19 1h3m15 0h1m-19 1h3m-1 1h2m1 0h3m-6 1h10m-10 1h11m-11 1h11m-11 1h11m-9 1h7m-7 1h7m-5 1h4m-4 1h3m-3 1h3m-2 1h2" /></svg>;

export const mcm3203Data = {
  '32x32_4': Mcm3203_32x32_4
};

export interface Mcm3203Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mcm3203: React.FC<Mcm3203Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mcm3203Data[variant];

  return <Svg {...rest} />;
};
