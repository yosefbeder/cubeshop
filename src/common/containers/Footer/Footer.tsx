import React from 'react';
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoLogoFacebook as FacebookLogo,
  IoLogoGithub as GithubLogo,
  IoLogoTwitter as TwitterLogo,
} from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import IconLink from '../../components/IconLink';
import classes from './Footer.module.css';

const footerSections = [
  {
    icon: IoLocationOutline,
    header: 'Location',
    content: 'New Damietta, Damietta, Egypt',
    link: 'https://www.google.com/maps/place/Damietta+El-Gadeeda+City,+Kafr+Saad,+Damietta+Governorate/@31.4383128,31.6311286,12z/data=!3m1!4b1!4m5!3m4!1s0x14f9e375eb0246b7:0x8e6df51878254838!8m2!3d31.431304!4d31.685341',
  },
  { icon: IoCallOutline, header: 'Phone number', content: '01019967816' },
  {
    icon: IoMailOutline,
    header: 'Email addresss',
    link: 'mailto:dryosefbeder@gmail.com',
    content: 'dryosefbeder@gmail.com',
  },
];

const socialAccounts = [
  { icon: FacebookLogo, title: 'facebook', href: '' },
  { icon: TwitterLogo, title: 'twitter', href: '' },
  { icon: GithubLogo, title: 'github', href: '' },
];

interface FooterSectionProps {
  icon: IconType;
  header: string;
  content: string;
  link?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  icon: Icon,
  header,
  content,
  link,
}) => {
  return (
    <div className={classes['footer-section']}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={classes['footer-section__icon-container']}
      >
        <Icon />
      </a>
      <h4 className="header-4">{header}</h4>
      <p className="p-1">{content}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={classes.container}>
      {footerSections.map((footerSection, index) => (
        <FooterSection key={index} {...footerSection} />
      ))}
      <div className={classes['social-info']}>
        <h3 className="header-3">Follow us on</h3>
        <div className={classes['links-container']}>
          {socialAccounts.map(({ icon: Icon, ...linkProps }, index) => (
            <IconLink key={index} {...linkProps}>
              <Icon />
            </IconLink>
          ))}
        </div>
      </div>
      <p className="p-2">© 2021 - All Copyrights Reserved To Yosef Beder</p>
    </div>
  );
};

export default Footer;
