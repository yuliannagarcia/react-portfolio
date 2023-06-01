import React from 'react';
import './Portfolio.css';
import IMG1 from "../../Assets/IMG1.png";
import IMG2 from "../../Assets/IMG2.png";
import IMG3 from "../../Assets/IMG3.png";
import { Link} from 'react-router-dom';

const Portfolio = ({handleClick}) => {

  return (
    <section id="Portfolio" className='Portfolio'>
      <h3>Get to know</h3>
      <h2>My Projects</h2>
      <div className="container portfolio_container">
          <div className="portfolio_item portfolio_item-image">
              <img src={IMG1} alt="" href="#Project1" onClick={() => handleClick(1)}/>
          </div>
          <div className="portfolio_item portfolio_item-image">
            <img src={IMG2} alt="" href="#Project2" onClick={() => handleClick(2)} />
          </div>
          <div className="portfolio_item portfolio_item-image">
            <img src={IMG3} alt="" href="#Project3" onClick={() => handleClick(3)}/>
          </div>
      </div>
      <div className="container portfolio_container2">
        <article  className="portfolio_item">
          <h3 href="#Project1" onClick={() => handleClick(1)}>'Thy Neighbour' App</h3>
          <a className="btn btn-primary" href="#Project1" onClick={() => handleClick(1)}>View</a>
        </article>
        <article className="portfolio_item" >
          <h3 href="#Project2" onClick={() => handleClick(2)}>ASOS Redesign</h3>
          <a className="btn btn-primary" href="#Project2" onClick={() => handleClick(2)}>View</a>
        </article>
        <article className="portfolio_item">
          <h3 href="#Project3" onClick={() => handleClick(3)}>Personal Design Projects</h3>
          <a className="btn btn-primary" href="#Project3" onClick={() => handleClick(3)}>View</a>
        </article>
      </div>
    </section>
  )
}
export default Portfolio

/* import React from 'react';
import './Portfolio.css';
import IMG1 from "../../Assets/IMG1.png";
import IMG2 from "../../Assets/IMG2.png";
import IMG3 from "../../Assets/IMG3.png";
import { Link } from 'react-router-dom';


const Portfolio = () => {

  return (
    <section id="Portfolio">
      <h3>My Recent Work</h3>
      <h2>Projects</h2>
      <div className="container portfolio_container">
          <div className="portfolißo_item portfolio_item-image">
              <Link to="#Project1"><img src={IMG1} alt=""/></Link>
          </div>
          <div className="portfolio_item portfolio_item-image">
            <Link to="#Project2"><img src={IMG2} alt=""/></Link>
          </div>
          <div className="portfolio_item portfolio_item-image">
          <Link to="#Project3"> <img src={IMG3} alt=""/></Link>
          </div>
      </div>
      <div className="container portfolio_container2">
        <article  className="portfolio_item">
          <h3>Homeless App 'Thy Neighbour'</h3>
          <Link to="/Project1"> <a href= "#Project1" className="btn btn-primary" >View</a></Link>
        </article>
        <article className="portfolio_item" >
          <h3>ASOS Redesign</h3>
          <Link to="/Project2"><a href= "#Project2" className="btn btn-primary">View</a></Link>
        </article>
        <article className="portfolio_item">
          <h3>Personal Design Projects</h3>
          <Link to="/Project3"><a href= "#Project3" className="btn btn-primary" >View</a></Link>
        </article>
      </div>
    </section>
  )
}
export default Portfolio */