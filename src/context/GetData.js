import React, {createContext, useState} from 'react';

export const GetDataContext = createContext([{}, () => {}]);

const GetDataProvider = ({children}) => {
  const [state, setState] = useState(false);

  return (
    <GetDataContext.Provider value={[state, setState]}>
      {children}
    </GetDataContext.Provider>
  );
};

export default GetDataProvider;