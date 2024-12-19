import TasksTab from "../components/TasksTab";
import { motion } from "framer-motion"


function Task() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ marginTop: "-30px" }}
        >
            <TasksTab />
        </motion.section>
    )
}

export default Task