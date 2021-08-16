import React from 'react';

interface IconLinkProps {
  href: string;
  title: string;
}

const IconLink: React.FC<IconLinkProps> = ({ children, href, title }) => {
  return (
    <a
      className="icon-link"
      title={title}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default IconLink;
