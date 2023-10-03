import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import styles from '../styles/savvy.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Savvy() {
    const [showMessage1, setShowMessage1] = useState(0);
    const [showMessage2, setShowMessage2] = useState(0);
    const [showMessage3, setShowMessage3] = useState(0);
    const [showMessage4, setShowMessage4] = useState(0);
    const [showMessage5, setShowMessage5] = useState(0);
    const [showMessage6, setShowMessage6] = useState(0);
    const [showMessage7, setShowMessage7] = useState(0);
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
  return (
    <>
      <Head>
        <title>Leah Anitto</title>
        <meta name="description" content="Leah Anitto's personal portfolio" />
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
                            <div className={styles.contextBox2}>
                                <p className={styles.deliverable}>How the Current Tools Help Frank</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                            </div>
                            <div className={styles.contextBox2}>
                                <p className={styles.deliverable}>Opportunities to Improve</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
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
                   style={{ objectFit: 'cover' }}
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
                                style={{ objectFit: 'cover' }}
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
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
