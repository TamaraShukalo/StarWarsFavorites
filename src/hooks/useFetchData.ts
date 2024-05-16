import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchData = (url: string) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!url) {
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const response = await axios.get(url);
        setData(response.data.name);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, isLoading, error};
};

export default useFetchData;
