import { useState } from "react"

export default function Summary(){
    const [toggle, setToggle] = useState(false)

    return(
        <div className="flex flex-col w-full">
            {/* title and timeframe */}
            <div className='flex justify-between mb-8'>
                <h1 className='text-4xl font-bold text-gray-300'>
                    New report
                </h1>
                <div>
                    <span className='flex items-center text-[.9rem] font-bold font-dark gap-2'>
                    <div onClick={()=> setToggle(prev => !prev)} className='h-fit flex items-center p-[2px] rounded-4xl bg-zinc-800 hover:cursor-pointer'>
                        <div className='w-4 h-4 rounded-4xl'></div>
                        <div className={`w-4 h-4 bg-white rounded-4xl ${toggle?'-translate-x-4':''} transition duration-200`}></div>
                    </div>
                    <p>Timeframe</p>
                    <div className='flex bg-gray-200 rounded-4xl px-3 py-2 gap-2 items-center hover:cursor-pointer'>
                        Sep 1 - Nov 30, 2023
                        <svg className='h-5 w-5  fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>
                    </div>
                    </span>
                </div>
            </div>

            {/* main stats */}
            <div className='flex flex-col xl:flex-row justify-between'>
                {/* Revenue */}
                <section className='flex flex-col font-bold gap-2 text-[.8rem] 2xl:text-[1rem] mb-5 xl:mb-0'>
                    <span className='text-xl 2xl:text-2xl'>Revenue</span>
                    <span className='flex gap-1 items-center'>
                    <p className='flex font-black text-3xl 2xl:text-4xl'>
                        $528,976
                        <p className='text-gray-300'>.82</p>
                    </p> 
                    <span className='text-white bg-accent px-2 py-[1px] pt-0.5 rounded-4xl font-semibold flex items-center'>
                        <svg className='h-4 w-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062t.375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"/></svg>
                        7.9%
                    </span>
                    <span className='flex text-white bg-accent px-2 py-[1px] pt-0.5 rounded-4xl font-semibold'>
                        $27,335
                        <p className='text-gray-300'>.09</p>
                    </span>
                    </span>
                    <span className='flex items-center text-gray-500'>
                    <p className='pr-2'>vs prev. $501,641.73</p>
                    <p>Jun 1 - Aug 31, 2023 </p>
                    <svg className='hover:cursor-pointer h-5 w-5  fill-gray-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>  
                    </span>
                </section>

                <section className='flex xl:text-[.8rem] 2xl:text-[1rem]'>
                    <section className='flex gap-8 mx-3 mr-6 xl:mx-6'>
                        {/* Top Sales */}
                        <div className='w-[120px] 2xl:w-[140px] relative flex items-center justify-center rounded-xl bg-gray-200'>
                            <div className='absolute bg-s-white w-[140px] 2xl:w-[160px] gap-[6px] flex flex-col justify-between py-2 px-4 outline-2 outline-gray-200 rounded-xl ray-300 font-bold'>
                            <p className=' text-gray-400'>Top sales</p>
                            <p className='font-black xl:text-[.9rem] 2xl:text-[1.1rem]'>72</p>
                            <div className='flex justify-between items-center'>
                                <span className='flex items-center gap-[6px] '>
                                    <span className='h-5 w-5  rounded-4xl overflow-hidden' >
                                        <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                                    </span>
                                    <p className=''>Mikasa</p>
                                </span>
                                <span className='bg-gray-200 p-[2px] rounded-md hover:cursor-pointer'>
                                    <svg className='w-4 h-4 fill-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"/></svg>
                                </span>
                            </div>
                            </div>
                        </div>

                        {/* Best Deal */}
                        <div className='w-[120px] 2xl:w-[140px] relative flex items-center justify-center rounded-xl bg-gray-300'>
                            <div className='absolute text-s-white w-[140px] 2xl:w-[160px] gap-[6px] flex flex-col justify-between py-2 px-4 outline-2 outline-gray-200 bg-dark rounded-xl font-semibold'>
                            <span className='flex justify-between text-gray-400'>
                                Best deal
                                <svg className='w-5 h-5 fill-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
                            </span>
                            <p className='font-bold xl:text-[.9rem] 2xl:text-[1.1rem]'>$42,300</p>
                            <div className='flex justify-between items-center'>
                                <span className='flex items-center gap-[6px] '>
                                    <p className='font-bold'>Rolf Inc.</p>
                                </span>
                                <span className='bg-gray-200 p-[2px] rounded-md hover:cursor-pointer'>
                                    <svg className='w-4 h-4 fill-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"/></svg>
                                </span>
                            </div>
                            </div>   
                        </div>
                    </section>

                    {/* Deals, value, Win Rate */}
                    <section className='flex py-2 gap-4'>
                        <div className='flex flex-col py-2 w-18 2xl:w-22 items-center justify-between  outline-2 outline-gray-200 rounded-xl font-bold'>
                            <span>Deals</span>
                            <span className='py-0.5 px-2 rounded-3xl text-white bg-gray-300'>256</span>
                            <span className='flex items-center'>
                            <svg className='h-4 w-4 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213L6.7 7.7q-.275-.275-.288-.687T6.7 6.3q.275-.275.7-.275t.7.275z"/></svg>
                            <p className='pt-px'>5</p>
                            </span>
                        </div>
                        <div className='flex flex-col py-2 w-18 2xl:w-22 items-center justify-between  outline-2 outline-accent rounded-xl font-bold'>
                            <span>Value</span>
                            <span className='py-0.5 px-2 rounded-3xl text-white bg-accent'>528k</span>
                            <span className='flex items-center'>
                            <svg className='h-4 w-4 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062t.375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"/></svg>
                            <p className='pt-px'>7.9%</p>
                            </span>
                        </div>
                        <div className='flex flex-col py-2 w-18 2xl:w-22 items-center justify-between  outline-2 outline-gray-200 rounded-xl font-bold'>
                            <span>Win rate</span>
                            <span className='py-0.5 px-2 rounded-3xl text-white bg-gray-300'>44%</span>
                            <span className='flex items-center'>
                            <svg className='h-4 w-4 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062t.375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"/></svg>
                            <p className='pt-px'>1.2%</p>
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}