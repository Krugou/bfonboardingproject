# Business Finland Onboarding Portal

This project is designed to help users complete the onboarding process for Business Finland. It includes various components, context providers, and utilities to ensure a smooth and interactive user experience.

## Table of Contents
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Context](#context)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [Deployment](#deployment)
- [Learn More](#learn-more)
- [Detailed Setup Instructions](#detailed-setup-instructions)
- [Usage Examples](#usage-examples)
- [API Documentation](#api-documentation)
- [Running Tests](#running-tests)
- [Code Structure and Conventions](#code-structure-and-conventions)
- [Contribution Guidelines](#contribution-guidelines)
- [Deployment Instructions](#deployment-instructions)
- [License Information](#license-information)

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

## Detailed Setup Instructions

To set up the development environment, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/business-finland-onboarding-portal.git
   cd business-finland-onboarding-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables. For example:
   ```plaintext
   BFINNO_PASSWORD=your_password
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open the application**:
   Open [http://localhost:3008](http://localhost:3008) with your browser to see the result.

## Usage Examples

### Fetching Company Information

To fetch company information, use the `fetchCompanyInfo` function from the `src/hooks/api.ts` file. Here's an example:

```tsx
import {fetchCompanyInfo} from '@/hooks/api';

const companyId = '1234567-8';
const companyInfo = await fetchCompanyInfo(companyId);

console.log('Company Info:', companyInfo);
```

### Interacting with the Onboarding Portal

The onboarding portal provides a series of questions for users to answer. Here's an example of how to interact with the portal:

```tsx
import React, {useState} from 'react';
import MainContent from '@/components/MainContent';
import {QuestionItem} from '@/app/types';

const questions: QuestionItem[] = [
  {
    id: 'q1',
    question: {en: 'What is your company name?', fi: 'Mikä on yrityksesi nimi?'},
    answerType: 'directInput',
    answerOptions: {en: '', fi: ''},
  },
  // Add more questions as needed
];

const OnboardingPortal: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <MainContent
      listeningMode={false}
      setListeningMode={() => {}}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      handleOpenModal={() => {}}
      questions={questions}
    />
  );
};

export default OnboardingPortal;
```

## API Documentation

### Available Endpoints

#### `POST /fetch-website`

Fetches website content and returns a summary in JSON format.

- **Request Body**:
  ```json
  {
    "password": "your_password",
    "url": "http://example.com"
  }
  ```

- **Response**:
  ```json
  {
    "industry": "Technology",
    "address": "123 Main St",
    "numberOfEmployees": 50,
    "wwwAddress": "http://example.com"
  }
  ```

## Running Tests

### Unit Tests

To run the unit tests, use the following command:

```bash
npm run test
```

### Integration Tests

To run the integration tests, use the following command:

```bash
npm run test:integration
```

### Component Tests

To run the component tests, use the following command:

```bash
npm run test:component
```

## Code Structure and Conventions

### Code Structure

The project follows a modular structure with separate directories for components, context, data, hooks, and utils. Each directory contains related files to keep the code organized and maintainable.

### Coding Conventions

- Use TypeScript for type safety and better code maintainability.
- Follow the ESLint and Prettier configurations for consistent code formatting.
- Add comments to explain the purpose and functionality of each function and component.

## Contribution Guidelines

We welcome contributions to the project! To contribute, follow these steps:

1. **Fork the repository**:
   Click the "Fork" button at the top right corner of the repository page.

2. **Clone the forked repository**:
   ```bash
   git clone https://github.com/your-username/business-finland-onboarding-portal.git
   cd business-finland-onboarding-portal
   ```

3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**:
   Implement your changes and ensure that the code follows the project's coding conventions.

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add feature: your feature description"
   ```

6. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a pull request**:
   Open a pull request from your forked repository to the main repository. Provide a clear description of your changes and any relevant information.

## Deployment Instructions

### Development Environment

To deploy the application to a development environment, follow these steps:

1. **Set up the development environment**:
   Follow the detailed setup instructions mentioned earlier to set up the development environment.

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Access the application**:
   Open [http://localhost:3008](http://localhost:3008) with your browser to see the result.

### Staging Environment

To deploy the application to a staging environment, follow these steps:

1. **Set up the staging environment**:
   Ensure that the necessary environment variables are configured for the staging environment.

2. **Build the application**:
   ```bash
   npm run build
   ```

3. **Start the staging server**:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open the staging environment URL with your browser to see the result.

### Production Environment

To deploy the application to a production environment, follow these steps:

1. **Set up the production environment**:
   Ensure that the necessary environment variables are configured for the production environment.

2. **Build the application**:
   ```bash
   npm run build
   ```

3. **Start the production server**:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open the production environment URL with your browser to see the result.

## License Information

This project is licensed under the [MIT License](LICENSE). By contributing to this project, you agree to abide by the terms and conditions of the license.
