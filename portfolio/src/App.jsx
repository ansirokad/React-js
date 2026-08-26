import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import robot from "./assets/robot.png";
import "./App.css";
function App() {
  return (
    <>
      <header className="position-absolute w-100 p-3">
        <nav className="container d-flex justify-content-between align-items-center">
          <div className="fw-bold fs-2 text-white">LOGO</div>
          <section className="d-flex gap-3">
            <div className="d-flex align-items-center">
              <ul className=" list-unstyled d-flex align-items-center gap-4 fs-5 m-0">
                <li>
                  <a href="#home" className="text-decoration-none text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skill" className="text-decoration-none text-white">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#project" className="text-decoration-none text-white">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-decoration-none text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-3">
              <ul className="list-unstyled d-flex align-items-center gap-2 fs-5 m-0">
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    <FaFacebook />
                  </a>
                </li>
              </ul>
              <button className="btn btn-outline-light">Let's Connect</button>
            </div>
          </section>
        </nav>
      </header>
      <section id="home" className="hero-section ">
        <div className="container text-white d-flex gap-5  h-100 justify-content-center align-items-center">
          <div className="d-flex flex-column flex-grow-1">
            <p className="heading  fs-3 px-2 py-1">Welcome to my Portfolio</p>
            <h1 className="display-3 fw-bold">
              Hi! I'm Ansi Full-Stack Developer
            </h1>
            <p className="fs-5 d-grid gap-3">
              I create modern, responsive and user-friendly websites using
              React, Bootstrap and modern web technologies.
            </p>
            <p className="fs-4 mt-5">Let's Connect ➝</p>
          </div>
          <div className="d-flex justify-content-center flex-grow-1 ">
            <img width={500} src={robot} alt="" />
          </div>
        </div>
      </section>
      <section id="skill" className="skill-section">
          <div>
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem dolor illo voluptate reiciendis eum! Totam quis sunt earum reiciendis sapiente, quibusdam cum, veritatis in nemo quo saepe a velit.</p>
          </div>
      </section>
    </>

    // <>
 


    //   <section id="skill" className="skill-section">
    //     <div class="container text-center">
    //     <h2 class="mb-4">My Skills</h2>

    //     <div class="row justify-content-center">
    //       <div class="col-md-3 mb-4">
    //         <div class="circle">
    //           <div class="circle-inner">90%</div>
    //         </div>
    //         <h5 class="mt-3">HTML</h5>
    //       </div>

    //       <div class="col-md-3 mb-4">
    //         <div class="circle">
    //           <div class="circle-inner">85%</div>
    //         </div>
    //         <h5 class="mt-3">CSS</h5>
    //       </div>

    //       <div class="col-md-3 mb-4">
    //         <div class="circle ">
    //           <div class="circle-inner">80%</div>
    //         </div>
    //         <h5 class="mt-3">JavaScript</h5>
    //       </div>

    //       <div class="col-md-3 mb-4">
    //         <div class="circle ">
    //           <div class="circle-inner">75%</div>
    //         </div>
    //         <h5 class="mt-3">React</h5>
    //       </div>
    //     </div>
    //   </div>
    //   </section>

    //   <section id="project" className="project-section">
    //     <div className="container text-center">
    //        <h2 class="mb-4">Projects</h2>

    //     </div>
    //   </section>

    // </>
  );
}

export default App;
