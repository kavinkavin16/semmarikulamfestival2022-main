import React, { useState } from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const initialState = {
  year: 2023,
  onChangeYear: () => {},
};
const YearContext = React.createContext(initialState);
// ----------------------------------------------------------------------

YearContextProvider.propTypes = {
  children: PropTypes.node,
};

function YearContextProvider({ children }) {
  const [year, setYear] = useState({ year: 2023 });

  const onChangeYear = (value) => {
    setYear({ ...year, year: value });
  };

  return (
    <YearContext.Provider
      value={{
        ...year,
        onChangeYear,
      }}
    >
      {children}
    </YearContext.Provider>
  );
}
export { YearContext, YearContextProvider };
