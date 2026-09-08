import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
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
      <header className="position-absolute w-100 p-3 ">
        <nav className="container d-flex justify-content-between align-items-center fixed-top bg-black">
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
                  <a
                    href="#project"
                    className="text-decoration-none text-white"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-decoration-none text-white"
                  >
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
      {/* <section>
        <div>
          <h1>About</h1>
          <div>
            <main>
              <img width={150} src={robot} alt="" />
            </main>
            <main>
              <p>
                Hello! I am a passionate full stack web developer. I specialize
                in HTML, CSS, Bootstrap and JavaScript.
              </p>
              <p>
                I aim to build user-friendly and simple to use website that
                brings ideas and make services easy to use.
              </p>
            </main>
          </div>
        </div>
      </section> */}

      <section id="skill" className="skill-section ">
        <div className="container skills">
          <h1 className="d-flex justify-content-center h1 fw-bold ">Skills</h1>

          <div className="container row d-grid gap-5">
            <main className="container d-flex gap-4">
              <div className="col-4">
                <h5>HTML</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>CSS</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "95%" }}>
                    95%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>JavaScript</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
            </main>
            <main className="d-flex gap-4 ">
              <div className="col-4">
                <h5>BootStrap</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>C</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h5>C++</h5>
                <div className="progress">
                  <div className=" progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section id="project" className="project-section bg-black text-white">
        <div className="d-grid gap-2 p-5">
          <h1 className="d-flex justify-content-center p-3 h1 fw-bold">
            Projects
          </h1>

          <aside className="container cards">
            <main className="d-flex gap-4 justify-content-center ">
              <div>
                <img width={500} src={product} alt="" />
                <h4>JS Project</h4>
                <p>
                  A fully responsive e-commerce management panel built using
                  HTML, CSS and JavaScript, offering dynamic inventory actions
                  and flawless screen adaptability right from the start.
                </p>
              </div>
              <div>
                <img width={500} src={weather} alt="" />
                <h4>JS Project</h4>
                <p>
                  A fully responsive weather application built using HTML, CSS
                  and JavaScript, tracking real-time data with flawless screen
                  adaptability right from the start.
                </p>
              </div>
              <div>
                <img width={500} src={bootstrap} alt="" />
                <h4>Bootstrap Project</h4>
                <p>
                  A responsive Bootstrap Proejct built using HTML and CSS. which
                  tells the bootstarp is responsive from the start.
                </p>
              </div>
            </main>
            <main className="d-flex gap-4 justify-content-center ">
              <div>
                <img width={500} src={techpro} alt="" />
                <h4>CSS Project</h4>
                <p>
                  A responsive CSS Project built using HTML and CSS. which tells
                  the discover the future of innovation.
                </p>
              </div>
              <div>
                <img width={500} src={rental} alt="" />
                <h4>CSS Project</h4>
                <p>
                  A responsive CSS Proejct built using HTML and CSS. which tells
                  it to booking by offering online for customer.
                </p>
              </div>
              <div>
                <img width={500} src={fabric} alt="" />
                <h4>CSS Project</h4>
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
            <textarea  placeholder="Message" rows={5} name="" id=""></textarea>
            <button type="submit">Send</button>
          </div>
        
          
        </main>
      </section>

     <section className="subscribe">
          <div className="container sub d-flex gap-5 justify-content-center">
            <main>
              <h4>Subscribe to our Newsletter & Never miss latest updates</h4>
            </main>
            <main className="d-flex">
              <div>
                <input className="mail" type="text" placeholder="Email Adderess" />
              </div>
              <div>
                <input className="submit-btn" type="submit" placeholder="Submit" />
              </div>
            </main>
          </div>
     </section>

     <footer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero provident eum alias molestias consequuntur cumque ex, aliquid, quod, sequi fugit maiores tenetur itaque asperiores commodi unde in cupiditate voluptatum est blanditiis error? Placeat ullam dicta aut suscipit quo quos repellendus, libero sit dolor voluptates nisi nulla impedit. Consequuntur quisquam quae excepturi similique nobis sapiente rerum unde est voluptas assumenda. Nulla, sit? Voluptatem veritatis exercitationem repudiandae consequatur officiis quasi vitae nemo. Iure adipisci, repellendus iste, nam accusamus autem neque cumque quasi quaerat libero vitae, nisi amet velit veritatis laboriosam vel. Quasi optio beatae perferendis labore quam nihil ad explicabo magnam?</p>
     </footer>
    </>
  );
}

export default App;
