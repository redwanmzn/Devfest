
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'


function Home() {


  return (
    <>
  <div class='flex'>
 
    <div class=' top-0'>
    <Sidebar></Sidebar>

    </div>
    <div class='top-0  '>

  <Dashboard></Dashboard>
    </div>
   
  </div>
    </>
  )
}

export default Home
