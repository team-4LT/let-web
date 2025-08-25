import customAxios from '@/libs/axios/customAxios'
import React from 'react'

const getMe = async () => {
  try{
    const res = await customAxios.get(`users/me`)
    if(res.data.status === 200) return res.data.data
    else return null
  }catch(err:any){
    console.log(err.status)
    return null
  }
}

export default getMe