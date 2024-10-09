import "./About.css";
import profile_image from "./leading_image_2.jpg"

import Image from "next/image";

export default function About() {
  return (
    <div className="About">


      <div className="text_area ">
        <div className="text">
          <center>Next js | React Js | Firebase | HTML | CSS</center>

          <div className="image_and_text">
            <Image alt="no image found" src={profile_image} className="img"/>
            <div className="desc">
                I am a skilled Next js web developer with a background in building full-stack applications. Despite my expertise prioritizing Front-end websites, I can make solid and responsive FULL-STACK websites. With hands-on experience in creating dynamic and responsive websites, I specialize in developing e-commerce platforms that are both user-friendly and scalable. My expertise in Next js allows me to craft efficient, high-performance web solutions tailored to meet business needs. I specialize in developing platforms that are intuitive, scalable, and designed to convert visitors into customers.
            </div>
            -------- <span>Hossain</span>
            <div className="arrow"> Read more...  </div>
          </div>
        </div>
      </div>



    </div>
  );
}


