import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>React Tutorials</h1>
      <ul>
        <li>
          <Link to='use-reducer'>useReducer Tutorial</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
