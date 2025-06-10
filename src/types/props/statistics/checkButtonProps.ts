export interface CheckButtonProps {
    id: number; // 0 : 전체, 1 : 1학년, 2 : 2학년, 3 : 3학년
    // 0 : 아침, 1 : 점심, 2 : 저녁
    checkNum: number;
    setCheckNum: (id: number) => void;
}
