import serviceData from "./servicesData";
const Services = () => {
  return (
    <section className="service-section">
      <h2 className="service-header">Our services</h2>
      <hr className="horizontal-line" />
      <p className="paragraph">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="service-container">
        {serviceData.map((service) => (
          <div key={service.id} className="service-box">
            <img
              src={service.image}
              alt="this is service's image"
              className="service-image"
            />
            <h4 className="service-title">{service.category}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="learn-more">Learn More</button>
    </section>
  );
};

export default Services;
