import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Waves from './Components/Wave'
import Navbar from './Components/Navbar'
import CameraInput from './Components/CameraInput'
import LetterGlitch from './Components/LetterGlitch'
import MainMonitoringDashboard from './Components/MainMonitoringDashboard'

function App() {
  const [CameraUrl, setCameraUrl]= useState('');

  return (
    <>
    <Navbar />
    <CameraInput setCameraUrl={setCameraUrl}/>
    <MainMonitoringDashboard cameraUrl={CameraUrl}/>
    </>
  )
}

export default App
