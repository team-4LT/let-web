"use client";

import { useEffect, useState } from 'react';
import { selectedDateStore } from '@/stores/allergies/selectedDateStore';
import { allergiesStore } from '@/stores/allergies/allergiesStroe';

const AllergieButtons = () => {
  const { selectedDate } = selectedDateStore();
  const { allergies } = allergiesStore(); 

  const selectedAllergies = [1, 2, 4]

  return (
    <div className="mt-5 px-7.5 py-5 flex flex-col gap-5 bg-white rounded">
      <div className="text-black text-base font-semibold">알레르기 음식</div>

      <div className="flex flex-wrap gap-3.5">
        {allergies.map((item, index) => {
          const isSelected = selectedAllergies.includes(index);
          return (
            <div
              key={index}
              className={`px-2.5 py-1 text-base font-light border rounded
                ${isSelected ? 'bg-second text-white' : 'border-darkgrey text-darkgrey'}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllergieButtons;