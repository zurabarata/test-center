
export default function Index() {
  return (

    <body id="page-top">
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top">Testzentrum Auetal</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                             href="#kontakt">Kontakt</a></li>
{/*                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                             href="#about">About</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                             href="#contact">Contact</a></li>*/}
                </ul>
            </div>
        </div>
    </nav>
    <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src="https://telehealthuc.com/wp-content/uploads/2020/11/covid-test-illustration.png" alt="..."/>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">Testen auch ohne Terminvereinbarung möglich!<br />
                Anschrift:<br /> Hotel Mühlenhof, <br />Zur Obersburg 7, <br />31749 Auetal<br />
                Tel.:  +49 157 33228300<br />
                Unsere Öffnungszeiten: <br />Montag bis Sonntag von 9:00 bis 17:00 Uhr
            </p>

    </header>
    </body>
  );
  };
