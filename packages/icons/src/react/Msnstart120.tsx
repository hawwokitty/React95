import React from 'react';
import type { SVGProps } from "react";

const Msnstart120_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h24m6 0h2M0 1h21m4 0h4m2 0h1M0 2h20m3 0h7m1 0h1M0 3h10m11 0h9m1 0h1M0 4h8m16 0h6m1 0h1M0 5h7m18 0h5m1 0h1M0 6h6m20 0h3m1 0h2M0 7h5m6 0h1m15 0h5M0 8h4m5 0h2m17 0h4M0 9h3m5 0h1m7 0h1m12 0h3M0 10h3m4 0h1m5 0h6m10 0h3M0 11h3m3 0h2m4 0h8m9 0h3M0 12h2m3 0h2m5 0h8m10 0h2M0 13h2m2 0h2m24 0h2M0 14h2m1 0h2m25 0h2M0 15h5m25 0h2M0 16h4m26 0h2M0 17h4m26 0h2M0 18h3m9 0h20M0 19h2m11 0h7m10 0h2M0 20h2m11 0h7m9 0h3M0 21h1m14 0h3m11 0h3M0 22h1m27 0h4M0 23h1m3 0h1m23 0h4M0 24h1m3 0h2m21 0h5M3 25h4m19 0h6M3 26h5m16 0h2m2 0h4M3 27h7m12 0h10M0 28h1m2 0h8m2 0h19M0 29h1m4 0h3m3 0h21M0 30h2m7 0h23M0 31h2m1 0h1m2 0h26" /><path stroke="silver" d="M24 0h1m4 0h1m-9 1h1m2 0h1m5 0h1m-9 1h1m7 0h1M10 3h2m8 0h1M8 4h1m14 0h1m6 0h1m-1 1h1M12 6h2m15 0h1M10 7h1M3 9h1m3 0h1m1 0h1m4 0h2m1 0h2m9 0h1M6 10h1m1 0h1m10 0h1M5 11h1m-4 1h1m1 0h1m15 0h1m8 0h1M3 13h1m8 0h9M5 14h1m6 3h18M2 19h1m9 0h1m16 0h1M1 21h1m12 0h1m3 0h1M1 22h1m25 1h1M3 24h1m22 0h1M0 25h1m24 0h1M0 26h1m7 0h1m14 0h1M0 27h1m9 0h1m10 0h1m-11 1h2M1 29h1m2 0h1m3 0h1m-1 1h1m-7 1h1m1 0h2" /><path stroke="teal" d="M25 0h4m-7 1h2m5 0h1M20 2h2M12 3h8m10 0h1M9 4h14M7 5h18M6 6h6m2 0h12M5 7h5m2 0h15M4 8h5m2 0h17M4 9h3m3 0h4m5 0h9M3 10h3m3 0h4m7 0h9M3 11h2m3 0h4m8 0h9M3 12h1m3 0h5m9 0h8M2 13h1m3 0h6m9 0h9M2 14h1m3 0h24M5 15h25M4 16h26M4 17h8m-9 1h9m-9 1h9m8 0h9M2 20h11m7 0h9M2 21h12m5 0h10M2 22h26M1 23h3m1 0h22M1 24h2m3 0h20M1 25h2m4 0h18M1 26h2m6 0h14M1 27h2m8 0h10M1 28h2m-1 1h2m5 0h2m-9 1h6" /><path stroke="gray" d="M26 26h2" /></svg>;

export const msnstart120Data = {
  '32x32_4': Msnstart120_32x32_4
};

export interface Msnstart120Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Msnstart120: React.FC<Msnstart120Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = msnstart120Data[variant];

  return <Svg {...rest} />;
};
