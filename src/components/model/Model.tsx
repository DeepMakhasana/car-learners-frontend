"use client";

import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import React from "react";

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      // type: "spring",
      // damping: 25,
      // stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, children }: { handleClose: () => void; children: React.ReactNode }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
