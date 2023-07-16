import axios from "axios";
import { setDate } from "date-fns";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
          const res = await axios.get(url);
          console.log(res.data)
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData(url);
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      console.log(url);
      setDate(res);
      console.log(data);
    } catch (error) {
      setError(error);
      }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
