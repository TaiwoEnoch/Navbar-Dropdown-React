import { useState, useRef, } from "react";
import { useOnClickOutside } from "../useOnClickOutside";
import '../index.css';


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <nav className="navigation">
      <ul className="sub-nav">
        <li className="font">Home</li>
        <li className="font">About</li>
        <li ref={ref} className="font">
          <button onClick={() => setDropdown((prev) => !prev)} className="btn">
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li className="dropdown">Design</li>
              <li className="dropdown">Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;