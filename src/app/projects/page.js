import "./Projects.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="cards">
        
        <a href="/projects/project-1">
          <div className="card">
            <div className="gray_area">
              <div className="text">Comfort Zone</div>
            </div>
          </div>
        </a>

        <a href="projects/project-2">
          <div href="projects/project-2" className="card c2">
            <div className="gray_area">
              <div className="text">Super shop</div>
            </div>
          </div>
        </a>

        <a href="projects/project-3">
          <div href="projects/project-3" className="card c3">
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
