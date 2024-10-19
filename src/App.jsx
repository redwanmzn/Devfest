
import Sidebar from './components/Sidebar'
import Dashborad from './components/Dashborad'
import './index.css'

function App() {


  return (
    <>
  <div class='flex'>
 
    <div class=' top-0'>
    <Sidebar></Sidebar>

    </div>
    <div class='top-0  '>

  <Dashborad></Dashborad>
    </div>
   
  </div>
    </>
  )
}

export default App
