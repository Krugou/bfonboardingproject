import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: any) => void;
  start: () => void;
  stop: () => void;
}

const useSpeechRecognition = (language: string, handleVoiceCommand: (command: string) => void) => {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [transcriptContent, setTranscriptContent] = useState<string>('');

  useEffect(() => {
    const SpeechRecognition =
      // @ts-ignore
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = language === 'fi' ? 'fi-FI' : 'en-US';

        recognitionInstance.onstart = () => {
          toast.info('Speech recognition started');
        };

        recognitionInstance.onend = () => {
          toast.info('Speech recognition ended');
        };

        recognitionInstance.onerror = (event: any) => {
          toast.error(`Speech recognition error: ${event.error}`);
        };

        recognitionInstance.onresult = (event: any) => {
          try {
            const transcript =
              event.results[event.results.length - 1][0].transcript.trim();
            handleVoiceCommand(transcript);
            setTranscriptContent(transcript);
            toast.success(`Transcript: ${transcript}`);
          } catch (error) {
            toast.error(`Error processing speech recognition result: ${error}`);
          }
        };

        setRecognition(recognitionInstance);
      } catch (error) {
        toast.error(`Error initializing SpeechRecognition: ${error}`);
      }
    } else {
      toast.error('SpeechRecognition is not supported in this browser.');
    }
  }, [language, handleVoiceCommand]);

  const startListening = useCallback(() => {
    if (recognition) {
      recognition.start();
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
    }
  }, [recognition]);

  return { recognition, transcriptContent, startListening, stopListening };
};

export default useSpeechRecognition;