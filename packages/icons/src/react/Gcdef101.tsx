import React from 'react';
import type { SVGProps } from "react";

const Gcdef101_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M13 0h5m-6 1h1m-1 1h1m-1 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-7 1h3m2 0h2m1 0h1M9 13h2m9 0h3M7 14h2m4 0h1m2 0h1m6 0h3M5 15h2m5 0h2m2 0h1m9 0h3M3 16h2m6 0h1m1 0h1m2 0h1m1 0h1m10 0h1M2 17h1m8 0h1m5 0h2m10 0h1M1 18h1m10 0h1m4 0h1m11 0h1M0 19h1m3 0h1m2 0h1m5 0h2m8 0h1m2 0h4M0 20h1m24 0h5M0 21h1m22 0h7M0 22h1m20 0h9M0 23h1m13 0h1m2 0h1m1 0h11M0 24h1m17 0h12M0 25h3m14 0h11M0 26h1m2 0h3m10 0h10M6 27h3m7 0h8M9 28h3m4 0h6m-10 1h3m1 0h4m-5 1h3" /><path stroke="silver" d="M13 1h5m-4 2h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-5 1h2m5 0h2M9 14h4m2 0h1m2 0h5M7 15h5m3 0h1m3 0h7M5 16h6m4 0h1m4 0h9M3 17h2m2 0h4m9 0h4m2 0h3M2 18h2m4 0h4m3 0h2m2 0h4m4 0h2M3 19h1m4 0h5m5 0h5M6 20h19M1 21h2m6 0h6m2 0h6M1 22h5m6 0h2m4 0h3M1 23h8m9 0h1M1 24h11m-9 1h12m-9 1h10m-7 1h7m-4 1h4m-1 1h1" /><path stroke="#000" d="M18 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-6 1h5m-1 1h1m-1 1h2m-2 1h1m1 0h1m-6 1h3m2 0h1m10 0h1M7 18h1m10 0h1m7 0h1m3 0h1m-16 1h3m12 0h1m-1 1h1m-1 1h1m-14 1h1m12 0h1m-1 1h1m-1 1h1m-3 1h2M1 26h2m23 0h2M3 27h3m18 0h2M6 28h3m13 0h2M9 29h3m8 0h2m-10 1h3m3 0h2m-5 1h3" /><path stroke="red" d="M24 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-4 1h6m-5 1h4m-3 1h2m-1 9h1" /><path stroke="maroon" d="M26 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 1h1m-2 1h1m-2 1h1m-2 1h1m-2 7h2m-3 1h1m0 1h2" /><path stroke="#fff" d="M13 2h5m-5 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 3h1m-1 1h1m-3 1h1m1 0h1m-3 1h2m-9 1h1m7 0h2m9 0h1M1 19h2m-2 1h5m-3 1h6m-3 1h6m3 0h1m-7 1h5m-2 1h6m-3 1h2" /><path stroke="green" d="M5 17h2m-3 1h1m0 1h2m8 2h2m-3 1h1m0 1h2" /><path stroke="#0f0" d="M6 18h1m9 4h1" /></svg>;

export const gcdef101Data = {
  '32x32_4': Gcdef101_32x32_4
};

export interface Gcdef101Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Gcdef101: React.FC<Gcdef101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = gcdef101Data[variant];

  return <Svg {...rest} />;
};
