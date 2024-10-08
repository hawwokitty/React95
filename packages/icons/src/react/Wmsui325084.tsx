import React from 'react';
import type { SVGProps } from "react";

const Wmsui325084_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M3 2h4M2 3h1m4 0h1M1 4h1M0 5h1m8 0h1M0 6h1m8 0h1M0 7h1m8 0h1M0 8h1m4 0h1m3 0h1M1 9h1m6 0h1m1 0h1m-9 1h1m4 0h1m-5 1h4" /><path stroke="silver" d="M7 2h1m0 2h1M7 5h1M2 6h1m3 1h1M2 8h1M0 9h1m2 0h1m5 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M15 2h1m-3 1h2M9 4h1m1 0h2m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1M9 9h1m3 0h2M1 10h1m6 0h1m2 0h2M2 11h1m4 0h1m-5 1h4" /><path stroke="#fff" d="M3 3h4M2 4h5M1 5h5m2 0h1M1 6h1m2 0h1m2 0h2M1 7h1m5 0h2M1 8h1m4 0h3M2 9h1m2 0h3m-5 1h4" /><path stroke="green" d="M8 3h1M7 4h1M6 5h1M3 6h1m1 0h2M2 7h4M3 8h2M4 9h1" /></svg>;

export const wmsui325084Data = {
  '32x32_4': Wmsui325084_32x32_4
};

export interface Wmsui325084Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wmsui325084: React.FC<Wmsui325084Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui325084Data[variant];

  return <Svg {...rest} />;
};
