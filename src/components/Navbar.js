import React from "react";

import { FaGamepad, FaBook } from "react-icons/fa";

import { MdLiveTv, MdMovie } from "react-icons/md";

import { BsMusicNoteBeamed, BsNewspaper } from "react-icons/bs";

import { GiSportMedal } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";

import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <nav className="px-9 py-7">
        <div className="flex justify-between items-center w-full overflow-x-auto px-5">
          <NavItem title="Gaming" icon={FaGamepad} />
          <NavItem title="Learning" icon={FaBook} />
          <NavItem title="Live" icon={MdLiveTv} />
          <NavItem title="Movies" icon={MdMovie} />
          <NavItem title="Music" icon={BsMusicNoteBeamed} />
          <NavItem title="News" icon={BsNewspaper} />
          <NavItem title="sports" icon={GiSportMedal} />
          <NavItem title="Trending" icon={FiTrendingUp} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
