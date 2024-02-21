import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  return (
    <li>
      <p>{item.label}</p>

      {item && item.children && item.children.length > 0 ? <MenuList list={item.children} /> : null}
    </li>
  );
}

// RETURN TO VIDEO AT 1:52:19
