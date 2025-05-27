export interface CheckButtonProps {
    id: number; // 0 : 1학년, 1 : 2학년, 2 : 3학년, 3 : 전체
    // 0 : 아침, 1 : 점심, 2 : 저녁
    checkNum: number;
    setCheckNum: (id: number) => void;
}
