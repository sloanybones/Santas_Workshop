import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Home = () => {
return (
<div>
  <h1>Home</h1>
  <h4>
  <Link to="/">Home</Link>
  </h4>
  <h4>
  <Link to="/santas-helpers">Santas Helpers</Link>
  </h4>
  <h4>
    <Link to='/toys'>Toys</Link>
  </h4>
</div>
)

}

export default Home