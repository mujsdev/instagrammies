import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ListItem from "./ListItem";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const List = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ListItem>A very cool list item</ListItem>
      <ListItem>And it staggers</ListItem>
      <ListItem>And it shows only...</ListItem>
      <ListItem>...when you scroll here!</ListItem>
    </motion.div>
  );
};

export default List;
