import React, { Component } from 'react'
import ExampleContext from '../../ExampleContext'

const ContextComponent = () => {
  return (
    <ExampleContext.Consumer>
      {(value) => {
        console.log(value)
        return (
          <>
            <h1>Hello</h1>
          </>
        ) 
      }}
    </ExampleContext.Consumer>
  )
}

export default ContextComponent