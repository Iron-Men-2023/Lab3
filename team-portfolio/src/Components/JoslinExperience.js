import React from 'react';
import Section from "./Section";
import "./JoslinExperience.css"
import Back from "../img/arrow.png";
import {Link} from "react-router-dom";

function JoslinExperience(props) {
    const codaTasks=["• Worked on adding formatting to formula types, a key feature requested by thousands of users.",
                     "• Worked directly with team to get better grasp of software engineering",
                     "• Performed frequent demos, showing progress to the rest of the company"
    ]
    const KPTasks = ["• One of 71 Engineering Fellows selected from a pool of over 3000 applicants.",
                     "• Participated in sessions and talks given by founders, entrepreneurs and luminaries in the tech industry.",
                     "• Built a strong network with high up and coming tech workers"]
    const IRRCTasks = ["• Worked directly with other teams to automate tedious tasks helping them save on average 8 hours of time per week",
                       "• Wrote software to parse reading and writing data of students from K-12 and suggesting new teaching techniques.",
                        "•Maintained already existing applications and worked on pushing regular updates to ensure user satisfaction."
    ]
    const TATasks = ["• Worked with over 400 students to give them a good understanding of programming in C++ and Java",
                     "• Held tutoring sessions outside of class to teach students the fundamentals of programming",
                     "• Taught students advanced software design topics such as multithreading and Networking."]
    return (
        <div className="experience">
            <Link to="/joslin" className="link">
                <img src={Back} className="back"/>
            </Link>
            <Section title="Software Engineer Intern: Coda Project Inc: 05/2022-08/2022" tasks={codaTasks}/>

            <br/>
            <Section title="Engineering Fellow: Kleiner Perkins: 05/2022-08/2022" tasks={KPTasks}/>
            <br/>
            <Section title="Web Developer: Iowa Reading Research Center: 02/2021-Current" tasks={IRRCTasks}/>
            <br/>
            <Section title="Teaching Assistant: University Of Iowa: 08/2020-Current" tasks={TATasks}/>
        </div>
    );
}

export default JoslinExperience;