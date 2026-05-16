import type { Testimonial } from '../data/marketing';
import eventScribble from '../assets/figma/event-scribble.svg';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <article className="testimonial-card" key={testimonial.name}>
          <blockquote className="testimonial-card__quote">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <p className="testimonial-card__person">
            <span className="testimonial-card__avatar" aria-hidden="true">
              <img alt="" src={eventScribble} />
            </span>
            <span>
              <span className="testimonial-card__name">{testimonial.name}</span>
              <span className="testimonial-card__location">
                {testimonial.location}
              </span>
            </span>
          </p>
        </article>
      ))}
    </div>
  );
}
