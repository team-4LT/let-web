export interface CheckButtonProps {
  id: 0 | 1 | 2 | 3; // 학년별
  checkNum: 0 | 1 | 2 | 3;
  setCheckNum: (id: 0| 1 | 2 | 3) => void;
}