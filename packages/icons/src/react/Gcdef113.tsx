import React from 'react';
import type { SVGProps } from "react";

const Gcdef113_48x48_8 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" shapeRendering="crispEdges" viewBox="0 -0.5 48 48" {...props}><path stroke="maroon" d="M24 1h1m-2 1h3m-4 1h5m-6 1h7m-8 1h9M19 6h11M18 7h13M8 8h9M8 9h8m-8 1h7m-7 1h6m-6 1h5m-5 1h4m-4 1h3m-3 1h2m-2 1h1m-2 2h1m33 0h1M6 19h2m33 0h2M5 20h3m33 0h3M4 21h4m33 0h4M3 22h5m33 0h5M2 23h6m33 0h6M1 24h7m33 0h7M2 25h6m33 0h6M3 26h5m33 0h5M4 27h4m33 0h4M5 28h3m33 0h3M6 29h2m33 0h2M7 30h1m33 0h1M8 32h1m31 0h1M8 33h2m29 0h2M8 34h3m27 0h3M8 35h4m25 0h4M8 36h5m23 0h5M8 37h6m21 0h6M8 38h7m19 0h7M8 39h8m17 0h8M8 40h9m15 0h9m-23 1h13m-12 1h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="red" d="M32 8h9m-8 1h8m-7 1h7m-6 1h6m-5 1h5m-4 1h4m-3 1h3m-2 1h2m-1 1h1" /></svg>;

export const gcdef113Data = {
  '48x48_8': Gcdef113_48x48_8
};

export interface Gcdef113Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '48x48_8';
}

export const Gcdef113: React.FC<Gcdef113Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const Svg = gcdef113Data[variant];

  return <Svg {...rest} />;
};
