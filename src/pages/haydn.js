import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import styles from '../styles/haydn.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function Haydn() {
  const [sliderRef] = useKeenSlider({
		mode: 'free-snap',
		slides: {
			perView: 3.5,
			spacing: 0,
		},
	});
	const [showMessage1, setShowMessage1] = useState(0);
	const [showMessage2, setShowMessage2] = useState(0);
	const [showMessage3, setShowMessage3] = useState(0);
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
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&display=swap"
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
                  Haydn: A Digital Tool Assisting Content Creators Write Copy 
								</h1>
								<p className={styles.topSubtext}>
                Content creators, writers, everyday people, need assistance with their work. Haydn is an AI-driven content generator that helps anyone who has to write content do so more quickly, easily, and impactfully. Haydn promises to generate content that is friendly and approachable, and respectable. Though it uses AI technology, Haydn remains human and shows sincerity in its writing.
								</p>
							</div>
							<div className={styles.topRightContainer}>
								<ul>
									<li className={styles.listItem}>
										<span className={styles.bold}>Client: </span> Haydn
									</li>
									<li className={styles.listItem}>
										<span className={styles.bold}>Role:</span>
										UI Designer, UX Researcher, Interaction Designer, Project
										Manager
									</li>
									<li className={styles.listItem}>
										{' '}
										<span className={styles.bold}>Tools:</span> Figma, Closed
										Cart Sort
									</li>
									<li className={styles.listItem}>
										<span className={styles.bold}>Timeline:</span> 3 weeks
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.deliverableContainer}>
							<h1 className={styles.deliverableTitle}>Deliverable Overview</h1>
							<div className={styles.deliverableSection}>
								<div className={styles.deliverableDiv}>
									<p className={styles.deliverableDivP}>Week 1: Defining the problem Space</p>
									<p className={styles.deliverableDivP}>1. Competitive Research</p>
									<p className={styles.deliverableDivP}>2. Affinity Diagramming</p>
									<p className={styles.deliverableDivP}>3. Problem Statement</p>
								</div>
								<div className={styles.deliverableDiv}>
									<p className={styles.deliverableDivP}>Week 2: Ideating and Data Collecting for a Landing Page</p>
									<p className={styles.deliverableDivP}>1. Rapid Sketching</p>
									<p className={styles.deliverableDivP}>2. Card Sort</p>
									<p className={styles.deliverableDivP}>3. Visual Ideation</p>
									<p className={styles.deliverableDivP}>4. Landing page</p>
								</div>
								<div className={styles.deliverableDiv}>
									<p className={styles.deliverableDivP}>Week 3: The Final Product</p>
									<p className={styles.deliverableDivP}>1. High-Fidelity Prototypes of App</p>
									<p className={styles.deliverableDivP}>2. Wireframe annotations</p>
								</div>
							</div>
						</div>
						<div className={styles.askContainer}>
							<div className={styles.askInnerContainer}>
								<h1 className={styles.askTitle}>The Ask</h1>
								<p className={styles.askSubtext}>
									Content creators everywhere are looking for ways to make their
									writing more efficient. Haydn came to me with a style guide,
									branding, and imagery. WHat they needed was a landing page and
									an app. Haydn is a digital tool powered by AI to create
									written content, and the landing page and app needed to
									represent that.
								</p>
							</div>
						</div>
						<div className={styles.understandTitle}>
							<h1>THE PROCESS</h1>
						</div>
						<div className={styles.defineContainer3}>
							<h1 className={styles.defineSubTitle}>
								Comparing Haydn With Its Competitors
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
										The purpose of competitive analysis for Haydn was twofold:
										for one, I needed to create the context for which this tool
										falls in. Second, I needed to determine that the branding
										matches the research. Though Haydn came with a color scheme,
										fonts, and images, the color scheme and the fonts didn't
										match the rest of the branding-the warmth they wanted to
										give the robotic nature of AI. In doing competitive
										research, I found that other websites in the same realm had
										a few themes.
									</p>
								</div>
								<div>
									<div className={styles.questionBox}>
										<button
											className={styles.questionButton}
											onMouseEnter={onButtonClickHandler1}
											onMouseLeave={onButtonClickHandler1Leave}
										>
											<div className={styles.deliverableBox2}>
												<p className={styles.deliverable}>
													Competitive Analysis Themes
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
								</div>
							</div>
							<h1 className={styles.defineSubTitle}>
								Creating Navigation Architecture
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
										After completing the competitive analysis, I created a site
										map. This was the natural next step becuase we had so mnay
										assets so we needed direction to begin figuring out the
										necessary navigation items to provide and if the
										organization and information architecture I created makes
										sense to users.
									</p>
								</div>
							</div>
							<h1 className={styles.defineSubTitle2}>
								Matching the Mental Model to the Navigation
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.askContainer}>
									<div className={styles.askInnerContainer}>
										<p className={styles.askSubtext}>
											<span className={styles.boldText}>The "Why?":</span> I tested this product because I
											wanted to validate whether the navigation of the landing
											page made sense to users and was efficent for users of all
											types to use. I needed to validate that the navigation
											matches the mental model.
										</p>
									</div>
								</div>
								<div className={styles.askContainer}>
									<div className={styles.askInnerContainer}>
										<p className={styles.askSubtext}>
											<span className={styles.boldText}>The "How?":</span> I conducted a closed card sort on relevant users. I measured how well the users were able to correctly place the cards in order to validate how I sorted the cards. The behavior of the users is how well they sorted the cards. There was a lot of overlap in how users sorted the cards and for the most part they sorted them the way I did. The attitude is how well the users were able to sort the card and those included: blog, personal, business, and contact.
										</p>
									</div>
								</div>
								<div className={styles.flowContainer3}>
									<Image
										className={styles.moscowImage}
										src="/images/haydn card sort.svg"
										fill={true}
										alt="Art picture 1"
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
              <div className={styles.boxContainer}>
                <div className={styles.defineBoxes2}>
                  <div className={styles.box3}>
                    <button
                      className={styles.deliverableButton}
                      onMouseEnter={onButtonClickHandler2}
                      onMouseLeave={onButtonClickHandler2Leave}
                    >
                      <div className={styles.contextBox2}>
                        <p className={styles.deliverable}>
                          Insights
                        </p>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={styles.deliverableIcon}
                        ></FontAwesomeIcon>
                      </div>
                    </button>
                    <div style={{ opacity: showMessage2 }}>
                      <ul className={styles.analyzeList}>
                        <li className={styles.analyzeBullets}>
                          Reviews of schools
                        </li>
                        <li className={styles.analyzeBullets}>Built in maps</li>
                        <li className={styles.analyzeBullets}>
                          Extensive search filters
                        </li>
                        <li className={styles.analyzeBullets}>
                          Ratings and reviews
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.box3}>
                    <button
                      className={styles.deliverableButton}
                      onMouseEnter={onButtonClickHandler3}
                      onMouseLeave={onButtonClickHandler3Leave}
                    >
                      <div className={styles.contextBox2}>
                        <p className={styles.deliverable}>
                          Action Steps
                        </p>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={styles.deliverableIcon}
                        ></FontAwesomeIcon>
                      </div>
                    </button>
                    <div style={{ opacity: showMessage3 }}>
                      <ul className={styles.analyzeList2}>
                        <li className={styles.analyzeBullets2}>
                          Access to parent forums and discussion boards
                        </li>
                        <li className={styles.analyzeBullets2}>
                          Up-to-date news and information about education {' '}
                        </li>
                        <li className={styles.analyzeBullets2}>
                          Mobile application
                        </li>
                        <li className={styles.analyzeBullets2}>
                          An all-in-one digital tool that puts all the best
                          features of the competitors in one place
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
							<h1 className={styles.defineSubTitle3}>Finalized Site Map</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowContainer3}>
									<Image
										className={styles.moscowImage}
										src="/images/haydn site map.svg"
										fill={true}
										alt="Art picture 1"
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
							<h1 className={styles.defineSubTitle}>
								Mid-Fidelity Landing Page
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
                  The Mid-fidelity prototypes were another asset I was provided with. I used these to further test the navigation with users. Furthermore, Haydn’s mid-fidelity wireframes gave us a framework for the high-fidelity landing page I was tasked with creating. 
									</p>
									<p className={styles.defineBody}>
                  I determined the mid-fidelity prototype layouts, strong hero image, and clean, modern link aligned with the branding and competitive analysis. 
									</p>
								</div>
							</div>
							<div className={styles.moscowMethodContainer3}>
								<Image
									className={styles.moscowImage}
									src="/images/haydn midfi desktop.svg"
									fill={true}
									alt="Art picture 1"
									style={{
										objectFit: 'contain',
										width: '100%',
										height: '100%',
									}}
								/>
							</div>
							<div className={styles.understandTitle}>
								<h1>SOLUTIONS</h1>
							</div>
							<h1 className={styles.defineSubTitle}>
								The Iteration Process of High-Fidelity Renderings
							</h1>
							<div className={styles.flowSection}>
								<div className={styles.askContainer2}>
									<div className={styles.askInnerContainer2}>
										<ul>
											<li className={styles.askInnerContainer2LI}>
												Based on feedback from supervisors and peers, I changed
												the font pairing I picked based on competitive analysis.
												The pairing was deemed too extreme of a contrast and the
												body copy leaned too heavily on the robotic feel.{' '}
											</li>
											<li className={styles.askInnerContainer2LI}>
												The bright green CTAs did not meet accessibility
												standards.{' '}
											</li>
											<li className={styles.askInnerContainer2LI}>
												The reviews section needed to be reimagined based on
												circling back to competitive analysis.
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={styles.resultsBox2}>
								<div className={styles.insightsBox2}>
                    <Image
                      className={styles.moscowImage}
                      src="/images/haydn final 1.svg"
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
                      src="/images/haydn final 1.svg"
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
              <h1 className={styles.defineSubTitle2}>
                The Final Landing Page
							</h1>
              <div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
                  The final landing page stayed consistent with the brand, color scheme, human-imagery, and data points from the competitive analysis. The competitive analysis showed that landing pages in this realm are to the point with no excess design; the colors used are vibrant, but they are used sparingly to emphasize the humanness behind the machine that is AI. Along with that, human centered imagery was key and showing data on who is using the tool and reviews of how much they like it were prominent features of the landing pages. 
									</p>
									<p className={styles.defineBody}>
                  Some of the branding Haydn brought to me, specifically the font pairing and color schemes, did not align with the competitive analysis. These two things were too robotic and dull. Hence the change of color palette and font pairing to match the rest of the brand and analysis of the competition.
									</p>
								</div>
							</div>
              <div className={styles.moscowMethodContainer2}style={{
                        marginTop: '-5%'
                      }}>
								<Image
									className={styles.moscowImage}
									src="/images/haydn macbook.svg"
									fill={true}
									alt="Art picture 1"
									style={{
										objectFit: 'contain',
										width: '100%',
										height: '100%',
									}}
								/>
							</div>
              <h1 className={styles.defineSubTitle}>
                The Mobile Application
							</h1>
              <div className={styles.flowSection}>
								<div className={styles.flowTopSection}>
									<p className={styles.defineBody}>
                  Haydn provided me with some assets for the accompanying mobile application. While following the same style guide and tenants of the landing page, I created a mobile high fidelity prototype based on Human Interface Guidelines for Apple products.
									</p>
								</div>
							</div>
              <div className={styles.imageSliderContainer}>
									<div ref={sliderRef} className="keen-slider">
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide1"
										>
											<img
												className={styles.sliderImage}
												src="/images/haydn final 1.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide2"
										>
											<img
												className={styles.sliderImage}
												src="/images/haydn final 2.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide3"
										>
											<img
												className={styles.sliderImage}
												src="/images/haydn final 3.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide4"
										>
											<img
												className={styles.sliderImage}
												src="/images/haydn final 4.svg"
											/>
										</div>
										<div
											style={{ marginLeft: '0vw' }}
											className="keen-slider__slide number-slide5"
										>
											<img
												className={styles.sliderImage}
												src="/images/hadyn final 5.svg"
											/>
										</div>
									</div>
								</div>
						</div>
            <div className={styles.understandTitle}>
							<h1>IN SUMMATION</h1>
						</div>
            <div className={styles.boxContainer2}>
            <div className={styles.defineBoxes2}>
								<div className={styles.box4}>
									<button
										className={styles.deliverableButton2}
										onMouseEnter={onButtonClickHandler2}
										onMouseLeave={onButtonClickHandler2Leave}
									>
										<div className={styles.contextBox3}>
											<p className={styles.deliverable}>
												Key Takeaways
											</p>
											<FontAwesomeIcon
												icon={faChevronDown}
												className={styles.deliverableIcon}
											></FontAwesomeIcon>
										</div>
									</button>
									<div style={{ opacity: showMessage2 }}>
										<ul className={styles.analyzeList}>
											<li className={styles.analyzeBullets}>
												Reviews of schools
											</li>
											<li className={styles.analyzeBullets}>Built in maps</li>
											<li className={styles.analyzeBullets}>
												Extensive search filters
											</li>
											<li className={styles.analyzeBullets}>
												Ratings and reviews
											</li>
										</ul>
									</div>
								</div>
								<div className={styles.box4}>
									<button
										className={styles.deliverableButton2}
										onMouseEnter={onButtonClickHandler3}
										onMouseLeave={onButtonClickHandler3Leave}
									>
										<div className={styles.contextBox3}>
											<p className={styles.deliverable}>
												Next Steps
											</p>
											<FontAwesomeIcon
												icon={faChevronDown}
												className={styles.deliverableIcon}
											></FontAwesomeIcon>
										</div>
									</button>
									<div style={{ opacity: showMessage3 }}>
										<ul className={styles.analyzeList}>
											<li className={styles.analyzeBullets}>
												Access to parent forums and discussion boards
											</li>
											<li className={styles.analyzeBullets}>
												Up-to-date news and information about education {' '}
											</li>
											<li className={styles.analyzeBullets}>
												Mobile application
											</li>
											<li className={styles.analyzeBullets}>
												An all-in-one digital tool that puts all the best
												features of the competitors in one place
											</li>
										</ul>
									</div>
								</div>
							</div>
            </div>
              <div className={styles.reflectingContainer}>
								<h1 className={styles.defineSubTitle}>
									Reflecting on the Project
								</h1>
							</div>
							<div className={styles.askContainer}>
								<div className={styles.reflectInnerContainer}>
									<p className={styles.reflectSubtext}>
                  The Haydn project was a valuable design exercise in learning to balance client desires with user needs and preferences. My final design was definitely somewhat of a combination of what the client, Haydn, envisioned and what user feedback and competitive research revealed about content creators and their preferences for AI tools to help them. 
									</p>
									<br />
									<br />
									<p className={styles.reflectSubtext}>
                  The Haydn project required me to juggle a lot of deliverables. The landing page and the mobile application were connected but separate and it forced me to iterate again and again. I leaned heavily on competitive analysis for inspiration and understanding of the users and the context that Haydn sits in. In synthesizing feedback and competitive research and by honing in on usability, I was able to deliver an appealing product for content creators and anyone that wants to write with more ease.
									</p>
								</div>
							</div>
					</div>
				</div>
			</main>
		</>
	);
}
