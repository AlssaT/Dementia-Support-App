import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Volume2 } from "lucide-react";
import { speakWithSoothingVoice } from "../utils/voice";

const photos = [
  {
    id: 1,
    name: "Sarah",
    relationship: "This is your daughter, Sarah",
    imageUrl: "https://images.unsplash.com/photo-1758874960735-16f7b37aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBkYXVnaHRlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0ODkzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Michael",
    relationship: "This is your son, Michael",
    imageUrl: "https://images.unsplash.com/photo-1765248149163-aef04b043fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBzb24lMjBmYW1pbHl8ZW58MXx8fHwxNzc0ODkzNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Emma",
    relationship: "This is your granddaughter, Emma",
    imageUrl: "https://images.unsplash.com/photo-1758874960735-16f7b37aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBncmFuZGRhdWdodGVyJTIweW91bmclMjBnaXJsfGVufDF8fHx8MTc3NDg5MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Dorothy",
    relationship: "This is your friend, Dorothy",
    imageUrl: "https://images.unsplash.com/photo-1768899348646-c36a7ababe34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBmcmllbmQlMjBjb21wYW5pb258ZW58MXx8fHwxNzc0ODkzNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Robert",
    relationship: "This is your husband, Robert",
    imageUrl: "https://images.unsplash.com/photo-1758686253706-5d45c46112f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBodXNiYW5kJTIwY291cGxlfGVufDF8fHx8MTc3NDg5MzYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Your Family",
    relationship: "This is your loving family",
    imageUrl: "https://images.unsplash.com/photo-1766818437685-0a53d539a203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwZ3JhbmRwYXJlbnRzfGVufDF8fHx8MTc3NDg5MzYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function MyPhotos() {
  const navigate = useNavigate();

  const speakLabel = (text: string) => {
    speakWithSoothingVoice(text, 0.75);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6 md:p-8"
      style={{
        background: "linear-gradient(to bottom, #a8d5e2 0%, #f9fafb 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/menu")}
          className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Go back"
        >
          <ArrowLeft className="w-8 h-8 text-[#7fb3d5]" />
        </button>
        <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 500 }}>
          My Photos
        </h1>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
            }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={photo.imageUrl}
                alt={photo.relationship}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-3xl md:text-4xl text-[#2d3748]" style={{ fontWeight: 500 }}>
                {photo.name}
              </h2>
              <p className="text-xl md:text-2xl text-[#4a5568] leading-relaxed">
                {photo.relationship}
              </p>
              <button
                onClick={() => speakLabel(photo.relationship)}
                className="w-full py-4 bg-[#a8d5e2] hover:bg-[#92c5d7] rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label={`Hear about ${photo.name}`}
              >
                <Volume2 className="w-6 h-6 text-white" />
                <span className="text-xl text-white" style={{ fontWeight: 500 }}>
                  Hear This
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}