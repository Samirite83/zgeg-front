import { SVGProps } from "react";

interface SvgProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const SvgComponent = ({
  fill,
  width,
  height,
  className,
  ...rest
}: SvgProps) => (
  <svg
    // width={1001}
    // height={1196}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <path
      d="M990.538 580.865c12.912 7.774 12.912 26.496 0 34.27L30.815 1192.9C17.485 1200.92.5 1191.32.5 1175.76V20.239c0-15.56 16.985-25.16 30.315-17.135l959.723 577.761Z"
      fill={fill || "#EFD211"}
    />
  </svg>
);

export default SvgComponent;
