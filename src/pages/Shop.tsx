import ShopDetails from '../components/ShopDetails';
// import ShopHeader from '../components/ShopHeader';
import { motion } from "framer-motion"

export default function Shop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {/* <ShopHeader /> */}
      <ShopDetails />
    </motion.div>
  )
}
