import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const CopyWrite = () => {
  return (
    <div
      className={`flex xl:flex-row flex-col-reverse  overflow-hidden justify-center items-center`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:ml-25 flex-[0.75] bg-black-100 p-8 rounded-2xl text-center"
      >
        <p>
          Portfolio design inspired by{" "}
          <a
            href="https://www.youtube.com/watch?v=0fYi8SGA20k"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            Chaoo Charles' YouTube Tutorial
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
};

export default CopyWrite;
