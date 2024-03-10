import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import React from "react";

export default function Darkmode({ darkmode }) {
    return (
        darkmode ? <FaMoon /> : <IoSunny />
    );
}