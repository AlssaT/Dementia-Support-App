import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, ChevronRight, Home } from "lucide-react";
import { speakWithSoothingVoice } from "../utils/voice";

const slides = [
  {
    id: 1,
    text: "Hi, I'm your assistant",
    subtext: "I'm here to help you",
  },
  {
    id: 2,
    text: "Your name is Margaret",
    subtext: "You are a wonderful person",
  },
  {
    id: 3,
    text: "You are safe",
    subtext: "Everything is okay",
  },
  {
    id: 4,
    text: "You are at",
    subtext: "Lethbridge Care Centre",
  },
];

export function WakeScreen() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Determine time of day
      if (hours < 12) {
        setTimeOfDay("Good Morning");
      } else if (hours < 17) {
        setTimeOfDay("Good Afternoon");
      } else {
        setTimeOfDay("Good Evening");
      }

      // Format time
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );

      // Format date
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/menu");
    }
  };

  const handleSpeak = () => {
    const currentSlideData = slides[currentSlide];
    const message = `${currentSlideData.text}. ${currentSlideData.subtext}`;
    speakWithSoothingVoice(message, 0.75);
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background: "linear-gradient(135deg, #d4c5e0 0%, #b8a5d0 50%, #9b87c0 100%)",
      }}
    >
      {/* Time and Date - Top Right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 text-right">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6"
        >
          <p className="text-2xl md:text-3xl text-white mb-1" style={{ fontWeight: 500 }}>
            {currentTime}
          </p>
          <p className="text-lg md:text-xl text-white/90">
            {currentDate}
          </p>
          <p className="text-base md:text-lg text-white/80 mt-2">
            {timeOfDay}
          </p>
        </motion.div>
      </div>

      {/* Main Content - Centered Slide */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-center space-y-8"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
                style={{ fontWeight: 500 }}
              >
                {slides[currentSlide].text}
              </motion.h1>
              
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl text-white/90"
                style={{ fontWeight: 400 }}
              >
                {slides[currentSlide].subtext}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="transition-all duration-300"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 h-4 bg-white"
                      : "w-4 h-4 bg-white/40 hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="pb-8 px-6 flex flex-col items-center gap-6">
        {/* Voice Button */}
        <button
          onClick={handleSpeak}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Read message aloud"
        >
          <Volume2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-12 py-6 bg-white hover:bg-white/90 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="text-2xl md:text-3xl text-[#9b87c0]" style={{ fontWeight: 500 }}>
            {currentSlide < slides.length - 1 ? "Next" : "Continue"}
          </span>
          {currentSlide < slides.length - 1 ? (
            <ChevronRight className="w-8 h-8 text-[#9b87c0]" />
          ) : (
            <Home className="w-8 h-8 text-[#9b87c0]" />
          )}
        </button>
      </div>
    </div>
  );
}