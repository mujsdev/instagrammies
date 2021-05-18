import { motion } from "framer-motion";

const item = {
  hidden: { x: "-100px", opacity: 0 },
  show: {
    x: "0px",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

const ListItem = ({ children }) => {
  return (
    <>
      <motion.li
        style={{
          padding: "15px 30px 15px 20px",
          margin: 5,
          background: "#27272b",
          color: "#f8f8f8",
          listStyle: "none",
          borderRadius: 9999,
          display: "flex",
          alignItems: "center",
        }}
        variants={item}
      >
        <span
          style={{
            width: 20,
            height: 20,
            background: "#7AFAD4",
            borderRadius: 9999,
            marginRight: 20,
          }}
        ></span>
        {children}
      </motion.li>
    </>
  );
};

export default ListItem;
