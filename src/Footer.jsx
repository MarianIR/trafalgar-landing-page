import logo from "/src/images/logo.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <article className="footer-article">
        <img src={logo} alt="This is page's logo" className="page-logo" />
        <p className="paragraph">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="copyrights">
          ©Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </article>
      <div className="informations-container">
        {/* ///////////// */}
        <div className="company">
          <h5 className="title">Company</h5>
          <ul className="elements-list">
            <li className="list-content">About</li>
            <li className="list-content">Testimonials</li>
            <li className="list-content">Find a doctor</li>
            <li className="list-content">Apps</li>
          </ul>
        </div>
        {/* ///////////// */}
        <div className="region">
          <h5 className="title">Region</h5>
          <ul className="elements-list">
            <li className="list-content">Indonesia</li>
            <li className="list-content">Singapore</li>
            <li className="list-content">HongKong</li>
            <li className="list-content">Canada</li>
          </ul>
        </div>
        {/* ///////////// */}
        <div className="help">
          <h5 className="title">Help</h5>
          <ul className="elements-list">
            <li className="list-content">Help center</li>
            <li className="list-content">Contact support</li>
            <li className="list-content">Instructions</li>
            <li className="list-content">How it works</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
