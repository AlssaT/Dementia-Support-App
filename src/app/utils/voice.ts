// Cache the exact voice object reference so the browser NEVER loses it and reverts to robotic
let cachedVoice: SpeechSynthesisVoice | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;

export function getSoothingVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  
  // Preferred voices (more natural sounding)
  const preferredVoices = [
    'Samantha',           
    'Karen',              
    'Moira',              
    'Tessa',              
    'Fiona',              
    'Google UK English Female',
    'Google US English Female',
    'Microsoft Zira Desktop',
    'Microsoft Zira',
    'en-US-AriaNeural',   
    'en-GB-SoniaNeural',
    'en-AU-NatashaNeural',
  ];

  // Try to find a preferred voice
  for (const preferred of preferredVoices) {
    const voice = voices.find(v => v.name.includes(preferred));
    if (voice) {
      cachedVoice = voice;
      return cachedVoice;
    }
  }

  // Fall back to any female English voice
  const femaleVoice = voices.find(v => 
    v.lang.startsWith('en') && 
    (v.name.toLowerCase().includes('female') || 
     v.name.toLowerCase().includes('woman') ||
     v.name.includes('Samantha') ||
     v.name.includes('Victoria') ||
     v.name.includes('Karen'))
  );
  
  if (femaleVoice) {
    cachedVoice = femaleVoice;
    return cachedVoice;
  }

  // Last resort - any English voice
  cachedVoice = voices.find(v => v.lang.startsWith('en')) || null;
  return cachedVoice;
}

export function speakWithSoothingVoice(text: string, rate: number = 0.75) {
  currentUtterance = new SpeechSynthesisUtterance(text);
  
  const speak = () => {
    if (!currentUtterance) return;
    
    // Always use the strongly cached voice object
    const voice = getSoothingVoice();
    if (voice) {
      currentUtterance.voice = voice;
    }
    
    currentUtterance.rate = rate;      
    currentUtterance.pitch = 1.0;      
    currentUtterance.volume = 1;       
    
    window.speechSynthesis.cancel(); 
    
    // Increased delay to 200ms. Windows/Chrome speech engine physically needs this long to 
    // clear its internal buffers after .cancel(), otherwise it corrupts the next utterance's voice!
    setTimeout(() => {
      if (currentUtterance) window.speechSynthesis.speak(currentUtterance);
    }, 200);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
  } else {
    speak();
  }
}

