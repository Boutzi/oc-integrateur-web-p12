import { ComponentPropsWithoutRef } from "react";

export const ItalyIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { size = 24, ...rest } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 513 512" fill="none" {...rest}>
      <g clipPath="url(#clip0_103_958)">
        <path d="M0.5 0H512.5V512H0.5V0Z" fill="white" />
        <path d="M0.5 0H171.2V512H0.5V0Z" fill="#009246" />
        <path d="M341.8 0H512.5V512H341.8V0Z" fill="#ce2b37" />
      </g>
      <defs>
        <clipPath id="clip0_103_958">
          <rect
            width="512"
            height="512"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
