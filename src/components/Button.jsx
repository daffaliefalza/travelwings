import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link to={to} className="btn">
      {text}
    </Link>
  );
};

export default Button;
