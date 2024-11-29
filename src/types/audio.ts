export type AudioErrorCode =
  | 'AUDIO_LOAD_ERROR'
  | 'AUDIO_PLAY_ERROR'
  | 'AUDIO_FORMAT_ERROR';

export interface AudioError extends Error {
  code: AudioErrorCode;
}

export type AudioFileFormat = 'mp3' | 'wav' | 'ogg';

export interface AudioConfig {
  basePath: string;
  allowedFormats: AudioFileFormat[];
}
