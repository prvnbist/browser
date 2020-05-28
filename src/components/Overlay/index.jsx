import React from 'react'

import { Context } from '../../store'

import { StyledOverlay, Layout, Title, Apps, App } from './styles'

import { useOnClickOutside } from '../../helpers'

const Overlay = () => {
   const ref = React.useRef()
   const { dispatch } = React.useContext(Context)
   const [apps] = React.useState([
      { title: 'Facebook', url: 'https://facebook.com' },
      { title: 'Twitter', url: 'https://twitter.com' },
   ])
   const addTab = app => {
      dispatch({ type: 'ADD_TAB', payload: app })
   }
   useOnClickOutside(ref, () => dispatch({ type: 'TOGGLE_OVERLAY' }))
   return (
      <StyledOverlay>
         <Layout>
            <Title>Apps</Title>
            <Apps ref={ref}>
               {apps.map(app => (
                  <App key={app.url} onClick={() => addTab(app)}>
                     <div></div>
                     <span>{app.title}</span>
                  </App>
               ))}
            </Apps>
         </Layout>
      </StyledOverlay>
   )
}

export default Overlay
