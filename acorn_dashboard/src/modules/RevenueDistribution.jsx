import icon from "../assets/icon.png"

export default function RevenueDistribution(){
    return(
            <div className='flex gap-4'>
                <section className='flex gap-1 p-1 rounded-4xl bg-gray-200 flex-1'>

                    {/* User 1 */}
                    <div className='flex items-center justify-between pl-1 pr-3 bg-s-white rounded-4xl w-[calc(39.63%)]'>
                    <span className='flex items-center justify-center gap-2 h-8'>
                        <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                        <img src="https://i.pinimg.com/1200x/11/9b/e3/119be3e55baf402c4a4b095bce132364.jpg" alt="" />
                        </span>
                        <p className='font-bold text-[.9rem]'>$209,633</p>
                    </span>
                    <p className='text-gray-400 text-[.9rem] pl-4'>39.63%</p>
                    </div>

                    {/* User 3 */}
                    <div className='flex items-center justify-between pl-1 pr-3 bg-s-white rounded-4xl w-[calc(29.65%)]'>
                    <span className='flex items-center justify-center gap-2 h-8'>
                        <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                        <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                        </span>
                        <p className='font-bold text-[.9rem]'>$156,841</p>
                    </span>
                    <p className='text-gray-400 text-[.9rem] pl-4'>29.65%</p>
                    </div>

                    {/* User 2 */}
                    <div className='flex items-center justify-between pl-1 pr-3 bg-s-white rounded-4xl w-[calc(22.14%)]'>
                    <span className='flex items-center justify-center gap-2 h-8'>
                        <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                        <img src="https://i.pinimg.com/1200x/30/26/55/302655f823b3edc923b26c4a1e52b6b5.jpg" alt="" />
                        </span>
                        <p className='font-bold text-[.9rem]'>$117,115</p>
                    </span>
                        <p className='text-gray-400 text-[.9rem] pl-4'>22.14%</p>
                    </div>

                    {/* 4th */}
                    <div className='flex items-center justify-between pl-1 pr-3 rounded-4xl min-w-fit w-[calc(8.58%)]'>
                    <span className='flex items-center justify-center gap-2 h-8'>
                        <span className='h-6 w-6 rounded-4xl overflow-hidden' >
                            <img src={icon} alt="" />
                        </span>
                        <p className='font-bold text-[.9rem]'>$45,386</p>
                        </span>
                    <p className='text-gray-400 text-[.9rem] pl-4'>8.58%</p>
                    </div>
                </section>

                {/* button */}
                <div className='flex bg-dark text-s-white items-center px-4 rounded-4xl hover:cursor-pointer'>
                    Details
                </div>
            </div>
    )
}