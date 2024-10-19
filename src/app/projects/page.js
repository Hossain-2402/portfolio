import "./Projects.css";
import Image from "next/image";
import Link from "next/link";

import peoject_1 from "./project_1.png"
import peoject_2 from "./project_2.png"
import peoject_3 from "./project_3.png"

export default function Projects() {
  return (
    <div className="Projects">
      <div className="cards">
        
        <a href="/projects/project-1">
          <div className="card">
            <Image alt="" src={peoject_1} objectFit="cover" layout="responsive" className="project_cover_image"/>
            <div className="gray_area">
              <div className="text">Comfort Zone</div>
            </div>
          </div>
        </a>

        <a href="projects/project-2">
          <div href="projects/project-2" className="card c2">
            <Image alt="" src={peoject_2} objectFit="cover" layout="responsive" className="project_cover_image p2"/>
            <div className="gray_area">
              <div className="text">Super shop</div>
            </div>
          </div>
        </a>

        <a href="projects/project-3">
          <div href="projects/project-3" className="card c3">
            <Image alt="" src={peoject_3} objectFit="cover" layout="responsive" className="project_cover_image p3"/>
            <div className="gray_area">
              <div className="text">Chatting website</div>
            </div>
          </div>
        </a>

        <div className="layer"></div>
      </div>
    </div>
  );
}
