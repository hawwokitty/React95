import React from 'react';
import type { SVGProps } from "react";

const Inetcpl1318_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="navy" d="M27 1h2m-3 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M2 7h20M2 8h14m4 0h1M2 9h14m3 0h1m-2 1h1m-2 1h1m1 1h1" /><path stroke="#000" d="M29 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-9 1h1m1 0h1m4 0h1m-9 1h3m4 0h2m-3 1h3m-4 1h1m2 0h1m-5 1h1m3 0h1m-7 1h1m5 0h1m-8 1h1m6 0h1m-10 1h2m6 0h2m-11 1h2m7 0h2M8 17h1m4 0h2m9 0h1M9 18h5m10 0h1m0 1h1m-5 1h1m4 0h1m-6 1h1m4 0h1m-7 1h1m6 0h1m-8 1h1m6 0h1m-9 1h1m8 0h1m-1 1h1m-11 1h8m3 0h1M1 27h14m3 0h1m10 0h1m-13 1h1m12 0h1m-17 1h4m8 0h5" /><path stroke="#0ff" d="M27 2h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#00f" d="M28 2h1m-2 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2" /><path stroke="gray" d="M1 6h21M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m14 0h1M1 13h1m13 0h1M1 14h1m12 0h1M1 15h1m11 0h2M1 16h1m-1 1h1m23 0h1M1 18h1m23 0h1M1 19h1m24 0h1M1 20h1m-1 1h1m25 0h1M1 22h1m19 0h1M1 23h1m19 0h1m6 0h1M1 24h1m-1 1h1m27 0h1M1 26h1m17 1h6m5 0h1m-13 1h2m-2 1h1m12 0h1m-17 1h4m8 0h5" /><path stroke="#fff" d="M16 8h1m1 0h1M3 11h14m5 0h1M3 12h1m13 0h1m4 0h1M3 13h12m1 0h1m2 0h4M3 14h1m11 0h1m5 0h1M3 15h9m5 0h4M3 16h1m8 0h1m7 0h1M3 17h5m7 0h5M3 18h1m15 0h1M3 19h16M3 20h1m13 0h1M3 21h15M3 22h1m12 0h1m5 0h1M3 23h14m5 0h1M3 24h13M3 25h13" /><path stroke="silver" d="M2 10h16M2 11h1m20 0h1M2 12h1m1 0h7m10 0h1m1 0h1M2 13h1m20 0h1M2 14h1m1 0h5m14 0h1M2 15h1m-1 1h1m1 0h3m-5 1h1m8 0h2M2 18h1m1 0h3m10 0h2M2 19h1m-1 1h1m1 0h4m6 0h3M2 21h1m-1 1h1m1 0h5m2 0h5M2 23h1m-1 1h1m-1 1h1m-1 1h13" /><path stroke="#0f0" d="M11 12h5m-7 2h5m4 0h3M7 16h4m2 0h1m2 0h4M7 18h2m5 0h3m-9 2h6m-5 2h2" /><path stroke="#ff0" d="M18 12h1m-2 1h1m-2 1h1" /><path stroke="maroon" d="M22 14h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h1m3 0h1m-5 1h1m3 0h1m-6 1h1m5 0h1m-7 1h1m5 0h1m-8 1h1m3 0h5m-9 1h1m-2 1h1m-1 1h1m9 0h1m-12 1h1m11 0h1" /><path stroke="green" d="M12 15h1m-2 1h1m-3 1h2" /><path stroke="red" d="M22 15h1m-1 1h1m-2 1h3m-3 1h3m-4 1h5m-6 1h2m2 0h3m-7 1h2m2 0h3m-8 1h2m4 0h3m-9 1h2m4 0h3m-10 1h2m6 0h3m-11 1h11m-12 1h2m8 0h3m-13 1h2m8 0h3m-14 1h2m10 0h3" /></svg>;

export const inetcpl1318Data = {
  '32x32_4': Inetcpl1318_32x32_4
};

export interface Inetcpl1318Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcpl1318: React.FC<Inetcpl1318Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl1318Data[variant];

  return <Svg {...rest} />;
};
