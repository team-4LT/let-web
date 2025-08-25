'use client'

import getMe from '@/hooks/user/getMe'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const LoginChecker = () => {
  const router = useRouter();

  useEffect(()=>{
    const isLogin = async () => {
      const result = await getMe();
      if(!result) router.replace('/login')
      };
    isLogin()
  }, [])

  return (
    <div></div>
  )
}

export default LoginChecker