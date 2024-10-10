export const speakContent = (
  content: string,
  languageSelection: string,
  toast: any,
) => {
  if (!content) {
    console.error('Content is empty or undefined');
    toast.error('Content is empty or undefined');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = languageSelection;

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
    toast.error('Speech synthesis error:', event.error);
  };

  speechSynthesis.speak(utterance);
};
