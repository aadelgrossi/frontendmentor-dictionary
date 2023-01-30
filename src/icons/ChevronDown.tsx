import { SVGProps } from 'react';

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={8} {...props}>
    <path fill="none" stroke="#A445ED" strokeWidth={1.5} d="m1 1 6 6 6-6" />
  </svg>
);

export default ChevronDown;
