import './tailwind.css';

import { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="bg-slate-300 h-screen flex flex-col items-center justify-center">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-spin-slow"
          alt="logo"
        />
        <h1 className="text-3xl font-bold text-blue-600">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </h1>

        <div className="text-md mt-5 mx-3">
          <button
            className="bg-blue-300 px-3 py-2 border-2 rounded-lg border-blue-400 "
            onClick={() => setCount((count) => count + 1)}
          >
            🪂 Click me : {count}
          </button>

          <p className="mt-3">
            Don&apos;t forget to install Eslint and Prettier in Your Vscode.
          </p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="text-cyan-600 font-semibold underline"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="text-cyan-600 font-semibold underline"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
