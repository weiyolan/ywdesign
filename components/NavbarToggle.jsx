import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    // stroke={`${props.open?'#171B4D':'#171B4D'}`}
    stroke={`${props.open?'#171B4D':'hsl(236, 0%, 100%)'}`}
    // stroke="hsl(236, 45%, 20%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function MenuToggle ({ open, toggle }) {
    return (
    <button className='outline-none border-none duration-300 cursor-pointer z-[51] w-fit h-fit absolute top-[23px] right-[23px] rounded-[50%] bg-transparent' 
    onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
        <Path open={open}
            variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
            }}
        />
        <Path open={open}
            d="M 2 9.423 L 20 9.423"
            variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
        />
        <Path open={open}
            variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
            }}
        />
        </svg>
    </button>
    )
};
