import HeaderBox from './components/header'
import { v4 as uuidv4 } from "uuid";
import {  useState } from 'react'
import './App.css'
import PersonalSection from './components/personal'
import WorkExp from './components/workExp'
import Education from './components/edu'
import Skills from './components/skills'
import CVrender from './components/cvrender'
import sampleCV from './components/sampleCV'



function App() {

  const root=document.documentElement;
  const defaultTheme='dark'
  const [theme,setTheme]=useState(defaultTheme);
  root.setAttribute('data-theme',theme);

  const toggleTheme=()=>{
    const newTheme=theme==='dark'?'light':'dark';
    root.setAttribute('data-theme',newTheme);
    setTheme(newTheme);
  }

  const dataModel={
    fileName: "",
    fileSrc: "",
    info:{
      firstname: "",
      lastname:"",
      niche: "",
      about: "",
      address: "",
      email: "",
      phoneNumber: "",
      portfolioLink: "",
  },
    education:[       
      {
        id:uuidv4(),
        place:"",
        degree:""
      },
    ],
    skills:[
        {
            id : uuidv4(),
            text: ""
        }
    ],
    experiences:[
        {
            id: uuidv4(),
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            description: ""
        }, 
     ]
   
};
  const [data,setData]=useState(dataModel);

  const handleData = (e)=>{
    const updatedInfo={
      ...data.info,
      [e.target.name]:e.target.value
    }
    setData({...data,info:updatedInfo});
  }


  const handleWorkData=(e,id)=>{
    const updatedInfo=data.experiences.map((element)=>{
      if(element.id===id){
        return{
          ...element,
          [e.target.name]:e.target.value
        }
      }
      return element;
    })

    setData({...data,experiences:updatedInfo});

  }

  const loadSample=()=>{
    setData(sampleCV)
  }

  const handleEduData=(e,id)=>{
    const updatedInfo=data.education.map((element)=>{
      if(element.id===id){
        return{
          ...element,
          [e.target.name]:e.target.value
        }
      }
      return element;
    });

    setData({...data,education:updatedInfo});
  }

  const deleteExp=(id)=>{
    setData({...data,experiences: data.experiences.filter((e)=>e.id!==id)});
  }

  const addEdu=()=>{
    setData({...data,education:[...data.education,{
      id:uuidv4(),
      place:"",
      degree:""
    }]})
  }
  const deleteEdu=(id)=>{
    setData({...data,education: data.education.filter((e)=>e.id!==id)});
  }

  const addExp=()=>{
    setData({...data,experiences:[...data.experiences,{
      id: uuidv4(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: ""
  }]})
  }


  const handleSkillData=(e,id)=>{
    const updatedInfo=data.skills.map((element)=>{
      if(element.id===id){
        return{
          ...element,
          [e.target.name]:e.target.value
        };
      }
      return element;
    });


    setData({...data,skills:updatedInfo});
  }

  const removeSkill=(id)=>{
    setData({...data,skills:data.skills.filter((e)=>e.id!==id)});
  }

  const addSkill=()=>{
    setData({...data,skills:[...data.skills,{
      id:uuidv4,
      text:""
    }]})
  }

  const resetCV=()=>{
    setData(dataModel);
  }

  const handlePictureUpload=(e)=>{
    const image=e.target.files[0];
    setData({...data,
      fileName:image.name,
      fileSrc:URL.createObjectURL(image)});
  }

 
  

  return (
    <>
    
      <div className='main-div'>
        <HeaderBox
        loadSample={loadSample}
        reset={resetCV}
        toggleTheme={toggleTheme}
        
        ></HeaderBox>
        
        <div className="content-container">
          <div className="left-container">
            <PersonalSection
            data={data}
            handleData={handleData}
            handlePic={handlePictureUpload}
            ></PersonalSection>

            <Education
            handleEduData={handleEduData}
            data={data}
            removeEducation={deleteEdu}
            addEducation={addEdu}>

            </Education>

            <Skills
            data={data}
            handleskillData={handleSkillData}
            removeSkill={removeSkill}
            addSkill={addSkill}></Skills>


            <WorkExp
            data={data}
            removeExperience={deleteExp}
            handleworkData={handleWorkData}
            addExperience={addExp}>
            </WorkExp>


          </div>
          <div className="right-container">
            <CVrender   data={data}></CVrender>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
