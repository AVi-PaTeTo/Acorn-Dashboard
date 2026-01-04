import DealsAmount from "./DealsAmount";
import PlatformValueChart from "./PlatformValueChart";
import RevenueByPlatform from "./RevenueByPlatform";

export default function PlatformPerformance(){
    return(
            <div className=' flex flex-col w-full xl:w-[50%] gap-2 bg-white'>
                <div className='flex gap-2 w-full'>
                    {/* Card #1 */}
                    <RevenueByPlatform />

                    {/* Card #2 */}
                    <DealsAmount />
                </div>

                {/* Chart #3 */}
                <PlatformValueChart />
            </div>
    )
}