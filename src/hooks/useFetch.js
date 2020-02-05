import {useEffect, useState} from "react";

const useFetch = (url) => {
  const getData = (url) => {
    fetch(url)
      .then(data => data.json())
      .then(data => setState(data));
  };
  const [state, setState] = useState(null);

  useEffect(() => getData(url), [url]);

  return [state, setState];
};

export default useFetch;