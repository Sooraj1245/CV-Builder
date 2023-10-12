import { v4 as uuidv4 } from "uuid";
import samplePicture from "../assets/omen.jpeg"

const sampleCV = {
    fileName: "sri.jpg",
    fileSrc: samplePicture,
    info:{
        firstname: "Sooraj",
        lastname:"Raj",
        niche: "Full Stack",
        about:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maiores sequi adipisci accusantium illum tempore numquam, minima totam non velit quibusdam voluptatem quod ex? Delectus fuga tempore fugiat dolorem quod!",
        address: "India, TN, Coimbatore",
        email: "soorajrqj@gmail.com",
        phoneNumber: "+919047284073",
        portfolioLink: "https://github.com/",
    },
    education:[       
        {
            id:uuidv4(),
            place:"Model Engineering College",
            degree:"Bachelor Degree: B.Tech (Honours) in ECE and The Odin Project: Full Stack Development with MERN stack"
        },
    ],
    skills:[
        {
            id : uuidv4(),
            text: "React"
        },
        {
            id : uuidv4(),
            text: "HTML"
        },
        {
            id : uuidv4(),
            text: "CSS"
        },
        {
            id : uuidv4(),
            text: "JavaScript"
        },
        {
            id : uuidv4(),
            text: "Git"
        },
        {
            id : uuidv4(),
            text: "Figma"
        }
    ],
    experiences:[
        {
            id: uuidv4(),
            position: "Senior Software Engineer",
            company: "Google",
            startDate: "2022",
            endDate: "Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim corporis laborum error tempora, est repudiandae officia amet consequatur ullam eligendi blanditiis cumque pariatur, quasi ad praesentium a expedita consequuntur."
        }, 
        {
            id: uuidv4(),
            position: "Software Engineer",
            company: "Genshin Impact",
            startDate: "2020",
            endDate: "2022",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, ipsam! Fugiat error, ipsum unde consequuntur officiis laboriosam, odit, similique consectetur possimus perspiciatis animi iste doloremque a laborum sit numquam aliquam!"
        }   
     ]
   
}

export default sampleCV;