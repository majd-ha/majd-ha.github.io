import React from "react";
import { BsGithub } from "react-icons/bs";
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
      label: "portfolio",
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
      <a href="https://github.com/majd-ha" target="_blank">
        <BsGithub size={"2rem"} color="white" />
      </a>
    </ul>
  );
}
