import React from 'react';
import type { SVGProps } from "react";

const Mapi32IconAttach_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M4 0h18M4 1h1m16 0h2M4 2h1m16 0h1m1 0h1M4 3h1m16 0h1m2 0h1M4 4h1m16 0h1m3 0h1M4 5h1m16 0h1m4 0h1M4 6h1m16 0h7M4 7h1m22 0h1M4 8h1m22 0h1M4 9h1m22 0h1M4 10h1m22 0h1M4 11h1m22 0h1M4 12h1m22 0h1M4 13h1m22 0h1M4 14h1m22 0h1M4 15h1m22 0h1M4 16h1m22 0h1M4 17h1m22 0h1M4 18h1m22 0h1M4 19h1m22 0h1M4 20h1m22 0h1M4 21h1m22 0h1M4 22h1m22 0h1M4 23h1m22 0h1M4 24h1m22 0h1M4 25h1m22 0h1M4 26h1m22 0h1M4 27h1m22 0h1M4 28h1m22 0h1M4 29h1m22 0h1M4 30h24" /><path stroke="#fff" d="M5 1h16M5 2h16M5 3h16M5 4h16m1 0h1M5 5h16m1 0h2M5 6h16M5 7h22M5 8h22M5 9h22M5 10h22M5 11h22M5 12h22M5 13h22M5 14h22M5 15h22M5 16h22M5 17h22M5 18h22M5 19h22M5 20h22M5 21h22M5 22h22M5 23h22M5 24h22M5 25h22M5 26h22M5 27h22M5 28h22M5 29h22" /><path stroke="gray" d="M22 2h1m0 1h1m0 1h1m0 1h1m2 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M5 31h24" /><path stroke="silver" d="M22 3h1m0 1h1m0 1h1" /></svg>;

export const mapi32IconAttachData = {
  '32x32_4': Mapi32IconAttach_32x32_4
};

export interface Mapi32IconAttachProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mapi32IconAttach: React.FC<Mapi32IconAttachProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mapi32IconAttachData[variant];

  return <Svg {...rest} />;
};
