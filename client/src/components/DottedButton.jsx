import { Link } from 'react-router-dom';

const DottedButton = ({name, to}) => {
    return (
      <Link to={to}>
      <button className="text-rounded-2xl border-2 border-dashed border-black bg-white px-3 md:px-5 py-[5px] font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer">
        {name}
      </button>
      </Link>
    );
  };
  
  export default DottedButton;