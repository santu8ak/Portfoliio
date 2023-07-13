import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Skills</h2>
               
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                    <h4>HTML</h4>
                    <small className="text-light">intermediate</small>
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                {' '}
                    <h4>CSS</h4>
                    <small className="text-light">intermediate</small>
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                {' '}
                    <h4>javascript</h4>
                    
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                {' '}
                    <h4>React</h4>
                    
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                {' '}
                    <h4>Redux</h4>
    
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                {' '}
                    <h4>Figma</h4>
                    
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                {' '}
                    <h4>Material UI,Tailwind,BootStrap</h4>
                   
                </div>
            </article>
            
          </div>
        </div>

                     
                     {/* {''} means empty space or tabs, newlines, etc */}
       <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                    {''}
                    <h4>Python</h4>
       
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                    {''}
                    <h4>Django</h4>
       
                </div>
            </article>
           
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                    {''}
                    <h4>Mysql</h4>
       
                </div>
            </article>
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                    {''}
                    <h4>GitHub</h4>
       
                </div>
            </article>
           
 <article className="experience__details">
<BsFillPatchCheckFill className="experience__details-icon"/>
<div>
    {''}
    <h4>Node js</h4>
 </div>
 </article>
           
            
        
            
          
            
        </div>
       </div>
      </div>
    </section>
  );
};

export default Experience;









// <article className="experience__details">
// <BsFillPatchCheckFill className="experience__details-icon"/>
// <div>
//     {''}
//     <h4>Express js</h4>
//     {/* <small className="text-light">intermediate</small>    */}
// </div>
// </article>
// <article className="experience__details">
// <BsFillPatchCheckFill className="experience__details-icon"/>
// <div>
//     {''}
//     <h4>Mongo DB</h4>
//     {/* <small className="text-light">intermediate</small>    */}
// </div>
// </article>