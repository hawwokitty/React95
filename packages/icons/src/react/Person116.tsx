import React from 'react';
import type { SVGProps } from "react";

const Person116_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M4 1h2m4 0h1M3 2h1m7 0h1M3 3h1m8 0h1M2 4h1m9 0h1M2 5h1m8 0h1M2 6h1m3 0h1m4 0h1M2 7h1m9 0h1M3 8h1m7 0h1M3 9h1m0 1h2m5 0h1m-8 1h2m-3 1h2m5 0h1m-9 1h1m9 0h1M2 14h1m3 0h3m1 0h1m1 0h1" /><path stroke="olive" d="M6 1h4M4 2h1m3 1h1M3 4h1m3 0h1M3 5h1M3 6h1m1 0h1M3 7h1m1 0h1M4 8h3M4 9h3m0 3h1m0 1h1" /><path stroke="#ff0" d="M5 2h6M4 3h4m1 0h3M4 4h3M4 5h3M4 6h1M4 7h1" /><path stroke="#fff" d="M8 4h1M8 5h1M8 6h1m1 0h1M8 7h2M8 8h2M7 9h4m-3 2h1" /><path stroke="silver" d="M9 4h2M7 5h1M7 6h1m1 0h1M6 7h2m2 0h1M7 8h1m-1 3h1m0 1h1" /><path stroke="gray" d="M11 4h1M9 5h2m0 2h1m-2 1h1m0 1h1m-6 1h5m-5 1h1m2 0h1m-1 1h1m-3 1h1" /><path stroke="purple" d="M5 12h2m-4 1h3m3 0h3m-9 1h3m3 0h1m1 0h1" /><path stroke="#f0f" d="M6 13h1" /></svg>;

export const person116Data = {
  '16x16_4': Person116_16x16_4
};

export interface Person116Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Person116: React.FC<Person116Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = person116Data[variant];

  return <Svg {...rest} />;
};
