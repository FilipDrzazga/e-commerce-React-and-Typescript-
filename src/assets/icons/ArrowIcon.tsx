import { FC } from "react";

type Props = {
  color?: string;
};

const ArrowIcon: FC<Props> = ({ color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13" fill="none">
      <path d="M23 12L12 1L1 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowIcon;
