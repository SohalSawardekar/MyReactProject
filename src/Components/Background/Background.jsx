import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({PlayStatus, HeroCount}) => {
    if(PlayStatus) {
        return (
            <video className='background FadeIn' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if(HeroCount === 0) {
        return <img src={image1} className='background FadeIn' alt="img"></img>
    }
    else if(HeroCount === 1) {
        return <img src={image2} className='background FadeIn' alt="img"></img>
    }
    else if(HeroCount === 2) {
        return <img src={image3} className='background FadeIn' alt="img"></img>
    }
    
    
}

export default Background