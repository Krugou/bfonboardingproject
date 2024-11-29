import {AudioError, AudioConfig} from '@/types/audio';

const audioConfig: AudioConfig = {
  basePath: '/audio',
  allowedFormats: ['mp3', 'wav', 'ogg'],
};

/**
 * Validates and plays an audio file from the public directory
 * @param fileName - The name of the audio file including extension
 * @returns Promise that resolves when audio finishes playing
 * @throws {AudioError} If audio file cannot be loaded or played
 */
export const playAudio = (fileName: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Validate file extension
      const fileExtension = fileName.split('.').pop()?.toLowerCase();
      if (!fileExtension || !audioConfig.allowedFormats.includes(fileExtension as any)) {
        throw new Error(`Invalid audio format. Allowed formats: ${audioConfig.allowedFormats.join(', ')}`);
      }

      const audioPath = `${audioConfig.basePath}/${fileName}`;
      const audio = new Audio(audioPath);

      const cleanup = () => {
        audio.removeEventListener('ended', onEnd);
        audio.removeEventListener('error', onError);
      };

      const onEnd = () => {
        cleanup();
        resolve();
      };

      const onError = (e: ErrorEvent) => {
        cleanup();
        const error = new Error('Failed to play audio') as AudioError;
        error.code = 'AUDIO_PLAY_ERROR';
        reject(error);
      };

      audio.addEventListener('ended', onEnd);
      audio.addEventListener('error', onError);

      audio.play().catch((error) => {
        cleanup();
        const playError = new Error(error.message) as AudioError;
        playError.code = 'AUDIO_PLAY_ERROR';
        reject(playError);
      });

    } catch (error) {
      const audioError = new Error('Audio playback failed') as AudioError;
      audioError.code = 'AUDIO_LOAD_ERROR';
      reject(audioError);
    }
  });
};
