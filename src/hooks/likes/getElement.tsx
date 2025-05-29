import React from 'react';
import Image from 'next/image';

export const useChangeElement = (changeValue: number) => {
  if (changeValue === 0) {
    return <div className='text-darkgrey'>-</div>;
  }
  if (changeValue > 0) {
    return (
      <div className='flex gap-2 text-main'>
        <Image
          src="/assets/upArrow.svg"
          alt="상승"
          width={11.28}
          height={14.58}
        />
        {changeValue}위
      </div>
    );
  }
  return (
    <div className='flex gap-2 text-[#0061FE]'>
      <Image
        src="/assets/downArrow.svg"
        alt="하락"
        width={11.28}
        height={14.58}
      />
      {-changeValue}위
    </div>
  );
}