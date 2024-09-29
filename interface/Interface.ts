import {ReactNode, Dispatch, SetStateAction} from 'react';

export interface Book {
  id: number;
  name: string;
  image: any; // Replace with appropriate type for image
  backgroundColor: string;
  [x: string]: ReactNode;
}

export interface Bookmark {
  id?: number; 
  title?: string; 
  description?: string; 
}

export interface AppContextType {
  data: string;
  recevedBookName: Book | null;
  setRecevedBookName: (id: number) => void;
  bookChapter: Book | any;
  isBottomSheetVisible: boolean;
  setIsBottomSheetVisible: Dispatch<SetStateAction<boolean>>;
  bookmarked: Bookmark[];  
  setBookmarked: Dispatch<SetStateAction<Bookmark[]>>

  reRanderMark: boolean;  
  setReRanderMark: (value: boolean) => void;

  ctlBookeMarked: number, 
  setCtlBookeMarked: (value: number) => void;
}


// export type Task = {
//   id: number;
//   title: string;
//   description: string;
// };