import React from 'react';
import type { SVGProps } from "react";

const Fave_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M3 2h5M2 3h1m5 0h1M1 4h14M1 5h1m13 0h1M1 6h1m13 0h1M1 7h1m13 0h1M1 8h1m13 0h1M1 9h1m13 0h1M1 10h1m13 0h1M1 11h1m13 0h1M1 12h1m13 0h1M1 13h1m13 0h1M1 14h15" /><path stroke="#ff0" d="M3 3h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M3 9h1m9 0h1M2 10h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M4 3h1m1 0h1M2 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m7 0h1m1 0h1M3 8h1m1 0h1m5 0h1m1 0h1M2 9h1m1 0h1m3 0h1m3 0h1m1 0h1M3 10h1m1 0h1m5 0h1m1 0h1M2 11h1m1 0h1m7 0h1m1 0h1M3 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="navy" d="M8 6h1M6 7h1m1 0h1m1 0h1M7 8h3M5 9h3m1 0h3m-5 1h3m-4 1h1m1 0h1m1 0h1m-3 1h1" /></svg>;

export const faveData = {
  '16x16_4': Fave_16x16_4
};

export interface FaveProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Fave: React.FC<FaveProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = faveData[variant];

  return <Svg {...rest} />;
};
