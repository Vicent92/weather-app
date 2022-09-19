import { useState, useEffect } from 'react'

export const useFetching = () => {
  const [geo, setGeo] = useState({})
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fiveData, setFiveData] = useState([]);
  const [isLoading2, setIsLoading2] = useState(false);
  const [run, setRun] = useState(false)


  useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords
      setGeo(crd)
      setRun(true)
      console.log(geo.latitude)

        if (run) {
          const url =
        `https://api.openweathermap.org/data/2.5/weather?appid=cd50fe9b57bf2848e2b637a835ab1910&units=metric&lat=${String(geo.latitude)}&lon=${String(geo.longitude)}`
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setIsLoading(true);
        });

      const url2 =
        `https://api.openweathermap.org/data/2.5/forecast?appid=cd50fe9b57bf2848e2b637a835ab1910&units=metric&lang=sp&lat=${String(geo.latitude)}&lon=${String(geo.longitude)}`
      fetch(url2)
        .then((res) => res.json())
        .then((json) => {
          setFiveData(json.list);
          setIsLoading2(true);
        });
        }
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [run])

  return { data, isLoading, setData, fiveData, setFiveData, isLoading2 }
}
