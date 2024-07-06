import { Link } from "react-router-dom";

 

const Error = () => {
  return (
    <div className="">
      <h1 className="">Oops!</h1>
      <p className="">Something went wrong.</p>
      <p className="">The page you are looking for might be temporarily unavailable.</p>
      <Link to='/' className="">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
