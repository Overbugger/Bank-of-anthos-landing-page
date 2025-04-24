import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function MainButton({text}) {
    return (
        <Link href={"http://34.122.40.190/"}>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex gap-2 max-sm:m-auto border border-gray-300 rounded-full px-4 py-2 items-center text-lg transition-all duration-200"
      >
        <Image
          src="/Arrow.png"
          alt="Arrow"
          width={32} 
          height={32}
          className="w-8 h-8"
        />
        <div>{text}</div>
      </motion.button>
      </Link>
    )
}

export default MainButton;