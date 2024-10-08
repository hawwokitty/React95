import React from 'react';
import type { SVGProps } from "react";

const Comdlg32531_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M6 9h19M6 10h1m17 0h1M6 11h1m17 0h1M6 12h1m2 0h13m2 0h1M6 13h1m17 0h1M6 14h1m17 0h1M6 15h1m2 0h12m3 0h1M6 16h1m17 0h1M6 17h1m17 0h1M6 18h1m2 0h13m2 0h1M6 19h1m17 0h1M6 20h1m17 0h1M6 21h19" /><path stroke="#fff" d="M7 10h17M7 11h17M7 12h2m13 0h2M7 13h17M7 14h17M7 15h2m12 0h3M7 16h17M7 17h17M7 18h2m13 0h2M7 19h17M7 20h17" /><path stroke="gray" d="M25 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M7 22h19" /></svg>;

export const comdlg32531Data = {
  '32x32_4': Comdlg32531_32x32_4
};

export interface Comdlg32531Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32531: React.FC<Comdlg32531Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32531Data[variant];

  return <Svg {...rest} />;
};
