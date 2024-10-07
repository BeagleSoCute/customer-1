import React, { ReactNode, FC } from 'react';

type propTypes = {
  children: ReactNode;
  additionalStyles?:string;
}

const SectionContainerHOC: FC<propTypes> = ({ children, additionalStyles }) => {
  return <div className={`lg:p-[64px] md:p-[32px] p-[24px] px-[12px] py-[23px] w-full ${additionalStyles}`}>{children}</div>;
};


export default SectionContainerHOC;