import wordmark from '../assets/brand/wordmark.svg';
import eventScribble from '../assets/figma/event-scribble.svg';
import type { IllustrationCopy } from '../i18n/content';

interface ExpenseOrbitProps {
  copy: IllustrationCopy['expenseOrbit'];
  tone?: 'earth' | 'brand';
}

export function ExpenseOrbit({ copy, tone = 'earth' }: ExpenseOrbitProps) {
  return (
    <div
      aria-label={copy.ariaLabel}
      className={`expense-orbit expense-orbit--${tone}`}
    >
      <div className="expense-orbit__large">
        <p className="expense-orbit__amount">8,453 {copy.amountYearLabel}</p>
        <p className="expense-orbit__label">{copy.yours}</p>
        <p className="expense-orbit__list">
          {copy.expenses.map((expense, index) => (
            <span key={expense}>
              {index > 0 ? <br /> : null}
              {expense}
            </span>
          ))}
        </p>
      </div>
      <span className="expense-orbit__small" aria-hidden="true" />
      <p className="expense-orbit__man">
        <span className="expense-orbit__amount">2,406 {copy.amountYearLabel}</span>
        <br />
        {copy.averageMan}
      </p>
    </div>
  );
}

interface MiniChartProps {
  copy: IllustrationCopy['miniChart'];
}

export function MiniChart({ copy }: MiniChartProps) {
  return (
    <div aria-label={copy.ariaLabel} className="mini-chart">
      <div className="mini-chart__top">
        <strong>{copy.title}</strong>
        <span className="muted">{copy.savings}</span>
      </div>
      <p className="mini-chart__amount">1,359 kr.</p>
      <div aria-hidden="true" className="mini-chart__pie">
        <span className="mini-chart__slice-label mini-chart__slice-label--contraception">
          420 kr.
          <br />
          {copy.labels.contraception}
        </span>
        <span className="mini-chart__slice-label mini-chart__slice-label--painkillers">
          380 kr.
          <br />
          {copy.labels.painkillers}
        </span>
        <span className="mini-chart__slice-label mini-chart__slice-label--other">
          260 kr.
          <br />
          {copy.labels.other}
        </span>
        <span className="mini-chart__slice-label mini-chart__slice-label--menstrual">
          800 kr.
          <br />
          {copy.labels.menstrualProducts}
        </span>
      </div>
    </div>
  );
}

interface MiniCalendarProps {
  copy: IllustrationCopy['miniCalendar'];
}

export function MiniCalendar({ copy }: MiniCalendarProps) {
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
    ['menstrual', copy.legend.menstrual],
    ['follicular', copy.legend.follicular],
    ['luteal', copy.legend.luteal],
    ['ovulation', copy.legend.ovulation],
  ];

  return (
    <div aria-label={copy.ariaLabel} className="mini-calendar">
      <div className="mini-calendar__header">
        <strong>{copy.title}</strong>
        <span>{copy.month}</span>
      </div>
      <div className="mini-calendar__weekdays">
        {copy.weekdays.map((weekday) => (
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

interface EventBannerProps {
  copy: IllustrationCopy['eventBanner'];
}

export function EventBanner({ copy }: EventBannerProps) {
  return (
    <div aria-label={copy.ariaLabel} className="event-banner">
      <div className="event-banner__copy">
        <img alt="Female Fairness" className="event-banner__logo" src={wordmark} />
        <p className="event-banner__title">{copy.title}</p>
        <span className="event-banner__tag">{copy.location}</span>
        <span className="event-banner__tag">{copy.date}</span>
        <p className="event-banner__link">{copy.link}</p>
      </div>
      <div className="event-banner__art" aria-hidden="true">
        <img alt="" className="event-banner__scribble" src={eventScribble} />
      </div>
    </div>
  );
}

interface GapActionVisualProps {
  copy: IllustrationCopy['gapAction'];
}

export function GapActionVisual({ copy }: GapActionVisualProps) {
  return (
    <div aria-label={copy.ariaLabel} className="gap-action">
      <p className="gap-action__title">{copy.title}</p>
      <p className="gap-action__intro">{copy.intro}</p>
      {copy.tiles.map((tile) => (
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
