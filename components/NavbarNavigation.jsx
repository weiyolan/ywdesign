import React from "react";
import {motion} from "framer-motion";
import MenuItem from "./NavbarItem";

const variants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren"},
  }
};

// const itemIds = [0, 1, 2, 3, 4];

export default function Navigation ({children}) { 
  return (
    <motion.ul className='m-0 p-6 absolute  justify-end text-end right-0 top-[80px] w-[200px]' 
    variants={variants}>
      {children.map((child,i) => {
      return (<MenuItem key={i}>{child}</MenuItem>)})}
    </motion.ul>
  )}
