import React from 'react';
import type { SVGProps } from "react";

const Mailnews9_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M19 5h2m-3 1h1m3 0h4m-9 1h1m3 0h1m-6 1h1m3 0h1m-6 1h1m3 0h1m-6 1h1m3 0h1m-6 1h1m3 0h1m3 0h2m2 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1M9 15h1m3 0h1m3 0h1m3 0h1M8 16h1m3 0h1m3 0h1m3 0h1M7 17h1m3 0h1m3 0h1m3 0h1M6 18h1m3 0h1m3 0h1m3 0h1M5 19h1m1 0h1m1 0h1m3 0h1m3 0h1M5 20h1m1 0h2m3 0h1m3 0h1M5 21h1m1 0h2m1 0h2m3 0h1M5 22h1m1 0h1m6 0h1M5 23h1m7 0h1m-4 1h3" /><path stroke="#ff0" d="M19 6h1m-2 1h1m3 0h4m-9 1h1m3 0h1m4 0h1M16 9h1m3 0h1m5 0h1m-12 1h1m3 0h1m6 0h1m-13 1h1m3 0h1m7 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1M9 16h1m3 0h1m3 0h1m3 0h1M8 17h1m3 0h1m3 0h1m3 0h1M7 18h1m3 0h1m3 0h1m3 0h1M6 19h1m3 0h1m3 0h1m3 0h1M6 20h1m2 0h1m3 0h1m3 0h1M6 21h1m2 0h1m2 0h1m3 0h1M6 22h1m3 0h2m3 0h1M6 23h2m6 0h1m-8 1h2m4 0h1m-6 1h5" /><path stroke="#000" d="M20 6h1m-2 1h1m6 0h1m-9 1h1m3 0h4m1 0h1M17 9h1m3 0h1m3 0h1m1 0h1m-12 1h1m3 0h1m4 0h1m1 0h1m-13 1h1m3 0h1m7 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1m-14 1h1m3 0h1m3 0h1m3 0h1M9 17h1m3 0h1m3 0h1m3 0h1M8 18h1m3 0h1m3 0h1m3 0h1m-10 1h1m3 0h1m3 0h1m-10 1h1m3 0h1m3 0h1m-6 1h1m3 0h1m-9 1h1m2 0h1m3 0h1m-9 1h1m1 0h2m3 0h1M6 24h1m2 0h1m4 0h1m-8 1h1m5 0h1m-6 1h5" /></svg>;

export const mailnews9Data = {
  '32x32_4': Mailnews9_32x32_4
};

export interface Mailnews9Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mailnews9: React.FC<Mailnews9Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mailnews9Data[variant];

  return <Svg {...rest} />;
};
