function App() {
  return (
    <>
      <header id="masthead" className="site-header" data-anchor-target=".hero" data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
        <nav id="primary-navigation" className="site-navigation">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="#hero" className="site-logo"><img src="/personal-portfolio/assets/img/aks.png" alt="logo" /></a>
                </div> {/* /.navbar-header  */}``
                <div className="main-menu" id="portfolio-perfect-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="page-scroll"><a href="#hero">Home</a></li>
                        <li className="page-scroll"><a href="#about">About</a></li>
                        <li className="page-scroll"><a href="#service">Service</a></li>
                        <li className="page-scroll"><a href="#portfolio">Portfolio</a></li>
                        <li className="page-scroll"><a href="#contact">Contact</a></li>
                    </ul> {/* /.navbar-nav  */}
                </div> {/* /.navbar-collapse  */}
            </div>
        </nav> {/* /.primary-navigation  */}
    </header> {/* /#header  */}
    <div id="hero" className="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Aerrol Kyle Santos</h1>
                    <div className="page-scroll">
                        <p className="job-title">UI/UX Designer</p>
                        <a href="#contact" className="btn btn-fill ">Hire me</a>
                        <div className="clearfix visible-xxs"></div>
                        <a href="#portfolio" className="btn btn-border">Explore more</a>
                    </div>
                </div>
                <div className="col-md-6 text-right">
                    <img src="/personal-portfolio/assets/img/erol4.png" alt="erol    " />
                </div>
            </div>
        </div>
    </div> {/* /.hero  */}
    <main id="main" className="site-main">
        <section id="about" className="site-section section-about text-center">
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>About</h2>
                        <img src="/personal-portfolio/assets/img/lines.svg" className="img-lines" alt="lines" />
                        <p>Hello! I'm Aerrol Kyle, a UI/UX Designer, a creative individual who wants to maximize and improve his art skills through designing. I’m currently available for freelance work. If you have a designs that you want to elevate to the next level or want to start something creative, then get in touch.</p>
                        <a href="/personal-portfolio/assets/resume/my-resume.pdf" className="btn btn-fill" target="_blank" download>Download my resume</a>
                    </div>
                </div>
            </div>
        </section> {/* /.secton-about  */}
        <section className="site-section section-skills">
            <div className="container">
                <div className="text-center">
                    <h3>My Skills</h3>
                    <img src="/personal-portfolio/assets/img/lines.svg" className="img-lines" alt="lines" />
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="skill">
                            <h4>Html/css</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="91"></div> {/* /.progress-bar  */}
                            </div> {/* /.progress  */}
                        </div> {/* /.skill  */}
                        <div className="skill">
                            <h4>Figma/Framer</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="77"></div> {/* /.progress-bar  */}
                            </div> {/* /.progress  */}
                        </div> {/* /.skill  */}
                    </div>
                    <div className="col-md-4">
                        <div className="skill">
                            <h4>Javascript</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="53"></div> {/* /.progress-bar  */}
                            </div> {/* /.progress  */}
                        </div> {/* /.skill  */}
                        <div className="skill">
                            <h4>Empathy</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="84"></div> {/* /.progress-bar  */}
                            </div> {/* /.progress  */}
                        </div> {/* /.skill  */}
                    </div>
                    <div className="col-md-4">
                        <div className="skill">
                            <h4>Git</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div> {/* /.progress-bar  */}
                            </div> {/* /.progress  */}
                        </div> {/* /.skill  */}
                        <div className="skill">
                            <h4>Open-Mindedness</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="88"></div> {/* /.progress-bar  */}
                            </div> {/* /.progress  */}
                        </div> {/* /.skill  */}
                    </div>
                </div>
            </div>
        </section> {/* /.secton-skills  */}
        <section id="service" className="site-section section-services overlay text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>What I do</h3>
                        <img src="/personal-portfolio/assets/img/lines.svg" className="img-lines" alt="lines" />
                    </div>
                    <div className="col-sm-4">
                        <div className="service">
                            <img src="/personal-portfolio/assets/img/front-end.svg" alt="Front End Developer" />
                            <h4>UI/UX Designs</h4>
                            <p>As an artist, I'm pursuing my passion in arts by doing Figma, I offer various designs that could elevate and fit your style.</p>
                        </div> {/* /.service  */}
                    </div>
                    <div className="col-sm-4">
                        <div className="service">
                            <img src="/personal-portfolio/assets/img/back-end.svg" alt="Front End Developer" />
                            <h4>Front-End</h4>
                            <p>I also do a little bit of front-end designs that will bring change to your future projects.</p>
                        </div> {/* /.service  */}
                    </div>
                    <div className="col-sm-4">
                        <div className="service">
                            <img src="/personal-portfolio/assets/img/consultancy.svg" alt="Coding" />
                            <h4>Consultancy</h4>
                            <p>As well as providing these services, I can also help you manage your tasks via consultancy services.</p>
                        </div> {/* /.service  */}
                    </div>
                </div>
            </div>
        </section> {/* /.secton-services  */}
        <section id="portfolio" className="site-section section-portfolio">
            <div className="container">
                <div className="text-center">
                    <h3>My recent Works</h3>
                    <img src="/personal-portfolio/assets/img/lines.svg" className="img-lines" alt="lines" />
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-6">
                        <div className="portfolio-item">
                            <img src="/personal-portfolio/assets/img/personal-portfolio.jpg" className="img-res" alt="" />
                            <div className="portfolio-item-info">
                                <h4>Personal Portolio Template</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span className="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://github.com/Aerrol-Kyle/portfolio-aerrol"><span className="glyphicon glyphicon-link"></span></a>
                            </div> {/* /.portfolio-item-info  */}
                        </div> {/* /.portfolio-item  */}
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <div className="portfolio-item">
                            <img src="/personal-portfolio/assets/img/efs.jpg" className="img-res" alt="" />
                            <div className="portfolio-item-info">
                                <h4>EFS Apparel Prototype</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span className="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://www.figma.com/design/53sqVeAuTBnSzn2AwtjI1Z/EFS-Apparel-Prototype?node-id=0-1&t=SiDU1hNfej6M5EXH-1"><span className="glyphicon glyphicon-link"></span></a>
                            </div> {/* /.portfolio-item-info  */}
                        </div> {/* /.portfolio-item  */}
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <div className="portfolio-item">
                            <img src="/personal-portfolio/assets/img/finals.jpg" className="img-res" alt="" />
                            <div className="portfolio-item-info">
                                <h4>Post-Page Project</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span className="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://github.com/Aerrol-Kyle/webapp2-final-project"><span className="glyphicon glyphicon-link"></span></a>
                            </div> {/* /.portfolio-item-info  */}
                        </div> {/* /.portfolio-item  */}
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <div className="portfolio-item">
                            <img src="/personal-portfolio/assets/img/markup.jpg" className="img-res" alt="" />
                            <div className="portfolio-item-info">
                                <h4>Mark-Up with CSS</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem4"><span className="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://github.com/Aerrol-Kyle/others/tree/8864c54d113615327b81d5cec7f7f7a7c4ae0c5b/Markup-with-CSS"><span className="glyphicon glyphicon-link"></span></a>
                            </div> {/* /.portfolio-item-info  */}
                        </div> {/* /.portfolio-item  */}
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <div className="portfolio-item">
                            <img src="/personal-portfolio/assets/img/responsive.jpg" className="img-res" alt="" />
                            <div className="portfolio-item-info">
                                <h4>Responsive Webpage</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem5"><span className="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://github.com/Aerrol-Kyle/others/tree/c3dd949dbb85ceba913542390dfcb4ff48e78b67/Responsive-Webpage-Activity"><span className="glyphicon glyphicon-link"></span></a>
                            </div> {/* /.portfolio-item-info  */}
                        </div> {/* /.portfolio-item  */}
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <div className="portfolio-item">
                            <img src="/personal-portfolio/assets/img/putotayp.jpg" className="img-res" alt="" />
                            <div className="portfolio-item-info">
                                <h4>CIM Prototye and Website</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem6"><span className="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://drive.google.com/drive/folders/14aj_cmqezjsb76wxoLhAMTca1EGcYMuo"><span className="glyphicon glyphicon-link"></span></a>
                            </div> {/* /.portfolio-item-info  */}
                        </div> {/* /.portfolio-item  */}
                    </div>
                </div>
            </div>
        </section> {/* /.secton-portfolio  */}  
        <section className="site-section section-counters text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="2" data-speed="2000">0</p>
                        <h4>Years Experience</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="7" data-speed="2000">0</p>      
                        <h4>Projects Delivered</h4>      
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">0</p>
                        <h4>Seconds on this site!<br />  What are you waiting for?</h4>
                    </div>
                </div>
            </div>
        </section> {/* /.section-counters  */}
        <section id="contact" className="site-section section-form text-center">
            <div className="container">
                <h3>Contact</h3>
                <img src="/personal-portfolio/assets/img/lines.svg" className="img-lines" alt="lines" />
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" name="name" className="form-control mt-x-0" placeholder="Name" required />
                        </div>
                        <div className="col-sm-6">
                            <input type="email" name="email" className="form-control" placeholder="Email" required />  
                        </div>
                        <div className="col-sm-12">
                            <textarea name="message" id="mesaage" className="form-control" placeholder="Message" required></textarea>
                        </div>
                    </div>
                    <button href="#" className="btn btn-border" type="submit">Hire Me <span className="glyphicon glyphicon-send"></span></button>
                </form>
            </div>
        </section> {/* /.section-form  */}
    </main> {/* /#main  */}
    <footer id="colophon" className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <a className="icon facebook-bg" href="https://www.facebook.com/santos.aerrolkyle"><i className="icon-facebook"></i></a>
                    <a className="icon linkedin-bg" href="https://www.linkedin.com/in/aerrol-kyle-santos-491aba279/"><i className="icon-linkedin"></i></a>
                </div>
                <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3"><p className="copyright">2024. All Rights Reserved. A&Ks</p></div>
                <div className="col-sm-4 col-xs-3">
                    <div className="text-right page-scroll">
                        <a className="icon icon-up-bg" href="#hero"><i className="icon-up"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer> {/* /#footer  */}
     {/* Modals  */}
    <div id="portfolioItem1" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="/personal-portfolio/assets/img/personal-portfolio.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Personal Portfolio Template</h4>
            <p>The very first personal portfolio template I worked on. This project emphasizes my willingness to design even though I struggle a lot. This was made using HTML, CSS, and a bit of Javascript.</p>
          </div>
          <div className="modal-footer">
            <a href="https://github.com/Aerrol-Kyle/portfolio-aerrol" className="btn btn-fill">Check it Out</a>
          </div>
        </div> {/* /.modal-content  */}
      </div> {/* /.modal-dialog  */}
    </div> {/* /.modal  */}
    <div id="portfolioItem2" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="/personal-portfolio/assets/img/efs.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">EFS Apparel Prototype</h4>
            <p>Prototype of EFS Apparel. We built this one by collaboration, I was the one behind the design and researches.</p>
          </div>
          <div className="modal-footer">
            <a href="https://www.figma.com/design/53sqVeAuTBnSzn2AwtjI1Z/EFS-Apparel-Prototype?node-id=0-1&t=SiDU1hNfej6M5EXH-1" className="btn btn-fill">Check it Out</a>
          </div>
        </div> {/* /.modal-content  */}
      </div> {/* /.modal-dialog  */}
    </div> {/* /.modal  */}
    <div id="portfolioItem3" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="/personal-portfolio/assets/img/finals.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Post-Page Project</h4>
            <p>A simple post-page project that has login page where you can use the datas on jsonplaceholder. Explore this one to see more!</p>
          </div>
          <div className="modal-footer">
            <a href="https://github.com/Aerrol-Kyle/webapp2-final-project" className="btn btn-fill">Check it Out</a>
          </div>
        </div> {/* /.modal-content  */}
      </div> {/* /.modal-dialog  */}
    </div> {/* /.modal  */}
    <div id="portfolioItem4" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="/personal-portfolio/assets/img/markup.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Mark-Up with CSS</h4>
            <p>A mark-up activity with css, inspired by simons website. Feel free to suggest anything for improvements.</p>
          </div>
          <div className="modal-footer">
            <a href="https://github.com/Aerrol-Kyle/others/tree/8864c54d113615327b81d5cec7f7f7a7c4ae0c5b/Markup-with-CSS" className="btn btn-fill">Check it Out</a>
          </div>
        </div> {/* /.modal-content  */}
      </div> {/* /.modal-dialog  */}
    </div> {/* /.modal  */}
    <div id="portfolioItem5" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="/personal-portfolio/assets/img/responsive.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Responsive Webpage</h4>
            <p>An activity in which we are asked to do a responsive webpage. I designed it as this and put some guitars informations in them.</p>
          </div>
          <div className="modal-footer">
            <a href="https://github.com/Aerrol-Kyle/others/tree/c3dd949dbb85ceba913542390dfcb4ff48e78b67/Responsive-Webpage-Activity" className="btn btn-fill">Check it Out</a>
          </div>
        </div> {/* /.modal-content  */}
      </div> {/* /.modal-dialog  */}
    </div> {/* /.modal  */}
    <div id="portfolioItem6" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="/personal-portfolio/assets/img/putotayp.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">CIM Prototype and Website</h4>
            <p>A project for one particular subject wherein we are a team upon doing this. I helped the team in designing it. Feel free to watch the demo!</p>
          </div>
          <div className="modal-footer">
            <a href="https://drive.google.com/drive/folders/14aj_cmqezjsb76wxoLhAMTca1EGcYMuo" className="btn btn-fill">Check it Out</a>
          </div>
        </div> {/* /.modal-content  */}
      </div> {/* /.modal-dialog  */}
    </div> {/* /.modal  */}
    </>
  )
}

export default App