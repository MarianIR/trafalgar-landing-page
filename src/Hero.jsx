import heroIllustration from "/src/images/trafalgar-header illustration 1.png";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero-article">
        <h1 className="hero-heading">Virtual healthcare for you</h1>
        <p className="paragraph">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="consult-btn">Consult today</button>
      </article>
      <img
        src={heroIllustration}
        alt="hero illustration"
        className="hero-illustration"
      />
    </section>
  );
};

export default Hero;
