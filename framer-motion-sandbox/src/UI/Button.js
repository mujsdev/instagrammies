import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    x: "-10px",
    y: "-10px",
    boxShadow: "20px 20px 0px rgba(39, 39, 43, 1)",
    backgroundColor: "#F8f8f8",
    color: "#27272b",
    transition: {
      duration: 0.2,
    },
  },
};

const Button = () => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      style={{
        backgroundColor: "transparent",
        border: "3px #f8f8f8 solid",
        borderRadius: "11px",
        padding: "20px 40px",
        fontSize: "18px",
        fontFamily: "inherit",
        fontWeight: 700,
        color: "#f8f8f8",
        cursor: "pointer",
      }}
    >
      HOVER PLEASE 🥺
    </motion.button>
  );
};

export default Button;
