import { User } from './User';

export type ActivityTime =
  | 'allDay'
  | 'earlyMorning'
  | 'morning'
  | 'noon'
  | 'afternoon'
  | 'evening'
  | 'night'
  | 'midnight';

export type LevelLimit = '-5' | '5-10' | '10-';

export type Room = {
  rid: string;
  name: string;
  description: string;
  private: boolean;
  activityTime: ActivityTime | null;
  levelLimit: LevelLimit;
  createdAt: number;
  users: string[];
  lv: number;
};
