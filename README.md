# Business Finland Onboarding Portal

This project is designed to help users complete the onboarding process for Business Finland. It includes various components, context providers, and utilities to ensure a smooth and interactive user experience.

## Getting Started

To get started with the development server, follow these steps:

```bash
npm i
npm start or npm run dev
```

Open [http://localhost:3008](http://localhost:3008) with your browser to see the result.

### Available Scripts

Here are the available scripts you can run:

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.

## Project Structure

The project is organized as follows:

```plaintext
.editorconfig
.eslintrc.js
.eslintrc.json
.gitattributes
.github/
  workflows/
.gitignore
.next/
  app-build-manifest.json
  app-path-routes-manifest.json
  BUILD_ID
  build-manifest.json
  cache/
  export-detail.json
  export-marker.json
  images-manifest.json
  next-minimal-server.js.nft.json
  ...
.prettierrc
certificates/
extra/
  MyBF.csv
  ...
next-env.d.ts
next.config.mjs
package.json
packagesnapper.ps1
postcss.config.mjs
public/
README.md
src/
tailwind.config.ts
tsconfig.json
tsconfig.tsbuildinfo
```

### Key Directories and Files

Here are some key directories and files in the project:

- **src/**: Contains the main source code for the application.
  - **components/**: Contains React components.
  - **context/**: Contains context providers.
  - **data/**: Contains mock data.
  - **hooks/**: Contains custom hooks.
  - **utils/**: Contains utility functions.
- **public/**: Contains static assets.
- **.next/**: Contains build artifacts.
- **next.config.mjs**: Next.js configuration file.
- **package.json**: Project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration file.
- **postcss.config.mjs**: PostCSS configuration file.
- **README.md**: Project documentation.

## Components

### Main Components

The main components of the application include:

- **MainContent**: The main content area of the application.
- **Header**: The header component.
- **AnsweredQuestionsModal**: Modal for displaying answered questions.
- **QuestionDisplay**: Displays the current question.
- **QuestionsNavigator**: Navigates through the questions.

### Example: MainContent

```tsx
import {QuestionItem} from '@/app/types';
import React from 'react';
import QuestionDisplay from './MainContent/QuestionDisplay';
import QuestionsNavigator from './MainContent/QuestionsNavigator';
import UpperPanel from './MainContent/UpperPanel';

interface MainContentProps {
  /*...*/
}

const MainContent: React.FC<MainContentProps> = ({
  listeningMode,
  setListeningMode,
  currentStep,
  setCurrentStep,
  handleOpenModal,
  questions,
}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <main className='w-full h-full flex flex-col shadow-xl border-blue-400 border-4 bg-gray-100 rounded-xl m-10 p-4 max-w-screen-lg max-h-min'>
        <UpperPanel
          listeningMode={listeningMode}
          setListeningMode={setListeningMode}
          currentStep={currentStep}
          handleOpenModal={handleOpenModal}
          questions={questions}
        />
        <QuestionDisplay currentStep={currentStep} questions={questions} />
        <QuestionsNavigator
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          listeningMode={listeningMode}
        />
      </main>
    </div>
  );
};

export default MainContent;
```

## Context

### UserContext

The UserContext provides user-related data and functions.

### Example: UserContext

```tsx
import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const [language, setLanguage] = useState('en');

  return (
    <UserContext.Provider value={{language, setLanguage}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
```

## Hooks

### Example: fetchCompanyInfo

The fetchCompanyInfo hook fetches company information from an API.

```tsx
import {useEffect, useState} from 'react';

export const fetchCompanyInfo = async (companyId) => {
  const response = await fetch(`/api/company/${companyId}`);
  const data = await response.json();
  return data;
};
```

## Utilities

### Example: speakTooltip

The speakTooltip utility function speaks a tooltip.

```tsx
export const speakTooltip = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};
```

## Deployment

To deploy your Next.js app to GitHub Pages, you need to make a pull request or merge your changes into the main branch.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

This documentation provides an overview of the project structure, key components, and configuration. For more detailed information, refer to the code and comments within the project.
