import React from 'react';
import type { SVGProps } from "react";

const Gcdef104_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="maroon" d="M15 0h1m-2 1h3m-4 1h5m-6 1h7m-8 1h9M10 5h11M9 6h13m-9 1h5m-5 1h5M6 9h1m6 0h5m6 0h1M5 10h2m6 0h5m6 0h2M4 11h3m6 0h5m6 0h3M3 12h4m17 0h4M2 13h10m7 0h10M1 14h11m7 0h11M0 15h12m7 0h12M1 16h11m7 0h11M2 17h10m7 0h10M3 18h4m17 0h4M4 19h3m17 0h3M5 20h2m17 0h2M6 21h1m17 0h1" /><path stroke="red" d="M13 19h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-9 1h13m-12 1h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /></svg>;

export const gcdef104Data = {
  '32x32_4': Gcdef104_32x32_4
};

export interface Gcdef104Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Gcdef104: React.FC<Gcdef104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = gcdef104Data[variant];

  return <Svg {...rest} />;
};
