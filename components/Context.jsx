import { createContext, useContext } from 'react';
import useWindowSize from './useWindowSize';

const AppContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let {width} = useWindowSize();

  let sharedState = {
    width: width, 
    breakPointSmall: breakPointSmall,
    noBlur: true,
    scrolled: scrolled }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}