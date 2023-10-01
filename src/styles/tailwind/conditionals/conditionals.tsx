'use client';

import { useState } from 'react';

import './style.css';

const Conditionals = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className="wrapper">
      <button
        onClick={() => setTheme((p) => !p)}
        className={'py-4 ' + (theme ? 'text-[#d4d4d4]' : 'border')}
      >
        THEME
      </button>
    </div>
  );
};

export default Conditionals;
