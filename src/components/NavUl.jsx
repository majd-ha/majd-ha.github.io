import React from "react";
import { Link } from "react-scroll";

export default function NavLinks({ ulcn, licn, setactiv }) {
  const links = [
    {
      id: 1,
      label: "home",
    },
    {
      id: 2,
      label: "about",
    },
    {
      id: 3,
      label: "experience",
    },
    {
      id: 4,
      label: "contact",
    },
  ];
  return (
    <ul className={ulcn}>
      {links.map(({ id, label }) => {
        return (
          <Link
            to={label}
            key={id}
            onClick={() => setactiv(false)}
            activeClass="active"
            className={licn}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {label}{" "}
          </Link>
        );
      })}
    </ul>
  );
}
