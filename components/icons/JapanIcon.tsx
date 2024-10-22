import { ComponentPropsWithoutRef } from "react";

export const JapanIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { size = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 600 600"
      {...rest}
    >
      <rect fill="#fff" width="900" height="600" />
      <circle fill="#bc002d" cx="300" cy="300" r="160" />
    </svg>
  );
};
