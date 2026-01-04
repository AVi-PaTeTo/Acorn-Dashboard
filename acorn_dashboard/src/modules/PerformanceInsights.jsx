
import DetailedIndividualInsights from "./DetailedIndividualInsights"

export default function PerformanceInsights(){
    return(
            <div className="flex flex-1 h-full w-full xl:w-[50%]">
                <div className="flex flex-col xl:text-[.8rem] 2xl:text-[.9rem] flex-1 min-h-0 w-full h-full font-semibold">
                    <div className='px-2 grid grid-cols-[2fr_1.5fr_1.5fr_0.8fr_2fr] col-span-full text-gray-400'>
                        <p>Sales</p>
                        <p>Revenue</p>
                        <p>Leads</p>
                        <p>KPI</p>
                        <p>W/L</p>
                    </div>

                    {/* Armin */}
                    <div className='items-center py-1 px-2  bg-white rounded-4xl h-fit col-span-full grid grid-cols-[2fr_1.5fr_1.5fr_0.8fr_2fr] shadow-md mb-2'>
                        <span className='flex items-center gap-2 h-8'>
                            <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                            <img src="https://i.pinimg.com/1200x/11/9b/e3/119be3e55baf402c4a4b095bce132364.jpg" alt="" />
                            </span>
                            <p className=''>Armin A.</p>
                        </span>
                        <span>
                            $209,633
                        </span>
                        <span className='flex gap-1 font-semibold'>
                            <span className='py-[2px] px-2 rounded-2xl bg-dark/90 text-white'>41</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-gray-300'>118</span>
                        </span>
                        <span>
                            0.84
                        </span>
                        <span className='flex items-center gap-1 font-semibold'>
                            <span>31%</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-dark/90 text-white'>12</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-gray-300'>29</span>
                        </span>
                    </div>

                    {/* Mikasa */}
                    <div className='flex flex-col w-full h-full mb-2 py-1 px-2 rounded-2xl bg-linear-to-br from-[#f1f7f9] via-[#fcf1f0] to-accent/20 shadow-md'>
                        <div className='items-center  rounded-4xl h-fit mb-3 col-span-full grid grid-cols-[2fr_1.5fr_1.5fr_0.8fr_2fr]'>
                            <span className='flex items-center gap-2 h-8'>
                            <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                                <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                            </span>
                            <p className=''>Mikasa A.</p>
                            </span>
                            <span>
                            $156,841
                            </span>
                            <span className='flex gap-1 font-semibold'>
                            <span className='py-[2px] px-2 rounded-2xl bg-dark/90 text-white'>54</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-gray-300'>103</span>
                            </span>
                            <span className=''>
                            0.89
                            </span>
                            <span className='flex items-center gap-1 font-semibold'>
                            <span>39%</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-dark/90 text-white'>21</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-gray-300'>33</span>
                            </span>
                        </div>
                        <DetailedIndividualInsights />
                    </div>

                    {/* Eren */}
                    <div className='items-center py-1 px-2  bg-white rounded-4xl h-fit col-span-full grid grid-cols-[2fr_1.5fr_1.5fr_0.8fr_2fr] shadow-md '>
                        <span className='flex items-center gap-2 h-8'>
                            <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                                <img src="https://i.pinimg.com/1200x/30/26/55/302655f823b3edc923b26c4a1e52b6b5.jpg" alt="" />
                            </span>
                            <p className=''>Eren Y.</p>
                        </span>
                        <span>
                            $117,115
                        </span>
                        <span className='flex gap-1 font-semibold'>
                            <span className='py-[2px] px-2 rounded-2xl bg-dark/90 text-white'>22</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-gray-300'>84</span>
                        </span>
                        <span>
                            0.79
                        </span>
                        <span className='flex items-center gap-1 font-semibold'>
                            <span>32%</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-dark/90 text-white'>7</span>
                            <span className='py-[2px] px-2 rounded-2xl bg-gray-300'>15</span>
                        </span>
                    </div>
                </div>
            </div>
    )
}