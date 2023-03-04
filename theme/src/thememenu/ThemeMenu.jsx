import React, {useRef, useState, useEffect} from 'react'

import './thememenu.css'

import { useDispatch } from 'react-redux'

import ThemeAction from '../actions/ThemeAction'
import CheackIcon from "@mui/icons-material/Check";
const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]



const ThemeMenu = () => {

   


    const [currMode, setcurrMode] = useState('light')

    const [currColor, setcurrColor] = useState('blue')

    const dispatch = useDispatch()

    const setMode = mode => {
        setcurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))
    }

    const setColor = color => {
        setcurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))
    }

    useEffect(() => {
        const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))

        const colorClass = color_settings.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)

        if (colorClass !== undefined) setcurrColor(colorClass.id)

    }, []);

    return (
      <div>
       
        <div  className="theme-menu">
          <h4>Theme settings</h4>
          <button className="theme-menu__close">
            {/* <i className='bx bx-x'></i> */}
           
          </button>
          <div className="theme-menu__select">
            <span>Choose mode</span>
            <ul className="mode-list">
              {mode_settings.map((item, index) => (
                <li key={index} onClick={() => setMode(item)}>
                  <div
                    className={`mode-list__color ${item.background} ${
                      item.id === currMode ? "active" : ""
                    }`}
                  >
                    <CheackIcon/>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="theme-menu__select">
            <span>Choose color</span>
            <ul className="mode-list">
              {color_settings.map((item, index) => (
                <li key={index} onClick={() => setColor(item)}>
                  <div
                    className={`mode-list__color ${item.background} ${
                      item.id === currColor ? "active" : ""
                    }`}
                  >
                    <i className="bx bx-check"></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ThemeMenu
