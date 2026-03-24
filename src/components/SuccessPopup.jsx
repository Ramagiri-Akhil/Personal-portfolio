import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

const SuccessPopup = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* POPUP */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-white/5 border border-white/10 backdrop-blur-xl 
            rounded-2xl p-8 flex flex-col items-center gap-4 shadow-xl"
          >
            <CheckCircle className="text-green-400" size={50} />

            <h3 className="text-xl font-semibold text-white">
              Thanks for reaching out 🚀
            </h3>

            <p className="text-neutral-400 text-sm text-center">
              I’ll get back to you soon!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessPopup