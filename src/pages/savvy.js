import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import styles from '../styles/savvy.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const inter = Inter({ subsets: ['latin'] })

export default function Savvy() {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          perView: 3.5,
          spacing: 0,
        },
      })

    const [showMessage1, setShowMessage1] = useState(0);
    const [showMessage2, setShowMessage2] = useState(0);
    const [showMessage3, setShowMessage3] = useState(0);
    const [showMessage4, setShowMessage4] = useState(0);
    const [showMessage5, setShowMessage5] = useState(0);
    const [showMessage6, setShowMessage6] = useState(0);
    const [showMessage7, setShowMessage7] = useState(0);
    const [showMessage8, setShowMessage8] = useState(0);
    const [showMessage9, setShowMessage9] = useState(0);
    const onButtonClickHandler1 = () => {
       setShowMessage1(1);
    };
    const onButtonClickHandler1Leave = () => {
        setShowMessage1(0);
     };
    const onButtonClickHandler2 = () => {
        setShowMessage2(1);
     };
     const onButtonClickHandler2Leave = () => {
        setShowMessage2(0);
     };
     const onButtonClickHandler3 = () => {
        setShowMessage3(1);
     };
     const onButtonClickHandler3Leave = () => {
        setShowMessage3(0);
     };
     const onButtonClickHandler4 = () => {
        setShowMessage4(1);
     };
     const onButtonClickHandler4Leave = () => {
        setShowMessage4(0);
     };
     const onButtonClickHandler5 = () => {
        setShowMessage5(1);
     };
     const onButtonClickHandler5Leave = () => {
        setShowMessage5(0);
     };
     const onButtonClickHandler6 = () => {
        setShowMessage6(1);
     };
     const onButtonClickHandler6Leave = () => {
        setShowMessage6(0);
     };
     const onButtonClickHandler7 = () => {
        setShowMessage7(1);
     };
     const onButtonClickHandler7Leave = () => {
        setShowMessage7(0);
     };
     const onButtonClickHandler8 = () => {
        setShowMessage8(1);
     };
     const onButtonClickHandler8Leave = () => {
        setShowMessage8(0);
     };
     const onButtonClickHandler9 = () => {
        setShowMessage9(1);
     };
     const onButtonClickHandler9Leave = () => {
        setShowMessage9(0);
     };
  return (
    <>
      <Head>
        <title>Leah Anitto</title>
        <meta name="description" content="Leah Annitto's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jhs3zhj.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet"></link>
        
      </Head>
      <main>
        <div>
          <Header/>
          <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.topLeftContainer}>
                    <h1 className={styles.topTitle}>SchoolSavvy: An Interface to Help Parents Find Schools for Their Children</h1>
                    <p className={styles.topSubtext}>Every day, everywhere, parents and other caretakers are on the hunt for the perfect 
                        schools for their children. Finding this school is time consuming, frustrating, and requires 
                        cross referencing various resources. SchoolSavvy is a digital application that was created to 
                        not only meet the needs of parents but to exceed their expectations. SchoolSavvy takes all the 
                        resources parents use and puts them in one, comprehensive place, allowing parents to search, save, 
                        and compare all sorts of schools at a one stop shop
                    </p>
                </div>
                <div className={styles.topRightContainer}>
                    <ul>
                        <li className={styles.listItem}><span className={styles.bold}>Client: </span>  Mock Client</li>
                        <li className={styles.listItem}><span className={styles.bold}>Role:</span>
                            UI Designer,
                            UX Researcher,
                            Interaction Designer,
                            Project Manager
                        </li>
                        <li className={styles.listItem}> <span className={styles.bold}>Tools:</span>  Figma,
                            Google Forms
                        </li>
                        <li className={styles.listItem}><span className={styles.bold}>Timeline:</span>  3 weeks</li>
                    </ul>
                </div>
            </div>
            <div className={styles.deliverableContainer}>
                    <h1 className={styles.deliverableTitle}>Deliverable Overview</h1>
                    <div className={styles.deliverableSection}>
                        <div className={styles.box}>
                            <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler1} onMouseLeave={onButtonClickHandler1Leave}>
                                <div className={styles.deliverableBox}>
                                        <p className={styles.deliverable}>Week 1 Deliverables:<br/>Research to Features</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            <div style={{opacity: showMessage1}}>
                                <p className={styles.boxText}>1. Domain and Competitive Research <br/>
                                2. Affinity Diagramming <br/>
                                3. Personas creation <br/>
                                4. Problem Statement <br/>
                                5. Feature Prioritization<br/>
                                </p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler2} onMouseLeave={onButtonClickHandler2Leave}>
                                <div className={styles.deliverableBox}>
                                    <p className={styles.deliverable}>Week 2 Deliverables:<br/>Sketching to Testing</p>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            <div style={{opacity: showMessage2}}>
                                <p className={styles.boxText}>1. Rapid Sketching <br/>
                                2. User flow diagramming <br/>
                                3. Mid-fidelity prototyping <br/>
                                4. User testing <br/>
                                </p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler3} onMouseLeave={onButtonClickHandler3Leave}>
                                <div className={styles.deliverableBox}>
                                    <p className={styles.deliverable}>Week 3 Deliverables:<br/>Ideating to Presenting</p>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            <div style={{opacity: showMessage3}}>
                                <p className={styles.boxText}>1. Visual Ideation <br/>
                                2. Style Tiles <br/>
                                3. High-Fidelity Prototypes <br/>
                                4. Wireframe annotations <br/>
                                5. Presentation<br/>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.askContainer}>
                <div className={styles.askInnerContainer}>
                    <h1 className={styles.askTitle}>The Ask:</h1>
                    <p className={styles.askSubtext}>
                        My client came to me wanting to understand how parents decide and what they use to decide where to send 
                        their children to school. My task was twofold. I needed to conduct domain and competitive research to 
                        better understand what parents want, need, and find challenging as they search for schools for their children, 
                        and I needed to create a digital tool to meet these needs and rectify these challenges. The constraints I was 
                        up against were the time frame and access to users to survey and test on.
                    </p>
                </div>
            </div>
            <div className={styles.understandTitle}>
                <h1>UNDERSTAND</h1>
            </div>
            <div className={styles.contextContainer}>
                    <h1 className={styles.deliverableTitle}>Understanding the Context</h1>
                    <div className={styles.contextSection}>
                        <div className={styles.contextTopBoxes}>
                            <div className={styles.box2}>
                                <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler4} onMouseLeave={onButtonClickHandler4Leave}>
                                    <div className={styles.contextBox} >
                                        <p className={styles.deliverable}>The "Why?"</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                    </div>
                                </button>
                                <div style={{opacity: showMessage4}}>
                                    <p className={styles.boxText}>
                                        It’s important to know the context of the users and the problem. Without knowing what parents are looking for and 
                                        how they are searching, there’s no way to figure out what the problem is and therefore what needs to be solved.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.box2}>
                                <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler5} onMouseLeave={onButtonClickHandler5Leave}>
                                    <div className={styles.contextBox}>
                                        <p className={styles.deliverable}>The "What?"</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                    </div>
                                </button>
                                <div style={{opacity: showMessage5}}>
                                    <p className={styles.boxText}>
                                        The top three things parents are looking for are good teachers, high level curriculum and academics, and school safety.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contextBottomBoxes}>
                            <div className={styles.box2}>
                                <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler6} onMouseLeave={onButtonClickHandler6Leave}>
                                    <div className={styles.contextBox} >
                                        <p className={styles.deliverable}>The "How?"</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                    </div>
                                </button>
                                <div style={{opacity: showMessage6}}>
                                    <p className={styles.boxText}>
                                    Most parents use online resources to research schools when they are actively looking. They also use online resources to 
                                    track the school’s progress in order to send their children to the best possible school.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.box2}>
                                <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler7} onMouseLeave={onButtonClickHandler7Leave}>
                                    <div className={styles.contextBox} >
                                        <p className={styles.deliverable}>The "Difficulties"</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                    </div>
                                </button>
                                <div style={{opacity: showMessage7}}>
                                    <p className={styles.boxText}>
                                    There are all sorts of resources in all different forms coming from all different directions and it proves difficult to 
                                    put all those assets together in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.summaryContainer}>
                    <h1 className={styles.deliverableTitle}>In Summary</h1>
                    <div className={styles.summarySection}>
                        <div className={styles.summaryTopSection}>
                            <p className={styles.summaryText}>According to a survey conducted by Great Schools, U.S. parents from an online panel agree 
                                parents go online to research schools when researching school options. Furthermore, they 
                                generally want information about a school’s progress and ranking.
                            </p>
                            <Image
                                className={styles.art}
                                src="/images/graph school savvy 1.svg"
                                width={400}
                                height={270}
                                alt="Art picture 1"
                            />
                        </div>
                        <div className={styles.contextBottomBoxes}>
                            <Image
                                className={styles.art}
                                src="/images/graph school savvy.svg"
                                width={400}
                                height={270}
                                alt="Art picture 1"
                            />
                            <p className={styles.summaryText2}>According to a study from the National Center for Education, among K-12 students whose parents 
                                considered multiple schools, and ended up in private school, 92% selected the factor of “quality 
                                of teachers, principal, or other school staff” as “very important” in choosing a school; parents 
                                use many different types of resources to inform their decision.
                            </p>
                        </div>
                    </div>
            </div>
            <div className={styles.analyzeContainer}>
                <h1 className={styles.deliverableTitle}>Analyzing the Competition</h1>
                <div>
                    <div className={styles.analyzeTextSection}>
                        <p className={styles.analyzeText}>To put SchoolSavvy and my domain research into context, I conducted competitive analysis. I researched 5 prominent school search
                            sites and sorted the key characteristics of their interfaces and contents. The characteristics that stood out to me were ones 
                            that overlapped across competitors
                        </p>
                    </div>
                    <Image
                         className={styles.art}
                         src="/images/competitive analysis table school savvy.svg"
                         width={1200}
                         height={500}
                         alt="Art picture 1"
                    />
                    <div className={styles.analyzeTextSection2}>
                        <p className={styles.analyzeText2}>Key Takeaways:</p>
                        <ul className={styles.analyzeList}>
                            <li className={styles.analyzeBullets}>Only 1 in 5 competitors have a mobile application</li>
                            <li className={styles.analyzeBullets}>All interfaces were informative but concise and clean </li>
                            <li className={styles.analyzeBullets}>Built in maps, compare schools, and extensive search filters were important</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.defineTitle}>
                <h1>DEFINE</h1>
            </div>
            <div className={styles.defineContainer}>
                    <h1 className={styles.defineSubTitle}>Crafting the Target User</h1>
                    <div className={styles.summarySection}>
                        <p className={styles.defineBody}>Once I had an understanding of the domain and the context, I needed to do research on who the users were– I  had to 
                            understand who the users were. The kind of research I conducted was by survey and short interviews. Questions included 
                            asking users who they are and what they are looking for in a school for their children, why they are looking for those 
                            things, and how they went about searching. Based on these interviews, we took what we learned and synthesized t
                            hat into one single persona.
                        </p>
                        <Image
                            className={styles.art}
                            src="/images/frank hanson school savvy.svg"
                            width={190}
                            height={190}
                            alt="Art picture 1"
                        />
                        <p className={styles.personaText}>Meet Frank Hanson:</p>
                        <p className={styles.defineBody}>
                            Research showed most users used other parents and online 
                            research as their main resources for finding schools for their children. Meet Frank Hanson, a persona that represents 
                            the users and their wants, needs, and challenges. Frank is an Editor at Princeton University Press who is known as the 
                            “efficiency-is-key parent” on the hunt for an app that meets all his needs for searching for and deciding on a school 
                            for his child;<span className={styles.personaSpan}> he wants to be able to do research and aggregate and analyze the research in one place.</span>
                        </p>
                    </div>
                    <div className={styles.defineBoxes}>
                        <div className={styles.box2}>
                            <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler8} onMouseLeave={onButtonClickHandler8Leave}>
                                <div className={styles.contextBox2} >
                                    <p className={styles.deliverable}>How the Current Tools Help Frank</p>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            <div style={{opacity: showMessage8}}>
                                <ul className={styles.analyzeList}>
                                    <li className={styles.analyzeBullets}>Reviews of schools</li>
                                    <li className={styles.analyzeBullets}>Built in maps</li>
                                    <li className={styles.analyzeBullets}>Extensive search filters</li>
                                    <li className={styles.analyzeBullets}>Ratings and reviews</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <button className={styles.deliverableButton} onMouseEnter={onButtonClickHandler9} onMouseLeave={onButtonClickHandler9Leave}>
                                <div className={styles.contextBox2} >
                                    <p className={styles.deliverable}>Opportunities to Improve</p>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            <div style={{opacity: showMessage9}}>
                                <ul className={styles.analyzeList}>
                                    <li className={styles.analyzeBullets}>Access to parent forums and discussion boards</li>
                                    <li className={styles.analyzeBullets}>Up-to-date news and information about education  </li>
                                    <li className={styles.analyzeBullets}>Mobile application</li>
                                    <li className={styles.analyzeBullets}>An all-in-one digital tool that puts all the best features of the competitors in one place</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.defineContainer2}>
                    <h1 className={styles.defineSubTitle}>Defining the Problem</h1>
                    <div className={styles.summarySection}>
                        <p className={styles.defineBody}>
                            Defining the problem gives guidelines to the tool. It answers the question of 
                            <span className={styles.personaSpan}> “What are we designing?” and “What functions will this tool have?”.</span> 
                        </p>
                        <p className={styles.defineBody}>
                            Parents seeking a new school for their child need a digital tool that helps them <span className={styles.personaSpan}>identify, 
                            save, compare, and decide</span> on schools that match their criteria in order to make the process of 
                            collecting information from various sources and deciding on a school more efficient.
                        </p>
                    </div>
            </div>
            <div className={styles.defineContainer3}>
                    <h1 className={styles.defineSubTitle}>Specify Feature Prioritization</h1>
                    <div className={styles.summarySection}>
                        <p className={styles.defineBody}>
                            After creating a list of features based on competitive analysis, I created a MoSCoW Map in order to organize 
                            the features into categories ranging from “must have” to “will not have”. The purpose of this is to analyze 
                            the user and competitive research and aggregate the results in one place. I referred back to my problem statement 
                            as well. What features were needed to meet the requirements of the problem statement? 
                            <span className={styles.personaSpan}> What features were needed for 
                            users to identify, save, compare, and decide on schools?</span>
                        </p>
                    </div>
            </div>
            <div className={styles.moscowMethodContainer}>
                <Image
                   className={styles.moscowImage}
                   src="/images/MoSCow Method correct image.svg"
                   fill={true}
                   alt="Art picture 1"
                   style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
            </div>
            <div className={styles.defineContainer3}>
                    <h1 className={styles.defineSubTitle}>Creating a User Flow Diagram</h1>
                    <div className={styles.flowSection}>
                        <div className={styles.flowTopSection}>
                            <p className={styles.defineBody}>
                                Having prioritized what features are needed to solve for the problem, I needed to think through what that user 
                                flow would look like. To visualize this, I created a series of user task flow diagrams to walk through key actions 
                                the user would need to take. A user needs to be able to search and save schools; a user needs to be able to compare schools.
                            </p>
                        </div>
                        <div className={styles.flowTask}>
                            <p className={styles.defineBody}>
                                Task 1: Search for a school with filters to find and save a school.
                            </p>
                        </div>
                        <div className={styles.flowContainer}>
                            <Image
                                className={styles.moscowImage}
                                src="/images/task flow 1 school savvy.svg" 
                                fill={true}
                                alt="Art picture 1"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className={styles.flowTask}>
                            <p className={styles.defineBody}>
                                Task 2: Compare two schools that are saved to your favorites.
                            </p>
                        </div>
                        <div className={styles.flowContainer2}>
                            <Image
                                className={styles.moscowImage}
                                src="/images/task flow 2 school savvy.svg"
                                fill={true}
                                alt="Art picture 1"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            <div className={styles.defineTitle}>
                <h1>EXPLORE</h1>
            </div>
            <div className={styles.defineContainer3}>
                    <h1 className={styles.defineSubTitle}>Ideating Around Features</h1>
                    <div className={styles.flowSection}>
                        <div className={styles.flowTopSection}>
                            <p className={styles.defineBody}>
                                I had an idea, I just needed to get it out on paper and then confirm its viability. I sketched my idea, using 
                                the apps Streeteasy and Zillow as my model for the screens.
                            </p>
                        </div>
                        <div className={styles.imageSliderContainer}>
                            <div ref={sliderRef} className="keen-slider">
                                <div style={{ marginLeft: '0vw' }} className="keen-slider__slide number-slide1"><img className={styles.sliderImage} src="/images/schoolsavvy sketch 1.svg"/></div>
                                <div style={{ marginLeft: '0vw' }} className="keen-slider__slide number-slide2"><img className={styles.sliderImage} src="/images/school savvy sketch 2.svg"/></div>
                                <div style={{ marginLeft: '0vw' }} className="keen-slider__slide number-slide3"><img className={styles.sliderImage} src="/images/school savvy skecth 3.svg"/></div>
                                <div style={{ marginLeft: '0vw' }} className="keen-slider__slide number-slide4"><img className={styles.sliderImage} src="/images/school savvy sketch 4.svg"/></div>
                                <div style={{ marginLeft: '0vw' }} className="keen-slider__slide number-slide5"><img className={styles.sliderImage} src="/images/school savvy sketch 5.svg"/></div>
                                <div style={{ marginLeft: '0vw' }} className="keen-slider__slide number-slide6"><img className={styles.sliderImage} src="/images/school savvy sketch 6.svg"/></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.defineContainer3}>
                    <h1 className={styles.defineSubTitle}>The Construction of Mid-Fidelity Prototypes</h1>
                    <div className={styles.flowSection}>
                        <div className={styles.flowTopSection}>
                            <p className={styles.defineBody}>
                                In order to validate that the user can identify, save, compare, and decide on a school for their child, I had to test 
                                prototypes with users. This is where mid-fidelity prototypes come into fruition. I wanted users to focus on function 
                                over visual appeal so I created mid-fidelity prototypes to test my user flows.
                            </p>
                        </div>
                        <div className={styles.imageSliderContainer}>
                            <div ref={sliderRef} className="keen-slider">
                                <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide1"><img className={styles.sliderImage} src="/images/school savvy midfi 1.svg"/></div>
                                <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide2"><img className={styles.sliderImage} src="/images/school savvy midfi 2.svg"/></div>
                                <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide3"><img className={styles.sliderImage} src="/images/school savvy midfi 3.svg"/></div>
                                <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide4"><img className={styles.sliderImage} src="/images/school savvy midfi 4.svg"/></div>
                                <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide5"><img className={styles.sliderImage} src="/images/school savvy midfi 5.svg"/></div>
                                <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide6"><img className={styles.sliderImage} src="/images/school savvy midfi 6.svg"/></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.defineContainer3}>
                    <h1 className={styles.defineSubTitle}>Testing Prototypes on Users</h1>
                    <div className={styles.flowSection}>
                        <div className={styles.flowTopSection}>
                            <p className={styles.defineBody}>
                                <span className={styles.methodology}>Methodology: </span><br/>
                                User interviews paired with having them look at my mid-fidelity wireframes and trying to navigate them.
                            </p>
                        </div>
                        <div>
                            <div className={styles.questionBox}>
                                <button className={styles.questionButton} onMouseEnter={onButtonClickHandler1} onMouseLeave={onButtonClickHandler1Leave}>
                                    <div className={styles.deliverableBox2}>
                                            <p className={styles.deliverable}>Questions to Ask</p>
                                            <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                    </div>
                                </button>
                                <div style={{opacity: showMessage1}}>
                                    <p className={styles.boxTextQuestion}>
                                        1. How easy was this task to complete?<br/>
                                        2. What could have made it easier? What was difficult about it?<br/>
                                        3. What needs to change in this interface?<br/>
                                        4. When a user doesn’t like something, ask them what about it they don’t like or why it doesn’t work as well as they want it to?<br/>
                                        5. When a user likes something, ask them to expand, ask them why do you like that feature? What about it works well?<br/>
                                    </p>
                                </div>
                            </div>
                                <div className={styles.taskListBox}>
                                    <div className={styles.analyzeTextSection3}>
                                        <p className={styles.taskListText}>Task List:</p>
                                        <ul className={styles.analyzeList}>
                                            <li className={styles.analyzeBullets}>A user wants to find a school with search filters</li>
                                            <li className={styles.analyzeBullets}>A user wants to save a school to look at later. </li>
                                            <li className={styles.analyzeBullets}>A user wants to compare two schools.</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.defineBody} style={{ margin: '15% 10% 0 10%' }}>
                                    <span className={styles.methodology}>Evaluation Measures: </span><br/>
                                    I was conducting qualitative analysis by measuring how well the users were able to do the tasks asked of them. In order to analyze their behavior,
                                    I took note of how easily they navigated the tasks. And to figure out their attitude, I followed up with questions to figure out how they felt 
                                    about completing those tasks. Studying user behaviors helped me to determine whether the user flows are functional and intuitive. Can the 
                                    user efficiently and instinctively follow the steps to complete the task? If they couldn’t, I had to go back to my mid-fidelity prototypes 
                                    and rework them.
                                </p>
                                <div className={styles.defineBody} style={{ margin: '15% 10% 3% 10%' }}>
                                    <span className={styles.methodology}>Results: </span><br/>
                                </div>
                                <div className={styles.resultsBox}>
                                    <div className={styles.insightsBox}>
                                        <span className={styles.insightsText}>Key Insights: </span><br/>
                                        <ul className={styles.analyzeList}>
                                            <li className={styles.analyzeBullets}>Users want more filters on the initial search page users suggested more information with the search page (ie. top rated schools, schools near you, testimonials, information on the mission or vision of the app)</li>
                                            <li className={styles.analyzeBullets}>Users liked the navigation and thought it was intuitive, but they wanted a “continue as guest” at login</li>
                                            <li className={styles.analyzeBullets}>users didn’t understand that the numbers in spheres on the favorites page were buttons to select or deselect schools to compare</li>
                                        </ul>
                                    </div>
                                    <div className={styles.stepsBox}>
                                        <span className={styles.insightsText}>Next Steps: </span><br/>
                                        <ul className={styles.analyzeList}>
                                            <li className={styles.analyzeBullets}>I made the initial search page into a homepage to allow for more search filters right away and to allow for more options to pick from besides just searching</li>
                                            <li className={styles.analyzeBullets}>I reworked the favorites page to be clearer and look better </li>
                                            <li className={styles.analyzeBullets}>I added a continue as guest function at login</li>
                                        </ul> 
                                    </div>
                                    
                                </div>
                        </div> 
                    </div>
            </div>
            <div className={styles.defineTitle}>
                <h1>A SOLUTION BUILT FOR FRANK</h1>
            </div>
            <div className={styles.defineContainer2}>
                    <h1 className={styles.defineSubTitle}>The Formation of a Style Tile</h1>
                    <div>
                        <p className={styles.defineBody} style={{ margin: '5% 10% 0 10%' }}>
                            <span className={styles.methodology}>Why a Style Tile? </span><br/>
                            A style allowed me to form a common visual language between my stakeholders and me.
                            Style tiles also provide a catalyst for discussions around the preferences and goals
                            of my client and me.
                        </p>
                    </div>
                    <div>
                        <p className={styles.defineBody} style={{ margin: '5% 10% 0 10%' }}>
                            <span className={styles.methodology}>Branding</span><br/>
                            The brand adjectives came from the combination of it being a school-related site, so it had to be appealing and friendly,
                            but it also needed to be trusted and efficient. Their purpose is to translate my ideas and visions into tangible words that
                            my stakeholders and any audience can understand. Brand adjectives also guide the decision making process of the style tile
                            and the eventual UI of the app.
                        </p>
                    </div>
                    <div className={styles.questionBox2}>
                        <button className={styles.questionButton} style={{ padding: '0 5% 0 5%' }} onMouseEnter={onButtonClickHandler1} onMouseLeave={onButtonClickHandler1Leave}>
                            <div className={styles.deliverableBox} style={{ padding: '2px 5% 2px 5%' }}>
                                <p className={styles.deliverable}>Brand Adjectives</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                            </div>
                        </button>
                        <div className={styles.brandContainer} style={{opacity: showMessage1}}>
                            <ul className={styles.analyzeList2}>
                                <li className={styles.analyzeBullets}>Educative</li>
                                <li className={styles.analyzeBullets}>Simple</li>
                                <li className={styles.analyzeBullets}>Decisive</li>
                                <li className={styles.analyzeBullets}>Affable</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className={styles.defineBody} style={{ margin: '0 10% 0 10%' }}>
                            <span className={styles.methodology}>Colors: </span>
                            Colors needed to be friendly and inviting but professional and tight.
                        </p>
                    </div>
                    <div>
                        <p className={styles.defineBody} style={{ margin: '3% 10% 0 10%' }}>
                            <span className={styles.methodology}>Fonts: </span>
                            The font pairing also needed to be clearly related to schools, but also demonstrate the high caliber and quality of this tool.
                        </p>
                    </div>
                    <div className={styles.flowContainer3} >
                        <Image
                            className={styles.moscowImage}
                            src="/images/style tile school savvy.svg"
                            fill={true}
                            alt="Art picture 1"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <h1 className={styles.defineSubTitle}>Designing For Our Users</h1>
                    <div className={styles.imageSliderContainer}>
                        <div ref={sliderRef} className="keen-slider">
                            <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide1"><img className={styles.sliderImage} src="/images/iphone hi fi 1 school savvy.svg"/></div>
                            <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide2"><img className={styles.sliderImage} src="/images/iphone school savvy hi fi 2.svg"/></div>
                            <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide3"><img className={styles.sliderImage} src="/images/iphone school savvy hi fi 3.svg"/></div>
                            <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide4"><img className={styles.sliderImage} src="/images/iphone school savvy hi fi 4.svg"/></div>
                            <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide5"><img className={styles.sliderImage} src="/images/iphone school savvy hi fi 5.svg"/></div>
                            <div style={{ marginLeft: '0' }} className="keen-slider__slide number-slide6"><img className={styles.sliderImage} src="/images/iphone school savvy hifi 6.svg"/></div>
                        </div>
                    </div>
            </div>
            <div className={styles.defineTitle}>
                <h1>WHAT THE FUTURE HOLDS</h1>
            </div>
            <div>
                <div className={styles.questionBox3}>
                    <button className={styles.questionButton} onMouseEnter={onButtonClickHandler1} onMouseLeave={onButtonClickHandler1Leave}>
                        <div className={styles.deliverableBox2}>
                            <p className={styles.deliverable}>Next Steps</p>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                        </div>
                    </button>
                    <div style={{opacity: showMessage1}}>
                        <p className={styles.boxTextQuestion}>
                            <ul className={styles.analyzeList2}>
                                <li className={styles.analyzeBullets}>Further usability testing</li>
                                <li className={styles.analyzeBullets}>Build out more features </li>
                                <li className={styles.analyzeBullets}>Improve compare functionality to include more than 2 schools and to be more comprehensive </li>
                                <li className={styles.analyzeBullets}>Create the tablet and desktop versions</li>
                                <li className={styles.analyzeBullets}>Create the Android version</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className={styles.reflectingContainer}>
                    <h1 className={styles.defineSubTitle}>Reflecting on the Project</h1>
                </div>
                <div className={styles.askContainer}>
                <div className={styles.reflectInnerContainer}>
                    <p className={styles.reflectSubtext}>
                        SchoolSavvy was the first project I took on from start to finish, where I was given
                        nothing but an idea of the problem. I was designing for an unfamiliar domain in that
                        I am not a parent looking for schools for my children; I am not a parent at all. The
                        only knowledge of the domain I have is being the teacher parents are consulting with
                        about next steps and schools for their children.
                    </p><br/><br/>
                    <p className={styles.reflectSubtext}>
                        This project required me to spend a lot of time putting myself in the shoes of a user
                        I have never come even close to being. I was able to push past that uncomfortability
                        and focus on UI interactions, tweaking and iterating again and again on designs, and
                        how to make my interface make sense to the user and be intuitive to use.
                    </p><br/><br/>
                    <p className={styles.reflectSubtext}>
                        I had to abandon my feelings as a former educator and listen intently to the users and
                        what they wanted and needed. I had to combine sources of research to create the most 
                        viable product, putting aside my own sensibilities and preferences, and giving the 
                        parents what they want.
                    </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
