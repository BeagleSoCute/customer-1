import React, { ReactNode, FC } from 'react';

type propTypes = {
  children: ReactNode;
  additionalStyles?:string;
}

const SectionContainerHOC: FC<propTypes> = ({ children, additionalStyles }) => {
  return <div className={`md:p-[64px] px-[12px] py-[23px] w-full ${additionalStyles}`}>{children}</div>;
};


export default SectionContainerHOC;