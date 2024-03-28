import { AnimatePresence } from "framer-motion";

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence initial={false}>{children}</AnimatePresence>
);

export default ModalContainer;
