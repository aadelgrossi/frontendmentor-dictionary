import { SVGProps } from 'react';

const IconPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={75} height={75} {...props}>
    <g fill="#A445ED" fillRule="evenodd">
      <circle fill="#A445ED" cx={37.5} cy={37.5} r={37.5} opacity={0.25} />
      <path d="M29 27v21l21-10.5z" />
    </g>
  </svg>
);

export default IconPlay;
