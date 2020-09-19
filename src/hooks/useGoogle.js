import { useState, useEffect } from "react";
import { API_KEY } from "../components/SearchedPage";

const CONTEXT_KEY = "01c37ee39a04f962d";

const useGoogle = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((resp) => resp.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogle;
