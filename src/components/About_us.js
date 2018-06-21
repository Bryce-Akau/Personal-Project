import React from 'react';
import aboutMePic from '../AboutMePic/IMG_7048.jpeg'
import '../css/about_us.css'

function About(){
    return(
        <div>
                <div className="about">
                    <div className="inner">
                        <img src={aboutMePic} className="jake" alt="itsame"/>
                        <br/>
                        <h1>Aloha and Welcome to JMhawaii Spearguns!</h1>
                        <br/>
                        <h2>MY STORY</h2>
                        <p>I was born and raised on the island of Oahu. I have always enjoyed swimming and being in the ocean, however it wasn’t until a couple years ago that a close friend of mine introduced me to spearfishing. The excitement of hunting for my own food pushed me to keep building my diving and hunting skills. I wanted to go diving everday, but sometimes the weather prevents that from happening. Whenever I was out of the ocean, I was thinking about being in the ocean. My friend was kind enough to let me borrow and use one of his old spearguns for half a year. I knew that I wanted to keep spearfishing so I purchased my own speargun, a wooden speargun made by another craftsman on Oahu. When I received my new speargun I took a closer look at it and thought that I could make one myself. I had many of the tools required to build a speargun already, so I just needed to learn the process. Then one day I decided to just give it a try. I learned from my mistakes as I continued to build spearguns. Building spearguns gave me something to do while I was waiting for conditions to clear up.</p>
                        <h3>WHY I WANT TO HELP PEOPLE</h3>
                        <p>The joy and satisfaction that comes from catching fish with a speargun that I made with my own hands is fantastic. I want others to experience that same satisfaction. I can build a speargun for you, no problem. However, I can also teach and direct you so that you can have the knowledge, tools, and supplies to build a speargun for yourself.</p>
                        <h3>THE GOAL OF MY SITE</h3>
                        <p>The purpose of this website is to allow people to have the ability to see my work, to purchase JMhawaii spearguns, and to offer assistance to those on the journey to build their own wooden spearguns.</p>
                        <p>If you ever have any questions, feel free contact me or leave a message below.</p>
                        <br/>
                        <p>Aloha,</p>
                        <p>Jacob Medeiros</p>
                        <br/>
                        <p>jmhawaiispearguns.com</p>
                    </div>
                </div>
                
       </div> 
    )
}

export default About;