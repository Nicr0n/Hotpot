import { SVGAttributes } from "preact";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: string | number;
  color?: string;
}
