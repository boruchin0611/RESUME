import { ReactNode } from 'react';

export interface SlideData {
  id: number;
  title: string;
  note: string;
  component: ReactNode;
}