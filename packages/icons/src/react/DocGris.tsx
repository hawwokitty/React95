import React from 'react';
import type { SVGProps } from "react";

const DocGris_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 0h10M2 1h1m8 0h2M2 2h1m8 0h1m1 0h1M2 3h1m8 0h4M2 4h1m11 0h1M2 5h1m11 0h1M2 6h1m11 0h1M2 7h1m11 0h1M2 8h1m11 0h1M2 9h1m11 0h1M2 10h1m11 0h1M2 11h1m11 0h1M2 12h1m11 0h1M2 13h1m11 0h1M2 14h1m11 0h1M2 15h13" /><path stroke="silver" d="M3 1h8M3 2h8M3 3h8M3 4h11M3 5h11M3 6h11M3 7h11M3 8h11M3 9h11M3 10h11M3 11h11M3 12h11M3 13h11M3 14h11" /><path stroke="#fff" d="M12 2h1" /></svg>;

export const docGrisData = {
  '16x16_4': DocGris_16x16_4
};

export interface DocGrisProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const DocGris: React.FC<DocGrisProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = docGrisData[variant];

  return <Svg {...rest} />;
};
