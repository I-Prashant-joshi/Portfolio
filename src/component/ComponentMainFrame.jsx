import { motion } from 'framer-motion'

// eslint-disable-next-line react/display-name
const ComponentMainFrame = (Component,name) => (props)=> {
    return (
    <motion.section
    id={name}
    initial="hidden"
    whileInView="show"
    >
        <span id={name}>
            &nbsp;
        </span>
    <Component {...props} />
    </motion.section>
)
}


export default ComponentMainFrame