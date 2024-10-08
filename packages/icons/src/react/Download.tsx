import React from 'react';
import type { SVGProps } from "react";

const Download_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 0h5M2 1h1m2 0h1M1 2h1M0 3h2m8 0h1M0 4h1M0 5h1M0 6h1M0 7h1m9 0h1M1 8h1" /><path stroke="#00f" d="M3 1h1M2 3h1m3 0h2M1 4h1m3 0h1m1 0h1M1 5h1m5 0h1m1 0h1M1 6h3m5 0h1M1 7h2m5 0h1" /><path stroke="green" d="M6 1h2M6 2h3M5 3h1m2 0h2M3 4h2m1 0h1m1 0h2M2 5h5m1 0h1M4 6h4M6 7h2" /><path stroke="#000" d="M8 1h1m0 1h1m0 2h1m-1 1h1m-1 1h3M3 7h3m3 0h1m3 0h1m1 0h1M2 8h1m3 0h6m2 0h2M2 9h1m8 0h1m1 0h3M2 10h1m8 0h1M2 11h1m3 0h10M2 12h1m2 0h1m8 0h1M2 13h1m1 0h1m8 0h1M2 14h2m8 0h1M2 15h10" /><path stroke="#fff" d="M2 2h1m0 1h1m0 5h1M3 9h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m-2 1h1m-2 1h1" /><path stroke="teal" d="M4 2h1M4 3h1m3 3h1" /><path stroke="#ff0" d="M3 8h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m-6 1h1m-2 1h1" /><path stroke="olive" d="M6 12h8m-9 1h8m-9 1h8" /></svg>;

export const downloadData = {
  '16x16_4': Download_16x16_4
};

export interface DownloadProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Download: React.FC<DownloadProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = downloadData[variant];

  return <Svg {...rest} />;
};
