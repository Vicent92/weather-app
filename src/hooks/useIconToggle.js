import { useNavigate } from 'react-router-dom'

export const useIconToggle = (handleTrue, handleFalse ) => {
  const navigate = useNavigate()

  const linkAddWtr = () => {
    navigate('addweather')
    handleTrue()
  }

  const linkWtrApp = () => {
    navigate('/')
    handleFalse()
  }

  return { linkAddWtr, linkWtrApp }
}
