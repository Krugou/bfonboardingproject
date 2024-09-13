import {useUserContext} from '@/context/UserContext';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import React from 'react';

interface ListeningModeToggleProps {
  listeningMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setListeningMode: (mode: boolean) => void;
}

const ListeningModeToggle: React.FC<ListeningModeToggleProps> = ({
  listeningMode,
  setListeningMode,
}) => {
  const {language} = useUserContext();

  const titleText = listeningMode
    ? language === 'fi'
      ? 'Poista kuuntelutila käytöstä'
      : 'Turn off listening mode'
    : language === 'fi'
    ? 'Ota kuuntelutila käyttöön'
    : 'Turn on listening mode';

  return (
    <div
      className={`flex gap-1 justify-center items-center w-1/3  ${
        listeningMode ? '' : ''
      }`}
      title={titleText}>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          title='Listening Mode'
          className='sr-only peer'
          checked={listeningMode}
          onChange={() => setListeningMode(!listeningMode)}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className='text-sm font-medium text-gray-900 ms-1 dark:text-gray-300'></span>
      </label>
      {listeningMode ? (
        <MicIcon
          className='text-green-600 cursor-pointer'
          onClick={() => setListeningMode(!listeningMode)}
        />
      ) : (
        <MicOffIcon
          className='text-gray-600 cursor-pointer'
          onClick={() => setListeningMode(!listeningMode)}
        />
      )}
    </div>
  );
};

export default ListeningModeToggle;
