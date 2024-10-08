import React from 'react';
import type { SVGProps } from "react";

const Quikview3_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M20 2h5m-7 1h2m5 0h2M17 4h2m7 0h2M17 5h1m9 0h1M16 6h1m11 0h1m1 0h1M16 7h1m11 0h1m1 0h1M16 8h1m11 0h1m1 0h1M16 9h1m11 0h1m1 0h1m-15 1h1m11 0h1m1 0h1m-1 1h1m-3 1h1m1 0h1M9 13h7m11 0h1m2 0h1M9 14h6m10 0h2m3 0h1m-12 1h6m5 0h1m-13 1h1m10 0h1m-13 1h1m10 0h1M2 18h9m5 0h12m-13 1h1m-2 1h1m-2 1h1m-4 1h3" /><path stroke="gray" d="M4 5h13m1 0h9m1 0h1M3 6h1m25 0h1M2 7h1m26 0h1M1 8h1m25 0h1m1 0h1M1 9h1m25 0h1m1 0h1M1 10h1m25 0h1m1 0h1M1 11h1m14 0h2m9 0h3M1 12h1m7 0h9m9 0h1m1 0h1M1 13h1m2 0h5m10 0h5m1 0h2m1 0h2M1 14h1m18 0h5m2 0h3M1 15h1m25 0h3M1 16h1m25 0h2M1 17h11m6 0h10" /><path stroke="silver" d="M4 6h12m1 0h11M3 7h13m1 0h11M3 9h13m1 0h10M3 10h13m1 0h5m2 0h3M3 11h13m2 0h4m2 0h3M3 12h6m9 0h9M3 13h1m12 0h1m7 0h1M3 14h1m11 0h1M3 15h6m5 0h1m10 0h2M3 16h11m5 0h8m-15 1h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M2 8h14m1 0h10M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h5m-7 1h1m6 0h5M2 16h1" /><path stroke="red" d="M22 10h2m-2 1h2" /><path stroke="olive" d="M17 13h2m-3 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-4 1h3" /></svg>;

export const quikview3Data = {
  '32x32_4': Quikview3_32x32_4
};

export interface Quikview3Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Quikview3: React.FC<Quikview3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = quikview3Data[variant];

  return <Svg {...rest} />;
};
