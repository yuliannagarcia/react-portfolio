import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import IMG1 from "../../Assets/IMG1.png";
import IMG2 from "../../Assets/IMG2.png";
import IMG3 from "../../Assets/IMG3.png";
import IMG4 from "../../Assets/IMG4.png";

const Portfolio = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section id="Portfolio" className='Portfolio'>
      <h3>Get to know</h3>
      <h2>My Projects</h2>
      <div className="container portfolio_container">
        <div className="portfolio_item">
          <Link to="/Project1" onClick={scrollToTop}>
            <div className="portfolio_item_image_container">
              <img className="portfolio_item-image portfolio_item_vertical-image" src={IMG1} alt="" />
            </div>
          </Link>
          <article className="">
            <h3><Link to="/Project1" onClick={scrollToTop}>Thy Neighbour App</Link></h3>
            {/* <Link className="btn btn-primary portfolio-btn" to="/Project1" onClick={scrollToTop}>View</Link> */}
          </article>
        </div>
        <div className="portfolio_item">
          <Link to="/Project2" onClick={scrollToTop}>
            <div className="portfolio_item_image_container">
              <img className="portfolio_item-image portfolio_item_horizontal-image" src={IMG2} alt="" />
            </div>
          </Link>
          <article className="">
            <h3><Link to="/Project2" onClick={scrollToTop}>ASOS Redesign</Link></h3>
            {/* <Link className="btn btn-primary portfolio-btn" to="/Project2" onClick={scrollToTop}>View</Link> */}
          </article>
        </div>
        <div className="portfolio_item">
          <Link to="/Project3" onClick={scrollToTop}>
            <div className="portfolio_item_image_container">
              <img className="portfolio_item-image portfolio_item_horizontal-image" src={IMG3} alt="" />
            </div>
          </Link>
          <article className="">
            <h3><Link to="/Project3" onClick={scrollToTop}>Mood Monsters</Link></h3>
            {/* <Link className="btn btn-primary portfolio-btn" to="/Project3" onClick={scrollToTop}>View</Link> */}
          </article>
        </div>
        <div className="portfolio_item">
          <Link to="/Project4" onClick={scrollToTop}>
            <div className="portfolio_item_image_container">
              <img className="portfolio_item-image portfolio_item_vertical-image" src={IMG4} alt="" />
            </div>
          </Link>
          <article className="">
            <h3><Link to="/Project4" onClick={scrollToTop}>Personal Design Projects</Link></h3>
            {/* <Link className="btn btn-primary portfolio-btn" to="/Project4" onClick={scrollToTop}>View</Link> */}
          </article>
        </div>
      </div>
    </section>
  )
}
export default Portfolio;
