import React from 'react';
import { BarLoader } from 'react-spinners';

export const LoaderBar = () => {
  return (
    <div>
      <BarLoader loading={true} color={'#FFFFFF'} width={'100%'}/>
    </div>
  );
};
