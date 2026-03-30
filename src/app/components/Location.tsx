import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Home, Phone, Clock, Volume2 } from "lucide-react";
import { speakWithSoothingVoice } from "../utils/voice";

export function Location() {
  const navigate = useNavigate();

  const locationInfo = {
    placeName: "Lethbridge Care Centre",
    address: "123 Maple Street",
    city: "Lethbridge, AB T1J 4K3",
    room: "Room 204, Second Floor",
    phone: "(403) 555-0123",
    description: "You live at Lethbridge Care Centre. This is a safe and caring place where staff are available 24/7 to help you.",
  };

  const speakLocation = () => {
    const message = `You are at ${locationInfo.placeName}, located at ${locationInfo.address}, ${locationInfo.city}. Your room is ${locationInfo.room}. ${locationInfo.description}`;
    speakWithSoothingVoice(message, 0.75);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6 md:p-8"
      style={{
        background: "linear-gradient(to bottom, #f4ead5 0%, #f9fafb 100%)",
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
        <h1 className="text-3xl md:text-4xl text-[#4a5568]" style={{ fontWeight: 500 }}>
          Where I Am
        </h1>
      </div>

      {/* Location Card */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Map placeholder */}
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-[#a8d5e2] to-[#7fb3d5] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-24 h-24 text-white" strokeWidth={2} />
              </motion.div>
            </div>
          </div>

          {/* Location Details */}
          <div className="p-8 md:p-10 space-y-6">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <Home className="w-10 h-10 text-[#7fb3d5]" />
                <h2 className="text-4xl md:text-5xl text-[#2d3748]" style={{ fontWeight: 500 }}>
                  {locationInfo.placeName}
                </h2>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#7fb3d5] to-transparent" />

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-[#7fb3d5] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl text-[#4a5568]">
                    {locationInfo.address}
                  </p>
                  <p className="text-xl md:text-2xl text-[#4a5568]">
                    {locationInfo.city}
                  </p>
                </div>
              </div>

              {/* Room */}
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-[#b8dcc5] mt-1 flex-shrink-0" />
                <p className="text-xl md:text-2xl text-[#4a5568]">
                  {locationInfo.room}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-[#d4c5e0] mt-1 flex-shrink-0" />
                <p className="text-xl md:text-2xl text-[#4a5568]">
                  {locationInfo.phone}
                </p>
              </div>

              {/* Description */}
              <div className="bg-[#e8f4f8] rounded-2xl p-6 mt-6">
                <p className="text-xl md:text-2xl text-[#4a5568] leading-relaxed">
                  {locationInfo.description}
                </p>
              </div>
            </div>

            {/* Voice Button */}
            <button
              onClick={speakLocation}
              className="w-full py-5 bg-[#7fb3d5] hover:bg-[#6ba3c5] rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 mt-8"
              aria-label="Hear location information"
            >
              <Volume2 className="w-7 h-7 text-white" />
              <span className="text-2xl text-white" style={{ fontWeight: 500 }}>
                Tell Me Where I Am
              </span>
            </button>
          </div>
        </motion.div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4"
          >
            <Clock className="w-12 h-12 text-[#7fb3d5] flex-shrink-0" />
            <div>
              <p className="text-lg text-[#718096]">Staff Available</p>
              <p className="text-2xl text-[#2d3748]" style={{ fontWeight: 500 }}>
                24/7
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4"
          >
            <Phone className="w-12 h-12 text-[#b8dcc5] flex-shrink-0" />
            <div>
              <p className="text-lg text-[#718096]">Emergency</p>
              <p className="text-2xl text-[#2d3748]" style={{ fontWeight: 500 }}>
                Press Call Button
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}