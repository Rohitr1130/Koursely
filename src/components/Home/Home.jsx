import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import BannerSection from "./BannerSection"
import Marquee from "../Marquee/Marquee"
import WcuSection from "./WcuSection"
import GrowSection from "./GrowSection"
import CourseSection from "./CourseSection"
import Featured from './Featured'
import CoursesWork from "./CoursesWork"
import OurTeachers from "./OurTeachers"
import Form from "./Form"



const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
      mirror: false 
    });
  }, []);

  return (
    <div>
      <BannerSection/>
      <Marquee/>
      <WcuSection/>
      <GrowSection/>
      <CourseSection/>
      <Featured/>
      <CoursesWork/>
      <OurTeachers/>
      <Form/>
    </div>
  )
}

export default Home