
import { Link } from "react-router-dom";
import ArrowButton from "./ArrowButton";

const TextBtnCard = ({ title='', description='', button }) => {
  return (
    <div className="flex flex-col  justify-between h-full p-4">
      <div>
        <h4 className="text:lg lg:text-2xl  text-black">{title}</h4>
        <h2 className="text-sm lg:text-md text-gray-500 my-8">{description}</h2>
      </div>
      {button && <ArrowButton text={button.text} link={button.link} />}
    </div>
  );
};

export default TextBtnCard;
