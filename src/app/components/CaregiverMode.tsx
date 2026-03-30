import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Lock, Settings, User, MapPin, Image, MessageSquare, Save } from "lucide-react";

export function CaregiverMode() {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "caregiver123"; // Demo password

  const [settings, setSettings] = useState({
    userName: "Margaret",
    location: "Lethbridge Care Centre",
    address: "123 Maple Street, Lethbridge, AB",
    room: "Room 204, Second Floor",
    calmingMessage: "Everything is okay. Your family loves you.",
    voiceSpeed: 0.8,
    fontSize: 18,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("Incorrect password. Try 'caregiver123'");
    }
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    alert("Settings saved successfully!");
  };

  if (!isUnlocked) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center p-6"
        style={{
          background: "linear-gradient(to bottom, #718096 0%, #4a5568 100%)",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="flex items-center justify-center mb-8">
              <div className="p-6 bg-[#e2e8f0] rounded-full">
                <Lock className="w-12 h-12 text-[#4a5568]" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl text-center text-[#2d3748] mb-2" style={{ fontWeight: 500 }}>
              Caregiver Mode
            </h1>
            <p className="text-lg text-center text-[#718096] mb-8">
              Enter password to access settings
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-lg text-[#4a5568] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-[#e2e8f0] rounded-xl text-xl focus:outline-none focus:border-[#7fb3d5] transition-colors"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#7fb3d5] hover:bg-[#6ba3c5] text-white rounded-xl text-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ fontWeight: 500 }}
              >
                Unlock
              </button>

              <button
                type="button"
                onClick={() => navigate("/menu")}
                className="w-full py-4 bg-[#e2e8f0] hover:bg-[#cbd5e0] text-[#4a5568] rounded-xl text-xl transition-all duration-300"
                style={{ fontWeight: 500 }}
              >
                Cancel
              </button>
            </form>

            <p className="text-sm text-center text-[#718096] mt-6">
              Demo password: caregiver123
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6 md:p-8"
      style={{
        background: "linear-gradient(to bottom, #cbd5e0 0%, #f9fafb 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/menu")}
            className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft className="w-8 h-8 text-[#4a5568]" />
          </button>
          <h1 className="text-3xl md:text-4xl text-[#2d3748]" style={{ fontWeight: 500 }}>
            Caregiver Settings
          </h1>
        </div>

        <Settings className="w-10 h-10 text-[#4a5568]" />
      </div>

      {/* Settings Form */}
      <div className="max-w-3xl mx-auto space-y-6">
        {/* User Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-[#7fb3d5]" />
            <h2 className="text-2xl md:text-3xl text-[#2d3748]" style={{ fontWeight: 500 }}>
              User Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="userName" className="block text-xl text-[#4a5568] mb-2">
                User's Name
              </label>
              <input
                id="userName"
                type="text"
                value={settings.userName}
                onChange={(e) => setSettings({ ...settings, userName: e.target.value })}
                className="w-full px-6 py-4 border-2 border-[#e2e8f0] rounded-xl text-xl focus:outline-none focus:border-[#7fb3d5] transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Location Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-[#b8dcc5]" />
            <h2 className="text-2xl md:text-3xl text-[#2d3748]" style={{ fontWeight: 500 }}>
              Location Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-xl text-[#4a5568] mb-2">
                Place Name
              </label>
              <input
                id="location"
                type="text"
                value={settings.location}
                onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                className="w-full px-6 py-4 border-2 border-[#e2e8f0] rounded-xl text-xl focus:outline-none focus:border-[#7fb3d5] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-xl text-[#4a5568] mb-2">
                Address
              </label>
              <input
                id="address"
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-6 py-4 border-2 border-[#e2e8f0] rounded-xl text-xl focus:outline-none focus:border-[#7fb3d5] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="room" className="block text-xl text-[#4a5568] mb-2">
                Room Number
              </label>
              <input
                id="room"
                type="text"
                value={settings.room}
                onChange={(e) => setSettings({ ...settings, room: e.target.value })}
                className="w-full px-6 py-4 border-2 border-[#e2e8f0] rounded-xl text-xl focus:outline-none focus:border-[#7fb3d5] transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Message Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-8 h-8 text-[#d4c5e0]" />
            <h2 className="text-2xl md:text-3xl text-[#2d3748]" style={{ fontWeight: 500 }}>
              Calming Message
            </h2>
          </div>

          <div>
            <label htmlFor="calmingMessage" className="block text-xl text-[#4a5568] mb-2">
              Optional Message
            </label>
            <textarea
              id="calmingMessage"
              value={settings.calmingMessage}
              onChange={(e) => setSettings({ ...settings, calmingMessage: e.target.value })}
              rows={3}
              className="w-full px-6 py-4 border-2 border-[#e2e8f0] rounded-xl text-xl focus:outline-none focus:border-[#7fb3d5] transition-colors resize-none"
            />
          </div>
        </motion.div>

        {/* Accessibility Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-[#f4ead5]" />
            <h2 className="text-2xl md:text-3xl text-[#2d3748]" style={{ fontWeight: 500 }}>
              Accessibility
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="voiceSpeed" className="block text-xl text-[#4a5568] mb-2">
                Voice Speed: {settings.voiceSpeed.toFixed(1)}x
              </label>
              <input
                id="voiceSpeed"
                type="range"
                min="0.5"
                max="1.0"
                step="0.1"
                value={settings.voiceSpeed}
                onChange={(e) => setSettings({ ...settings, voiceSpeed: parseFloat(e.target.value) })}
                className="w-full h-3 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="fontSize" className="block text-xl text-[#4a5568] mb-2">
                Font Size: {settings.fontSize}px
              </label>
              <input
                id="fontSize"
                type="range"
                min="16"
                max="24"
                step="1"
                value={settings.fontSize}
                onChange={(e) => setSettings({ ...settings, fontSize: parseInt(e.target.value) })}
                className="w-full h-3 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            onClick={handleSave}
            className="w-full py-6 bg-[#7fb3d5] hover:bg-[#6ba3c5] text-white rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Save className="w-8 h-8" />
            <span className="text-2xl" style={{ fontWeight: 500 }}>
              Save All Settings
            </span>
          </button>
        </motion.div>

        <p className="text-center text-lg text-[#718096] pb-8">
          Changes will take effect immediately for the user
        </p>
      </div>
    </motion.div>
  );
}
