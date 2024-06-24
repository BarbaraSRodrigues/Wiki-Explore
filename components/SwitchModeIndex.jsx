import React, { useEffect, useState } from 'react';
import "./SwitchModeIndex.css";

const Switch = ({ isNavBar }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Função para mudar o tema
  const handleChangeTheme = () => {
    const isChecked = !darkMode;
    setDarkMode(isChecked);
    updateTheme(isChecked);
  };

  // Funcao para atualizar o tema na pagina e no armazenamento local
  const updateTheme = (isChecked) => {
    document.body.style.backgroundColor = isChecked ? '#272B34' : '#F3F3F0';
    const elementsToStyle = {
      paragraphElement: document.querySelector('p'),
      button: document.querySelector('button'),
      secondButtonById: document.getElementById('secondButton'),
      svgElement1: document.querySelector('#submit path'),
      svgElement2: document.querySelector('#search path'),
      searchBar: document.querySelector('#searchBar'),
      linkById: document.getElementById('result-link'),
      resumeById: document.getElementById('result-resume'),
      infoById: document.getElementById('result-info'),
      dataById: document.getElementById('result-data'),
      dotById: document.getElementById('result-dot'),
      readingById: document.getElementById('result-rt'),
      resultBreakById: document.getElementById('result-break'),
    };

    Object.keys(elementsToStyle).forEach(key => {
      const element = elementsToStyle[key];
      if (element) {
        switch (key) {
          case 'paragraphElement':
            element.style.color = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'button':
            element.style.backgroundColor = isChecked ? '#F3F3F0' : '#272B34';
            element.style.color = isChecked ? '#272B34' : '#fff';
            break;
          case 'secondButtonById':
            element.style.backgroundColor = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'svgElement1':
            element.style.stroke = isChecked ? '#272B34' : '#fff';
            break;
          case 'svgElement2':
            element.style.fill = isChecked ? '#fff' : '#272B34';
            break;
          case 'searchBar':
            element.style.backgroundColor = isChecked ? '#272B34' : '#fff';
            break;
          case 'linkById':
            element.style.color = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'resumeById':
            element.style.color = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'dataById':
            element.style.color = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'dotById':
            element.style.backgroundColor = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'readingById':
            element.style.color = isChecked ? '#F3F3F0' : '#272B34';
            break;
          case 'resultBreakById':
            element.style.color = isChecked ? '#F3F3F0' : '#272B34';
            break;
          default:
            break;
        }
      }
    });

    // Salvando o estado do tema no armazenamento local
    localStorage.setItem('darkMode', isChecked);
  };

  // Efeito para verificar o estado do tema quando o componente eh montado
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      const isChecked = JSON.parse(savedDarkMode);
      setDarkMode(isChecked);
      updateTheme(isChecked);
    }
  }, []);

  const classname = isNavBar ? 'groupSwitchNav' : 'groupSwitch';
  
  return (
    <div className={classname}>
      <label className="switch">
        <span className="sun">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="#ffd43b">
              <circle r="5" cy="12" cx="12"></circle>
              <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
            </g>
          </svg>
        </span>
        <span className="moon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
          </svg>
        </span>
        <input type="checkbox" className="input" checked={darkMode} onChange={handleChangeTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
