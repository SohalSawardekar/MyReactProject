import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let herodata = [
    { text1: "Dive Into", text2: "What You Love", },
    { text1: "Indulge", text2: "Your Passion", },
    { text1: "Give In To", text2: "Your Passion", }
  ]

  const [HeroCount, SetHeroCount] = useState(0);
  const [PlayStatus, SetPlayStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInterval(()=>{
        SetHeroCount((count)=>{return count===2?0:count+1})
      }, 5000)
    }, 10000);
  }, [])

  return (
    <>
      <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
      <Navbar />
      <Hero
        SetPlayStatus={SetPlayStatus}
        herodata={herodata[HeroCount]}
        HeroCount={HeroCount}
        SetHeroCount={SetHeroCount}
        PlayStatus={PlayStatus}
      />
    </>
  )
}

export default App
