import {toast} from 'react-toastify';

interface SpeakOptions {
  language?: 'en' | 'fi';
  rate?: number;
  pitch?: number;
}

const LANGUAGE_MAP = {
  en: 'en-US',
  fi: 'fi-FI',
} as const;

/**
 * Speaks the provided content using the browser's speech synthesis API
 * @param content - The text content to be spoken
 * @param language - The language code ('en' or 'fi')
 * @param options - Optional speaking parameters
 */
export const speakContent = (
  content: string,
  language: keyof typeof LANGUAGE_MAP = 'en',
  options: SpeakOptions = {},
): void => {
  if (!content) {
    console.error('Content is empty or undefined');
    toast.error('Content is empty or undefined');
    return;
  }

  // Cancel any ongoing speech
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = LANGUAGE_MAP[language];
  utterance.rate = options.rate ?? 1;
  utterance.pitch = options.pitch ?? 1;

  // Try to find the best matching voice
  const voices = speechSynthesis.getVoices();
  const preferredVoice = voices.find(
    (voice) => voice.lang === LANGUAGE_MAP[language],
  );
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onstart = () => {
    console.log('Speech synthesis started');
    toast.success('Speech synthesis started');
  };

  utterance.onend = () => {
    console.log('Speech synthesis ended');
    toast.success('Speech synthesis ended');
  };

  utterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
    toast.error(`Speech synthesis error: ${event.error}`);
  };

  speechSynthesis.speak(utterance);
};
