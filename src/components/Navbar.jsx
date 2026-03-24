import { Home, Folder, User, Mail, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { icon: Home , id:"hero"},
    { icon: Folder, id:"work" },
    { icon: User, id:"about" },
    { icon: Wrench, id:"skills" },
    { icon: Mail, id:"contact" },
  ];

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      <div
        className="
        flex items-center justify-center
        gap-3 md:gap-6
        px-4 md:px-10
        py-1 md:py-2
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        w-fit
        "
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25, y: -6 }}
              onClick={() => {
  document
    .getElementById(item.id)
    ?.scrollIntoView({ behavior: "smooth" });
}}
              transition={{ type: "spring", stiffness: 300 }}
              className="
              p-1 md:p-2
              flex items-center justify-center
              text-white
              cursor-pointer
              "
            >
              <div
                className="
                p-1 md:p-2
                rounded-full
                bg-white/5
                border border-white/10
                hover:bg-white/20
                transition-all
                flex items-center justify-center
                "
              >
                <Icon size={22} className="md:w-6.5 md:h-6.5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
