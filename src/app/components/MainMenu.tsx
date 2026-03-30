import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Images, Users, MessageSquare, MapPin, Home, Settings } from "lucide-react";

export function MainMenu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "My Photos",
      icon: Images,
      path: "/photos",
      color: "#a8d5e2",
      description: "See familiar faces",
    },
    {
      title: "My People",
      icon: Users,
      path: "/people",
      color: "#b8dcc5",
      description: "Your family & friends",
    },
    {
      title: "Messages for Me",
      icon: MessageSquare,
      path: "/messages",
      color: "#d4c5e0",
      description: "Special messages",
    },
    {
      title: "Where I Am",
      icon: MapPin,
      path: "/location",
      color: "#f4ead5",
      description: "My location",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col p-6 md:p-8"
      style={{
        background: "linear-gradient(to bottom, #f9fafb 0%, #e8f4f8 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate("/")}
          className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Go home"
        >
          <Home className="w-8 h-8 text-[#7fb3d5]" />
        </button>
        
        <h1 className="text-3xl md:text-4xl text-[#2d3748]" style={{ fontWeight: 500 }}>
          What would you like to see?
        </h1>

        <button
          onClick={() => navigate("/caregiver")}
          className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 opacity-30 hover:opacity-100"
          aria-label="Caregiver settings"
        >
          <Settings className="w-8 h-8 text-[#718096]" />
        </button>
      </div>

      {/* Menu Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.path}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                className="relative overflow-hidden rounded-3xl p-10 md:p-12 shadow-xl transition-all duration-300 min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center gap-4"
                style={{
                  backgroundColor: item.color,
                }}
              >
                <Icon className="w-20 h-20 md:w-24 md:h-24 text-white" strokeWidth={1.5} />
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ fontWeight: 500 }}>
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/80">
                    {item.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
