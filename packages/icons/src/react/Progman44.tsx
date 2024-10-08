import React from 'react';
import type { SVGProps } from "react";

const Progman44_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 1h2m-3 1h3m-4 1h4m-5 1h5m-6 1h6m-7 1h7M9 7h8M8 8h9M7 9h21M6 10h23M5 11h24M4 12h25M3 13h26M2 14h27M2 15h27M3 16h26M4 17h25M5 18h24M6 19h23M7 20h22M8 21h20M9 22h8m-7 1h7m-6 1h6m-5 1h5m-4 1h4m-3 1h3m-2 1h2" /></svg>;
const Progman44_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 1h2m-3 1h1m1 0h1m-4 1h1m2 0h1m-5 1h1m3 0h1m-6 1h1m4 0h1m-7 1h1m5 0h1M9 7h1m6 0h1M8 8h1m7 0h1M7 9h1m8 0h12M6 10h1m21 0h1M5 11h1m22 0h1M4 12h1m23 0h1M3 13h1m24 0h1M2 14h1m25 0h1M2 15h1m25 0h1M3 16h1m24 0h1M4 17h1m23 0h1M5 18h1m22 0h1M6 19h1m21 0h1M7 20h1m20 0h1M8 21h1m7 0h12M9 22h1m6 0h1m-7 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2" /><path stroke="gray" d="M15 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m11 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 15h2m22 0h1M4 16h2m21 0h1M5 17h2m20 0h1M6 18h2m19 0h1M7 19h2m18 0h1M8 20h2m5 0h13M9 21h2m4 0h1m-6 1h2m3 0h1m-5 1h2m2 0h1m-4 1h2m1 0h1m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#fff" d="M14 3h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M9 8h1M8 9h1m-2 1h1m8 0h11M6 11h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="silver" d="M14 4h1m-2 1h2m-3 1h3m-4 1h4m-5 1h5M9 9h6m-7 1h7m-8 1h20M6 12h21M5 13h22M4 14h23M5 15h22M6 16h21M7 17h20M8 18h19M9 19h18m-17 1h5m-4 1h4m-3 1h3m-2 1h2m-1 1h1" /></svg>;

export const progman44Data = {
  '32x32_1': Progman44_32x32_1,
  '32x32_4': Progman44_32x32_4
};

export interface Progman44Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman44: React.FC<Progman44Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman44Data[variant];

  return <Svg {...rest} />;
};
