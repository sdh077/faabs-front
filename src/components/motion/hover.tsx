import "./style.css";
import { motion, Variants } from "framer-motion";

interface Props {
    children?: JSX.Element;
}
const Hover = ({ children }: Props) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
            {children}
        </motion.div>
    );
}

export default Hover;
