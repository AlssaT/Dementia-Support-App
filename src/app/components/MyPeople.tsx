import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Volume2, Heart } from "lucide-react";
import { speakWithSoothingVoice } from "../utils/voice";

const people = [
  {
    id: 1,
    name: "Sarah Johnson",
    relationship: "Daughter",
    photo: "https://images.unsplash.com/photo-1758874960735-16f7b37aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBkYXVnaHRlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0ODkzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sarah visits you every Sunday afternoon. She loves gardening with you and brings fresh flowers.",
    color: "#a8d5e2",
  },
  {
    id: 2,
    name: "Michael Johnson",
    relationship: "Son",
    photo: "https://images.unsplash.com/photo-1765248149163-aef04b043fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBzb24lMjBmYW1pbHl8ZW58MXx8fHwxNzc0ODkzNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Michael is your son. He works as a teacher and comes to see you every Wednesday.",
    color: "#b8dcc5",
  },
  {
    id: 3,
    name: "Emma",
    relationship: "Granddaughter",
    photo: "https://images.unsplash.com/photo-1758874960735-16f7b37aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBncmFuZGRhdWdodGVyJTIweY91bmclMjBnaXJsfGVufDF8fHx8MTc3NDg5MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Emma is Sarah's daughter. She's 8 years old and loves reading stories with you.",
    color: "#d4c5e0",
  },
  {
    id: 4,
    name: "Dorothy Miller",
    relationship: "Best Friend",
    photo: "https://images.unsplash.com/photo-1768899348646-c36a7ababe34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBmcmllbmQlMjBjb21wYW5pb258ZW58MXx8fHwxNzc0ODkzNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Dorothy has been your friend for over 40 years. You used to go to church together every Sunday.",
    color: "#f4ead5",
  },
];

export function MyPeople() {
  const navigate = useNavigate();

  const speakAbout = (person: typeof people[0]) => {
    const message = `${person.name}, your ${person.relationship.toLowerCase()}. ${person.description}`;
    speakWithSoothingVoice(message, 0.75);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6 md:p-8"
      style={{
        background: "linear-gradient(to bottom, #b8dcc5 0%, #f9fafb 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/menu")}
          className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Go back"
        >
          <ArrowLeft className="w-8 h-8 text-[#b8dcc5]" />
        </button>
        <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 500 }}>
          My People
        </h1>
      </div>

      {/* People List */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {people.map((person, index) => (
          <motion.div
            key={person.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              type: "spring",
            }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="w-full md:w-1/3 aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart 
                      className="w-8 h-8 fill-current" 
                      style={{ color: person.color }}
                    />
                    <h2 className="text-3xl md:text-4xl text-[#2d3748]" style={{ fontWeight: 500 }}>
                      {person.name}
                    </h2>
                  </div>

                  <div 
                    className="inline-block px-6 py-2 rounded-full"
                    style={{ backgroundColor: person.color }}
                  >
                    <p className="text-xl md:text-2xl text-white" style={{ fontWeight: 500 }}>
                      {person.relationship}
                    </p>
                  </div>

                  <p className="text-xl md:text-2xl text-[#4a5568] leading-relaxed mt-4">
                    {person.description}
                  </p>
                </div>

                <button
                  onClick={() => speakAbout(person)}
                  className="mt-6 w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: person.color }}
                  aria-label={`Hear about ${person.name}`}
                >
                  <Volume2 className="w-6 h-6 text-white" />
                  <span className="text-xl text-white" style={{ fontWeight: 500 }}>
                    Tell Me About {person.name.split(" ")[0]}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}