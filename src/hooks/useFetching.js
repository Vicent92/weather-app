import { useState, useEffect } from 'react'

export const useFetching = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fiveData, setFiveData] = useState([]);
  const [isLoading2, setIsLoading2] = useState(false);

  useEffect(() => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?appid=3968d4053f61c5c59e7a254eb8c2680b&units=metric&lang=sp&q=santiago';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(true);
      });
  }, []);

  useEffect(() => {
    const url =
      'https://api.openweathermap.org/data/2.5/forecast?appid=3968d4053f61c5c59e7a254eb8c2680b&units=metric&lang=sp&q=santiago';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFiveData(json.list);
        setIsLoading2(true);
      });
  }, []);

  return { data, isLoading, setData, fiveData, setFiveData, isLoading2 }
}
