import React from 'react';
import type { SVGProps } from "react";

const Gcdef10012_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M13 6h6m-8 1h2m6 0h2M9 8h2m10 0h1M8 9h2m-2 1h1m13 0h1M7 11h1m15 0h1M7 12h1m15 0h1M6 13h1m17 0h1M6 14h1m17 0h1M6 15h1m17 0h1M6 16h1m17 0h1M6 17h1m17 0h1M6 18h1m17 0h1M7 19h1m15 0h1M7 20h1m15 0h1M8 21h1m13 0h1m-13 1h1m10 0h1m-11 1h2m6 0h2m-8 1h6" /><path stroke="#000" d="M13 7h6m-8 1h2m7 0h1M10 9h1m10 0h1M9 10h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m14 0h1M7 17h1m-1 1h1m14 0h1M8 19h1m-1 1h1m11 0h1m1 0h1M9 21h1m11 0h1m-6 1h1m1 0h1m1 0h1" /><path stroke="maroon" d="M13 8h7m-9 1h10m-11 1h12M9 11h5m3 0h6M9 12h5m1 0h2m1 0h5M8 13h5m1 0h10M8 14h5m1 0h1m1 0h8M8 15h5m2 0h1m1 0h7M8 16h5m1 0h3m1 0h4m1 0h1M8 17h5m1 0h3m1 0h6M8 18h6m1 0h1m1 0h5m1 0h1M9 19h6m1 0h7M9 20h11m1 0h1m-12 1h11m-10 1h5m1 0h1m1 0h1m-7 1h6" /><path stroke="silver" d="M22 8h1m-1 1h2m-10 2h3m-3 1h1m2 0h1m-5 1h1m-1 1h1m1 0h1m-3 1h2m1 0h1m-4 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m1 0h1m-2 1h1m-8 3h2m-1 1h1" /><path stroke="#fff" d="M23 10h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h2m-14 1h1m10 0h2m-12 1h2m6 0h2m-8 1h6" /></svg>;

export const gcdef10012Data = {
  '32x32_4': Gcdef10012_32x32_4
};

export interface Gcdef10012Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Gcdef10012: React.FC<Gcdef10012Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = gcdef10012Data[variant];

  return <Svg {...rest} />;
};
