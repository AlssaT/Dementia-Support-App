import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Play, Video, FileText } from "lucide-react";
import { useState } from "react";
import { speakWithSoothingVoice } from "../utils/voice";

const messages = [
  {
    id: 1,
    type: "text" as const,
    from: "You (from the past)",
    title: "A Message to Yourself",
    content: "Hi Margaret, it's you from a few years ago. I want you to know that you've lived a wonderful life. You raised two amazing children, Sarah and Michael. You were a teacher for 35 years and touched so many lives. You love gardening, reading mystery novels, and spending time with your family. You are loved, and everything is okay.",
    color: "#d4c5e0",
  },
  {
    id: 2,
    type: "text" as const,
    from: "Sarah (Your Daughter)",
    title: "From Sarah",
    content: "Hi Mom, it's Sarah. I visit you every Sunday because I love spending time with you. You're an amazing mother and grandmother. Emma adores you and loves when you read her stories. We're all here for you, and we love you so much.",
    color: "#a8d5e2",
  },
  {
    id: 3,
    type: "text" as const,
    from: "Michael (Your Son)",
    title: "From Michael",
    content: "Hey Mom, it's Michael. I wanted to remind you how proud I am to be your son. You taught me to be kind, patient, and to always help others. That's why I became a teacher, just like you. I come see you every Wednesday, and I always look forward to our time together.",
    color: "#b8dcc5",
  },
  {
    id: 4,
    type: "video" as const,
    from: "Your Family",
    title: "Family Video Message",
    content: "Click to watch a special message from your family",
    thumbnailUrl: "https://images.unsplash.com/photo-1766818437685-0a53d539a203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwZ3JhbmRwYXJlbnRzfGVufDF8fHx8MTc3NDg5MzYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#f4ead5",
  },
];

export function Messages() {
  const navigate = useNavigate();
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null);

  const speakMessage = (content: string) => {
    speakWithSoothingVoice(content, 0.75);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6 md:p-8"
      style={{
        background: "linear-gradient(to bottom, #d4c5e0 0%, #f9fafb 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/menu")}
          className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Go back"
        >
          <ArrowLeft className="w-8 h-8 text-[#d4c5e0]" />
        </button>
        <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 500 }}>
          Messages for Me
        </h1>
      </div>

      {/* Messages List */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              type: "spring",
            }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Message Header */}
            <div 
              className="p-6 flex items-center justify-between cursor-pointer"
              style={{ backgroundColor: message.color }}
              onClick={() => setExpandedMessage(expandedMessage === message.id ? null : message.id)}
            >
              <div className="flex items-center gap-4">
                {message.type === "video" ? (
                  <Video className="w-10 h-10 text-white" />
                ) : (
                  <FileText className="w-10 h-10 text-white" />
                )}
                <div>
                  <h2 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 500 }}>
                    {message.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 mt-1">
                    From: {message.from}
                  </p>
                </div>
              </div>
              <Play className="w-8 h-8 text-white" />
            </div>

            {/* Message Content */}
            <motion.div
              initial={false}
              animate={{ 
                height: expandedMessage === message.id ? "auto" : 0,
                opacity: expandedMessage === message.id ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {message.type === "video" && message.thumbnailUrl && (
                  <div className="mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={message.thumbnailUrl}
                      alt="Video thumbnail"
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                )}
                
                <p className="text-xl md:text-2xl text-[#4a5568] leading-relaxed mb-6">
                  {message.content}
                </p>

                <button
                  onClick={() => speakMessage(message.content)}
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: message.color }}
                  aria-label="Listen to message"
                >
                  <Play className="w-6 h-6 text-white" />
                  <span className="text-xl text-white" style={{ fontWeight: 500 }}>
                    {message.type === "video" ? "Play Video" : "Listen to Message"}
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}