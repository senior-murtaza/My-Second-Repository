import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div class="navigation">
      <ul>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
}
