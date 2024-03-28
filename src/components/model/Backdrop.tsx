"use client";
import React from "react";
import { motion } from "framer-motion";

interface BackdropProp {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropProp) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
