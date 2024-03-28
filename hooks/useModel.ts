"use client";
import { useState } from "react";

const useModel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close: () => void = () => {
    setModalOpen(false);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "unset";
    }
  };
  const open: () => void = () => {
    setModalOpen(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  return {
    modalOpen,
    open,
    close,
  };
};

export default useModel;
