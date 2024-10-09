 'use client';

import "./Home.css";
import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import Link from "next/link";

import leading_image from "./leading_image.jpeg";
import my_image from "./leading_image_2.jpg"
import peoject_1 from "./project_1.png"
import peoject_2 from "./project_2.png"
import peoject_3 from "./project_3.png"

export default function Home() {

  const opts = {
            height: "500",
            width: "500",
            top : "10vh",
            playerVars: {
                autoplay: 1,
            },
        };

  return (
    <div className="Home">


      <div className="landing_area">
        <Image alt="no image found" src={leading_image} className="gradient_area"/>
        <div className="main_content_area">
          <Image alt="no image found" src={my_image} className="my_image"/>
          <div className="greetings">Hey there ,</div>
          <div className="name_text">I am Hossain Ibna Ehsan</div>
          <div className="description_area"><p className="text_in_landing_page">I am a Web developer specializing in responsive full-stack websites and scalable platforms designed to meet business needs and convert visitors into customers.</p>
          </div>
        </div>
      </div>


      <div className="projects">

        <div className="projects_header_text">Works</div>

        <Link href="/projects/project-1" className="project p1">
          <div className="projects_nev_area">
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="main_tab">Website.com</div>
            <div className="tab_gap"></div>
          </div>
          <Image alt="no image found" src={peoject_1} objectFit="cover" layout="responsive" className="project_thumbnail"/>
        </Link>

        <Link href="/projects/project-2" className="project p2">
          <div className="projects_nev_area">
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="main_tab">Website.com</div>
            <div className="tab_gap"></div>
          </div>
          <Image alt="no image found" src={peoject_2} objectFit="cover" layout="responsive" className="project_thumbnail"/>
        </Link>

        <Link href="/projects/project-3" className="project p3">
          <div className="projects_nev_area">
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="button">
              <div className="circle"></div>
            </div>
            <div className="main_tab">Website.com</div>
            <div className="tab_gap"></div>
          </div>
          <Image alt="no image found" src={peoject_3} objectFit="cover" layout="responsive" className="project_thumbnail"/>
        </Link>

      </div>



      <div className="item"></div>


    </div>
  );
}





      {/*<YouTube videoId="uxSNuQICQ-A"  opts={opts} onReady={(e)=>{ e.target.pauseVideo(); }} />*/}
