import { useState } from 'react'

export const useRender = (inicialValue) => {
  const [render, setRender] = useState(inicialValue)

  const handleTrue = () => setRender(true)
  const handleFalse = () => setRender(false)

  return {
    render,
    handleTrue,
    handleFalse
  }

}
