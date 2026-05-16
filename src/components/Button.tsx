type ButtonVariant = 'primary' | 'secondary' | 'brand' | 'disabled';

interface ButtonProps {
  href: string;
  children: string;
  variant?: ButtonVariant;
  current?: boolean;
}

export function Button({
  href,
  children,
  variant = 'secondary',
  current = false,
}: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const className = `button button--${variant}`;

  return (
    <a
      aria-current={current ? 'page' : undefined}
      className={className}
      href={href}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </a>
  );
}
