import Twitter from '../images/Twitter Icon.png'
import Instagram from '../images/Instagram Icon.png'
import GitHub from '../images/GitHub Icon.png'
import Facebook from '../images/Facebook Icon.png'
import './Footer.css'

export default function Footer() {
    return (
      <footer>
        <a href="#"><img src={Twitter}/></a>
        <a href="#"><img src={Facebook}/></a>
        <a href="#"><img src={Instagram}/></a>
        <a href="#"><img src={GitHub}/></a>
      </footer>
    );
  }
  