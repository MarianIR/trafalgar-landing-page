import appIllustration from "/src/images/trafalgar-illustration sec03 1.png";
import downloadArrow from "/src/images/Frame (6).png";
const DownloadApp = () => {
  return (
    <section className="download-app-section">
      <img
        src={appIllustration}
        alt="This is healtcare section's illustration"
        className="app-illustration"
      />
      <article className="download-app-article">
        <h2 className="download-app-heading">Download our mobile apps</h2>
        <hr className="horizontal-line" />
        <p className="paragraph">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className="download-btn">
          Download
          <img
            src={downloadArrow}
            alt="Download button arrow"
            className="download-arrow"
          />
        </button>
      </article>
    </section>
  );
};

export default DownloadApp;
