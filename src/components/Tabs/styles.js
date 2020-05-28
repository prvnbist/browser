import styled, { css } from 'styled-components'

export const StyledTabs = styled.div`
   height: 42px;
   display: grid;
   display: grid;
   grid-template-columns: 44px 1fr;
   grid-template-rows: repeat(2, 1fr);
   grid-template-areas:
      'home tablist'
      'tabpanels tabpanels';
`

export const Home = styled.div`
   width: 44px;
   height: 44px;
   margin: auto;
   display: flex;
   cursor: pointer;
   grid-area: home;
   align-items: center;
   justify-content: center;
   background: #202124;
   &:hover {
      background: #2d2e31;
   }
`

export const StyledTabList = styled.div`
   display: flex;
   align-items: flex-end;
   grid-area: tablist;
   background: #202124;
`

export const StyledTab = styled.div(
   ({ isActive }) => css`
      height: 40px;
      display: flex;
      padding: 0 12px;
      cursor: pointer;
      min-width: 240px;
      align-items: center;
      justify-content: space-between;
      font-weight: 400;
      font-size: 14px;
      color: #fff;
      border-radius: 8px 8px 0 0;
      background: ${isActive ? '#35363A' : '#202124'};
      :hover {
         background: ${isActive ? '#35363A' : '#2d2e31'};
      }
      span:nth-child(2) {
         width: 24px;
         height: 24px;
         display: flex;
         border-radius: 50%;
         align-items: center;
         justify-content: center;
         &:hover {
            background: #202124;
         }
      }
   `
)

export const StyledTabPanels = styled.div`
   outline: 1px solid #efefef;
   height: calc(100vh - 44px);
   grid-area: tabpanels;
`

export const StyledTabPanel = styled.div`
   outline: 1px solid #dccfcf;
   height: 100%;
   display: ${({ active }) => (active ? 'block' : 'none')};
   iframe {
      width: 100%;
      height: 100%;
   }
`
