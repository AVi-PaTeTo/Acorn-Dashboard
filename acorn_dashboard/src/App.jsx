import './App.css'
import Side from './modules/Sidebar'
import NavPanel from './modules/NavPanel'
import Search from './modules/Search'
import ReportHeader from './modules/ReportHeader'
import Summary from './modules/Summary'
import RevenueDistribution from './modules/RevenueDistribution'
import PlatformPerformance from './modules/PlatformPerformance'
import PerformanceInsights from './modules/PerformanceInsights'

function App() {

  return (
    <div className='grid grid-cols-[70px_min-content_1fr] h-full relative hover:cursor-default'>
      <Side />
      <div className='col-start-2 col-end-3 w-52 2xl:w-56 h-full'>
        <NavPanel />
      </div>

      {/* content container */}
      <div className=' pl-3 py-4 pr-4 2xl:py-5 2xl:pr-5 flex flex-col h-full w-full col-start-3 col-end-4'>

        {/* search bar */}
        <Search />

        {/* main tray */}
        <div className="bg-s-white flex flex-col h-fit py-6 rounded-[2.2rem]">

          {/* user list and tools */}
          <ReportHeader />

          {/* stats overview */}
          <div className='flex pb-6 px-6'>
            <Summary />
            {/* <RevenueDistribution /> */}
          </div>

          {/* Trend */}
          <div className='px-6 h-fit flex flex-col xl:flex-row gap-5 xl:gap-3'>
            {/* Platform metrics + Revenue cards */}
            <PlatformPerformance />

            {/* Sales leaderboard + Platform work */}
            <PerformanceInsights />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
