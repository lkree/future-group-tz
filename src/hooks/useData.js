import {useState} from "react";

/**
 * @param initialState {Array}
 * @param type {String}
 * @param data {Object}
 * @returns {[Object, Function]}
 */
const useData = (initialState = [], type, data) => {
  const prepareData = (data, type) => {
    if (!type) return data;
    if (!data || !data[0]) return null;

    const currentData = {
      page: 1,
      data: type === 'full' ? data.filter((_, i) => i < 50) : data,
    };

    return {
      ...currentData,
      commonData: {...data},
    }
  };
  const [state, setState] = useState(prepareData(initialState, type));
  const setData = (data, type) => {
    setState(prepareData(data, type));
  };

  return [state, setData];
};

export default useData;