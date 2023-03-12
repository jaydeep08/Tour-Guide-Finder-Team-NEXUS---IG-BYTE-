import React from "react";
import "./index.css"

// reactstrap components
// import {
// } from "reactstrap";
import {
  
  Navbar,
 
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
// core components

import GuideCard from './index-sections/GuideCard';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
// sections for this page



const guides = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://example.com/john-doe.jpg',
    mobileNo: '123-456-7890',
    specialization: 'History',
    languages: ['English', 'Spanish'],
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://example.com/jane-smith.jpg',
    mobileNo: '987-654-3210',
    specialization: 'Art',
    languages: ['English', 'French'],
    city: 'Paris',
  },
  {
    id: 3,
    name: 'John Doe',
    photo: 'https://example.com/john-doe.jpg',
    mobileNo: '123-456-7890',
    specialization: 'History',
    languages: ['English', 'Spanish'],
    city: 'New York',
  },
  {
    id: 4,
    name: 'Jane Smith',
    photo: 'https://example.com/jane-smith.jpg',
    mobileNo: '987-654-3210',
    specialization: 'Art',
    languages: ['English', 'French'],
    city: 'Paris',
  },
  {
    id: 5,
    name: 'John Doe',
    photo: 'https://example.com/john-doe.jpg',
    mobileNo: '123-456-7890',
    specialization: 'History',
    languages: ['English', 'Spanish'],
    city: 'New York',
  },
  {
    id: 6,
    name: 'Jane Smith',
    photo: 'https://example.com/jane-smith.jpg',
    mobileNo: '987-654-3210',
    specialization: 'Art',
    languages: ['English', 'French'],
    city: 'Paris',
  },
];

const animatedComponents = makeAnimated()
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

 
  
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [specializations, setSpecializations] = useState("");
  
  
       const CallBack = (e)=>{
  setLocation(e);
  console.log(language)
}



const sandData = async (result) => {
  
  try {
    const data ={ language,specializations,location};
    console.log(data);
    const body = JSON.stringify(data);
  
    const response = await fetch("hrl" , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}


  const spec = [  { value: "Cultural Tourism", label: "Cultural Tourism" },  { value: "Eco-Tourism", label: "Eco-Tourism" },  { value: "Adventure Tourism", label: "Adventure Tourism" },  { value: "Religious Tourism", label: "Religious Tourism" },  { value: "Health and Wellness Tourism", label: "Health and Wellness Tourism" },  { value: "Wine Tourism", label: "Wine Tourism" },  { value: "Sports Tourism", label: "Sports Tourism" }]


  const lang =[  { value: "Asami", label: "Asami" },  { value: "Bengali", label: "Bengali" },  { value: "Gujarati", label: "Gujarati" },  { value: "Hindi", label: "Hindi" },  { value: "Kannada", label: "Kannada" },  { value: "Malayalam", label: "Malayalam" },  { value: "Marathi", label: "Marathi" },  { value: "Odia", label: "Odia" },  { value: "Punjabi", label: "Punjabi" },  { value: "Tamil", label: "Tamil" },  { value: "Telugu", label: "Telugu" },  { value: "Urdu", label: "Urdu" },  { value: "Sanskrit", label: "Sanskrit" },  { value: "English", label: "English" },  { value: "Konkani", label: "Konkani" },  { value: "Nepali", label: "Nepali" },  { value: "Bodo", label: "Bodo" },  { value: "Kashmiri", label: "Kashmiri" },  { value: "Maithili", label: "Maithili" },  { value: "Santali", label: "Santali" },  { value: "Sindhi", label: "Sindhi" }]
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader handleCallBack={CallBack} />
        
        <div className="main">
          {/* <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download /> */}
        </div>
        <div className="section section-navbars" style={{marginTop:"30px",marginBottom:"50px"}}>
        <Container id="menu-dropdown">
        <Row>
            <Col md="12">

            <Navbar className="bb" style={{backgroundColor:"lightskyblue"}} expand="lg">
                <Container>
                Filter By Language
                <Select
                components={animatedComponents}
                closeMenuOnSelect={false}
                options={lang}
                 isMulti
                 onChange={(e)=>setLanguage(e)}
  />
  
  Filter By Specializations
                <Select
                components={animatedComponents}
               closeMenuOnSelect={false}
                options={spec}
                isMulti
                onChange={(e)=>setSpecializations(e)}
    
  />
                
  <Button color="info" onClick={sandData}>Filter</Button>
  
                </Container>
            </Navbar>
            
            </Col>
        </Row>

       <div className="guide-cards">
        {guides.map((guide) => (
        <GuideCard key={guide.id} {...guide} />
      ))}    </div>
        </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
