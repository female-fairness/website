import wordmark from '../assets/brand/wordmark.svg';
import eventScribble from '../assets/figma/event-scribble.svg';

interface ExpenseOrbitProps {
  tone?: 'earth' | 'brand';
}

export function ExpenseOrbit({ tone = 'earth' }: ExpenseOrbitProps) {
  return (
    <div
      aria-label="Annual health cost comparison"
      className={`expense-orbit expense-orbit--${tone}`}
    >
      <div className="expense-orbit__large">
        <p className="expense-orbit__amount">8,453 kr. /year</p>
        <p className="expense-orbit__label">Yours</p>
        <p className="expense-orbit__list">
          Menstrual products
          <br />
          Fertility
          <br />
          Health diagnosis
          <br />
          Painkillers
          <br />
          Contraception
          <br />
          Hormones
        </p>
      </div>
      <span className="expense-orbit__small" aria-hidden="true" />
      <p className="expense-orbit__man">
        <span className="expense-orbit__amount">2,406 kr. /year</span>
        <br />
        An average man
      </p>
    </div>
  );
}

export function MiniChart() {
  return (
    <div aria-label="Monthly spending chart mockup" className="mini-chart">
      <div className="mini-chart__top">
        <strong>
          Monthly <span className="italic">spending</span>
        </strong>
        <span className="muted">Potential savings: 150 kr.</span>
      </div>
      <p className="mini-chart__amount">1,359 kr.</p>
      <div aria-hidden="true" className="mini-chart__pie">
        <span className="mini-chart__slice-label mini-chart__slice-label--contraception">
          420 kr.
          <br />
          Contraception
        </span>
        <span className="mini-chart__slice-label mini-chart__slice-label--painkillers">
          380 kr.
          <br />
          Painkillers
        </span>
        <span className="mini-chart__slice-label mini-chart__slice-label--other">
          260 kr.
          <br />
          Other
        </span>
        <span className="mini-chart__slice-label mini-chart__slice-label--menstrual">
          800 kr.
          <br />
          Menstrual products
        </span>
      </div>
    </div>
  );
}

export function MiniCalendar() {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = [
    ['1', 'follicular', 'xl'],
    ['2', 'follicular', 'md'],
    ['3', 'follicular', 'md'],
    ['4', 'follicular', 'sm'],
    ['5', 'follicular', 'md'],
    ['6', 'follicular', 'md'],
    ['7', 'follicular', 'md'],
    ['8', 'follicular', 'sm'],
    ['9', 'ovulation', 'md'],
    ['10', 'ovulation', 'xl'],
    ['11', 'ovulation', 'xxl'],
    ['12', 'ovulation', 'lg'],
    ['13', 'ovulation', 'md'],
    ['14', 'luteal', 'md'],
    ['15', 'luteal', 'md'],
    ['16', 'luteal', 'xl'],
    ['17', 'luteal', 'xl'],
    ['18', 'luteal', 'md'],
    ['19', 'luteal', 'md'],
    ['20', 'luteal', 'xs'],
    ['21', 'luteal', 'xs'],
    ['22', 'luteal', 'xs'],
    ['23', 'menstrual', 'xs'],
    ['24', 'menstrual', 'lg'],
    ['25', 'menstrual', 'xxl'],
    ['26', 'menstrual', 'xxl'],
    ['27', 'menstrual', 'lg'],
    ['28', 'menstrual', 'xs'],
    ['29', 'follicular', 'xs'],
    ['30', 'follicular', 'md'],
    ['31', 'follicular', 'md'],
    ['1', 'follicular', 'md'],
    ['2', '', ''],
    ['3', '', ''],
    ['4', '', ''],
  ];

  const legend = [
    ['menstrual', 'Menstrual phase'],
    ['follicular', 'Follicular phase'],
    ['luteal', 'Lutheal phase'],
    ['ovulation', 'Ovulation phase'],
  ];

  return (
    <div aria-label="Health tracking calendar mockup" className="mini-calendar">
      <div className="mini-calendar__header">
        <strong>
          Cycle <span className="italic">tracker</span>
        </strong>
        <span>March</span>
      </div>
      <div className="mini-calendar__weekdays">
        {weekdays.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>
      <div className="mini-calendar__grid">
        {days.map(([day, phase, size], index) => (
          <span
            className={`mini-calendar__day${index > 31 ? ' mini-calendar__day--muted' : ''}`}
            key={`${day}-${index}`}
          >
            <span className="mini-calendar__date">{day}</span>
            {phase ? (
              <span
                className={`mini-calendar__dot mini-calendar__dot--${phase} mini-calendar__dot--${size}`}
              />
            ) : null}
          </span>
        ))}
      </div>
      <div className="mini-calendar__footer">
        <div className="mini-calendar__legend">
          {legend.map(([phase, label]) => (
            <span className="mini-calendar__legend-item" key={phase}>
              <span className={`mini-calendar__legend-dot mini-calendar__dot--${phase}`} />
              {label}
            </span>
          ))}
        </div>
        <span className="mini-calendar__arrow" aria-hidden="true" />
      </div>
    </div>
  );
}

export function EventBanner() {
  return (
    <div aria-label="Event banner mockup" className="event-banner">
      <div className="event-banner__copy">
        <img alt="Female Fairness" className="event-banner__logo" src={wordmark} />
        <p className="event-banner__title">
          The financial impact of women&apos;s life phases
        </p>
        <span className="event-banner__tag">Copenhagen</span>
        <span className="event-banner__tag">March 22</span>
        <p className="event-banner__link">Read more &amp; sign up in link</p>
      </div>
      <div className="event-banner__art" aria-hidden="true">
        <img alt="" className="event-banner__scribble" src={eventScribble} />
      </div>
    </div>
  );
}

export function GapActionVisual() {
  const tiles = [
    {
      label: 'Build with us',
      copy: "You're among the first shaping a new financial system for women",
      active: true,
    },
    {
      label: 'Coming soon',
      copy: 'Discounts on recurring health products.',
    },
    {
      label: 'Coming soon',
      copy: 'Partnerships with local pharmacies for lower prices on medication.',
    },
    {
      label: 'Coming soon',
      copy: 'Fill out a survey on female health, we give you money for it.',
    },
  ];

  return (
    <div aria-label="Filling the gap rewards mockup" className="gap-action">
      <p className="gap-action__title">
        Filling <span className="italic">the gap</span>
      </p>
      <p className="gap-action__intro">
        We&apos;re working on ways to help you save money with health expenses.
      </p>
      {tiles.map((tile) => (
        <div
          className={`gap-action__tile${tile.active ? ' gap-action__tile--active' : ''}`}
          key={tile.copy}
        >
          <strong>{tile.label}</strong>
          <span>{tile.copy}</span>
        </div>
      ))}
    </div>
  );
}
