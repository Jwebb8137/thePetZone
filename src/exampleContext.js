import React from 'react'

const ExampleContext = React.createContext({
  lang: window.navigator.language
})

export default ExampleContext