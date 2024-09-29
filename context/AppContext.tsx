import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
} from 'react';

import {booksInternalData} from '../database/HomeBookData'; // Adjust the import path
import {AppContextType, Book, Bookmark} from '../interface/Interface';

const defaultContextValue: AppContextType = {
  data: 'hi',
  recevedBookName: null,
  setRecevedBookName: () => {},
  bookChapter: null,
  isBottomSheetVisible: false,
  setIsBottomSheetVisible: () => {},
  bookmarked: [],
  setBookmarked: () => {},

  reRanderMark: false, 
  setReRanderMark: () => {},

  ctlBookeMarked: 0,
  setCtlBookeMarked: ()=>{}
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const UseAppContext = () => useContext(AppContext);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [recevedBookName, setRecevedBookName] = useState<Book | null>(null);
  const [bookChapter, setBookChapter] = useState<Book | null>(null);
  const [bookmarked, setBookmarked] = useState<Bookmark[]>([]);

  const [reRanderMark, setReRanderMark] = useState(false)
 
  const findBookById = (id: number): any => {
    return booksInternalData.find(book => book.id === id);
  };

  const handleSetRecevedBookName = (id: number) => {
    const book = findBookById(id);
    setRecevedBookName(book ?? null);
    setBookChapter(book ?? null);
  };

  //bottomShit
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState<boolean>(false);

  const [ctlBookeMarked, setCtlBookeMarked] = useState(0)
  //   console.log(bookChapter)
  return (
    <AppContext.Provider
      value={{
        data: 'hi',
        recevedBookName,
        setRecevedBookName: handleSetRecevedBookName,
        bookChapter,
        isBottomSheetVisible,
        setIsBottomSheetVisible,
        bookmarked,
        setBookmarked,

        reRanderMark,
        setReRanderMark,

        ctlBookeMarked, 
        setCtlBookeMarked
      }}>
      {children}
    </AppContext.Provider>
  );
};
