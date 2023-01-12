import { createContext, useContext } from 'react';

const SVGContext = createContext();

export function SVGWrapper({ children, prevRatio, myRatio }) {

  let sharedState = {
    myRatio: myRatio,
    prevRatio: prevRatio,
    }

  return (
    <SVGContext.Provider value={sharedState}>
      {children}
    </SVGContext.Provider>
  );
}

export function useSVGContext() {
  return useContext(SVGContext);
}