import React from 'react';
import type { SVGProps } from "react";

const Directcc1001_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M2 0h10m8 0h10M1 1h1m9 0h1m7 0h1m9 0h1M1 2h1m9 0h1m7 0h1m9 0h1M1 3h1m9 0h1m7 0h1m9 0h1M1 4h1m9 0h1m7 0h1m9 0h1M1 5h1m9 0h1m7 0h1m9 0h1M1 6h1m9 0h1m7 0h1m9 0h1M1 7h1m2 0h6m1 0h1m7 0h1m2 0h6m1 0h1M1 8h1m9 0h1m7 0h1m9 0h1M0 9h2m10 0h1m5 0h2m10 0h1M0 10h1m11 0h1m5 0h1m11 0h1M0 11h1m11 0h1m5 0h1m11 0h1M0 12h13m5 0h13m-6 2h1m-1 3h1m-1 1h1M2 19h12M1 20h1m11 0h1M1 21h1m11 0h1m11 0h1M1 22h1m11 0h1m11 0h1M1 23h1m11 0h1m11 0h1M1 24h1m11 0h1m11 0h1M1 25h1m11 0h1m11 0h1M1 26h1m11 0h1m11 0h1M1 27h9m2 0h2m11 0h1M1 28h2m2 0h1m2 0h1m2 0h1m3 0h11M0 29h2m2 0h1m2 0h1m2 0h1m2 0h2M0 30h1" /><path stroke="silver" d="M2 1h9m9 0h9M2 2h1m7 0h1m9 0h1m7 0h1M2 3h1m7 0h1m9 0h1m7 0h1M2 4h1m7 0h1m9 0h1m7 0h1M2 5h1m7 0h1m9 0h1m7 0h1M2 6h1m7 0h1m9 0h1m7 0h1M2 7h1m7 0h1m9 0h1m7 0h1M2 8h9m9 0h9M2 11h1m2 0h3m3 0h1m8 0h1m2 0h3m3 0h1M2 20h11M2 21h1m9 0h1M2 22h1m9 0h1M2 23h1m9 0h1M2 24h1m9 0h1M2 25h1m9 0h1M2 26h11m-9 2h1m2 0h1m2 0h1m2 0h1M3 29h1m2 0h1m2 0h1m2 0h1M1 30h14" /><path stroke="#000" d="M12 1h1m17 0h1M3 2h7m2 0h1m8 0h7m2 0h1M3 3h1m8 0h1m8 0h1m8 0h1M3 4h1m8 0h1m8 0h1m8 0h1M3 5h1m8 0h1m8 0h1m8 0h1M3 6h1m8 0h1m8 0h1m8 0h1M3 7h1m8 0h1m8 0h1m8 0h1M12 8h1m17 0h1M2 9h10m1 0h1m6 0h10m1 0h1m-19 1h1m17 0h1M8 11h3m2 0h1m12 0h3m2 0h1m-19 1h1m17 0h1M1 13h12m6 0h12m-5 1h1m-1 3h1m-1 1h1m-13 2h1M3 21h9m2 0h1m11 0h1M3 22h1m10 0h1m11 0h1M3 23h1m10 0h1m11 0h1M3 24h1m10 0h1m11 0h1M3 25h1m10 0h1m11 0h1m-13 1h1m11 0h1m-17 1h2m2 0h1m11 0h1M3 28h1m2 0h1m2 0h1m2 0h1m1 0h1m11 0h1M2 29h1m2 0h1m2 0h1m2 0h1m3 0h11m-11 1h1M0 31h16" /><path stroke="#0ff" d="M4 3h1m17 0h1M4 4h1m17 0h1M4 22h1m-1 1h1" /><path stroke="teal" d="M5 3h5m13 0h5M5 4h5m13 0h5M4 5h6m12 0h6M4 6h6m12 0h6M5 22h7m-7 1h7m-8 1h8m-8 1h8" /><path stroke="#fff" d="M1 10h11m7 0h11M1 11h1m17 0h1" /><path stroke="#0f0" d="M3 11h2m16 0h2" /><path stroke="#00f" d="M14 11h4" /><path stroke="red" d="M23 15h6m-6 1h6m-6 1h2m2 0h2m-6 1h2m2 0h2m-6 1h6m-6 1h6" /></svg>;

export const directcc1001Data = {
  '32x32_4': Directcc1001_32x32_4
};

export interface Directcc1001Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Directcc1001: React.FC<Directcc1001Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = directcc1001Data[variant];

  return <Svg {...rest} />;
};
