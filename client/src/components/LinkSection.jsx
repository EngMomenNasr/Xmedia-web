import {Link} from "react-router-dom";

const LinkSection = ({ title, links }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-bold text-[22px]">{title}</h3>
        <ul className="text-gray-300 mt-4 text-center">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className="hover:underline">{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LinkSection;
  