import { useState } from "react"

export default function PlatformValueChart(){
    const [active,setActive] = useState('Revenue')

    return(
        <div className='flex flex-col w-full h-full min-h-60 max-h-60 bg-gray-200/70 rounded-2xl overflow-hidden'>
                    <div className=' flex justify-between p-3'>
                        <div className='flex gap-2  items-center'>
                            <svg className='w-7 h-7 stroke-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></g></svg>
                            <div className='text-[0.8rem] font-bold'>
                                <span className='text-gray-400'>
                                    Platform value
                                </span>
                                <span className='flex'>
                                    Dribble
                                    <svg className="hover:cursor-pointer w-5 h-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"/></svg>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 py-[2px] px-1 bg-white rounded-2xl font-bold text-[.9rem]'>
                            <span 
                                onClick={() => setActive('Revenue')} 
                                className={`py-1 px-[10px] rounded-xl transition-colors duration-200 ${active == 'Revenue'? 'bg-dark text-white':'bg-gray-200/70 text-dark'}`}>Revenue</span>
                            <span 
                                onClick={() => setActive('Leads')} 
                                className={`py-1 px-[10px] rounded-xl transition-colors duration-200 ${active == 'Leads'? 'bg-dark text-white':'bg-gray-200/70 text-dark'}`}>Leads</span>
                            <span 
                                onClick={() => setActive('W/L')} 
                                className={`py-1 px-[10px] rounded-xl transition-colors duration-200 ${active == 'W/L'? 'bg-dark text-white':'bg-gray-200/70 text-dark'}`}>W/L</span>
                        </div>
                    </div>
                    <div className='flex h-full'>
                        <div className='bg-accent flex w-fit rounded-tr-2xl text-[0.8rem] font-bold text-gray-100/60 tracking-wide'>
                            <div className='flex flex-1 p-4 relative'>
                                <p className='absolute -left-9 top-1/2 -translate-y-[50%] -rotate-90 h-fit tracking-wide text-[0.9rem]'>Average monthly</p>
                                <div className='flex justify-between flex-col flex-1 pb-3 pl-8'>
                                    <span>
                                        <p>Revenue</p>
                                        <p>$18,552</p>
                                    </span>
                                    <span>
                                        <p>Leads</p>
                                        <span className='flex gap-1.5'>
                                            <p className='text-white'>373</p>
                                            <p>97/276</p>
                                        </span>
                                    </span>
                                    <span>
                                        <p>Win/Lose</p>
                                        <span className='flex gap-1.5'>
                                            <p className='text-white'>16%</p>
                                            <p>51/318</p>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='px-3 pb-1 pt-2 flex-1 '>
                            <div className='h-full flex flex-col relative'>
                                <span className='w-full h-full border-t border-t-white text-[.7rem] text-right font-semibold text-gray-400'> $14,500</span>
                                <span className='w-full h-full border-t border-t-white text-[.7rem] text-right font-semibold text-gray-400'> $11,000</span>
                                <span className='w-full h-full border-t border-t-white text-[.7rem] text-right font-semibold text-gray-400'> $7,500</span>
                                <span className='w-full h-full border-t border-t-white text-[.7rem] text-right font-semibold text-gray-400'> $4,000</span>
                                <span className='w-full h-full border-t border-t-white'></span>
                                <div className='absolute flex justify-between gap-[10px] inset-0 pl-2 pr-12'>
                                    <span className=' flex-1 flex flex-col'>
                                        <div className='flex gap-1 h-full items-end justify-center'>
                                            <span className='flex-1 bg-diagonal rounded-lg h-[45%] max-w-10 relative'>
                                                <div className='absolute -top-6 bg-accent text-white px-1 pt-0.5 rounded-md left-1/2 -translate-x-1/2 text-[.7rem] font-bold' >
                                                    $6,901
                                                </div>
                                                <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                    <img src="https://i.pinimg.com/1200x/11/9b/e3/119be3e55baf402c4a4b095bce132364.jpg" alt="" />
                                                </div>
                                            </span>
                                            <span className='flex-1 bg-gray-300 rounded-lg h-[35%] max-w-10 relative'>
                                                <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                    <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                                                </div>
                                            </span>
                                            <span className='flex-1 bg-gray-300 rounded-lg h-[20%] max-w-10 relative'>
                                                <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                    <img src="https://i.pinimg.com/1200x/30/26/55/302655f823b3edc923b26c4a1e52b6b5.jpg" alt="" />
                                                </div>
                                            </span>
                                        </div>
                                        <div className='h-8 text-center text-[.8rem] pt-2'>Sep</div>
                                    </span>
                                    <span className=' flex-1 flex flex-col'>
                                    <div className='flex gap-1 h-full items-end justify-center'>
                                        <span className='flex-1 bg-diagonal rounded-lg h-[78%] max-w-10 relative'>
                                            <div className='absolute -top-6 bg-accent text-white px-1 pt-[2px] rounded-md left-1/2 -translate-x-1/2 text-[.7rem] font-bold' >
                                                $11,035
                                            </div>
                                            <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                <img src="https://i.pinimg.com/1200x/11/9b/e3/119be3e55baf402c4a4b095bce132364.jpg" alt="" />
                                            </div>
                                        </span>
                                        <span className='flex-1 bg-gray-300 rounded-lg h-[55%] max-w-10 relative'>
                                            <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                                            </div>
                                        </span>
                                        <span className='flex-1 bg-gray-300 rounded-lg h-[40%] max-w-10 relative'>
                                            <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                <img src="https://i.pinimg.com/1200x/30/26/55/302655f823b3edc923b26c4a1e52b6b5.jpg" alt="" />
                                            </div>
                                        </span>
                                    </div>
                                    <div className='h-8 text-center text-[.8rem] pt-2'>Oct</div>
                                    </span>
                                    <span className=' flex-1 flex flex-col'>
                                        <div className='flex gap-1 h-full items-end justify-center'>
                                            <span className='flex-1 bg-diagonal rounded-lg h-[65%] max-w-10 relative'>
                                                <div className='absolute -top-6 bg-accent text-white px-1 pt-0.5 rounded-md left-1/2 -translate-x-1/2 text-[.7rem] font-bold' >
                                                    $9,288
                                                </div>
                                                <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                    <img src="https://i.pinimg.com/1200x/11/9b/e3/119be3e55baf402c4a4b095bce132364.jpg" alt="" />
                                                </div>
                                            </span>
                                            <span className='flex-1 bg-gray-300 rounded-lg h-[44%] max-w-10 relative'>
                                                <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                    <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                                                </div>
                                            </span>
                                            <span className='flex-1 bg-gray-300 rounded-lg h-[52%] max-w-10 relative'>
                                                <div className=' h-[18px] w-[18px] rounded-4xl overflow-hidden absolute -bottom-2 left-1/2 -translate-x-1/2' >
                                                    <img src="https://i.pinimg.com/1200x/30/26/55/302655f823b3edc923b26c4a1e52b6b5.jpg" alt="" />
                                                </div>
                                            </span>
                                        </div>
                                        <div className='h-8 text-center text-[.8rem] pt-2'>Nov</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
    )
}