import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "./assets/portfoliologo.png";
import robot from "./assets/robot.png";
import product from "./assets/product.jpg";
import bootstrap from "./assets/bootstrap.jpg";
import weather from "./assets/SnowImage.jpg";
import fabric from "./assets/fabric.jpg";
import rental from "./assets/rental.jpg";
import techpro from "./assets/css project.jpg";
import work from "./assets/work.jpg";

import "./App.css";
function App() {
  return (
    <>
      <header className="position-absolute w-100 ">
        <nav className="container d-flex justify-content-between align-items-center fixed-top bg-black ">
          <img className="p-0" width={160} src={logo} alt="" />
          <section className="d-flex gap-3">
            <div className="d-flex align-items-center">
              <ul className=" list-unstyled d-flex align-items-center gap-4 fs-5 m-0">
                <li>
                  <a href="#home" className="text-decoration-none ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skill" className="text-decoration-none ">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#project" className="text-decoration-none ">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="icon d-flex gap-3">
              <ul className="list-unstyled d-flex  align-items-center gap-2 fs-5 m-0">
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
              <button className="btn btn-outline-light fs-5">
                Let's Connect
              </button>
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

      <section id="skill" className="skill-section ">
        <div className="container skills">
          <h1 className="d-flex justify-content-center h1 fw-bold ">Skills</h1>

          <div className="container row d-grid gap-5">
            <main className="container d-flex gap-4">
              <div className="col-4">
                <h5>HTML</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "89%" }}>
                    89%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>CSS</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "89%" }}>
                    89%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>JavaScript</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "87%" }}>
                    87%
                  </div>
                </div>
              </div>
            </main>
            <main className="d-flex gap-4 ">
              <div className="col-4">
                <h5>BootStrap</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "89%" }}>
                    89%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>C Language</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "91%" }}>
                    91%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>C++</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "81%" }}>
                    81%
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section id="project" className="project-section  text-white">
        <div className="d-grid gap-2 p-5">
          <h1 className="d-flex justify-content-center p-3 h1 fw-bold">
            Projects
          </h1>

          <aside className="container cards">
            <main className="d-flex gap-4 justify-content-center ">
              <div>
                <img width={500} src={product} alt="" />
                <h4 className="mt-2">JS Project</h4>
                <p>
                  A fully responsive e-commerce management panel built using
                  HTML, CSS and JavaScript, offering dynamic inventory actions
                  and flawless screen adaptability right from the start.
                </p>
              </div>
              <div>
                <img width={500} src={weather} alt="" />
                <h4 className="mt-2">JS Project</h4>
                <p>
                  A fully responsive weather application built using HTML, CSS
                  and JavaScript, tracking real-time data with flawless screen
                  adaptability right from the start.
                </p>
              </div>
              <div>
                <img width={500} src={bootstrap} alt="" />
                <h4 className="mt-2">Bootstrap Project</h4>
                <p>
                  A responsive Bootstrap Proejct built using HTML and CSS. which
                  tells the bootstarp is responsive from the start.
                </p>
              </div>
            </main>
            <main className="d-flex gap-4 justify-content-center ">
              <div>
                <img width={500} src={techpro} alt="" />
                <h4 className="mt-2">CSS Project</h4>
                <p>
                  A responsive CSS Project built using HTML and CSS. which tells
                  the discover the future of innovation.
                </p>
              </div>
              <div>
                <img width={500} src={rental} alt="" />
                <h4 className="mt-2">CSS Project</h4>
                <p>
                  A responsive CSS Proejct built using HTML and CSS. which tells
                  it to booking by offering online for customer.
                </p>
              </div>
              <div>
                <img width={500} src={fabric} alt="" />
                <h4 className="mt-2">CSS Project</h4>
                <p>
                  A responsive CSS Project built using HTML and CSS . which
                  tells the Textile-collections various discount and offers are
                  visible.
                </p>
              </div>
            </main>
          </aside>
        </div>
      </section>

      <section id="contact" className="contact-section ">
        <main className="container d-flex p-5 gap-5">
          <div>
            <img src={work} alt="" />
          </div>
          <div className="inpt">
            <h1 className="fs-1 text-white fw-bold">Get In Touch</h1>
            <div className="d-flex gap-3 ">
              <main className="">
                <input type="text" placeholder="First Name" />
              </main>
              <main>
                <input type="text" placeholder="Last Name" />
              </main>
            </div>
            <div className="d-flex gap-3">
              <main>
                <input type="email" placeholder="Email Address" />
              </main>
              <main>
                <input type="number" placeholder="Phone No." />
              </main>
            </div>
            <textarea placeholder="Message" rows={5} name="" id=""></textarea>
            <button type="submit">Send</button>
          </div>
        </main>
      </section>

      <section className="subscribe">
        <div className="container sub d-flex gap-5 ">
          <main className="flex-grow-1 ">
            <h4 className="h2 fw-bold">
              Subscribe to our <br /> Newsletter <br /> & Never miss latest{" "}
              <br /> updates
            </h4>
          </main>
          <main className="d-flex subscribe-form justify-content-between   flex-grow-1 ">
            <div>
              <input
                className="mail"
                type="text"
                placeholder="Email Adderess"
              />
            </div>
            <div>
              <input
                className="submit-btn"
                type="submit"
                placeholder="Submit"
              />
            </div>
          </main>
        </div>
      </section>

      <footer>
        <main className="d-flex justify-content-between p-4 align-items-center">
          <div>
            <img className="p-0" width={150} src={logo} alt="" />
          </div>
          <aside className="d-grid gap-2 ">
            <div className="d-flex gap-3 justify-content-end">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
            <p className="text-white">Copyright 2026. All Rights Reserved</p>
          </aside>
        </main>
      </footer>
    </>
  );
}

export default App;
