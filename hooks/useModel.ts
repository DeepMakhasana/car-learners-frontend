"use client";
import { useState } from "react";

const useModel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close: () => void = () => setModalOpen(false);
  const open: () => void = () => setModalOpen(true);
  return {
    modalOpen,
    open,
    close,
  };
};

export default useModel;
