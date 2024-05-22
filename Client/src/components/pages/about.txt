import React from 'react'
import './About.css'
import praharsh from '../assets/Praharsh.jpg'
import Snehal from '../assets/Snehal.jpeg'
import Pratibha from '../assets/Pratibha.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  return (
    <div>
        <div className="about-section">
            <br/><br/>
            <h2>Team Number 22</h2>
            <h4>TruthLens - <br/>Uncovering Fake News in the NewsFlow.</h4>
            <p style={{ color: 'white', textAlign: 'justify' }}>
            Welcome to our platform dedicated to combating the spread of misinformation in the digital age. In today's fast-paced online environment, fake news has become a prevalent issue, making it increasingly challenging to discern fact from fiction. Our mission is to empower users like you with the tools and resources needed to verify the authenticity of the information you encounter online.
            </p>
            <p style={{ color: 'white', textAlign: 'justify' }}>
            At our website, we leverage advanced techniques and algorithms to analyze the content of news articles, social media posts, and other online sources. Through methods such as fact-checking, sentiment analysis, and source verification, we assess the credibility of information to provide you with reliable insights.
            </p>
            <p style={{ color: 'white', textAlign: 'justify' }}>
            Join us in the fight against fake news by exploring our platform and learning how you can become a vigilant consumer of information in the digital landscape. Together, we can create a more informed and resilient online community.
            </p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
            <div className="row">
            <div className="column " style={{ width: '33%' }}>
                    <div className="card">
                        <img src={praharsh} alt="Praharsh" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Praharsh</h2>
                            <p className="title">Team 6 Juhu | Communication Lead</p>
                            <p style={{  textAlign: 'justify' }}>
                            With almost 2 years of professional experience in IT, I've cultivated expertise in various areas.
                             Beginning with Java, I led GUI projects, then transitioned to agile methodologies, contributing significantly to a Mental Health Web App for University Project.
                             At Taskial Solutions, I excelled as a full-stack web developer, mastering front-end and back-end technologies. 
                             Additionally, I pursued personal growth through a 12-week Harvard program, emphasising my dedication to continuous learning
                            </p>
                            <p>
                                <button className="button"><a href="mailto:gaudanipraharsh@gmail.com">Contact</a></button>
                            </p>

                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="column" style={{width: '34%'}}>
                    <div className="card">
                        <img src={Snehal} alt="Snehal" style={{width: '100%'}}/>
                        <div className="container">
                                <h2>Snehal Kudale</h2>
                                <p className="title">Team 9 Juhu | Aptitude Lead</p>
                                <p style={{ textAlign: 'justify' }}>
                                    I am an experienced Dot Net Developer with over a year of experience in designing, developing, and implementing .NET applications. My expertise lies in developing applications using Visual Studio and .NET Frameworks, specifically utilizing C#.Net and ASP.Net for web development. Additionally, I have a strong command of Microsoft SQL Server Management Studio and have experience with version control applications like Azure DevOps and VersionOne. Furthermore, I possess knowledge of Core Java, Advanced Data Structures, and MySQL.
                                </p>
                                <p>
                                    <button className="button"><a href="mailto:snehalkudaleemail@gmail.com">Contact</a></button>
                                </p>
                                <div className="social-icons">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

                  
                <div className="column" style={{width: '32%'}}>
                    <div className="card">
                    <img src={Pratibha} alt="Pratibha" style={{width: '100%'}}/>
                        <div className="container">
                            <h2>Pratibha Singh</h2>
                            <p className="title">Team 7 Juhu | Aptitude Lead</p>
                            <p style={{ textAlign: 'justify' }}>
                                I am an experienced Support Manager with almost 3 years of experience in meeting client requirements. I specialize in implementing .NET applications and Microsoft Excel. My expertise lies in developing applications, specifically using Java and .NET for web development. Additionally, I have a strong command of Java and MySQL. I possess knowledge of Core Java, advanced data structures, and databases (WPT).
                            </p>
                            <p>
                                <button className="button"><a href="mailto:singhpratibha865@gmail.com">Contact</a></button>
                            </p>
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    </div>
    
  );
};


export default About