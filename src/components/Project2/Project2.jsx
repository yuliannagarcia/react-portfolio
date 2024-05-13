import React from 'react'
import './Project2.css';
import IMG1 from "../../Assets/ASOS.png";
import IMG2 from "../../Assets/phone.png";
import IMG3 from "../../Assets/reviewresearch.png";
import IMG4 from "../../Assets/ca23.png";
import IMG5 from "../../Assets/CAScreenshot1.png";
import IMG6 from "../../Assets/CAScreenshot2.png";
import IMG7 from "../../Assets/CAScreenshot3.png";
import IMG8 from "../../Assets/CAScreenshot4.png";
import IMG9 from "../../Assets/participantinfo.png";
import IMG10 from "../../Assets/RedAnalysis1.png";
import IMG11 from "../../Assets/review1.png";
import IMG12 from "../../Assets/review2.png";
import IMG14 from "../../Assets/review3.png";
import IMG15 from "../../Assets/crazy8sp2.png";
import IMG17 from "../../Assets/mindmapping2.png";
import IMG18 from "../../Assets/hlfwp2.png";
import IMG19 from "../../Assets/slfw.png";
import IMG20 from "../../Assets/plfw.png";
import IMG21 from "../../Assets/hmfw.png";
import IMG22 from "../../Assets/spmfw.png";
import IMG23 from "../../Assets/pmfw.png";
import myVideop2 from "../../Assets/asoswebvid.mp4";
import myVideop3 from "../../Assets/asosappvid.mp4";
import IMG24 from "../../Assets/Colourchecker.png";
import IMG25 from "../../Assets/ideation3.png";
import IMG26 from "../../Assets/ideation2.png";
import IMG40 from "../../Assets/qa1.png";
import IMG41 from "../../Assets/qa2.png";
import IMG42 from "../../Assets/qa3.png";
import IMG43 from "../../Assets/qa4.png";
import IMG44 from "../../Assets/qa5.png";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Project2() {
        return (
                <section id="Project2" className='Project2'>
                        <div className="container">
                                <img src={IMG1} alt="" className="asos_logo" />
                                <div className='Project2_container'>
                                        <h2>
                                                App and Website
                                        </h2>
                                        <div className="Project2_brief">
                                                <div className="Project2_briefText">
                                                        <div className='Task'>
                                                                <b style={{ fontWeight: "bold", fontSize: "20px", color: "var(--color-primary)" }}>
                                                                        Task:
                                                                </b>
                                                                <span style={{ fontWeight: "normal", fontSize: "px", color: "var(--color-box)", paddingLeft: "5rem" }}>
                                                                        Identify 5 problem areas within the website journey. As a UX/UI designer use design thinking to solve these problems and demonstrate your ability in responsive design.
                                                                </span>
                                                        </div >
                                                        <div className='Aims'>
                                                                <h4>
                                                                        <b style={{ fontWeight: "bold", fontSize: "20px", color: "var(--color-primary)" }}>
                                                                                Aims:
                                                                        </b>
                                                                </h4>
                                                                <ul style={{ fontWeight: "normal", fontSize: "15px", color: "var(--color-box)", paddingLeft: "8rem", paddingTop: "1rem" }}>
                                                                        <li>
                                                                                To create a functional ECommerce
                                                                                platform that complies with UX methodologies
                                                                        </li>
                                                                        <li>
                                                                                To make user journey in searching for a product
                                                                                is as easy and swift as possible
                                                                        </li>
                                                                        <li>
                                                                                For users to view clothes details in depth, where
                                                                                there's less need for customers enquiries
                                                                        </li>
                                                                        <li>
                                                                                Increase ASOS sales through referrals, social media
                                                                                platforms etc where users are aware of any promos, clearance
                                                                                deals, products and delivery schedules
                                                                        </li>
                                                                        <li>
                                                                                Show product variation clearly with as little user journeys
                                                                                as possible
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                                <img src={IMG2} alt="" className="Project2_image2" />
                                        </div>
                                        <div className='theproblem_research_container'>
                                                <div className='theproblem'>
                                                        <h3>
                                                                The Problem Statement
                                                        </h3>
                                                        <span style={{ fontWeight: "normal", fontSize: "15px", display: "block", textAlign: "center", color: "var(--color-box)" }}>
                                                                “ASOS sometimes looks all over the place.
                                                                There's too much going on it just confusing sometimes and makes me dread
                                                                browsing through it.”
                                                        </span>
                                                        <div className='problem'>
                                                                <h4>
                                                                        <b style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                                                Problems:
                                                                        </b>
                                                                </h4>
                                                                <ul>
                                                                        <li>
                                                                                Can only filter at the start of the search
                                                                        </li>
                                                                        <li>
                                                                                No different colour options available when you click a product
                                                                        </li>
                                                                        <li>
                                                                                Items are removed from the basket after 60 minutes
                                                                        </li>
                                                                        <li>
                                                                                Must have an account to access it
                                                                        </li>
                                                                        <li>
                                                                                Homepage doesn't have clear CTA’s (no menu in header)
                                                                        </li>
                                                                        <li>
                                                                                Problems when navigating through the FAQ section
                                                                        </li>
                                                                        <li>
                                                                                No reviews available (less product information available)
                                                                        </li>
                                                                        <li>
                                                                                Customer service issues with discount, ‘T&C’ and constant order
                                                                                problems and extra charges
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                                <div className='Research'>
                                                        <h3>
                                                                Research
                                                        </h3>
                                                        <p>
                                                                The Fashion industry is the biggest E-commerce sector in the world
                                                                with a global market of $759.5 billion in 2021 compared to in 2018
                                                                which was $481 billion and is constantly on the rise. This is due
                                                                to the rise in people purchasing clothes online since Covid.
                                                        </p>
                                                        <p>
                                                                ASOS was founded in 2000 and is a B2C (Business to Customer). It
                                                                stands for ‘As Seen On Screen’, its a Global fashion e-commerce platform
                                                                made in UK with over 85,000 product lines. With a revenue of 3.91 billion
                                                                GBP In 2021 and 3.017 employees who are also users, to grove the best service
                                                                to all 196 countries in the world. Their main focus is for people to express
                                                                themselves without judgment and give confidence to people all over the world.
                                                                Their target audience are said to be people in their ‘20 something’. They
                                                                also sell accessories and skin care.
                                                        </p>
                                                </div>
                                        </div>
                                        <div className='Competitor_analysiscontainer'>
                                                <h3>
                                                        Competitor Analysis
                                                </h3>
                                                <div className='Competitor_analysiscontainer1'>
                                                        <div className='Competitor_analysis1'>
                                                                <ul>
                                                                        <p>
                                                                                Competitor analysis is a UX research method used to
                                                                        </p>
                                                                        <li>
                                                                                Help solve usability problems
                                                                        </li>
                                                                        <li>
                                                                                See where in a market companies service or product lies
                                                                        </li>
                                                                        <li>
                                                                                Help make informed decisions in the design process
                                                                        </li>
                                                                        <li>
                                                                                See the strengths and weaknesses of you direct and indirect
                                                                                competitor
                                                                        </li>
                                                                        <li>
                                                                                Have back up evidence when making product or service changes
                                                                        </li>
                                                                        <li>
                                                                                Find your target market
                                                                        </li>
                                                                </ul>
                                                                <p>
                                                                        If I Want to make any iteration I need to have evidence and research to back it up.
                                                                </p>
                                                        </div>
                                                        <div className='Competitor_analysis2'>
                                                                <p>
                                                                        My aim was to see what made the competitors differ from ASOS and
                                                                        how I Could improve the ASOS’ app and website to make the user
                                                                        journey is more pleasing and smooth and help customers reach what
                                                                        they need with less frustrations.
                                                                </p>
                                                                <p>
                                                                        I have done this by discovering/improving features, that the
                                                                        competitors have that ASOS doesn’t, which can improve their Sales/Customer
                                                                        attraction.
                                                                </p>
                                                                <p>
                                                                        My research also showed other competitors interface had something ASOS did not which
                                                                        was a clear homepage menu and product reviews. With unclear CTA. 24% of ASOS
                                                                        trustPilot rating are bad. Most are due to inaccuracy/unclear information and wanting
                                                                        to give product reviews yet not being able to.
                                                                </p>
                                                        </div>
                                                </div>
                                                <img src={IMG3} alt="" className="reviewsimg" />
                                                <h4>
                                                        ASOS direct competitors are Pretty Little Thing, Boohoo and SHEIN they are all Fashion
                                                        eCommerce that have the same endpoint which is to sell online clothes. My research showed
                                                        although competitors have similar features how the features are shown and presented to
                                                        customers matters and makes the features effective.
                                                </h4>
                                                <h4>
                                                        Amazon is an Indirect competitor as its an eCommerce that has many similar features and user
                                                        journeys as ASOS but just sell different products.
                                                </h4>
                                                <img src={IMG4} alt="" className="cat_image1" />

                                                <h3>
                                                        Screenshots of the competitors UX capabilities compared to ASOS:
                                                </h3>
                                                <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className='caimages'>
                                                        <SwiperSlide><img src={IMG5} alt="" className="ca1_image" /></SwiperSlide>
                                                        <SwiperSlide><img src={IMG6} alt="" className="ca2_image" /></SwiperSlide>
                                                        <SwiperSlide><img src={IMG7} alt="" className="ca3_image" /></SwiperSlide>
                                                        <SwiperSlide><img src={IMG8} alt="" className="ca4_image" /></SwiperSlide>
                                                </Swiper>
                                        </div>
                                        <div className='Red_route_analysis'>
                                                <h3 style={{/*fontFamily:"'Big Caslon', sans-serif",*/ fontWeight: "normal", fontSize: "1.3rem", color: "var(--color-box)", paddingTop: "2rem", paddingBottom: "1rem", textAlign: "center", textDecoration: "underline" }}>
                                                        Red Route Analysis:
                                                </h3>
                                                <div className='participant_info_container'>
                                                        {/*  <h3 style={{fontWeight: "bold", fontSize: "1rem", color:"var(--color-primary)",paddingTop:"4rem"}}>
                                                        Red Route Analysis:
                                                </h3> */}
                                                        <p style={{ fontWeight: "normal", fontSize: "0.8rem", color: "var(--color-box)" }}>
                                                                A red route analysis helped me visually see what features users find most to least important in their
                                                                user journey when purchasing a product to make their online shopping experience swift. Again it backs
                                                                up my reasoning for iterations to the ASOS app and website. For my user research i had a total of 12
                                                                Participants who ranked what they thought was most to lest important on a website, this helped me analyse
                                                                what page pain points i will focus on.
                                                        </p>
                                                        <div className='redroute_card'>
                                                                <img src={IMG9} alt="" className="participant_info" />
                                                                <img src={IMG10} alt="" className="redroute" />
                                                        </div>
                                                </div>
                                                <div className='fdnra'>
                                                        <div className='further_details'>
                                                                <h3 style={{ fontWeight: "normal", fontSize: "0.8rem", color: "var(--color-box)" }}>
                                                                        Further details given to participants for red route analysis stating which features I will be analysing on each page:
                                                                </h3>
                                                                <ul style={{ fontWeight: "normal", fontSize: "0.8rem", color: "var(--color-box)" }}>
                                                                        <li>
                                                                                Shipment, delivery and return data (Order Tracking )
                                                                        </li>
                                                                        <li>
                                                                                A clean appearance and style of the website
                                                                        </li>
                                                                        <li>
                                                                                Easy and simple Navigation system
                                                                        </li>
                                                                        <li>
                                                                                Product filtering and sorting
                                                                        </li>
                                                                        <li>
                                                                                Easy Account access / sign up page
                                                                        </li>
                                                                        <li>
                                                                                Customer service section
                                                                        </li>
                                                                        <li>
                                                                                Effective Search
                                                                        </li>
                                                                        <li>
                                                                                Wishlist
                                                                        </li>
                                                                        <li>
                                                                                Special offers and discount
                                                                        </li>
                                                                        <li>
                                                                                Buyer friendly Shopping cart
                                                                        </li>
                                                                        <li>
                                                                                Easy and manageable checkout (multiple payment options)
                                                                        </li>
                                                                        <li>
                                                                                Clear policies t&c
                                                                        </li>
                                                                        <li>
                                                                                Customer rating and reviews
                                                                        </li>
                                                                        <li>
                                                                                Extensive Product information
                                                                        </li>
                                                                </ul>

                                                        </div>
                                                        <div className='reviewbox'>
                                                                <h3 className='review1_title' style={{ fontWeight: "normal", fontSize: "0.8rem", color: "var(--color-box)" }}>
                                                                        Some participant feedback on as to why they made their choices for my red
                                                                        route analysis:
                                                                </h3>
                                                                <div className='reviewc1'>
                                                                        <img src={IMG11} alt="" className="review" />
                                                                        <img src={IMG12} alt="" className="review2" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div>
                                        <div className='InterviewsandSurveys'>
                                                <div className='mainsurvey'>
                                                        <h3 style={{ textDecorationLine: "underline", textAlign: "center", marginLeft: "-10rem", color: "var(--color-primary)", fontSize: "1.2rem" }}>
                                                                Survey & Responses
                                                        </h3>
                                                        <div className="grid-container">
                                                                <div className="list-container">
                                                                        <ol>
                                                                                <li>
                                                                                        Have you shopped at ASOS before? If so, how often have
                                                                                        you shopped there?
                                                                                </li>
                                                                                <li>
                                                                                        Have you shopped on amazon? If so, do you look at product
                                                                                        descriptions, reviews and FAQs when picking a product?
                                                                                </li>
                                                                                <li>
                                                                                        What are key features that make searching and deciding
                                                                                        what product you want easier?
                                                                                </li>
                                                                                <li>
                                                                                        How do you usually access websites for online shopping?
                                                                                </li>
                                                                                <li>
                                                                                        What makes navigating through a website easier for you?
                                                                                </li>
                                                                                <li>
                                                                                        When you enter a website, what's the first thing you do when at the homepage?
                                                                                        (How do you like categories of products to be shown to you?)
                                                                                </li>
                                                                                <li>
                                                                                        Describe your experience when shopping for clothes online.
                                                                                </li>
                                                                                <li>
                                                                                        Do you think search refine options are necessary?
                                                                                        (If so how often do you use them?)
                                                                                </li>
                                                                                <li>
                                                                                        Do you like to see how product look in different versions? (i.e. Different
                                                                                        colours, forms Picture videos)
                                                                                </li>
                                                                                <li>
                                                                                        What negative experiences have you had when shopping online?
                                                                                </li>
                                                                                <li>
                                                                                        Do you like to know the price and any discounts, promotions etc. from the
                                                                                        start of your shopping or do you prefer to just see it at the end of the
                                                                                        checkout?
                                                                                </li>
                                                                                <li>
                                                                                        Do you think it's necessary to be able customer support at any given time when
                                                                                        shopping online? E.g. Email, Call, Live Chat, Reviews, T&C’s and FAQS Order details
                                                                                        information.
                                                                                </li>
                                                                        </ol>
                                                                </div>

                                                                <div className="swiper-container">
                                                                        <h3 style={{ textDecorationLine: "underline" }}>
                                                                                Some responses from my participants on google forms:
                                                                        </h3>
                                                                        <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} style={{ width: "600px", height: "350px", itemAlign: "center" }}>
                                                                                <SwiperSlide><img src={IMG40} alt="" className="surveyresponse1" /></SwiperSlide>
                                                                                <SwiperSlide><img src={IMG41} alt="" className="surveyresponse2" /></SwiperSlide>
                                                                                <SwiperSlide><img src={IMG42} alt="" className="surveyresponse3" /></SwiperSlide>
                                                                                <SwiperSlide><img src={IMG43} alt="" className="surveyresponse4" /></SwiperSlide>
                                                                                <SwiperSlide><img src={IMG44} alt="" className="surveyresponse5" /></SwiperSlide>
                                                                        </Swiper>
                                                                </div>
                                                        </div>
                                                </div>
                                                <p>
                                                        Through my research, I found that while not everyone had prior experience with ASOS, they were
                                                        familiar with the overall concept of online shopping. One significant discovery was the crucial
                                                        role of product reviews in the decision-making process when shopping online. Users emphasized the
                                                        value of accessing feedback from other customers to evaluate product quality and suitability.
                                                </p>
                                                <p>
                                                        The research underscored the importance of incorporating product reviews, implementing effective
                                                        filtering mechanisms, and ensuring clear and easily accessible information throughout the online
                                                        shopping experience. These elements play a vital role in building trust, enabling informed decision-making,
                                                        and minimizing the need for immediate customer service support.
                                                </p>
                                                <div className='reviewc2'>
                                                        <div className='list' style={{ paddingTop: "2rem", paddingLeft: "20rem" }}>
                                                                <b style={{ fontWeight: "extra bold", fontSize: "17px", textDecorationLine: "underline" }}>
                                                                        Reviews can:
                                                                </b>
                                                                <ul>
                                                                        <li>
                                                                                Help answer questions customers may have
                                                                        </li>
                                                                        <li>
                                                                                Give further product details
                                                                        </li>
                                                                        <li>
                                                                                Show how the product looks
                                                                        </li>
                                                                        <li>
                                                                                Help websites see where they may need to improve
                                                                        </li>
                                                                        <li>
                                                                                Build trust for customers to purchase a product
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                        <img src={IMG14} alt="" className="review3" style={{ borderRadius: "1rem" }} />
                                                </div>
                                        </div>
                                </div>
                                <div className='ideation_phase'>
                                        <h3 style={{/*fontFamily:"'Big Caslon', sans-serif",*/ fontWeight: "normal", fontSize: "1.3rem", color: "var(--color-box)", paddingTop: "2rem", paddingBottom: "1rem", textAlign: "center", textDecoration: "underline" }}>
                                                Crazy 8's
                                        </h3>
                                        <div className="crazy8Container">
                                                <div className="crazy8Container_p">
                                                        <p>
                                                                The Crazy 8 method played a crucial role in establishing a solid foundation for my
                                                                design process. By utilizing this technique, I was able to rapidly sketch eight distinct
                                                                designs for the pages I wanted to improve. Each sketch was completed within an eight-minute
                                                                time frame, allowing for quick iterations and exploration of various design possibilities.
                                                        </p>
                                                        <p>
                                                                To ensure that the final designs would align with user preferences, I sought feedback from
                                                                three users. I presented the eight sketches to them and asked for their input on which designs
                                                                resonated with them the most. By involving users in the decision-making process, I aimed to
                                                                prioritize their needs and preferences, ensuring that the selected designs would provide an
                                                                optimal user experience.
                                                        </p>
                                                        <p>
                                                                After gathering feedback from the users, I analyzed their responses and identified the three
                                                                designs that received the highest praise and met their needs most effectively. These chosen
                                                                designs became the basis for further refinement and development, as they reflected the preferences
                                                                and requirements of the intended user base.
                                                        </p>
                                                        <p>
                                                                By incorporating the Crazy 8 method and user feedback into my design process, I was able
                                                                to generate multiple design options, rapidly iterate on them, and ultimately select the
                                                                most promising designs based on user input. This approach helped to ensure that the final
                                                                designs would be well-received and aligned with the needs and expectations of the target users.
                                                        </p>
                                                </div>
                                                <div className='c8img'>
                                                        <img src={IMG15} alt="" className="crazy8s" />
                                                </div>
                                        </div>
                                        <div className='mindmap'>
                                                <div className='method_text'>
                                                        <h3 style={{/*fontFamily:"'Big Caslon', sans-serif",*/ fontWeight: "normal", fontSize: "1.3rem", color: "var(--color-box)", paddingTop: "2rem", paddingBottom: "1rem", textAlign: "center", textDecoration: "underline" }}>
                                                                Mind-mapping
                                                        </h3>
                                                        <p style={{ fontWeight: "normal", fontSize: "1rem", textAlign: "left" }}>
                                                                To generate ideas and organize the essential components for my website, I started
                                                                by creating a list of key elements that I believed were necessary. This initial list served
                                                                as a foundation for my subsequent mind-mapping process, where I explored and expanded upon
                                                                the specific content and features to include on each page.
                                                        </p>
                                                </div>

                                                <div className="mindmapping__cards">
                                                        <div className='mindmap1'>
                                                                <article className='mindmapping__card'>
                                                                        <h4 style={{ fontWeight: "normal", fontSize: ".8rem", textAlign: "centre" }}> Homepage</h4>
                                                                        <h5>
                                                                                <li>•	Clear CTAS</li>
                                                                                <li>•	Easy to Navigate  </li>
                                                                                <li>•	Simple but Attractive Designs </li>
                                                                                <li>•	White space</li>
                                                                                <li>•	Footer for Further Information </li>
                                                                                <li>•	Structure Navigation </li>
                                                                                <li>•	Display Key Information</li>
                                                                                <li>•	Search Bar that stands out </li>
                                                                                <li>•	Eye catching sales section </li>
                                                                                <li>•	Less Colour Contrast and Typography to be Clear and Concise</li>
                                                                                <li>•	Email Sign Up </li>
                                                                        </h5>
                                                                </article>

                                                                <article className='mindmapping__card'>
                                                                        <h4 style={{ fontWeight: "normal", fontSize: ".8rem", textAlign: "left" }}>Accessing Order Details</h4>
                                                                        <h5>
                                                                                <li>• Delivery Options </li>
                                                                                <li>• Order Tracking </li>
                                                                                <li>• Return, Shipment and Delivery Data</li>
                                                                                <li>• Purchase History</li>

                                                                        </h5>
                                                                </article>

                                                                <article className='mindmapping__card'>
                                                                        <h4 style={{ fontWeight: "normal", fontSize: ".8rem", textAlign: "left" }}>Picking a Product</h4>
                                                                        <h5>    <li>• Product details (size guide, product) </li>
                                                                                <li>• Product Reviews </li>
                                                                                <li>• Different Colour and sizing options </li>
                                                                                <li>• Similar  product recommendations</li>
                                                                                <li>• Price and promotion display  </li>
                                                                                <li>• Clear and consistent product imagery or videos </li>
                                                                                <li>• Quick view </li>
                                                                                <li>• Adding to wishlist</li>
                                                                        </h5>
                                                                </article>
                                                        </div>
                                                        <div className='mindmap2'>
                                                                <article className='mindmapping__card'>
                                                                        <h4 style={{ fontWeight: "normal", fontSize: ".8rem", textAlign: "left" }}>Searching for a Product</h4>
                                                                        <h5>
                                                                                <li>•	Sort Function</li>
                                                                                <li>•	Filtering  </li>
                                                                                <li>•	Easy to use Navigation System </li>
                                                                                <li>•	Search box</li>
                                                                                <li>•	Accurate/Effective Search </li>
                                                                                <li>•	Categories and Subcategories </li>
                                                                                <li>•	Products per Page</li>
                                                                        </h5>
                                                                </article>

                                                                <article className='mindmapping__card'>
                                                                        <h4 style={{ fontWeight: "normal", fontSize: ".8rem", textAlign: "left" }}>Customer Service</h4>
                                                                        <h5>
                                                                                <li>•	24 Hours Live Chat Avaliability</li>
                                                                                <li>•	Clear Policies T&C's </li>
                                                                                <li>•	Easily accessible FAQ</li>
                                                                                <li>•	Contact us Email and Phone Call Services</li>
                                                                                <li>•	Live Issue Tracking </li>
                                                                                <li>•	Website Footer </li>
                                                                                <li>•	Social Media Avaliability</li>
                                                                                <li>•	About Us Page</li>
                                                                        </h5>
                                                                </article>

                                                                <article className='mindmapping__card'>
                                                                        <h4 style={{ fontWeight: "normal", fontSize: ".8rem", textAlign: "left" }}>Checkout</h4>
                                                                        <h5>
                                                                                <li>•	Easy to Access Shopping cart</li>
                                                                                <li>•	One Click Purchase  </li>
                                                                                <li>•	Discount and Vouchers displayed clearly for users </li>
                                                                                <li>•	Easy and Manageable Checkout (Multiple Payement Options)</li>
                                                                                <li>•	Guest Checkout </li>
                                                                                <li>•	Trust signals and badges </li>
                                                                                <li>•	Shorter User Journeys(Less form sections)</li>
                                                                                <li>•	Mobile Friendly Checkout</li>
                                                                                <li>•	Clear Buttons </li>
                                                                                <li>•	Concise Information needed </li>
                                                                                <li>•	Validation button and Error Notification to get the Correct Details and Avoid Further Problems </li>
                                                                        </h5>
                                                                </article>
                                                        </div>

                                                </div>
                                                <p>
                                                        By employing a mind-mapping technique, I was able to visualize and connect different ideas,
                                                        allowing for a more comprehensive understanding of the required elements for each page.
                                                        The mind map helped me identify the relationships between different components and ensured
                                                        that I considered all the important aspects of my website.
                                                </p>

                                                <img src={IMG17} alt="" className="mindmappingideas" />
                                                <p>
                                                        Through this iterative process, I refined and expanded upon the initial list, capturing additional
                                                        details and exploring various possibilities for each page. This approach enabled me to consider
                                                        different perspectives and uncover new insights, ensuring that the final design would be thorough
                                                        and well-rounded.
                                                </p>
                                                <p>
                                                        Overall, the combination of brainstorming and mind-mapping allowed me to generate a clear roadmap
                                                        for my website, ensuring that I included all the essential elements while providing a solid foundation
                                                        for further development and implementation.
                                                </p>
                                        </div>
                                        <div className='wireframes'>
                                                <h4 style={{ textDecorationLine: "underline", textAlign: "center", color: "var(--color-primary)", fontSize: "1.2rem", marginTop: "2rem" }}>
                                                        Low Fidelity Wireframes
                                                </h4>
                                                {/* <Swiper className="lowfidelitywireframes"
                                                        modules={[Pagination]} spaceBetween={40}
                                                        slidesPerView={1}
                                                        pagination={{ clickable: true }}
                                                                                > */}

                                                <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="lowFidelitywireframes">

                                                        <SwiperSlide><img src={IMG18} alt="" className="homepagelfw" /></SwiperSlide>
                                                        <SwiperSlide><img src={IMG19} alt="" className="searchpagelfw" /></SwiperSlide>
                                                        <SwiperSlide><img src={IMG20} alt="" className="productpagelfw" /></SwiperSlide>
                                                </Swiper>
                                                <h4 style={{ textDecorationLine: "underline", textAlign: "center", color: "var(--color-primary)", fontSize: "1.2rem", marginTop: "3rem" }}>
                                                        Mid Fidelity Wireframes
                                                </h4>
                                                <div>
                                                        <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className='midfidelitywireframes'>

                                                                <SwiperSlide><img src={IMG21} alt="" className="homepagemfw" /></SwiperSlide>
                                                                <SwiperSlide><img src={IMG22} alt="" className="searchpagemfw" /></SwiperSlide>
                                                                <SwiperSlide><img src={IMG23} alt="" className="productpagemfw" /></SwiperSlide>

                                                        </Swiper>

                                                        <h4 style={{ textDecorationLine: "underline", textAlign: "center", color: "var(--color-primary)", fontSize: "1.2rem", marginTop: "3rem" }}>
                                                                High Fidelity Wireframes
                                                        </h4>
                                                        <div className='highfidelitywireframes'>

                                                                <div style={{ textAlign: 'center' }}>
                                                                        <p>A Video of my Web Prototype</p>
                                                                        <video src={myVideop2} className="Video1" width="500" height="360" controls />
                                                                </div>
                                                                <div style={{ textAlign: 'center' }}>
                                                                        <p>A Video of my App Prototype</p>
                                                                        < video src={myVideop3} className="Video2" width="500" height="360" controls />
                                                                </div>

                                                        </div>
                                                </div>
                                        </div>
                                        <div className='ideation_phase'>
                                                <h4 style={{ textDecorationLine: "underline", textAlign: "center", color: "var(--color-primary)", fontSize: "1.2rem", marginTop: "3rem" }}>
                                                        UI Phase
                                                </h4>
                                                <p>
                                                        Hick’s Law can be applied to my case study by keeping the information
                                                        given to consumers concise and minimal as increasing the number of information
                                                        given it takes more longer to make a decision on what to do next and therefore
                                                        become less user friendly. This lowers the risk of potentially overwhelming users.
                                                        I've applied the law my wireframe layouts, by keeping it the necessary information
                                                        on the screen and creating a menu which is easy to understand and advance in my search.
                                                </p>
                                                <p>
                                                        Miller's Law was applied in my case study by dividing the homepage, search and product
                                                        page information clearly this is beneficial to users as they are able to process understand
                                                        the information on the screen better. My menu and footer information is not overwhelming
                                                        and is separated into clear categories.
                                                </p>
                                                <p>
                                                        Law of Common Region states that elements tend to be perceived as groups if they are located
                                                        in the same boundaries. This can be seen in my design the header where the logo, search,account
                                                        an wish-list are put into one group at all points of my design. and how I separate the product
                                                        page sections e.g. recommended, recently viewed and shop the look.i section similar this off
                                                        through background changes and adding strokes as borders.
                                                </p>
                                                <p>
                                                        Aesthetic Usability Effect states that Users have a more positive emotional response towards
                                                        any visual design, making them more tolerable of minor usability issues. ASOS follows a clear
                                                        design scheme of a of black/white and grey colour scheme which I kept as it represents the brand
                                                        in general, I kept the background white which allowed white spacing to be clear, this is clearly
                                                        demonstrated throughout my high fidelity wireframes . The effect this gives is a clean, easy to
                                                        understand and work through website.
                                                </p>
                                                <p>
                                                        Jakob’s Law shows that Users have similar expectations from the way one site functions to other,
                                                        so they will expect them to work in the same or similar way. I used aspects from competitors
                                                        such as Amazon and Shein when it came to the product page with the reviews, the sort by and
                                                        filter in my search page and its categories
                                                </p>
                                        </div>
                                        <div className='accessibility'>
                                                <div style={{ textAlign: 'center' }}>
                                                        <img src={IMG24} alt="" className="colourchecker" />
                                                        <p>
                                                                Through my high fidelity wireframe design I tried take accessibility into account while still sticking
                                                                to the Black, grey and white ASOS colour palette I used a Colour contrast plug-in called A11Y to meet
                                                                an AAA end result throughout the pages in my design.
                                                        </p>
                                                        <div className="border">
                                                                <div className="uiphases">
                                                                        <div className='uiphase1'>
                                                                                <img src={IMG25} alt="" className="ideation1" />
                                                                                <img src={IMG26} alt="" className="ideation2" />
                                                                        </div>

                                                                        <div className='uiphase2'>
                                                                                <p>
                                                                                        My buttons have a clear distinction from static, hover and when clicked by either a clear change in background
                                                                                        colour, and font colour or stoke through out my wireframes, this demonstrates I am trying to take into account
                                                                                        people that use screen readers.
                                                                                </p>
                                                                                <p>
                                                                                        I’ve also tried to make my buttons fit for anyone to tap them. I have also tried to keep images and text
                                                                                        separate so they're easy to read but where I haven't I have, placed a high contrast background to the buttons
                                                                                        so that the distinction is noticeable. An example of this is on my homepage where I have placed shop now buttons
                                                                                        I have clearly stated where the button will redirect them to this can be helpful for people who struggle to see
                                                                                        images and help them understand what it is they are looking at.
                                                                                </p>
                                                                                <p>
                                                                                        I’ve tried to keep my design as simple and clear as as possible so that the pages can be easy to navigate through
                                                                                        for all types of users. My text sizes were a minimum of 15px and used between medium and bold fonts to distinguish
                                                                                        between texts.
                                                                                </p>
                                                                                <p>
                                                                                        I made sure my images and icons had a high resolution so that they could be easily seen by my users. I constantly
                                                                                        checked my design by framing my designs in an IPhone or a MacBook screen to see how they would look if it was on
                                                                                        an actual app or website. And made sure everything was readable and easy to see on my devices.
                                                                                </p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className='conclusion'>
                                                <h3 style={{ textDecorationLine: "underline", textAlign: "center", color: "var(--color-box)", fontSize: "1.2rem", marginTop: "5rem" }}>
                                                        Conclusion
                                                </h3>
                                                <p>
                                                        Overall I am happy with my results as I have accomplished finding a solution for my pain points in both the website and the app. While taking everything I know about UX/UI design.
                                                </p>
                                                <p>
                                                        I have gone back to show people my end result and they understood what I was trying to achieve and gave me positive feedback on my designs. This is important for me as I am not designing for myself but for users  therefore I wanted my designs  to be clear and easy for them to use get out what I wanted with the add ins I introduced to the asos design.
                                                </p>
                                                <p>
                                                        My struggle when picking asos was I saw it as an eCommerce that was already created to a high standard and I didn't want to change it.  I believe i have accomplished keeping it as similar to the original while making beneficial tweaks that can increase sales.
                                                </p>
                                                <p>
                                                        I think I managed to carry out well my competitor analysis to see in which areas i could improve asos and took a lot of time to think what is it that makes a good website and app and in which areas asos may be lacking.
                                                </p>
                                                <p>
                                                        If I could I would've liked to continue designing the website and app wireframes to show how from my designs you can reach the checkout with less of a hassle for users. I would like to have also carried out another questionnaire for the all the same users in my red route analysis  instead of just showing some people my designs. To see if my design improve the sections that they thought was most important features of the website. I Had a limited user testing at the end so I don't know if my design would meet the needs for everyone even though I've tried to take every UI/UX law, fundamental and accessibility into account. This would have also been more evidence to show my designs are successful.
                                                </p>

                                        </div>
                                </div>
                        </div>
                </section>
        )
}

export default Project2