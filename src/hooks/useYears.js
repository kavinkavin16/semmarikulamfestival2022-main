import { useContext } from 'react';
import { YearContext } from '../contexts/YearContext';

// ----------------------------------------------------------------------

const useYears = () => useContext(YearContext);

export default useYears;
