import {NavLink} from "react-router";

export default function Navigation() {
return(
<nav style={{display: "flex", justifyContent: "space-between", fontSize: "25px", margin: "20px"}}>
  <NavLink to="/">Forside</NavLink>
  <NavLink to="/clients">Clients</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
</nav>
)
}