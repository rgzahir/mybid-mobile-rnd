export type bool = 'true' | 'false';

export type userStatus = 'active' | 'inactive';

export type FilterCredentials = 'All' | 'Basic' | 'Education' | 'Finance';

export interface HighlightItem {
  icon: string;
  log: string;
  timestamp: date;
}

export interface userProgress {
  user: string;
  currentProgress: number;
  isComplete: boolean;
}
