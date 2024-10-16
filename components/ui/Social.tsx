import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path:  'https://github.com/ilkin3333' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/company/saythub-az' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/saythub.az' },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a 
          key={index} 
          href={item.path} 
          className={iconStyles} 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
