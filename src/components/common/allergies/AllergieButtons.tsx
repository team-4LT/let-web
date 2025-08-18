"use client";

import { selectedMealStore } from '@/stores/allergies/selectedDateStore';
import { allergiesStore } from '@/stores/allergies/allergiesStroe';
import customAxios from '@/libs/axios/customAxios';
import { useEffect, useState } from 'react';

interface AllergieData {
  allergyId: number;
  allergyName: string;
}

const AllergieButtons = () => {
  const { selectedMeal } = selectedMealStore();
  const { allergies } = allergiesStore(); 
  const [ selectedAllergies, setSelectedAllergies ] = useState<AllergieData[]>();

  const getAllergies = async() => {
    try{
      const res = await customAxios.get(`/menuAllergy/${selectedMeal}`)
      if(res.status===200) setSelectedAllergies(res.data.data)
    }catch(err:any){
      console.error(`알러지 정보 불러오기 실패: ${err}`)
    }
  }

  useEffect(()=>{
    getAllergies();
  }, [selectedMeal])

  return (
    <div className="mt-5 px-7.5 py-5 flex flex-col gap-5 bg-white rounded">
      <div className="text-black text-base font-semibold">알레르기 음식</div>

      <div className="flex flex-wrap gap-3.5">
        {allergies.map((item) => {
          const isSelected = selectedAllergies?.some(
            (allergy) => allergy.allergyId === item.allergyId
          );
          return (
            <div
              key={item.allergyId}
              className={`px-2.5 py-1 text-base font-light border rounded
                ${isSelected ? 'bg-second text-white' : 'border-darkgrey text-darkgrey'}`}
            >
              {item.allergyName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllergieButtons;