export type User = {
  id: string;
  name: string;
  emoji: string;
  tomato: number;
  lv: number;
  lastLoggedInAt: number;
  online: boolean;
  totalWorkTime: number;
  startAt?: number;
  keepDays: number;
};
