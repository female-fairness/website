import type { TeamMember } from '../data/marketing';

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="team-grid">
      {members.map((member) => (
        <article className="team-card" key={member.name}>
          <div
            className={`team-card__photo${
              member.imageVariant ? ` team-card__photo--${member.imageVariant}` : ''
            }`}
          >
            {member.image ? <img alt="" src={member.image} /> : null}
          </div>
          <p className="team-card__copy">
            <span className="team-card__identity">
              <span className="team-card__name">{member.name}</span>
              <span className="team-card__role">{member.role}</span>
            </span>
            <span className="team-card__bio">{member.bio}</span>
          </p>
        </article>
      ))}
    </div>
  );
}
