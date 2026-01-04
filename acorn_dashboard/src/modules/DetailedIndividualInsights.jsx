import TrendChartDashboard from "./TrendChartDashboard"

export default function DetailedIndividualInsights(){
    return(
        <span className='flex flex-col flex-1 w-full rounded-2xl h-full text-[.8rem] font-bold'>
            <div className='flex w-full gap-2 mb-3'>
                <span className='py-1 px-2 bg-white rounded-2xl shadow-sm'>Top Sales 💪</span>
                <span className='py-1 px-2 bg-white rounded-2xl shadow-sm'>Sales Streak 🔥</span>
                <span className='py-1 px-2 bg-white rounded-2xl shadow-sm'>Top Review 👍</span>
            </div>
            <div className='flex flex-col h-full'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-[0.9rem]'>Work with platforms</span>
                    <span className='flex gap-2'>
                    <span className='bg-accent gap-[2px] pr-3 pl-2 flex items-center text-white rounded-2xl'>
                        <svg className='h-[14px] w-[14px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062t.375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"/></svg>
                        <p className='pt-px'>3</p>
                    </span>
                    <span className='bg-accent py-1 px-[10px] text-white rounded-2xl'>$156,841</span>
                    </span>

                </div>
                {/* Platform revs */}
                <div className='flex h-30 gap-[6px] mb-2'>

                    <div className='flex flex-col justify-between p-3 pb-2 relative w-[50%] h-full rounded-2xl overflow-hidden'>
                        {/* Card #1 */}
                        <div className='absolute inset-0 flex'>
                            <div className='bg-white h-full w-[85%]'></div>
                            <div className='bg-diagonal h-full w-[15%]'></div>
                        </div>
                        <span className='flex gap-2 z-10 items-center text-[.9rem]'>
                            <svg className='w-[22px] h-[22px] stroke-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></g></svg>
                            Dribbble
                        </span>
                        <span className='xl:text-[22px] 2xl:text-3xl font-bold flex mt-auto gap-2 z-10'>
                            <span>45.3%</span>
                            <span className='text-gray-300'>$71,048</span>
                        </span>
                    </div>

                    <div className='w-[50%] h-full'>
                        <div className='grid grid-cols-2 grid-rows-4 h-full gap-1'>

                            {/* Card #2 */}
                            <span className='col-start-1 col-end-2 row-start-1 xl:row-end-4 2xl:row-end-4 bg-white rounded-xl flex flex-col p-2 pb-1'>
                                <span className='flex gap-1 z-10 items-center text-[.9rem]'>
                                    <svg className='w-[22px] h-[22px] shrink-0 fill-pink-600' viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                                    Instagram
                                </span>
                                <span className='2xl:text-base flex-row  font-bold flex mt-auto text-[.7rem] z-10 pl-1 gap-2'>
                                    <span>28.1%</span>
                                    <span className='text-gray-300'>$44,072</span>
                                </span>
                            </span>

                            {/* Card #3 */}
                            <span className='col-start-2 col-end-3 row-start-1 row-end-3 bg-diagonal justify-between rounded-xl p-2 flex flex-col'>
                                <span className='flex gap-2 z-10  items-center text-[.9rem]'>
                                    <svg className='w-[22px] h-[22px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity=".987"/><path fill="#ffc107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity=".997"/><path fill="#448aff" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity=".999"/><path fill="#43a047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity=".993"/></g></svg>
                                    Google
                                </span>
                                <span className='2xl:text-base font-bold flex flex-row mt-auto text-[.7rem] z-10 pl-1 gap-2'>
                                    <span>14.1%</span>
                                    <span className='text-gray-400'>$22,114</span>
                                </span>
                            </span>

                            {/* Card #4 */}
                            <span className='xl:col-start-2 2xl:col-start-2 col-end-3 row-start-3 row-end-4 bg-white rounded-xl flex items-center justify-between px-2'>
                                <span className='flex gap-1 z-10  items-center text-[.9rem]'>
                                    <svg className='w-6 h-6 fill-black' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13 11a6 6 0 1 1-12 0a6 6 0 0 1 12 0m6.75 0c0 3.038-1.231 5.5-2.75 5.5s-2.75-2.462-2.75-5.5S15.481 5.5 17 5.5s2.75 2.462 2.75 5.5M22 16c.552 0 1-2.239 1-5s-.448-5-1-5s-1 2.239-1 5s.448 5 1 5" clip-rule="evenodd"/></svg>
                                </span>
                                <span className='xl:text-[.7rem] 2xl:text-[.9rem] font-bold flex flex-row z-10 gap-2'>
                                    <span>5.4%</span>
                                    <span className='text-gray-400'>$8,469</span>
                                </span>
                            </span>

                            {/* Card #5 */}
                            <span className='col-start-1 col-end-3 row-start-4 row-end-5 bg-white rounded-xl flex justify-between items-center px-2'>
                                <span className='flex gap-1 z-10  items-center text-[.9rem]'>
                                    <svg className='w-[22px] h-[22px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2l-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z"/></svg>
                                    Other
                                </span>
                                <span className='xl:text-[.7rem] 2xl:text-[.9rem] font-bold flex flex-row z-10 gap-2'>
                                    <span>14.1%</span>
                                    <span className='text-gray-400'>$22,114</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className=' h-full flex flex-col'>
                    <span className=''>
                        Sales dynamic
                    </span>
                    <span className='h-full w-full min-h-30 relative'>
                        <div className='flex w-full h-full overflow-hidden text-black/10 pb-2'>
                            <span className='border-r-2 border-r-black/10  w-[22%] h-full pl-1 '>w1</span>
                            <span className='border-r-2 border-r-black/10  w-[22%] h-full pl-1 '>w3</span>
                            <span className='border-r-2 border-r-black/10  w-[22%] h-full pl-1 '>w5</span>
                            <span className='border-r-2 border-r-black/10  w-[22%] h-full pl-1 '>w7</span>
                            <span className='border-r-2 border-r-black/10  w-[22%] h-full pl-1 '>w9</span>
                            <span className=' w-[22%] h-full pl-1 '>w11</span>
                        </div>
                        <div className='absolute inset-0 '>
                            <div className='w-full h-[85%]'>
                                <TrendChartDashboard />
                            </div>
                            <div className='w-full h-[15%] bottom-0 flex items-center pb-2'>
                                <div className='relative w-full h-1 bg-linear-to-r rounded-sm from-red-600 via-amber-300 to-green-500'>
                                    <span className='absolute -top-[6px] left-[20%] bg-blue-600 p-px rounded-sm'>
                                        <div className="absolute flex items-center justify-center h-[14px] w-[14px] bg-accent rounded-2xl -top-[6px] -right-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></svg>
                                        </div>
                                        <svg className='w-4 h-4  fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10.187 11.362a3.24 3.24 0 0 0 1.343-1.108a3.15 3.15 0 0 0 .451-1.751a3.8 3.8 0 0 0-.304-1.64a2.63 2.63 0 0 0-.86-1.109c-.4-.29-.855-.487-1.333-.576A7.5 7.5 0 0 0 7.764 5H1.8a.3.3 0 0 0-.3.3v13.341a.3.3 0 0 0 .3.3h6.1c.584 0 1.166-.078 1.73-.233a4.7 4.7 0 0 0 1.501-.72a3.4 3.4 0 0 0 1.05-1.263a3.96 3.96 0 0 0 .388-1.829a4 4 0 0 0-.599-2.216a3.15 3.15 0 0 0-1.836-1.32zM4.55 7.25a.2.2 0 0 0-.2.2v3.1c0 .11.09.2.2.2h2.8a1.75 1.75 0 0 0 0-3.5zm-.2 5.45c0-.11.09-.2.2-.2h2.925a2.125 2.125 0 0 1 0 4.25H4.55a.2.2 0 0 1-.2-.2z" clip-rule="evenodd"/><path  d="M15.439 5.71h4.723a.3.3 0 0 1 .3.296l.013.962a.3.3 0 0 1-.3.304h-4.736a.3.3 0 0 1-.3-.3V6.01a.3.3 0 0 1 .3-.3"/><path fill-rule="evenodd" d="M17.972 16.87a2.25 2.25 0 0 0 1.363-.41c.26-.173.467-.42.598-.712a.22.22 0 0 1 .194-.13h1.921c.13 0 .226.122.187.246a4.66 4.66 0 0 1-1.64 2.358a4.8 4.8 0 0 1-2.77.775a5.2 5.2 0 0 1-2.036-.376a4.2 4.2 0 0 1-1.531-1.109a5 5 0 0 1-.924-1.695a6.4 6.4 0 0 1-.335-2.15a6.3 6.3 0 0 1 .346-2.117a4.9 4.9 0 0 1 .996-1.684a4.7 4.7 0 0 1 1.543-1.109a4.9 4.9 0 0 1 1.993-.41a4.4 4.4 0 0 1 2.099.5a4.45 4.45 0 0 1 1.49 1.34c.391.578.676 1.228.839 1.917a7.6 7.6 0 0 1 .178 2.217h-6.945a2.85 2.85 0 0 0 .65 1.95c.242.224.526.393.833.496s.63.138.95.103M15.6 12.399a.1.1 0 0 0 .101.101h4.048a.1.1 0 0 0 .101-.101a2.024 2.024 0 0 0-2.024-2.024h-.202a2.024 2.024 0 0 0-2.024 2.024" clip-rule="evenodd"/></svg>
                                    </span>
                                    <span className='absolute -top-[6px] left-[52%] bg-accent p-px rounded-sm'>
                                        <div className="absolute flex items-center justify-center h-[14px] w-[14px] bg-black rounded-2xl -top-[6px] -right-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"/></svg>
                                        </div>
                                        <svg className='w-4 h-4  stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></g></svg>
                                    </span>
                                    <span className='absolute -top-[6px] left-[85%]'>
                                        <div className="absolute flex items-center justify-center h-[14px] w-[14px] bg-accent rounded-2xl -top-[6px] -right-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"/></svg>
                                        </div>
                                        <span className='w-4 h-4 rounded-4xl overflow-hidden' >
                                            <img className='w-4.5 h-4.5 rounded-2xl' src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </span>
    )
}