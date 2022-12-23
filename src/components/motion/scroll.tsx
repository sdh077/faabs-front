import "./style.css";
import { motion, Variants } from "framer-motion";

interface Props {
    text?: string | null;
    img?: string | null;
    direction: 'right' | 'left' | 'up' | 'down';
    value: number
    children?: JSX.Element;
}



const Scroll = ({ text, img, direction, value, children }: Props) => {
    const xy: number[] = {
        'right': [-value, 0],
        'left': [value, 0],
        'up': [0, value],
        'down': [0, -value]
    }[direction]
    const cardVariants: Variants = {
        offscreen: {
            x: xy[0],
            y: xy[1]
        },
        onscreen: {
            x: 0,
            y: 0,
            // rotate: -10,
            transition: {
                type: "tween",
                // bounce: 0.1,
                duration: 1
            }
        }
    };
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            {text &&
                <motion.div variants={cardVariants}>
                    {text}
                </motion.div>
            }

            {children &&
                <motion.div variants={cardVariants}>
                    {children}
                </motion.div>
            }

            {img && <motion.div variants={cardVariants}>
                <img src={img} />
            </motion.div>
            }

        </motion.div>
    );
}

export default Scroll;
