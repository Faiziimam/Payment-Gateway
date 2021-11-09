import './styles/frontpage.css';
import Animate from '@charlesvien/react-animatecss';
import { Link } from 'react-router-dom';
function FrontPage() {
  return (
    <div className="frontPage">
      <div className="cont1">
        <Animate
          animationIn="fadeIn"
          animationOut="fadeOut"
          inDuration={4000}
          outDuration={1000}
          visible
          className="pageTxt"
        >
          <span>H</span>elp
        </Animate>
        <Animate
          animationIn="fadeIn"
          animationOut="fadeOut"
          inDuration={4000}
          outDuration={1000}
          visible
          className="pageTxt1"
        >
          <span>F</span>ight
        </Animate>
        <Animate
          animationIn="fadeIn"
          animationOut="fadeOut"
          inDuration={4000}
          outDuration={1000}
          visible
          className="pageTxt2"
        >
          <span>C</span>ancer
        </Animate>

        <Link to="/donate" className="link_text">
          <button className="btn">Donate</button>
        </Link>
      </div>
      <div className="con2">
        <img className="Frontimg" src="img1.jpg" alt="image1" />
      </div>
    </div>
  );
}

export default FrontPage;
