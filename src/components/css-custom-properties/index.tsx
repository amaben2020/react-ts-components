'use client';

import { CSSProperties, useState } from 'react';
import { useThemeConfig2 } from './hooks/useThemeConfig2';
import './style.css';
import { TThemeVariant } from './styles/theme2';
const CssCustomProperties = ({ variable }: { variable: TThemeVariant }) => {
  const { variables } = useThemeConfig2(variable);
  const [theme, setTheme] = useState(false);

  return (
    <div className="wrapper" style={variables}>
      CssCustomProperties
      <p className="theme-swiss text-skin-base">BASE</p>
      <p className="text-skin-base">BASE</p>
      <p
        className="amaben"
        style={
          {
            '--amaben': '#80157e',
          } as CSSProperties
        }
      >
        AMABEN
      </p>
      <button
        onClick={() => setTheme((p) => !p)}
        className={'py-4 ' + (theme ? 'text-[#d4d4d4]' : 'border')}
      >
        THEME
      </button>
    </div>
  );
};

export default CssCustomProperties;
