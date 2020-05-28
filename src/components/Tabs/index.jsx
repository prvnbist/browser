import React from 'react'

import { Context } from '../../store'

import { CloseIcon } from '../../assets'

import {
   StyledTabs,
   StyledTab,
   StyledTabList,
   StyledTabPanels,
   StyledTabPanel,
   Home,
} from './styles'

import { HomeIcon } from '../../assets'

// Tab List
const TabList = ({ children }) => <StyledTabList>{children}</StyledTabList>

// Tab
const Tab = ({ children, ...props }) => (
   <StyledTab {...props}>{children}</StyledTab>
)

// Tab Panels
const TabPanels = ({ children, ...props }) => (
   <StyledTabPanels {...props}>{children}</StyledTabPanels>
)

// Tab Panel
const TabPanel = ({ children, ...props }) => (
   <StyledTabPanel {...props}>{children}</StyledTabPanel>
)

const Tabs = () => {
   const { state, dispatch } = React.useContext(Context)

   const switchTab = index => dispatch({ type: 'SWITCH_TAB', payload: index })
   const closeTab = index => dispatch({ type: 'CLOSE_TAB', payload: index })

   return (
      <StyledTabs>
         <Home onClick={() => dispatch({ type: 'TOGGLE_OVERLAY' })}>
            <HomeIcon size={20} color="#fff" />
         </Home>
         <TabList>
            {state.tabs.map(({ title, url }) => (
               <Tab
                  key={url}
                  onClick={() => switchTab(url)}
                  isActive={state.currentTab === url}
               >
                  <span>{title}</span>
                  {state.currentTab === url && (
                     <span onClick={e => e.stopPropagation() || closeTab(url)}>
                        <CloseIcon color="#fff" />
                     </span>
                  )}
               </Tab>
            ))}
         </TabList>
         <TabPanels>
            {state.tabs.map(({ title, url }) => (
               <TabPanel key={url} active={state.currentTab === url}>
                  {url}
                  {/* <iframe src={url} frameBorder="0" title={title}></iframe> */}
               </TabPanel>
            ))}
         </TabPanels>
      </StyledTabs>
   )
}

export default Tabs
