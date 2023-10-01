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
    const [showMessage1, setShowMessage1] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const onButtonClickHandler1 = () => {
       setShowMessage1(true);
    };
    const onButtonClickHandler2 = () => {
        setShowMessage2(true);
     };
     const onButtonClickHandler3 = () => {
        setShowMessage3(true);
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
                        <div>
                            <button className={styles.deliverableButton} onClick={onButtonClickHandler1}>
                                <div className={styles.deliverableBox}>
                                        <p className={styles.deliverable}>Week 1 Deliverables:<br/>Research to Features</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            {showMessage1 &&
                            <div>
                                <p>1. Domain and Competitive Research <br/>
                                2. Affinity Diagramming <br/>
                                3. Personas creation <br/>
                                4. Problem Statement <br/>
                                5. Feature Prioritization<br/>
                                </p>
                            </div>
                            }
                        </div>
                        <div>
                            <button className={styles.deliverableButton} onClick={onButtonClickHandler2}>
                                <div className={styles.deliverableBox}>
                                    <p className={styles.deliverable}>Week 2 Deliverables:<br/>Sketching to Testing</p>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            {showMessage2 &&
                            <div>
                                <p>1. Rapid Sketching <br/>
                                2. User flow diagramming <br/>
                                3. Mid-fidelity prototyping <br/>
                                4. User testing <br/>
                                </p>
                            </div>
                             }
                        </div>
                        <div>
                            <button className={styles.deliverableButton} onClick={onButtonClickHandler3}>
                                <div className={styles.deliverableBox}>
                                    <p className={styles.deliverable}>Week 3 Deliverables:<br/>Ideating to Presenting</p>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                                </div>
                            </button>
                            {showMessage3 &&
                            <div>
                                <p>1. Visual Ideation <br/>
                                2. Style Tiles <br/>
                                3. High-Fidelity Prototypes <br/>
                                4. Wireframe annotations <br/>
                                5. Presentation<br/>
                                </p>
                            </div>
                            }
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
                            <div className={styles.contextBox}>
                                <p className={styles.deliverable}>The "Why?"</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                            </div>
                            <div className={styles.contextBox}>
                                <p className={styles.deliverable}>The "What?"</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={styles.contextBottomBoxes}>
                            <div className={styles.contextBox}>
                                <p className={styles.deliverable}>The "How?"</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
                            </div>
                            <div className={styles.contextBox}>
                                <p className={styles.deliverable}>The "Difficulties"</p>
                                <FontAwesomeIcon icon={faChevronDown} className={styles.deliverableIcon}></FontAwesomeIcon>
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
                    <div className={styles.analyzeText}>
                        <p>To put SchoolSavvy and my domain research into context, I conducted competitive analysis. I researched 5 prominent school search
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
                    <div className={styles.analyzeText2}>
                        <p>Key Takeaways:</p>
                        <ul>
                            <li>Only 1 in 5 competitors have a mobile application</li>
                            <li>All interfaces were informative but concise and clean </li>
                            <li>Built in maps, compare schools, and extensive search filters were important</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.defineTitle}>
                <h1>DEFINE</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
