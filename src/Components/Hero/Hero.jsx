import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

export const Hero = ({herodata, SetHeroCount, HeroCount, SetPlayStatus, PlayStatus}) => {
  return (
    <div className='hero'>
        <div className="HeroText">
            <p>{herodata.text1}</p>
            <p>{herodata.text2}</p>
        </div>
        
        <div className="HeroExplore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="HeroDotPlay">
            <ul className="HeroDots">
                <li onClick={() => SetHeroCount(0)} className={HeroCount===0 ? "HeroDot orange" : "HeroDot"}></li>
                <li onClick={() => SetHeroCount(1)} className={HeroCount===1 ? "HeroDot orange" : "HeroDot"}></li>
                <li onClick={() => SetHeroCount(2)} className={HeroCount===2 ? "HeroDot orange" : "HeroDot"}></li>
            </ul>
            <div className="HeroPlay">
                <img onClick={()=>SetPlayStatus(!PlayStatus)} src={PlayStatus?pause_icon:play_icon} alt="" />
                <p>See The Video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
