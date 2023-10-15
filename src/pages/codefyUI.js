import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import styles from '../styles/codefyUI.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function CodeyUI() {
    const [sliderRef] = useKeenSlider({
		mode: 'free-snap',
		slides: {
			perView: 3.5,
			spacing: 0,
		},
	});

    const [showMessage1, setShowMessage1] = useState(0);
	const [showMessage2, setShowMessage2] = useState(0);
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


	return (
		<>
			<Head>
				<title>Leah Annitto</title>
				<meta name="description" content="Leah Annitto's personal portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://use.typekit.net/jhs3zhj.css"
				></link>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<main>
				<div>
					<Header />
					<div className={styles.container}>
						<div className={styles.topContainer}>
							<div className={styles.topLeftContainer}>
								<h1 className={styles.topTitle}>
                                    CodefyUI: The Backstory
								</h1>
								<p className={styles.topSubtext}>
                                    Ever want to make a website start to finish, but you don’t know how to design it? Or code it? CodefyUI brings software developers and product designers together. Designers have the artistic skills to create design systems, and developers have the ability to create code. CodefyUI allows designers to upload design systems, the AI creates the code, and software developers can download that code. No software developer needs a designer; no product designer needs a developer. They can work together right here in CodefyUI.
								</p>
							</div>
							<div className={styles.topRightContainer}>
								<ul>
									<li className={styles.listItem}>
										<span className={styles.bold}>Client: </span> Joe Lyons: Software Developer
									</li>
									<li className={styles.listItem}>
										<span className={styles.bold}>Role:</span>
										UI Designer, UX Researcher, Interaction Designer, Project
										Manager
									</li>
									<li className={styles.listItem}>
										{' '}
										<span className={styles.bold}>Tools:</span> Figma
									</li>
									<li className={styles.listItem}>
										<span className={styles.bold}>Timeline:</span> 2 weeks
									</li>
								</ul>
							</div>
						</div>
                        <div className={styles.contextContainer}>
							<h1 className={styles.deliverableTitle}>
								Deliverable Overview
							</h1>
							<div className={styles.contextSection}>
								<div className={styles.contextTopBoxes}>
									<div className={styles.box3}>
										<button
											className={styles.deliverableButton}
											onMouseEnter={onButtonClickHandler1}
											onMouseLeave={onButtonClickHandler1Leave}
										>
											<div className={styles.contextBox}>
												<p className={styles.deliverable}>Week 1 Deliverables</p>
												<FontAwesomeIcon
													icon={faChevronDown}
													className={styles.deliverableIcon}
												></FontAwesomeIcon>
											</div>
										</button>
										<div  style={{ opacity: showMessage1 }}>
                                            <p className={styles.boxTextQuestion}>
												1. Problem Statement 
												<br />
												2. Competitive Research 
												<br />
												3. Branding 
												<br />
												4. Task Flows 
												<br />
												5. Sketching 
												<br />
                                                6. Mid-Fidelity wireframes 
												<br />
												7. Usability Testing
												<br />
											</p>
										</div>
									</div>
									<div className={styles.box3}>
										<button
											className={styles.deliverableButton}
											onMouseEnter={onButtonClickHandler2}
											onMouseLeave={onButtonClickHandler2Leave}
										>
											<div className={styles.contextBox}>
												<p className={styles.deliverable}>Week 2 Deliverables</p>
												<FontAwesomeIcon
													icon={faChevronDown}
													className={styles.deliverableIcon}
												></FontAwesomeIcon>
											</div>
										</button>
										<div style={{ opacity: showMessage2 }}>
                                            <p className={styles.boxTextQuestion}>
												1. User Research 
												<br />
												2. Hi-Fidelity Prototypes 
												<br />
												3. Usability Testing 
												<br />
												4. Presentation
												<br />
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div className={styles.askContainer}>
							<div className={styles.askInnerContainer}>
								<h1 className={styles.askTitle}>The Ask</h1>
								<p className={styles.askSubtext}>
                                My stakeholder came to me with an idea and in need of a designer to help bring the concept to life. He asked me to create the hi-fidelity prototypes for his website idea. The purpose of the website is to allow designers to upload design systems they’ve made, Joe will code the AI that will create the code based on the uploaded designs, and software developers can come to the site to download the code of any design system they like. 
								</p>
							</div>
						</div>
                        <div className={styles.understandTitle}>
							<h1>INVESTIGATE</h1>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                Framing the Problem Statement
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
                                        Software developers creating digital tools need to be able to download code for complete design systems in order to make a digital tool without needing design skills that adhere to best practices and industry standards.
									</p>
								</div>
                            </div>
                        </div>
                        <div className={styles.contextContainer}>
							<h1 className={styles.deliverableTitle}>
                                Defining the Industry
							</h1>
							<div className={styles.contextSection}>
								<div className={styles.contextTopBoxes}>
									<div className={styles.box3}>
										<button
											className={styles.deliverableButton}
											onMouseEnter={onButtonClickHandler1}
											onMouseLeave={onButtonClickHandler1Leave}
										>
											<div className={styles.contextBox}>
												<p className={styles.deliverable}>The "Why?"</p>
												<FontAwesomeIcon
													icon={faChevronDown}
													className={styles.deliverableIcon}
												></FontAwesomeIcon>
											</div>
										</button>
										<div style={{ opacity: showMessage1 }}>
											<p className={styles.boxText2}>
                                                It’s important to know the context of the problem. Without knowing what other websites in the AI space are doing, there’s no way to figure out how to solve the problem.
											</p>
										</div>
									</div>
									<div className={styles.box3}>
										<button
											className={styles.deliverableButton}
											onMouseEnter={onButtonClickHandler2}
											onMouseLeave={onButtonClickHandler2Leave}
										>
											<div className={styles.contextBox}>
												<p className={styles.deliverable}>The "What?"</p>
												<FontAwesomeIcon
													icon={faChevronDown}
													className={styles.deliverableIcon}
												></FontAwesomeIcon>
											</div>
										</button>
										<div style={{ opacity: showMessage2 }}>
											<p className={styles.boxText2}>
                                                Competitive research showed that AI tools have their purpose and their “why this tool?” clearly lined out. For other sites that offer designs or art, for instance Dribbble, the brand consistency is everything– inCTAs, in the information architecture, and in the feel of the site.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div className={styles.contextContainer}>
                            <h1 className={styles.defineSubTitle2}>
								Matching the Mental Model to the Navigation
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.askContainer}>
									<div className={styles.askInnerContainer}>
										<p className={styles.askSubtext2}>
											<span className={styles.boldText2}>The "Why?": </span> 
                                             It’s important to create a brand that aligns with the competitive research and with the identity of the product we created. 
										</p>
									</div>
								</div>
								<div className={styles.askContainer}>
									<div className={styles.askInnerContainer}>
										<p className={styles.askSubtext2}>
											<span className={styles.boldText2}>The "How?": </span> 
                                             After conducting competitive analysis in the space, and combining the concepts of AI and design, I came to very clear brand adjectives, which included: sleek, informational, refined, and consistent.
										</p>
									</div>
								</div>
                                <div className={styles.askContainer}>
									<div className={styles.askInnerContainer}>
										<p className={styles.askSubtext2}>
											<span className={styles.boldText2}>The “Difficulties”: </span> 
                                             Balancing the AI side with the design site side proved to be tricky because the two concepts don’t necessarily go hand in hand and they present differently.
                                        </p>
									</div>
								</div>
							</div>
                        </div>
                        <div className={styles.understandTitle}>
							<h1>IDEATE</h1>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                Making Task Flows From the Problem and User Stories
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTask}>
									<p className={styles.defineBody}>
                                        Task 1: The user wants to pick a design system and download the code for it.
									</p>
								</div>
								<div className={styles.flowContainer}>
									<Image
										className={styles.moscowImage}
										src="/images/Frame 1000004265.svg"
										fill={true}
										alt="Art picture 1"
										style={{ objectFit: 'contain' }}
									/>
								</div>
								<div className={styles.flowTask}>
									<p className={styles.defineBody}>
                                        Task 2: The user wants to upload a design system to CodefyUI.
									</p>
								</div>
								<div className={styles.flowContainer2}>
									<Image
										className={styles.moscowImage}
										src="/images/Frame 1000004266.svg"
										fill={true}
										alt="Art picture 1"
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                Ideating Around the Concept
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTask}>
									<p className={styles.defineBody}>
                                        I had an idea of what I wanted the site to look like: Dribbble-esque with an AI twist. Initial sketching was used to get my thoughts on paper; to translate what I was seeing on screens to my own ideas.
									</p>
								</div>
                                <div className={styles.flowTask}>
									<p className={styles.defineBody2}>
                                        Problem Statement:
                                    </p>
								</div>
								<div className={styles.resultsBox2}>
                                    <div className={styles.insightsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/IMG_2806.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                     </div>
                                    <div className={styles.stepsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/IMG_2807.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                    </div>
                                    <div className={styles.stepsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/IMG_2808.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                    </div>
							    </div>
                                <div className={styles.flowTask}>
									<p className={styles.defineBody2}>
                                        User Story:
                                    </p>
								</div>
								<div className={styles.imageSliderContainer}>
									<div ref={sliderRef} className="keen-slider">
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide1"
										>
											<img
												className={styles.sliderImage}
												src="/images/IMG_2817.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide2"
										>
											<img
												className={styles.sliderImage}
												src="/images/IMG_2818.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide3"
										>
											<img
												className={styles.sliderImage}
												src="/images/IMG_2819.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide4"
										>
											<img
												className={styles.sliderImage}
												src="/images/IMG_2820.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide5"
										>
											<img
												className={styles.sliderImage}
												src="/images/IMG_2821.svg"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                Starting to Make the Ideations Reality
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTask}>
									<p className={styles.defineBody}>
                                        Mid-fidelity wireframes were used mostly for usability testing. Does what I imagined with paper and pen actually make sense to users?
                                    </p>
								</div>
                                <div className={styles.flowTask}>
									<p className={styles.defineBody2}>
                                        Problem Statement:
                                    </p>
								</div>
								<div className={styles.resultsBox2}>
                                    <div className={styles.insightsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004214.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                     </div>
                                    <div className={styles.stepsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004215.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                    </div>
							    </div>
                                <div className={styles.flowTask}>
									<p className={styles.defineBody2}>
                                        User Story:
                                    </p>
								</div>
								<div className={styles.imageSliderContainer}>
									<div ref={sliderRef} className="keen-slider">
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide1"
										>
											<img
												className={styles.sliderImage2}
												src="/images/Group 1000004216.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide2"
										>
											<img
												className={styles.sliderImage2}
												src="/images/Group 1000004217.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide3"
										>
											<img
												className={styles.sliderImage2}
												src="/images/Group 1000004218.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide4"
										>
											<img
												className={styles.sliderImage2}
												src="/images/Group 1000004219.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide5"
										>
											<img
												className={styles.sliderImage2}
												src="/images/Group 1000004220.svg"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                Usability Testing in Action
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
										<span className={styles.methodology}>Methodology: </span>
										<br />
										User interviews paired with having them look at my mid-fidelity wireframes and trying to navigate them.
									</p>
								</div>
									
							</div>
                            <div className={styles.flowSection}>
								<div className={styles.askContainer2}>
									<div className={styles.askInnerContainer2}>
                                        <span className={styles.methodology}>Questions to ask in the interview: </span>
											<p className={styles.askInnerContainerP}>
                                             1. As a software developer, let’s say you’re looking for a design system. You’re going through a website that catalogs design systems and you need to pick one to use. What are you looking for the design system to have to make you pick it?
											</p>
											<p className={styles.askInnerContainerP}>
                                              2.  What do you mean by documentation/support? 
											</p>
											<p className={styles.askInnerContainerP}>
                                              3.  When looking at a design system how can you tell whether it’s customizable or not? What makes you know it is customizable?
											</p>
									</div>
								</div>
							</div>
                            <div className={styles.flowSection}>
								<div className={styles.askContainer2}>
									<div className={styles.askInnerContainer2}>
                                        <span className={styles.methodology}>Questions to ask when looking at the wireframes: </span>
											<p className={styles.askInnerContainerP}>
                                             1. Where would you click first? What do you expect to happen when you click there?
                                            </p>
											<p className={styles.askInnerContainerP}>
                                              2. What do you expect to happen when you click there?
											</p>
											<p className={styles.askInnerContainerP}>
                                              3. How easy was this task to complete?
                                            </p>
                                            <p className={styles.askInnerContainerP}>
                                              4. What could have made it easier? What was difficult about it?
                                            </p>
                                            <p className={styles.askInnerContainerP}>
                                              5. What needs to change in this interface?
                                            </p>
                                            <p className={styles.askInnerContainerP}>
                                              6. What about that feature don’t you like?
                                            </p>
                                            <p className={styles.askInnerContainerP}>
                                              7. Why do you like that feature? What about it works well?
                                            </p>
									</div>
								</div>
							</div>
						</div>
                        <div className={styles.understandTitle}>
							<h1>INITIATE</h1>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                High-Fidelity Prototyping
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
                                        With my mid-fidelities approved, I moved on to Hi-fidelity prototypes. Iterating on my concepts and talking to users– software developers– was key. I asked them clarifying questions about what they want to see on the site. More specifically, I asked them to define what an MVP style guide is to them– when presented with a variety of style guides, knowing they all already have code attached to them, how do you decide which one to pick? The other things I was balancing when creating the high-fidelity prototypes was the problem statement, the user stories, and the competitive research.
                                    </p>
								</div>
                                <div className={styles.questionBox}>
										<button
											className={styles.questionButton}
											onMouseEnter={onButtonClickHandler1}
											onMouseLeave={onButtonClickHandler1Leave}
										>
											<div className={styles.deliverableBox2}>
												<p className={styles.deliverable}>
                                                    What Users Wanted
												</p>
												<FontAwesomeIcon
													icon={faChevronDown}
													className={styles.deliverableIcon}
												></FontAwesomeIcon>
											</div>
										</button>
										<div className={styles.boxInside} style={{ opacity: showMessage1 }}>
											<p className={styles.boxTextQuestion}>
												1. A prominent hero Image
												<br />
												2. Consistent CTAs
												<br />
												3. Data and reviews
												<br />
												4. Human-focused imagery
												<br />
												5. Simple, no frills design
												<br />
											</p>
										</div>
                                </div>
                                <div className={styles.flowTask}>
									<p className={styles.defineBody2}>
                                        Problem Statement:
                                    </p>
								</div>
								<div className={styles.resultsBox2}>
                                    <div className={styles.insightsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004221.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                     </div>
                                    <div className={styles.stepsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004222.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                    </div>
							    </div>
                                <div className={styles.flowTask}>
									<p className={styles.defineBody2}>
                                        User Story:
                                    </p>
								</div>
								<div className={styles.resultsBox2}>
                                    <div className={styles.insightsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004223.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                     </div>
                                    <div className={styles.stepsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004224.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                    </div>
                                    <div className={styles.stepsBox2}>
                                        <Image
                                        className={styles.moscowImage}
                                        src="/images/Group 1000004225.svg"
                                        fill={true}
                                        alt="Art picture 1"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        />
                                    </div>
							    </div>
                            </div>
                        </div>
                        <div className={styles.understandTitle}>
							<h1>AN INVENTORY</h1>
						</div>
                        <div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
                                Next Steps
							</h1>
							<div className={styles.taskListBox}>
								<div className={styles.analyzeTextSection3}>
									<ul className={styles.analyzeList}>
										<li className={styles.analyzeBullets}>
                                            Make mobile and tablet screens
										</li>
										<li className={styles.analyzeBullets}>
                                            Tree testing
										</li>
										<li className={styles.analyzeBullets}>
                                            Present to my stakeholder
										</li>
                                        <li className={styles.analyzeBullets}>
                                            Have stakeholder create the code for the designs
										</li>
									</ul>
								</div>
							</div>
                            <div className={styles.defineContainer3}>
                                <h1 className={styles.defineSubTitle2}>
                                    Looking Inward
                                </h1>
                                <div className={styles.flowSection}>
                                    <div className={styles.flowTopSection}>
                                        <p className={styles.defineBody}>
                                            Upon reflecting on this journey, I can’t help but be proud of everything I accomplished. I took a mere idea from someone’s head and designed it into existence. I went from a few sentences of an explanation to a real concept, something to run with.
                                        </p>
                                    </div>
                                    <div className={styles.flowTopSection}>
                                        <p className={styles.defineBody}>
                                            Along the way, I had to not only find users, but had to find different types of users- both software developers and product designers. Balancing the problem statement and the user stories was at time difficult; I had to make sure I met the needs of both. On top of that, I had to make sure I was tending to my stakeholder and his feedback and the feedback of colleagues and users. I really learned the skill of pleasing multiple parties that have very different motivations.
                                        </p>
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
