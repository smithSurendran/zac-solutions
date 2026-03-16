import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { TESTIMONIALS } from '../config/testimonials';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  return (
    <section className="testimonials section-shell" aria-labelledby="testimonials-title">
      <div className="testimonials-head">
        <p className="section-kicker">Client Testimonials</p>
        <h2 id="testimonials-title">What Clients Are Saying</h2>
        <p>
          Feedback from founders and operators who trusted Zack Solutions to strengthen their digital operations and
          implementation workflow.
        </p>
      </div>

      <div className="testimonials-marquee" aria-label="Scrolling testimonials">
        <div className="testimonials-track">
          <div className="testimonials-group">
            {TESTIMONIALS.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-top">
                  <div
                    className="testimonial-avatar"
                    style={{
                      '--avatar-start': testimonial.avatarStart,
                      '--avatar-end': testimonial.avatarEnd,
                    }}
                    aria-hidden="true"
                  >
                    <span>{testimonial.avatarText}</span>
                  </div>

                  <div className="testimonial-meta">
                    <h3>{testimonial.name}</h3>
                    <p>
                      {testimonial.role} | {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <StarRoundedIcon key={`${testimonial.id}-star-${index}`} />
                  ))}
                </div>

                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </article>
            ))}
          </div>

          <div className="testimonials-group" aria-hidden="true">
            {TESTIMONIALS.map((testimonial) => (
              <article className="testimonial-card" key={`${testimonial.id}-clone`}>
                <div className="testimonial-top">
                  <div
                    className="testimonial-avatar"
                    style={{
                      '--avatar-start': testimonial.avatarStart,
                      '--avatar-end': testimonial.avatarEnd,
                    }}
                  >
                    <span>{testimonial.avatarText}</span>
                  </div>

                  <div className="testimonial-meta">
                    <h3>{testimonial.name}</h3>
                    <p>
                      {testimonial.role} | {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <StarRoundedIcon key={`${testimonial.id}-clone-star-${index}`} />
                  ))}
                </div>

                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
