import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'

import { Tabs, Overlay } from './components'

import { Context, initialState, reducers } from './store'

function App() {
   const [state, dispatch] = React.useReducer(reducers, initialState)
   return (
      <Context.Provider value={{ state, dispatch }}>
         <Tabs />
         {state.isOverlayVisible && <Overlay />}
      </Context.Provider>
   )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
