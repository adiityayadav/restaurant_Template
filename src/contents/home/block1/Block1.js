import Navbar from 'layout/mainLayout/navbar/Navbar'
import Hambar from 'layout/mainLayout/hambar/hambar'
import React, {useEffect , useState} from 'react'

const Block1N = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
   <div style={{zIndex:1,}}>
    {!matches && (<Hambar />)}
    {matches && ( <Navbar />)} 
    </div>
  )
}

export default Block1N
