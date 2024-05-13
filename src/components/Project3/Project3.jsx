import React from 'react';
import './Project3.css';

import IMG1 from "../../Assets/nhsresearch.png";


import MMP from "../../Assets/moodmonstersplan.jpeg";
import RETRO from "../../Assets/retrospective.png";
import SCRUM from "../../Assets/scrum:tickets.png";
import SCHEMA from "../../Assets/schema.png";
import FEEDBACK from "../../Assets/feedbackmm.jpeg";
import US from "../../Assets/userstoriesmm.png";
import UR1 from "../../Assets/userresearch.png";
import UR2 from "../../Assets/mmfeedback.png";
import FONTS from "../../Assets/fonts.png";
import COLOURS from "../../Assets/colours.png";
import RESPONSIVE1 from "../../Assets/loginresponsive1.png";
import RESPONSIVE3 from "../../Assets/loginresponsive2.png";
import RESPONSIVE2 from "../../Assets/loginresponsive3.png";
import MMTL from "../../Assets/monster-top-left.png";
import MMTR from "../../Assets/monster-top-right.png";
import MMML from "../../Assets/monster-two-thirds-left.png";
import MMMR from "../../Assets/monster-two-thirds-right.png";
import MMML2 from "../../Assets/monster-one-third-left.png";
import MMMR2 from "../../Assets/monster-one-third-right.png";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Swiper core and required modules
// import { Navigation, Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Project3() {
  return (
    <div className='Project3 page-wrapper position-relative'>

      <div class="col-lg-10 col-md-8 pb-5">
        <h1 class="monster-text text-content titles text-center"><span class="colour-6">Mood</span> <span class="colour-5">Monsters</span></h1>
        <img alt="" src={MMTL} class="monster-image top-left" />
      </div>


      <div className='Project3_brief'>
        <div className='brief'>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "0.9rem", color: "var(--color-primary)" }}>Brief: </b>
            Mood Monsters is an app which provides a safe space to guide young
            children to identify and acknowledge their moods, and provide
            them with coping strategies through play with the support of their
            nominated grown-up.
          </p>
          <p style={{ fontWeight: "bold", color: "var(--color-box)" }}>
            Our deliverables were a Homepage, a Child Dashboard and Grown-Up Dashboard and Child Mood Diary
          </p>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "0.9rem", color: "var(--color-primary)" }}>Aim: </b>
            Our app must be easy to navigate by adults and children. It should comply with UX methodologies
          </p>
        </div>
        {/* <video src={MMHP} className="homepagedemo" controls /> */}
      </div>


      <div className='nhsresearch_container'>

        <p>
          <b style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--color-primary)" }}>Issue:</b>
          Mental disorders are intrinsically linked to disturbances in mood. We decided to act for children aged
          6-8 and created a platform to guide them through their journey of emotional exploration
          to see if we could reduce this shocking figure. In our research we came across this:
          <img src={IMG1} alt="" className="nhsresearch" style={{ width: '60%', height: '50%', borderRadius: '10px' }} />
        </p>
      </div>
      <div className='page-wrapper position-relative'>
        <img src={MMML} alt="" class="monster-image one-third-left " />
        <img src={MMMR} alt="" class="monster-image one-third-right" />
      </div>
      <div className="plan" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h5 style={{ fontSize: "20px" }}>Our Planning</h5>
        <div style={{ maxWidth: '60%', textAlign: 'center', margin: '0 auto' }}>
          <b style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--color-primary)", display: 'block' }}>
            How we came up with the idea of Mood Monsters: </b>
          <span style={{ fontWeight: "350", color: "var(--color-box)" }}>
            From the start, we saw the potential capabilities of our app as being infinite.
            As we were building our user stories we saw many apps in one. Therefore,
            we knew we had to narrow it down more.
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '50px', paddingTop: '30px' }}>
        <div style={{ width: '80%', borderRadius: '50px' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ textAlign: 'center', backgroundColor: 'var(--colour-1)', fontWeight: 'bold', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>
              Wireframes
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Our Wireframe provided a visual representation of the layout, structure, and functionality for Mood Monsters.
                It gave us a simplified and abstract view of the interface, allowing us visualise the design
                concept early in our development process.
              </p>
              <img src={MMP} alt="" className="plan" style={{ width: '110%', height: 'auto', borderRadius: '10px', justifyContent: 'start' }} />
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ textAlign: 'center', backgroundColor: 'var(--colour-2)', fontWeight: 'bold' }}>
              User Stories
            </AccordionSummary>
            <AccordionDetails>
              <p>
                User Stories played a pivotal role in conceptualising our app and its user-centric benefits.
                During this phase, we recognised that our initial concept of creating a healthy routines app
                for children — encompassing mood tracking, sleep monitoring, and activity tracking — was overly broad.
                This realisation led us to understand the potential for multiple apps, especially given that we had
                distinct user stories for each aspect of the proposed app. User Stories served as a guiding light,
                helping us refine our ideas and maintain a sharp focus on the user experience throughout their
                journey within the app.
              </p>
              <img src={US} alt="" className="userstories" />
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ textAlign: 'center', backgroundColor: 'var(--colour-3)', fontWeight: 'bold' }}>
              Feedback
            </AccordionSummary>
            <AccordionDetails>
              <p>
                We undertook a significant responsibility, prioritising authenticity and respect in our offering.
                To achieve this, we engaged with parents, teachers, foster carers, and drew from our own experiences.
                This collaborative effort was integral during both the development phase and after the app's
                completion to ensure it resonated positively in the real world. We appreciate our users and
                incorporated their feedback into every iteration.
              </p>

              <div style={{ display: 'flex', flexDirection: 'row', margin: '0 auto', width: 'fit-content' }}>
                <img src={FEEDBACK} alt="" className="feedback" style={{ width: '18rem', borderRadius: '10px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src={UR2} alt="" className="feedback" style={{ width: '15rem', borderRadius: '10px' }} />
                  <img src={UR1} alt="" className="feedback" style={{ width: '40rem', borderRadius: '10px' }} />
                </div>
              </div>

            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ textAlign: 'center', backgroundColor: 'var(--colour-4)', fontWeight: 'bold' }}>
              Scrum Methodology
            </AccordionSummary>
            <AccordionDetails>
              <p>
                We fully embraced Agile methodologies throughout our project, dividing our work into five sprints with
                rotating Scrum Masters responsible for structuring our Scrum Meetings. Each sprint involved meticulous
                planning and the creation of a user story backlog in Trello, allowing us to break down tasks and assign t
                hem across HTML, SQL, and Python Flask development. Regular Sprint Reviews and Daily Stand-ups provided
                opportunities to showcase our progress, gather feedback, and refine our tasks. Our commitment to Agile
                practices was pivotal in the creation of Mood Monsters.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={SCRUM} alt="" className="scrumboard" style={{ width: '45%', height: 'auto', borderRadius: '10px' }} />
                <img src={RETRO} alt="" className="retrospective" style={{ width: '50%', height: 'auto', borderRadius: '10px' }} />
              </div>
              <p>
                The retrospective sessions enabled us to evaluate our teamwork dynamics. Utilising the "stop, continue, and start" approach, we pinpointed areas for improvement.
                When we recognised the necessity to cease excessive politeness, as it hindered open expression of opinions.
                This shift towards honesty allowed more effective communication and facilitated better decision-making, crucial
                for meeting project deadlines.
              </p>
              <p>
                Continuing with daily check-ins via WhatsApp, we maintained transparency regarding availability,
                objectives, and any challenges encountered. This practice fortified trust among team members,
                facilitating appropriate task allocation and seamless collaboration.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ textAlign: 'center', backgroundColor: 'var(--colour-5)', fontWeight: 'bold' }}>
              Database
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Incorporating new functionalities as we progressed posed its own set of challenges.
                Each time we introduced a new capability to the app, we found ourselves revisiting our database tables.
                This process highlighted the importance of the database in our project's success.
                The concept of normalization became a principle we deeply respected rather than disregarded.
                We learned the importance of thorough checks and balances with every functionality addition,
                ensuring that our changes didn't disrupt other areas of the app.
              </p>
              Our database, developed using MySQL, served as the foundation for our project it:
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  retrieved specific data in response to user requests or actions.
                  This enables apps to dynamically display relevant content to users.
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  helped us with inserting, updating, and deleting data. Mood Monsters used these capabilities
                  to modify data based on user input or application logic.
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  ensured data consistency and prevents conflicted when multiple users interact with the app simultaneously.
                </li>
              </ul>
              <h4 style={{ textAlign: 'center', color: 'var(--colour-5)' }}>
                Our Schema
              </h4>
              <img src={SCHEMA} alt="" className="SCHEMA" style={{ borderRadius: '10px' }} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ textAlign: 'center', backgroundColor: 'var(--colour-6)', fontWeight: 'bold', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }} >
              HTML, CSS and Bootstrap
            </AccordionSummary>
            <AccordionDetails>
              Our app was designed to be functional, responsive as well as engaging and
              intuitive for kids and their grown-up. We:

              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  used Bootstrap’s grid system with containers, breakpoints, and
                  columns to deliver a consistent experience across phones, tablets,
                  and desktop computers
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  integrated accordions for expandable content and used cards for presenting information, resulting in a clutter-free interface designed for easy navigation by children while also appealing to adults. Additionally, we incorporated creative design touches, such as using a wave shape generator to create separators for the page sections, adding a playful element specifically for children.

                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  used creative design through a wave shape generator to create separators
                  for the page sections, adding a playful touch for kids.
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  opted for an engaging colour palette by utilising Coolors to discover hues that mirror the various moods within our app. Our selection comprises vibrant and lively colours that appeal to children, while ensuring they are not overly bold so that adults can also appreciate the interface.
                </li>
              </ul>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <img src={FONTS} alt="" className="fontScheme" style={{ width: '50%', height: 'auto', borderRadius: '10px' }} />
                <img src={COLOURS} alt="" className="colourScheme" style={{ width: '48%', height: 'auto', borderRadius: '10px' }} />
              </div>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'flex' }}>
                  <span style={{ marginRight: '0.5em' }}>-</span>
                  encapsulated our app's border monsters within divs in our layout files, framing content to offer a visually stimulating experience. Through media queries, our design seamlessly adapts across devices. Mood Monsters text and images are optimized for clarity on various screens, with images hidden on smaller devices to maintain a clean layout. This integration of playful design with functional technology results in an app that appeals to children while remaining user-friendly for adults.
                </li>
              </ul>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={RESPONSIVE1} alt="" className="fontScheme" style={{ width: '40%', height: 'auto', borderRadius: '10px' }} />
                <img src={RESPONSIVE2} alt="" className="fontScheme" style={{ width: '20%', height: 'auto', borderRadius: '10px' }} />
                <img src={RESPONSIVE3} alt="" className="colourScheme" style={{ width: '25%', height: 'auto', borderRadius: '10px' }} />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div class="page-wrapper position-relative">
        <img src={MMTL} alt="" class="monster-image two-thirds-left " />
        <img src={MMTR} alt="" class="monster-image two-thirds-right" />

      </div>
      {/* <div className="mm-navigation">

        <h5>App Navigation</h5>
        <Swiper style={{ paddingBottom: '100px' }} pagination={true} navigation={true} modules={[Pagination, Navigation]} className='responses'>
          <SwiperSlide>
            <p>Registration & Login</p>
            <video src={MMRL} alt="" className="register_login_demo" style={{ width: "800px", borderRadius: '10px' }} controls />
          </SwiperSlide>
          <SwiperSlide>
            <p>Child Dashboard</p>
            <video src={MMCD} alt="" className="child_dashboard" style={{ width: "800px", borderRadius: '10px' }} controls />
          </SwiperSlide>
          <SwiperSlide>
            <p>Grown-Up Dashboard</p>
            <video src={MMGD} alt="" className="gu_dashboard" style={{ width: "800px", borderRadius: '10px' }} controls />
          </SwiperSlide>
        </Swiper>

      </div> */}
      <div class="page-wrapper position-relative">
        <img src={MMML2} alt="" class="monster-image three-thirds-left " />
        <img src={MMMR2} alt="" class="monster-image three-thirds-right" />

      </div>

    </div>

  )
}

export default Project3
