import { FC } from "react";

const AddCircleBtnIcon: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
      <circle cx="17.5" cy="17.5" r="16.5" stroke="#292929" stroke-width="3" />
      <path d="M18 9.5V26.5" stroke="#292929" stroke-width="2" stroke-linecap="round" />
      <path d="M26.5 18L9.5 18" stroke="#292929" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
};

export default AddCircleBtnIcon;
