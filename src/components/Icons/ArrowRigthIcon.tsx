import React, { type SVGProps } from "react";

export const ArrowRigthIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        r="23.5"
        transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 24 24)"
        fill="#ff7800"
      ></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.998 24.9979L18.414 24.9979L21.709 28.2929C22.1 28.6839 22.1 29.3159 21.709 29.7069C21.318 30.0979 20.685 30.0979 20.295 29.7069L15.295 24.7069C14.904 24.3159 14.904 23.6839 15.295 23.2929L20.291 18.2929C20.486 18.0979 20.742 17.9999 20.998 17.9999C21.254 17.9999 21.51 18.0979 21.705 18.2929C22.096 18.6829 22.096 19.3159 21.706 19.7069L18.417 22.9979L31.998 22.9979C32.551 22.9979 32.998 23.4449 32.998 23.9979C32.998 24.5509 32.551 24.9979 31.998 24.9979Z"
        fill="#fff"
      ></path>
    </svg>
  );
};
