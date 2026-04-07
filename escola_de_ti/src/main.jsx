import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import BacklogCreation from './backlogcreation/BacklogCreation.jsx'


import Profile from './profile/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Profile/> */}
  <BacklogCreation/>

  </StrictMode>,
)
