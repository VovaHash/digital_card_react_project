import Photo from "../images/Rectangle 90.png";
import './Info.css'
import Email from '../images/Mail.png'
import LinkedIn from '../images/linkedin.png'

export default function Info() {
  return (
    <>
      <img src={Photo} />
      <div className="info--name">
        <h2>Laura Smith</h2>
        <h3>Frontend Developer</h3>
        <a>laurasmith.website</a>
      </div>
      <div className="info--buttons">
        <a className="info--email"><img src={Email}/>Email</a>
        <a className="info--linkedin"><img src={LinkedIn}/>LinkedIn</a>
      </div>
    </>
  );
}
