import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      animate={{ y: ["0px", "-10px"] }}
      transition={{ type: "spring", duration: 0.5, yoyo: Infinity }}
      style={{
        width: "320px",
        border: "3px #fad161 solid",
        borderRadius: "11px",
        padding: "40px 40px",
        fontSize: "16px",
        color: "#f8f8f8",
      }}
    >
      <h1>🔥 BOUNCY CARD 🔥</h1>
      <p>
        I would add filler text here but that would be pointless and a boring
        way to add placeholder content so this is all I got. How's the weather?
        I hope your day is going well!
      </p>
      <p>
        This is just another paragraph I have for no real reason. I just think
        adding more content will make it more real. Am I breaking the 4th wall
        here?
      </p>
    </motion.div>
  );
};

export default Card;
