import * as React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";

const NavRoot = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  padding: 0 1.5rem;
  background: var(--bg-color);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  & > ol {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }
`;

const Nav = ({ items = [] }) => {
  return (
    <NavRoot>
      <ol>
        {items.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ol>
    </NavRoot>
  );
};

export default Nav;
