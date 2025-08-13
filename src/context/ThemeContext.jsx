import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if(darkTheme){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkTheme])

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
