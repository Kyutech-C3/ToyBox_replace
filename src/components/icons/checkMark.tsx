import type { FC, SVGProps } from 'react';

export const AnimatedCheckMark: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50"
    height="50"
  >
    <style>
      {`
        @keyframes drawCheck {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .checkmark {
          fill: none;
          stroke: black;
          stroke-width: 8;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawCheck 0.7s ease forwards;
        }
      `}
    </style>
    <path className="checkmark" d="M10 25 l12 12 l24 -24" />
  </svg>
);
