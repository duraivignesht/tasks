import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { context } from "../context/context";
import "./MainNavigation.css";

const MainNavigation = () => {
 
 const { cart } = useContext(context)

 return(
  <>
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({cart.length})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  </>
  )
  }
export default MainNavigation;

