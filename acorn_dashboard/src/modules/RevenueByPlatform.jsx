export default function RevenueByPlatform(){
    return(
            <div className='flex flex-col aspect-square h-full w-full max-h-70 bg-gray-200/70 rounded-2xl'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex gap-1 '>
                        <svg width="20" height="20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="14" rx="7" fill="black"/><rect x="20" y="70" width="120" height="14" rx="7" fill="black"/><rect x="20" y="120" width="160" height="14" rx="7" fill="black"/><rect x="20" y="170" width="80" height="14" rx="7" fill="black"/></svg>
                        <svg className="w-5 h-5 fill-gray-800 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"/></svg>
                    </div>
                    <div className='font-semibold flex gap-1 items-center  ray-300 px-2 py-1 rounded-xl'>
                        Filters
                        <svg className="h-4 w-4 fill-none stroke-gray-700 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 6h18M6 12h12m-9 6h6"/></svg>
                    </div>
                </div>

                <div className='pt-0 px-3 pb-3 2xl:px-4 2xl:pb-4 flex-1 gap-1 grid grid-cols-1'>

                    <span className='px-2 items-center justify-between rounded-lg bg-s-white font-semibold xl:text-[.8rem] 2xl:text-[.9rem] grid grid-cols-[3fr_2fr_40px]'>
                        <div className='flex gap-1 2xl:gap-2 items-center text-gray-400  xl:text-[.8rem] 2xl:text-[1rem]'>
                            <svg className='w-[22px] h-[22px] stroke-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></g></svg>
                            Dribbble
                        </div>
                        <span className='font-bold pt-px justify-self-end pr-2'>
                            $227,459
                        </span>
                        <span className='text-[.8rem] bg-gray-300 h-fit flex-0 px[6px] rounded-3xl pt-px text-center'>
                            43%
                        </span>
                    </span>

                    <span className='px-2 items-center justify-between rounded-lg bg-s-white font-semibold xl:text-[.8rem] 2xl:text-[.9rem] grid grid-cols-[3fr_2fr_40px]'>
                        <div className='flex gap-1 2xl:gap-2 items-center  text-gray-400  xl:text-[.8rem] 2xl:text-[1rem]'>
                            <svg className='w-[22px] h-[22px] fill-pink-600' viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                            Instagram
                        </div>
                        <span className='font-bold pt-px justify-self-end pr-2'>
                            $142,823
                        </span>
                        <span className='text-[.8rem] bg-gray-300 h-fit flex-0 px[6px] rounded-3xl pt-px text-center'>
                            27%
                        </span>
                    </span>

                    <span className='px-2 items-center justify-between rounded-lg bg-s-white font-semibold xl:text-[.8rem] 2xl:text-[.9rem] grid grid-cols-[3fr_2fr_40px]'>
                        <div className='flex gap-1 2xl:gap-2 items-center  text-gray-400  xl:text-[.8rem] 2xl:text-[1rem]'>
                            <svg className='w-[22px] h-[22px] fill-blue-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10.187 11.362a3.24 3.24 0 0 0 1.343-1.108a3.15 3.15 0 0 0 .451-1.751a3.8 3.8 0 0 0-.304-1.64a2.63 2.63 0 0 0-.86-1.109c-.4-.29-.855-.487-1.333-.576A7.5 7.5 0 0 0 7.764 5H1.8a.3.3 0 0 0-.3.3v13.341a.3.3 0 0 0 .3.3h6.1c.584 0 1.166-.078 1.73-.233a4.7 4.7 0 0 0 1.501-.72a3.4 3.4 0 0 0 1.05-1.263a3.96 3.96 0 0 0 .388-1.829a4 4 0 0 0-.599-2.216a3.15 3.15 0 0 0-1.836-1.32zM4.55 7.25a.2.2 0 0 0-.2.2v3.1c0 .11.09.2.2.2h2.8a1.75 1.75 0 0 0 0-3.5zm-.2 5.45c0-.11.09-.2.2-.2h2.925a2.125 2.125 0 0 1 0 4.25H4.55a.2.2 0 0 1-.2-.2z" clip-rule="evenodd"/><path  d="M15.439 5.71h4.723a.3.3 0 0 1 .3.296l.013.962a.3.3 0 0 1-.3.304h-4.736a.3.3 0 0 1-.3-.3V6.01a.3.3 0 0 1 .3-.3"/><path fill-rule="evenodd" d="M17.972 16.87a2.25 2.25 0 0 0 1.363-.41c.26-.173.467-.42.598-.712a.22.22 0 0 1 .194-.13h1.921c.13 0 .226.122.187.246a4.66 4.66 0 0 1-1.64 2.358a4.8 4.8 0 0 1-2.77.775a5.2 5.2 0 0 1-2.036-.376a4.2 4.2 0 0 1-1.531-1.109a5 5 0 0 1-.924-1.695a6.4 6.4 0 0 1-.335-2.15a6.3 6.3 0 0 1 .346-2.117a4.9 4.9 0 0 1 .996-1.684a4.7 4.7 0 0 1 1.543-1.109a4.9 4.9 0 0 1 1.993-.41a4.4 4.4 0 0 1 2.099.5a4.45 4.45 0 0 1 1.49 1.34c.391.578.676 1.228.839 1.917a7.6 7.6 0 0 1 .178 2.217h-6.945a2.85 2.85 0 0 0 .65 1.95c.242.224.526.393.833.496s.63.138.95.103M15.6 12.399a.1.1 0 0 0 .101.101h4.048a.1.1 0 0 0 .101-.101a2.024 2.024 0 0 0-2.024-2.024h-.202a2.024 2.024 0 0 0-2.024 2.024" clip-rule="evenodd"/></svg>
                            Behance
                        </div>
                        <span className='font-bold pt-px justify-self-end pr-2'>
                            $89,935
                        </span>
                        <span className='text-[.8rem] bg-gray-300 h-fit flex-0 px[6px] rounded-3xl pt-px text-center'>
                            11%
                        </span>
                    </span>

                    <span className='px-2 items-center justify-between rounded-lg bg-s-white font-semibold xl:text-[.8rem] 2xl:text-[.9rem] grid grid-cols-[3fr_2fr_40px]'>
                        <div className='flex gap-1 2xl:gap-2 items-center  text-gray-400  xl:text-[.8rem] 2xl:text-[1rem]'>
                            <svg className='w-[22px] h-[22px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity=".987"/><path fill="#ffc107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity=".997"/><path fill="#448aff" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity=".999"/><path fill="#43a047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity=".993"/></g></svg>
                            Google
                        </div>
                        <span className='font-bold pt-px justify-self-end pr-2'>
                            $37,028
                        </span>
                        <span className='text-[.8rem] bg-gray-300 h-fit w-full px[6px] rounded-3xl pt-px text-center'>
                            7%
                        </span>
                    </span>
                </div>
            </div>
    )
}