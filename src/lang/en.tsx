const Messages = {
    resources: {
        en: {
            translation: {
                "header.about": "About",
                "header.experience": "Experience",
                "header.projects": "Projects",
                "header.contact": "Contact",

                "landing.title": "Christian Redfern",
                "landing.subtitle": "Welcome to my portfolio website!",
                "landing.tagline": "I create robust APIs and web components that empower businesses of all sizes.",

                "about.header": "About Me",
                "about.subheading": "Full Stack Software Engineer",
                "about.paragraphOne": "Have you ever wanted to turn your D&D campaign into a web app? That's exactly what sparked my coding journey back in 2017. Since then, I've honed my skills as a software engineer, building complex technical solutions for the UK civil service. From implementing new user-facing designs to creating a new caching pattern, I've had the opportunity to deliver excellent results to amazing clients. Now, I'm eager to leverage my full-stack expertise as a freelance polyglot developer with experience in a wide range of frontend, backend and database technologies.",
                "about.paragraphTwo": "Outside of code, I find balance through strength training, experimenting with new recipes in the kitchen, and creating pixel art. These passions fuel my creativity and problem-solving skills, which I bring to every project.",

                "experience.header": "My Experience",
                "experience.present-year": "Now",
                "experience.heading.2025": "Independent Developer",
                "experience.entry.2025": "I started the year as someone with over three years of software engineering industry experience and zero commitments. I had always wanted to pursue selling my skills as a contractor, drawn in by the allure of being my own boss, deciding my own hours and ways of working and giving me more time to visit my partner in the US. There's no time like the present, so why not use this year to build my talents and my brand?\n" +
                    "<br/> <br/>" +
                    "Currently in the works is a loyalty stamp app for small businesses to provide a digital alternative to physical cards, a machine learning project to analyse voter intentions, and a browser extension to allow for the alteration of kerning and line spacing for users who have trouble reading text on some websites.\n",

                "experience.heading.2024": "Capgemini Software Engineer Year 2",
                "experience.entry.2024": "I worked as part of a live services and on-call team for the UK Civil Service. The second year of the job had me providing proof of concepts for complex technical issues spanning the many services we managed. An example is the creation of a new pattern for form caching, which required the complete rewrite of an entire user journey within the selected service. This resulted in a cleaner, more modern codebase which was far easier to work with and could be implemented across all of the client's services.\n" +
                    "<br/> <br/>" +
                    "As one of the longest-running developers on the team, I introduced new team members to the dozens of distinct microservices we managed. A lot of Scala developers transition from Java, and as someone who did the same, I was able to provide a relatable perspective.\n" +
                    "<br/> <br/>" +
                    "Eventually, I ended up leaving Capgemini to pursue a Master's degree full-time to help cover weak points I may have developed from primarily being self-taught. This ended up being a huge mistake, as the quality of material covered at a level 7 non-computer science tech degree doesn't compare favourably to the knowledge gained implicitly through work experience. Afterwards, I took my career break into a new direction, figuring out what I wanted to do now I was in a position free from commitments.\n",

                "experience.heading.2023": "Capgemini Software Engineer Year 1",
                "experience.entry.2023": "After moving to Capgemini through a contract conversion, I was at the point in my career where I could take on more substantial work. The most notable was the migration to a new HTTP reads pattern, which initially wasn't compatible with some of our older services. This meant that heavy refactoring was needed, occasionally resulting in codebases being unrecognisable from how they were a month before. It was during this time I realised just how far from finished a tech product is once it's released to the public, as there's always code which can be optimised, new libraries and versions which can be leveraged, and bugs to fix.\n" +
                    "<br/> <br/>" +
                    "Additionally, I was firmly embedded in the on-call team operated by a small group within the main team. This had us attending to live issues across services in our region through monitoring, resolving and escalating alerts to the relevant parties. Incidents had the potential to impact millions of people and cause severe reputational damage to the client, so speed, insight into the impacted services, and decisiveness in decision-making were required.\n",

                "experience.heading.2022": "QA Ltd Consultant",
                "experience.entry.2022": "My first year with the UK Civil Service client had me embedded in a team developing a new service with a very short deadline. As a rookie developer at the time, I proactively took the role of prototype developer, creating a HTML/CSS/JavaScript web app hosted on Heroku for the senior developers to work off of. Having a high-fidelity interactable prototype is very important for developing applications with very specific functions and intentions for the user experience. Having this prototype helped keep the vision of the designers in line with the work of the developers as stakeholders continued to add desired changes to the project.\n" +
                    "<br/> <br/>" +
                    "After this, I was moved to the live services team mentioned above, which provided a far more suitable learning environment for a new developer.\n",

                "experience.heading.2021": "QA Ltd Trainee",
                "experience.entry.2021": "QA Ltd was how I first got my foot in the door in the tech industry. I joined as a trainee and was provided a 12-week intensive training course that taught me Java, JavaScript, GCP, MySQL, Jenkins and Agile with a project-based approach. This solidified my self-taught practical experience with exposure to the technologies which would make me thrive in the industry. During this time, I created an inventory management system in Java, another in Scala, a D&D web app to demonstrate what I learnt since my very first coding project in 2017, and a fully functional cinema ticket booking system.\n" +
                    "<br/> <br/>" +
                    "At the end of the year, QA deployed me to my first position as a professional software developer, working for the civil service client mentioned in the years above.\n",

                "experience.heading.2020": "Indie Game Developer Year 2",
                "experience.entry.2020": "I was a security guard by day, game developer by night, working nonstop to balance the two. I was building a grand strategy game set in a world I had been working on for over five years, and while my developer prowess had grown a lot since 2017, my comprehension of scope had not. By the end of the year, the game was less a passion project I intended to sell and more a sandbox of new ideas. Regardless, my security work had become more intense during this time, with me generally working 70-80 hours per week at multiple locations across the Isle of Wight. \n" +
                    "<br/> <br/>" +
                    "This dissonance between what I had to do and what I wanted to do eventually emboldened me to take a leap of faith and leave my security job to pursue a career which matched my passion. Fortunately, it didn't take long for my passion to be noticed by QA Ltd, making it the best decision I ever made.\n",

                "experience.heading.2019": "Indie Game Developer Year 1",
                "experience.entry.2019": "It started when a friend showed me GameMaker Studios 2, a platform which taught me that game development wasn't nearly as inaccessible as I thought it would be. I've had a massive interest in creative writing for as long as I could remember, but never an outlet I found suitable for it. I wrote some terrible novels during High School and A-Level, but as someone who rarely reads books it was never a great match. The idea of creating a video game was a dream that GameMaker made feasible, so I spent the next two years tirelessly creating my dream game. While the year above tells you how that ended, what I may have not gotten across is how valuable this experience was for my career. In a very short time I went from someone with zero programming experience to a competent self-taught developer who could create solutions in code pretty efficiently, though with a lot of gaps only industry experience could fill.",

                "experience.heading.2018": "Web Practitioner",
                "experience.entry.2018": "My first exposure to programming was through the creation of a D&D web app I decided to create to compliment a campaign I was running. The intention was to create an immersive portal for my friends to use to gain clarity on the custom world they were playing in. I had no prior coding experience at this time, and certainly had no idea of the journey it would lead me on. I had recently finished my mechanical engineering HND and concluded that I hated mechanical engineering, which made me very uncertain of my future. Additionally, I had started a career in frontline security, lacking the confidence to explore anything technical after not vibing with mechanical engineering. My software development hobby is what freed me from a path I was not supposed to be on, building the foundation for my skill and passion for the craft.\n",

                "experience.read-more": "Click to Open",
                "experience.read-less": "Click to Close",

                "projects.header": "Personal Projects",

                "contact.header": "Contact",
                "contact.name": "Your preferred name:",
                "contact.email": "Your email:",
                "contact.message": "Message:",
                "contact.send": "Send Message",
                "contact.confirmation-head": "Thank you for your message!",
                "contact.confirmation-body": "I'll get back to you soon through email",
                "contact.error-head": "Sorry, something went wrong on my end",
                "contact.error-body": "Please refresh and try again, or reach out to me on Upwork or LinkedIn",

                "footer.copyright-date": "2024.",
                "footer.copyright-name": "Christian Redfern.",
                "footer.copyright-notice": "All rights reserved."

            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
    "escapeValue": false
    }
}

export default Messages;