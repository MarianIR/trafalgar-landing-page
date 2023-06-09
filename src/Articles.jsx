import articlesData from "./articlesData";
const Articles = () => {
  return (
    <section className="articles-section">
      <h2 className="articles-heading">Check out our latest articles</h2>
      <hr className="horizontal-line" />
      <div className="article-container">
        {articlesData.map((data) => (
          <div className="article-box" key={data.id}>
            <img
              src={data.illustration}
              alt="This is article's illustration"
              className="article-illustration"
            />
            <h4 className="article-title">{data.title}</h4>
            <p className="article-content">{data.content}</p>
            <div className="read-more">
              Read more
              <img
                src="../src/images/Frame (6).png"
                alt="right arrow"
                className="right-arrow"
              />
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View all</button>
    </section>
  );
};

export default Articles;
