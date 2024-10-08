import React from 'react';
import type { SVGProps } from "react";

const Date_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M0 0h11M0 1h1m9 0h1M0 2h1m4 0h11M0 3h1m4 0h1m9 0h1M0 4h1m4 0h1m9 0h1M0 5h1m4 0h1m9 0h1M0 6h1m4 0h1m9 0h1M0 7h1m4 0h1m9 0h1M0 8h1m4 0h1m9 0h1M0 9h1m4 0h1m9 0h1M0 10h1m1 0h4m9 0h1M0 11h1m4 0h1m9 0h1M0 12h6m1 0h7m1 0h1M5 13h1m9 0h1M5 14h11" /><path stroke="navy" d="M1 1h9M1 2h4m1 1h9M6 4h9" /><path stroke="silver" d="M1 3h1m1 0h1M1 5h1m5 0h1m1 0h1m1 0h1m1 0h1M6 6h1m7 0h1M1 7h1m5 0h1m1 0h1m3 0h1M6 8h1m1 0h1m3 0h1m1 0h1M1 9h1m1 0h1m3 0h1m3 0h1m1 0h1m-8 1h1m1 0h1m3 0h1m1 0h1M1 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m7 0h1m-8 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M2 3h1m1 0h1M1 4h1m2 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 6h1m5 0h1m5 0h1M4 7h1m1 0h1m1 0h1m1 0h1m3 0h1M1 8h1m5 0h1m1 0h1m3 0h1M2 9h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1M1 10h1m5 0h1m3 0h1m1 0h1M2 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-9 2h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="gray" d="M2 4h1M2 6h1M2 8h1" /><path stroke="maroon" d="M3 4h2M2 5h2M3 6h2m3 0h5M2 7h2m7 0h2M3 8h2m5 0h2M9 9h2m-2 1h2" /></svg>;

export const dateData = {
  '16x16_4': Date_16x16_4
};

export interface DateProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Date: React.FC<DateProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = dateData[variant];

  return <Svg {...rest} />;
};
