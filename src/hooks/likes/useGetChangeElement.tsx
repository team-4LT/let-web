import Image from 'next/image'

export const useGetChangeElement = (changeValue:number) => {
  if (changeValue === 0)
    return <div className='text-darkgrey'>-</div>
  else if(changeValue > 0){
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
    )
  }else {
    return (
      <div className='flex gap-2 text-blue'>
        <Image
          src="/assets/downArrow.svg"
          alt="하락"
          width={11.28}
          height={14.58}
        />
        {-changeValue}위
      </div>
    )
  }
};