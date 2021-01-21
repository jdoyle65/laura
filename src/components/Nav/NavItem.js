import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  text-decoration: none;
  color: var(--primary-color);
  position: relative;
  transition: color 100ms, background-color 100ms;

  &:hover {
    background: var(--complementary-color);
    color: var(--bg-color);
    opacity: 0.7;
  }

  &.active {
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.25rem;
      background: var(--tertiary-color);
    }

    &:hover:after {
      display: none;
    }
  }
`;

const NavItem = ({ children, href }) => {
  return (
    <ListItem>
      <NavLink to={href} activeClassName="active">
        {children}
      </NavLink>
    </ListItem>
  );
};

export default NavItem;
