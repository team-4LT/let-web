export interface CheckButtonProps {
  id: 1 | 2 | 3; // 학년별
  checkNum: 1 | 2 | 3;
  setCheckNum: (id: 1 | 2 | 3) => void;
}