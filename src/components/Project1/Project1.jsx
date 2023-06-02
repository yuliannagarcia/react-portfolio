import React from 'react'
import './Project1.css';
import IMG1 from "../../Assets/IMG1.png"; 
import IMG2 from "../../Assets/thyneighbour.png";
import IMG3 from "../../Assets/Homelesslink.png";
import IMG4 from "../../Assets/competitoranalysis.png";
import IMG5 from "../../Assets/competitor4.png";
import IMG6 from "../../Assets/HAt.png";
import IMG7 from "../../Assets/RA.png";
import IMG8 from "../../Assets/Hat2.png";
import IMG14 from "../../Assets/cardsortinghp.png";
import IMG15 from "../../Assets/cardsortinghnvp.png";
import IMG17 from "../../Assets/C8H.png";
import IMG18 from "../../Assets/C8V.png";
import IMG19 from "../../Assets/C8hp.png";
import IMG20 from "../../Assets/lfhp3.png";
import IMG24 from "../../Assets/lfhp1.png";
import IMG25 from "../../Assets/lfvp1.png";
import IMG21 from "../../Assets/mfw.png";
import IMG22 from "../../Assets/hfw.png";
import myVideo from "../../Assets/video.mp4";
import IMG23 from "../../Assets/ideation4.png";
import IMG30 from "../../Assets/qah1.png";
import IMG31 from "../../Assets/qah2.png";
import IMG32 from "../../Assets/qah3.png";
import IMG33 from "../../Assets/qah4.png";
import IMG34 from "../../Assets/qah5.png";
import IMG35 from "../../Assets/Colourchecker2.png"
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Project1() {
  return (
    <section id='Project1' className='Project1'>
        <div className="container">
            <div className= "Project1_container">
                 <h2>
                    A Homeless App
                </h2> 
                
                <div className='Project1_brief'style={{ margin: 0, padding: 0, width: '100vw' }}>
                    <div className='brief'>
                        <img src={IMG2} alt="" className="neighbour_title_image"/>
                        <p className='task'>
                            <b style={{fontWeight: "bold", fontSize: "0.9rem", color:"var(--color-primary)"}}>Brief: </b> 
                            <span style={{fontWeight: "normal", color:"var(--color-box)"}}>
                                Create an app that aims to reduce pressures associated with homelessness. Propose a user journey that 
                                supports and educates users on relevant material that can support someone at risk of 
                                becoming homeless
                            </span> 
                        </p>
                        <p style={{fontWeight: "bold", color:"var(--color-box)"}}>
                            My deliverables are going to be an App homepage and two other screens
                        </p>
                        <p>
                        <b style={{fontWeight: "bold", fontSize: "0.9rem", color:"var(--color-primary)"}}>Problem statement:  </b> 
                        <span style={{fontWeight: "normal", color:"var(--color-box)"}}>
                            People who have just been released from care/prison/hospital etc, need  help in their local community to reduce the risk of becoming homeless.
                        </span>
                        </p>
                        
                        <p style={{fontWeight: "normal",color:"var(--color-box)"}}> 
                        <b style={{fontWeight: "bold", fontSize: "0.9rem", color:"var(--color-primary)"}}>Aim: </b>   
                             My app must be easy to navigate by all kinds of people; of different ages and needs e.g. disabilities. It should comply with UX methodologies 
                         </p>
                         </div>
                    <img src={IMG1} alt="" className="Project1_brief_img"/>
                </div>  

                                 <p style={{paddingTop:"3rem", marginLeft:"4rem", marginRight:"5rem"}}>
                                 <b style={{fontWeight: "bold", fontSize: ".9rem", color:"var(--color-box)", textDecorationLine: "underline", }}>Hypothesis: </b> 
                                 <span style={{fontWeight: "normal", color:"var(--color-box)", fontSize: ".9rem"}}>
                                         By implementing a fixed navigation bar at the bottom of the app, users will be able 
                                        to easily access and explore the app's features, resulting in a more intuitive user experience. 
                                        Unlike the hamburger menu, which can sometimes hide information and require users to go through 
                                        additional steps to find what they're looking for, a fixed navigation bar provides immediate 
                                        visibility and quick access to important functionalities such as emergency help or various ways 
                                        to support the homeless.
                                </span>
                                </p>

                                <p style={{fontWeight: "normal", color:"var(--color-box)", fontSize: ".9rem", marginLeft:"4rem", marginRight:"5rem"}}>
                                        Chunking information into smaller sections will improve usability of the app. Direct competitors like 
                                        Homeless Link and Refugees at Home lack clear separation between different types of information overwhelming readers. 
                                        By organising content into smaller, easily digestible sections, users will be able to navigate and 
                                        understand the app's offerings more efficiently.
                                </p>

                                <p style={{fontWeight: "normal", color:"var(--color-box)", fontSize: ".9rem", marginLeft:"4rem", marginRight:"5rem"}}>
                                        User journeys will be enhanced, ensuring clear CTAs, and making the app more accessible and usable for a wide range 
                                        of users, including those experiencing homelessness.
                                </p> 
                <div id= "research">
                            <h5 style={{textDecorationLine: "underline", textAlign: "center", color:"var(--color-primary)", fontSize:"1.5rem", letterSpacing:".2rem"}}> 
                                Research
                            </h5>
                    <div className='caf_container'>
                        <div className='caf_container2'>
                            <h5 style={{ textAlign: "center", color:"var(--color-box)", fontSize:"1.2rem"}}> 
                                Competitor Analysis
                            </h5>                  
                        <div className='caimages'>
                            <h4 style={{ textAlign: "center", color:"var(--color-box)", fontSize:".8rem"}}> 
                                    Competitor Analysis Table:
                            </h4>
                                    <img src={IMG4} alt="" className="competitoranalysis1_img"/>
                                    <img src={IMG5} alt="" className="competitoranalysis2_img"/>  
                        </div>
                        </div>
                        <div className='features' style={{paddingTop:"3rem", marginLeft:"15rem", marginRight:"15rem", fontSize:".8rem"}}>
                        <div className='cacontainer'>
                                    <h4 style={{textDecorationLine: "underline", textAlign: "center", color:"var(--color-box)", fontSize:".8rem"}}>
                                        Homeless Link Image -  Summary of factors leading to homelessness
                                    </h4>
                                    <img src={IMG3} alt="" className="Project1_homelessLink_image"/>
                                    <p>
                                            By incorporating certain features that my competitors have the app will offer a clear and comprehensive platform for users to engage, support, 
                                            and access information related to homelessness and the provided assistance.
                                    </p>
                                </div>
                                    
                                    <div className="containerfeature">
                                            My Competitor Analysis Reasearch showed me the essential features to be included in the app are as follows:
                                    <ol style={{paddingTop:"1rem", /* marginLeft:"9rem", marginRight:"9rem", */ fontSize:".8rem"}}>
                                        <li>
                                           A <b> clear</b> and <b>optional</b> <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}> User Profile Section</b> for individuals who want to be involved or provide 
                                            assistance. Users can personalise their experience within the app.
                                        </li>
                                        <li>
                                            An <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>About Us Section</b> that provides comprehensive background information about the organisation (the team behind it,
                                            their origins, and how they have evolved over time). Outlining the app's mission, values, 
                                            and objectives.
                                        </li>
                                        <li>
                                            A <b>simple</b> and <b>easily</b> navigable <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Homepage</b> that clearly communicates the purpose and essence 
                                            of the app. <b>Use clear call-to-action buttons to guide users to relevant sections and functionalities.</b>
                                        </li>
                                        <li>
                                            <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Getting Involved Options</b> such as offering various 
                                            volunteering roles, donation methods, past donation records, information on
                                            how donations are making a difference for the homeless, fundraising events and opportunities
                                            to support the cause.
                                        </li>
                                        <li>
                                            <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Emergency and non-emergency assistance </b>
                                            offering information and resources related to finding shelter, accessing accommodation, and connecting with 
                                            relevant support services.
                                        </li>
                                        <li>
                                            <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Clear Information Structure</b> with distinct sections, focusing on different groups of people 
                                            the app aims to help. Providing key information with <b>videos</b>, and clear <b>imagery</b> to make the constent more 
                                            accessible and visually engaging, catering to users who may struggle with reading or prefer visual materials.
                                        </li>
                                        <li>
                                            <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>News and Accomplishments</b> updates with success stories, and how it is positively 
                                            impacting the lives of homeless individuals. Including statistics or national news related to homelessness 
                                            to raise awareness.
                                        </li>
                                        <li>
                                           <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Live Chat and Contact Us </b> to provide immediate assistance and facilitate 
                                            communication between users and support staff. A dedicated "Contact Us" section with clear instructions 
                                            on how users can reach out for further help or inquiries.
                                        </li>
                                        <li>
                                            Easily accessible <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Emergency Help</b> within the app. With resources for emotional, 
                                            mental, and physical support, relevant helpline numbers.
                                        </li>
                                        <li>
                                            <b style={{fontWeight: "bold", fontSize: "0.8rem", color:"var(--color-primary)"}}>Directions and Map Views</b> to locate essential services (food 
                                            banks, hygiene services, shelters, and youth centers). With filtering options to allow users to narrow down 
                                            their search based on specific needs or preferences.
                                        </li>
                                    </ol>   
                                </div>
                        </div>
                        
                    </div>
            

                    <div className='red_route_analysis'>
                        <h5>
                            Red Route Analysis
                        </h5>
                        <h4>
                            The most important to least important pages on my app (1 being most & 5 being the least).
                        </h4>
                        <div className='pcontainer'>
                            <img src={IMG8} alt="" className="participants"/>
                            <div className= "RRA_container">
                            <img src={IMG6} alt="" className="participants_data"/>
                            <img src={IMG7} alt="" className="red_route_table"/>
                            </div>
                                <p>
                                    My red route analysis research showed a widespread 
                                    lack of awareness regarding ways to alleviate the pressures of homelessness. I included participants 
                                    from diverse age groups and genders for a comprehensive understanding of user needs and preference.
                                </p>

                                <p>
                                    An important finding was that all participants unanimously agreed that accessing the 
                                    help page should be the primary focus of the app. This was not only to assist those 
                                    seeking support but also to provide a platform for people in need to easily find the 
                                    necessary assistance.
                                </p>

                                <p>
                                    Volunteering was also highlighted as a crucial aspect by the participants. One individual 
                                    expressed that contributing time and effort to help others is a meaningful way to make a 
                                    difference, particularly for those who may not be in a position to offer financial support. 
                                    Another participant emphasized the importance of certain pages over others, suggesting that 
                                    while all pages are significant, those directly aimed at reducing the impact of homelessness 
                                    should take priority. As a result, I decided to include an access to help page and a 
                                    volunteering page as key features alongside the homepage.
                                </p>

                                <p> 
                                    Furthermore, feedback from participants underscored the importance of inclusivity in helping 
                                    reduce the risk of homelessness. This led me to conclude that language options should be available 
                                    within the app to cater to diverse user groups. Two participants specifically mentioned their 
                                    preference for Spanish over English, highlighting the need for multilingual support. Additionally, 
                                    one participant mentioned difficulties in processing information and emphasized the significance of 
                                    incorporating images and videos to facilitate better comprehension and navigation within the app. 
                                    Another participant suggested the inclusion of a map feature to provide directions and instructions 
                                    on accessing help or volunteering locations.
                                </p>

                                <p>
                                    In summary, based on the insights gained from the red route analysis, the app will prioritise an 
                                    accessible help page, a volunteering page, and multilingual support. Incorporating visual aids, such 
                                    as images and videos, will enhance user experience and comprehension. Furthermore, the inclusion of a 
                                    map feature will assist users in finding locations for assistance and volunteering opportunities. 
                                    These findings will guide the next phase of research, focusing on further understanding the specific 
                                    content and functionalities desired within the help and volunteering pages.
                                </p>
                                </div>
                    </div>

                                            
            <div className= "Survey_container">
                        <h5>Questionaire Responses</h5>
            <Swiper pagination={true} navigation ={true} modules={[Pagination, Navigation]} className='responses'>
                        <SwiperSlide><img src={IMG30} alt="" className="Response1"/></SwiperSlide>
                        <SwiperSlide><img src={IMG31} alt="" className="Response2"/></SwiperSlide>
                        <SwiperSlide><img src={IMG32} alt="" className="Response3"/></SwiperSlide>
                        <SwiperSlide><img src={IMG33} alt="" className="Response4"/></SwiperSlide>
                        <SwiperSlide><img src={IMG34} alt="" className="Response5"/></SwiperSlide>
            </Swiper>
            </div>   
            <div className='finding'>          
                    <h5 style={{ textDecorationLine:"underline", textAlign: "center", color:"var(--color-primary)", fontSize:"1.2rem"}}>
                        Findings
                    </h5>
                    <p style={{padding:"00% 20% 0% 20%"}}>   
                             In an app aimed at addressing the pressures associated with homelessness, the research 
                             phase has provided insights into the content and features for each page. The following 
                             are the general ideas for what each page should include: 
                    </p>
                    <ol style={{padding:"00% 20% 0% 20%"}}>
                            <li>
                                    <b style={{color:"var(--color-primary)"}}>Volunteering Page:</b>
                                    <ul>
                                        <li>
                                            Sort and filter options for users to access volunteering roles best suited 
                                            to their preferences, such as sorting by location, availability (e.g., Monday 
                                            evenings), and requirements (e.g., DBS checks, food and hygiene certificates).
                                        </li>
                                        <li>
                                            Contact information for the centers or organizations being supported, detailing 
                                            the roles volunteers would have, the specific populations they would be helping, 
                                            and how their participation would make a difference.
                                        </li>
                                        <li>
                                            Testimonials from volunteers sharing their experiences.
                                        </li>
                                        <li>
                                            General form for volunteering inquiries and questions.
                                        </li>
                                    </ul>
                            </li>
                            <li> 
                                        <b style={{color:"var(--color-primary)"}}>Help Page:</b>
                                    <ul>
                                        <li>
                                                Divided into smaller subcategories based on different groups at risk of homelessness 
                                                (e.g., elderly, youth, domestic abuse victims, addicts, ex-convicts, single parents, 
                                                refugees, etc.).
                                        </li>
                                        <li>
                                                Access to emergency helplines and resources specific to each subcategory (e.g., police, 
                                                first aid, mental health support).
                                        </li>
                                        <li>
                                                Information on accessing suitable accommodations.
                                        </li>
                                        <li>
                                                Details on hygiene access locations, shelter options, and their respective locations.
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                         <b style={{color:"var(--color-primary)"}}>Donation Page:</b>
                                     <ul>
                                        <li>
                                                Explanation of the importance of donating and providing updates on where the donations 
                                                are being utilised (e.g., through email notifications or direct message sign-ups).
                                                Options for different types of donations, such as one-time or regular contributions.
                                        </li>
                                        <li>        
                                                Various payment methods, including direct debit, credit cards, and cheques.
                                        </li>
                                        <li>      
                                                Links to other ways to contribute within the app.
                                        </li>     
                                        <li>   
                                                Testimonial page featuring stories of individuals who have been helped by the app, 
                                                divided into sections highlighting their progress and the assistance provided.
                                        </li>
                                     </ul>
                            </li>
                            <li>
                                            <b style={{color:"var(--color-primary)"}}>Magazine or News Page:</b>.
                                        <ul>
                                            <li>
                                                 This page serves as a platform for informing users about the latest issues 
                                                 related to homelessness.
                                            </li>
                                            <li>
                                                Provide links and resources on how users can actively support efforts to combat 
                                                homelessness and make a difference in their communities.
                                            </li>
                                        </ul>
                            </li>
                    </ol>
                    </div>
                    <div className= "Card_sorting">
                    <div className= "Card_sorting1">
                    <h5 style={{ marginTop:"4rem", textDecorationLine:"underline", textAlign: "center", color:"var(--color-box", fontSize:"1.2rem"}}>
                        Card Sorting
                    </h5>
                        <p style={{ textAlign: "center", color:"var(--color-box)", fontSize:".8rem"}}>
                            After conducting a card sorting activity with my family members, I have gained insights 
                            on how to organise the information for the home, volunteering, and access to help pages, 
                            which were identified as the key focus areas from the red route analysis. Based on the 
                            results, I have reorganised the information as follows:
                        </p>
                    </div>
                    <div className= "Card_sorting2">
                                <img src={IMG14} alt="" className="card_sorting_image1"/>
                                <img src={IMG15} alt="" className="card_sorting_image2"/>
                    </div>
                    </div>
                    <div className= "Crazy8">
                    <h5>
                        Crazy 8's
                    </h5>


                <div className= "ideation_container">
                    <img src={IMG17} alt="" className="homepage"/>
                    <img src={IMG18} alt="" className="volunteer"/>
                    <img src={IMG19} alt="" className="help"/>
                </div>
                </div>           
                <div className= "lowfidelitywireframe_container">
                    <h5>
                        Low-Fidelity Wireframes
                    </h5>
                        <p>
                            By using these low fidelity wireframes as a foundation, I can ensure that the final design will 
                            exhibit a cohesive visual identity. This approach simplifies the development process, as I can 
                            reuse design components and establish consistent interaction patterns, ultimately resulting in 
                            a more user-friendly and aesthetically pleasing app.
                        </p>         
                    <img src={IMG20} alt="" className="lowfidelitywireframe_image1"/>
                <div className= "lowfidelitywireframe_container2">
                            <img src={IMG24} alt="" className="lowfidelitywireframe_image2"/>
                            <img src={IMG25} alt="" className="lowfidelitywireframe_image3"/>
                </div>
                <p>
                            To provide a consistent and user-friendly experience, my app will maintain the same 
                            layout and style across its different pages. This approach ensures that users can easily 
                            navigate and interact with the app without confusion. To achieve this consistency, 
                            I have created low fidelity wireframes for the home, volunteering, and help pages, 
                            which share the same overall design but have different content.
                        </p>
                        <p>
                            By adopting a consistent layout and style, users will quickly become familiar with the app's 
                            interface, allowing them to navigate through various sections seamlessly. This uniformity 
                            also facilitates user understanding and reduces the learning curve as they transition between 
                            different pages.
                        </p>
                        <p>
                            While the content may vary on each page, the shared design elements will provide a sense of 
                            continuity and familiarity. Users will appreciate the predictability and find it easier to 
                            locate relevant information or perform desired actions across different sections of the app.
                        </p>
                </div>
                                
                <div className= "midfidelitywireframe_container">
                    <h5>
                        Mid-Fidelity Wireframes
                    </h5>
                    <h4>
                        <p>
                            After my Low Fidelity wireframes, I turned my idea into a more visual 
                            approach to get opinions on what users would think of the app design.
                        </p>
                    </h4>       
                    <img src={IMG21} alt="" className="Project1_image21"/>
                </div>
                
                <div className= "highfidelitywireframe_container">
                    <h5>
                            High-Fidelity Wireframes
                    </h5>
                        <p> 
                            Bringing my Mid Fidelity wireframes to life after getting feedback from 
                            my reasearch users.
                        </p>
                    <img src={IMG22} alt="" className="Project1_image22"/>
                </div>
                    <div className= "uiphase_container">
                     <h5 style={{ marginTop:"4rem", textDecorationLine:"underline", textAlign: "center", color:"var(--color-primary)", fontSize:"1.2rem"}}>
                            UI Phase
                    </h5>
                    <div style={{ display:"grid", gridTemplateColumns:"40%60%", gap:"0rem"}}>
                                <img src={IMG35} alt="" className="Colourchecker"/>
                                <div>
                                        <p>
                                            Thy Neighbour follows not only the Web Content Accessibility Guidelines 
                                            (WCAG) and user interface (UI) laws but also takes into account the principles 
                                            of Hick's Law to create an inclusive and user-friendly experience. By considering 
                                            the Hick's Law, we have carefully optimized the decision-making process for users, 
                                            minimizing cognitive load and enhancing efficiency.
                                        </p>
                                        <p>
                                            In terms of WCAG compliance, we have implemented features like alternative text 
                                            for images, ensuring that visually impaired users can access descriptive information.
                                            Additionally, we have prioritized a clear and consistent navigation structure, 
                                            reducing the number of choices presented at any given time. This aligns with Hick's 
                                            Law, as it helps users make decisions more swiftly by minimizing the cognitive effort 
                                            required.
                                        </p>  
                                        <p>
                                            To meet UI laws, we have paid special attention to color contrast. By employing color 
                                            checkers and adhering to the recommended contrast ratios, we ensure that the text and 
                                            background colors provide sufficient differentiation. This promotes legibility and 
                                            accessibility for individuals with visual impairments. Furthermore, we have designed 
                                            resizable text options to accommodate users who may require larger or smaller text sizes 
                                            for optimal readability.
                                        </p>
                                </div>
                    </div> 
                    <div style={{display:"grid", gridTemplateColumns:"60%40%", gap:"0rem", alignItems:"center" }}>
                    <p style={{marginTop:"2rem"}}>
                        Throughout the design process, we have conducted extensive user testing and gathered 
                        feedback from diverse user groups. This approach ensures that our app meets the needs and 
                        preferences of all users, regardless of their abilities or limitations. By adhering to both 
                        WCAG and UI laws, while considering Hick's Law, our homeless app delivers an inclusive digital 
                        experience. It promotes accessibility, minimizes decision-making barriers, and provides equal 
                        access to vital resources for individuals experiencing homelessness.
                    </p>   
                    <img src={IMG23} alt="" className="Ideationphases" style={{width:"50%", height:"auto", borderRadius:"1rem"}}/>
                    </div>        
                    </div>                
            <div className='conclusion'>
                    <div >
                        <p style={{ textAlign: 'center', textDecorationLine:"underline"}}>A Video of my Prototype</p>
                        <video className="video1"src={myVideo} width="640" height="360" controls/>
                        <h4 style={{ textAlign: 'center', textDecorationLine:"underline", textSize:"1.2rem", color:"var(--color-primary)"}}>
                            Conclusion
                        </h4>
                        <p>
                            In conclusion, my UX design project on creating a homeless ad has been successful in many ways. The ad was 
                            able to effectively communicate the message and raise awareness about homelessness, ultimately achieving 
                            its intended purpose. The user experience was carefully considered, resulting in a design that was intuitive,
                            accessible, and engaging for the target audience.
                        </p>
                        <p>
                            However, it is important to acknowledge that the project could have been even more successful with the assistance 
                            of a dedicated team knowledgeable in UX design. Collaborating with experts in the field would have allowed for 
                            valuable insights and perspectives, enabling more informed decisions throughout the design process. Consulting 
                            with a UX design team would have helped identify potential usability issues, optimize user flows, and ensure
                            that the final product truly met the needs and expectations of the users.
                        </p>
                        <p>
                            Furthermore, having more resources available for conducting wider research would have greatly enhanced the 
                            project's effectiveness. A comprehensive research phase could have provided valuable insights into the specific 
                            needs and challenges faced by homeless individuals, allowing for a more tailored and impactful design. It could 
                            have involved conducting user interviews, observations, and usability testing to gather user feedback and refine 
                            the design based on real-world insights.
                        </p>
                        <p>
                            Despite these limitations, the success of the project highlights the importance of UX design in creating meaningful 
                            and impactful experiences. It also serves as a valuable learning experience, emphasizing the significance of 
                            collaboration, expertise, and adequate resources in achieving the best possible outcomes. Moving forward, these 
                            lessons can be applied to future projects, ensuring a more comprehensive and effective UX design process.
                        </p>
                    </div>
            </div>
              
              </div>
            </div>
        </div>
    </section>
       
       
  )
}

export default Project1;