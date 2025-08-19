"use client";

import { selectedMealStore } from '@/stores/allergies/selectedDateStore';
import { allergiesStore } from '@/stores/allergies/allergiesStroe';
import { useEffect, useState } from 'react';
import { AllergieData } from '@/types/props/allergies/allergieData';
import { getAllergies } from "@/hooks/allergies/useGetAllerdies";

const AllergieButtons = () => {
  const { selectedMeal } = selectedMealStore();
  const { allergies } = allergiesStore(); 
  const [ selectedAllergies, setSelectedAllergies ] = useState<AllergieData[]>();

  useEffect(()=>{
    const fetchData = async () => {
      const result = await getAllergies(selectedMeal);
      if (result) setSelectedAllergies(result);
    };
    if(selectedMeal>=0) fetchData();
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