export const speakTooltip = (
  tooltip: string,
  languageSelection: string,
  toast: any,
) => {
  if (!tooltip) {
    console.error('Tooltip is empty or undefined');
    toast.error('Tooltip is empty or undefined');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(tooltip);
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
