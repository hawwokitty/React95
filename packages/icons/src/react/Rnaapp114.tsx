import React from 'react';
import type { SVGProps } from "react";

const Rnaapp114_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 0h6M1 1h1M1 2h1m4 0h1M1 3h1m4 0h1M1 4h1m4 0h1M1 5h1m6 1h6M0 7h1m6 0h1M0 8h1m6 0h1M7 9h1m-1 1h1m-1 1h1m-2 2h1m-1 1h1" /><path stroke="#fff" d="M2 1h6M1 7h6m1 0h6m-3 4h1m1 0h1m-3 1h3m-7 1h2m2 0h1m1 0h1" /><path stroke="#000" d="M8 1h1M2 2h4m2 0h1M2 3h1m5 0h1M2 4h1m5 0h1M8 5h1M1 6h7m6 1h1M8 8h4m2 0h1M1 9h6m1 0h1m5 0h1m-7 1h1m-2 2h2m6 2h1m-9 1h4m3 0h1" /><path stroke="silver" d="M7 2h1M7 3h1M7 4h1M2 5h6M1 8h1m1 0h4m6 0h1m-6 3h1m1 0h1m3 0h1m-5 2h1m3 0h1m-8 1h1m1 0h1" /><path stroke="navy" d="M9 2h4m-1 1h1m-1 1h1m-1 1h1" /><path stroke="green" d="M3 3h3M3 4h3m6 4h1M9 9h2m-2 1h1" /><path stroke="#0f0" d="M2 8h1m5 6h1" /><path stroke="red" d="M11 9h3m-4 1h5m-6 1h1m2 0h1m2 0h1m-7 1h2m3 0h2m-7 1h1m2 0h1m2 0h1m-6 1h5m-4 1h3" /></svg>;

export const rnaapp114Data = {
  '16x16_4': Rnaapp114_16x16_4
};

export interface Rnaapp114Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Rnaapp114: React.FC<Rnaapp114Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = rnaapp114Data[variant];

  return <Svg {...rest} />;
};
