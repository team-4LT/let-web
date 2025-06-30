export const mealTypeMap: Record<string, string> = {
  아침: "조식",
  점심: "중식",
  저녁: "석식",
};

export interface RateType {
    grade1Ration: number;
    grade2Ration: number;
    grade3Ration: number;
}
