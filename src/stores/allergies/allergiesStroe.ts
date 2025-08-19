import { create } from "zustand";

interface Allergy {
  allergyId: number;
  allergyName: string;
}

interface AllergiesStore {
  allergies: Allergy[];
}

export const allergiesStore = create<AllergiesStore>(() => ({
  allergies: [
    { allergyId: 1, allergyName: "난류" },
    { allergyId: 2, allergyName: "우유" },
    { allergyId: 3, allergyName: "메밀" },
    { allergyId: 4, allergyName: "땅콩" },
    { allergyId: 5, allergyName: "대두" },
    { allergyId: 6, allergyName: "밀" },
    { allergyId: 7, allergyName: "고등어" },
    { allergyId: 8, allergyName: "게" },
    { allergyId: 9, allergyName: "새우" },
    { allergyId: 10, allergyName: "돼지고기" },
    { allergyId: 11, allergyName: "복숭아" },
    { allergyId: 12, allergyName: "토마토" },
    { allergyId: 13, allergyName: "아황산류" },
    { allergyId: 14, allergyName: "호두" },
    { allergyId: 15, allergyName: "닭고기" },
    { allergyId: 16, allergyName: "쇠고기" },
    { allergyId: 17, allergyName: "오징어" },
    { allergyId: 18, allergyName: "조개류" },
    { allergyId: 19, allergyName: "잣" }
  ]
}));