import React from 'react';
import type { SVGProps } from "react";

const NumPage_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M5 1h9M4 2h2m7 0h1M3 3h1m1 0h1m7 0h1M2 4h4m7 0h1M2 5h1m10 0h1M2 6h1m10 0h1M2 7h1m10 0h1M2 8h1m10 0h1M2 9h1m10 0h1M2 10h1m10 0h1M2 11h1m10 0h1M2 12h1m10 0h1M2 13h1m10 0h1M2 14h12" /><path stroke="#fff" d="M6 2h7M4 3h1m1 0h7M6 4h1m1 0h2m1 0h2M3 5h4m1 0h2m1 0h2M3 6h2m7 0h1M3 7h3m1 0h2m1 0h3M3 8h3m1 0h2m1 0h3M3 9h1m7 0h2M3 10h2m1 0h2m1 0h4M3 11h2m1 0h2m1 0h4M3 12h10M3 13h10" /><path stroke="navy" d="M7 4h1m2 0h1M7 5h1m2 0h1M5 6h7M6 7h1m2 0h1M6 8h1m2 0h1M4 9h7m-6 1h1m2 0h1m-4 1h1m2 0h1" /></svg>;

export const numPageData = {
  '16x16_4': NumPage_16x16_4
};

export interface NumPageProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const NumPage: React.FC<NumPageProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = numPageData[variant];

  return <Svg {...rest} />;
};
