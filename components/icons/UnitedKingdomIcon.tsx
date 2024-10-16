import { ComponentPropsWithoutRef } from "react";

export const UnitedKingdomIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { size = 24, ...rest } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 513 512" fill="none" {...rest}>
      <g clipPath="url(#clip0_103_10035)">
        <path d="M0.5 0H512.5V512H0.5V0Z" fill="#012169" />
        <path
          d="M512.5 0V64L322.5 256L512.5 443V512H445.5L254.5 324L68.5 512H0.5V444L186.5 257L0.5 74V0H62.5L254.5 188L440.5 0H512.5Z"
          fill="white"
        />
        <path
          d="M184.5 324L195.5 358L42.5 512H0.5V509L184.5 324ZM308.5 312L362.5 320L512.5 467V512L308.5 312ZM512.5 0L320.5 196L316.5 152L466.5 0H512.5ZM0.5 1L193.5 190L134.5 182L0.5 49V1Z"
          fill="#C8102E"
        />
        <path
          d="M176.5 0V512H336.5V0H176.5ZM0.5 176V336H512.5V176H0.5Z"
          fill="white"
        />
        <path
          d="M0.5 208V304H512.5V208H0.5ZM208.5 0V512H304.5V0H208.5Z"
          fill="#C8102E"
        />
      </g>
      <defs>
        <clipPath id="clip0_103_10035">
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
