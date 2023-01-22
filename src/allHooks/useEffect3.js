import { useEffect, useState } from 'react';


export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {  // it works first and then upper function will be called
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return (
    <div>{windowWidth}</div>
  )
}
