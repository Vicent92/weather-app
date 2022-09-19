import { useState } from 'react'

export const useSubmitWeather = (setDataAdd) => {
  const [value, setValue] = useState('');

  const handleChage = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = async () => {
    const valueLowerCase = value.toLocaleLowerCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=cd50fe9b57bf2848e2b637a835ab1910&units=metric&lang=sp&q=${valueLowerCase}`;
    const data = await fetch(url);
    const json = await data.json();

    setDataAdd((dt) => dt.concat(json));
  };

  return { value, handleChage, handleSubmit }
}
