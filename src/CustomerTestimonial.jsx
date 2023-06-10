import { useState } from "react";
import testimonials from "./testimonialsData";
import arrowRight from "/src/images/Frame (6).png";
import arrowLeft from "/src/images/Frame (7).png";
const CustomerTestimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNextClick = () => {
    if (currentTestimonialIndex === testimonials.length - 1) {
      setCurrentTestimonialIndex(0);
    } else {
      setCurrentTestimonialIndex(currentTestimonialIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentTestimonialIndex === 0) {
      setCurrentTestimonialIndex(testimonials.length - 1);
    } else {
      setCurrentTestimonialIndex(currentTestimonialIndex - 1);
    }
  };

  return (
    <>
      <section className="testimonials-section">
        <h2 className="testimonial-heading">What our customers are saying</h2>
        <hr className="horizontal-line" />
        <div
          className="testimonial"
          key={testimonials[currentTestimonialIndex].id}
        >
          <div className="person">
            <img
              src={testimonials[currentTestimonialIndex].portret}
              alt="Person's portret"
              className="portret"
            />
            <div className="person-info">
              <h5 className="name">
                {testimonials[currentTestimonialIndex].name}
              </h5>
              <h6 className="profession">
                {testimonials[currentTestimonialIndex].profession}
              </h6>
            </div>
          </div>
          <p className="paragraph">
            {testimonials[currentTestimonialIndex].review}
          </p>
        </div>
      </section>
      <div className="arrows">
        <img
          src={arrowLeft}
          alt="left arrow"
          className="left-arrow"
          onClick={handlePrevClick}
        />
        <img
          src={arrowRight}
          alt="right arrow"
          className="right-arrow"
          onClick={handleNextClick}
        />
      </div>
    </>
  );
};

export default CustomerTestimonials;
