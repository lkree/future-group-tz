import {useState} from "react";

const useSort = () => {
  const [state, setState] = useState(null);

  const doSort = (columnName, state) => {
    const sortType = state.sorted ?
      (state.sorted.type === 'asc' ? 'desc' : 'asc') :
      'asc';
    const newState = sortType === 'asc' ? state.data.sort(({[columnName]: a}, {[columnName]: b}) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }) : state.data.sort(({[columnName]: a}, {[columnName]: b}) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    setState({
      ...state,
      data: newState,
      sorted: {
        name: columnName,
        type: sortType,
      },
    });
  };

  return [state, doSort];
};

export default useSort;