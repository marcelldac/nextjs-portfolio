import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, url }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div
        className="h-52 md:h-72 rounded-t-xl items-center"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex flex-row justify-around">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <Link href={url} target="_blank">
            <FaExternalLinkAlt width={30} height={30} />
          </Link>
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
