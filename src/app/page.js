 'use client';

import "./Home.css";
import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

import leading_image from "./leading_image.jpeg";
import my_image from "./leading_image_2.jpg"
import peoject_1 from "./project_1.png"
import peoject_2 from "./project_2.png"
import peoject_3 from "./project_3.png"

    // const { encode } = require('blurhash');
    // const sharp = require('sharp');
    // const fs = require('fs');


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


      <link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap" rel="stylesheet"/>

      <div className="landing_area">
        <div className="gradient_area"></div>
        <div className="main_content_area">
          <div  className="my_image_cover">
            <Image alt="" src={my_image} className="my_image"/>

            {/*div  className="my_image_lazy_loader">
                <div className="loading_circle">
                  <div className="inner_circle"></div>
                </div>
            </div>*/}

          </div>
          <div className="greetings">Hi there,</div>
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

      <div className="what_i_can_make_header_text">websites I make</div>

      <div className="what_i_can_make">
        <div className="capablity c1"></div>
        <div className="capablity c2"></div>
        <div className="capablity c3"></div>
      </div>



      {/*<div className="blur_image"></div>*/}
      <div className="footer">
        <div className="open_to_work_area">
          <div className="open_to_work_text">Open To Work </div>
          <div className="open_to_work_description">I'm excited to create a new website, where I can dive into the design and development process and bring innovative ideas to life. Working on a new project motivates me to explore creative solutions and push boundaries to deliver something truly unique.</div>
        </div>
        <div className="socials facebook"><a href="https://www.facebook.com/hossainibnaehsan" className="social_icons"><FaFacebook /></a></div>
        <div className="socials E_mail"><a href="https://hossain.ie.official@gmail.com" className="social_icons"><MdEmail /></a></div>
        <div className="socials Linked_in"><a href="#" className="social_icons"><FaLinkedin /></a></div>
      </div>

    </div>
  );
}





{/*<YouTube videoId="uxSNuQICQ-A"  opts={opts} onReady={(e)=>{ e.target.pauseVideo(); }} />*/}
