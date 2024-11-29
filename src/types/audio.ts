
export interface AudioError extends Error {
  code: 'AUDIO_LOAD_ERROR' | 'AUDIO_PLAY_ERROR' | 'INVALID_AUDIO_PATH';
}

export type AudioFileFormat = 'mp3' | 'wav' | 'ogg';

export interface AudioConfig {
  basePath: string;
  allowedFormats: AudioFileFormat[];
}