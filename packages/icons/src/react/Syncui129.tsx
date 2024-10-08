import React from 'react';
import type { SVGProps } from "react";

const Syncui129_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M6 0h4M5 1h1M2 2h3m6 0h4M1 3h1m5 0h2M0 4h1M0 5h1m2 0h1m7 0h1m1 0h1M0 6h1m1 0h13M0 7h1m2 0h1m7 0h1m1 0h1M0 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M0 9h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M0 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M0 11h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M0 12h15" /><path stroke="gray" d="M6 1h1m2 0h1M5 2h2m2 0h1M5 3h2m2 0h1M2 4h3m1 0h2m1 0h5m0 1h1m-1 2h1m-1 2h1m-1 2h1m3 8h5m-6 1h1m5 0h1m-8 1h1m7 0h7m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h15" /><path stroke="#000" d="M7 1h2m1 0h1m-1 1h1m-1 1h1m4 0h1m-2 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 13h14m16 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-15 1h15" /><path stroke="#fff" d="M2 3h1m1 0h1m0 1h1m2 0h1M1 5h1m2 0h6M1 7h1M1 9h1m-1 2h1m15 11h13m-13 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M3 3h1m7 0h4M1 4h1m0 1h1m7 0h1m1 0h1M1 6h1m0 1h1m1 0h7m1 0h1M1 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m6 9h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#00f" d="M21 6h1m-2 1h2m-3 1h7m-6 1h2m4 0h1m-6 1h1m4 0h1m-1 1h1m-1 1h1m-1 2h1m-1 2h1" /><path stroke="#ff0" d="M18 20h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-6 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const syncui129Data = {
  '32x32_4': Syncui129_32x32_4
};

export interface Syncui129Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Syncui129: React.FC<Syncui129Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = syncui129Data[variant];

  return <Svg {...rest} />;
};
