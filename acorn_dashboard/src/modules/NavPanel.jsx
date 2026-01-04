const NavPanel = () => {


  return (
    <div className="nav-panel left-[70px] flex flex-col text-dark pl-4 py-4 2xl:pl-5 2xl:py-5 w-48 h-screen fixed">
        <div className="flex flex-col h-full">
            <div className="flex  mb-6 py-2 items-center">
                <h1 className="font-bold text-[18px]">
                    Codename.com
                </h1>
                <svg className="h-5 w-5 fill-black/50 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>
            </div>


            <div className="flex flex-col gap-1.5 font-bold text-[1em] h-full pr-2 overflow-y-auto scroll-container  xl:text-[.8rem] 2xl:text-[.9rem] ">
                <div className="flex items-center gap-1.5 text-black/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
                    <p>Starred</p>
                </div>
                <div className="flex items-center gap-2 text-black/50">
                    <svg className="pb-px ml-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12.207 2.293a1 1 0 0 1 0 1.414L10.914 5H12.5c4.652 0 8.5 3.848 8.5 8.5S17.152 22 12.5 22S4 18.152 4 13.5a1 1 0 1 1 2 0c0 3.548 2.952 6.5 6.5 6.5s6.5-2.952 6.5-6.5S16.048 7 12.5 7h-1.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0"/></svg>
                    <p>Recent</p>
                </div>
                <div>Sales list</div>
                <div>Goals</div>
                <ul className='tree'>
                    <li>
                        <span className='flex items-center justify-between'>Dashboard <svg className="h-6 w-6 pb-px" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white" stroke="white" strokeWidth="2"/><path d="M12 8v8M16 12H8" stroke="gray" strokeWidth="2" strokeLinecap="round"/></svg></span>
                        <ul >
                            <li>
                                <span>Codename</span>
                            </li>
                            <li>
                                <span className='flex items-center justify-between'>
                                    Shared with me 
                                    <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg>
                                </span>
                                <ul >
                                    <li><span>Cargo2go</span></li>
                                    <li className="flex justify-between items-center">
                                        <span>Cloudz3r</span>
                                        <span className="bg-accent text-white px-1.5 pt-px rounded-sm flex items-center text-[.7rem] h-[18px]">2</span>
                                    </li>
                                    <li><span>Idioma</span></li>
                                    <li><span>Syllables</span></li>
                                    <li><span>x-0b</span></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <span className='flex items-center justify-between'>
                            Reports 
                            <svg className="h-6 w-6 pb-px" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white" stroke="white" strokeWidth="2"/><path d="M12 8v8M16 12H8" stroke="gray" strokeWidth="2" strokeLinecap="round"/></svg></span>
                        <ul >
                            <li>
                                <span className='flex items-center justify-between'>
                                    Share with me
                                    <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg>
                                </span>
                                <ul >
                                    <li><span>Deals by user</span></li>
                                    <li><span>Deal duration</span></li>
                                </ul>
                            </li>
                            <li>
                                <span className='flex items-center justify-between'>
                                    My reports
                                    <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg>
                                </span>
                                <ul >
                                    <li><span>Email received</span></li>
                                    <li><span>Deal duration</span></li>
                                    <li><span className="text-accent">New report</span></li>
                                    <li className="flex justify-between items-center">
                                        <span>Analytics</span>
                                        <span className="bg-accent text-white px-1.5 pt-px rounded-sm flex items-center text-[.7rem] h-[18px]">7</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='flex items-center gap-2 text-gray-500'>
                            <svg className='h-5 w-5 fill-gray-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 2H9a1 1 0 0 0-1 1v4H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M10 20H4v-6h6Zm5-3h-3v-4a1 1 0 0 0-1-1H7V9h8Zm5-3h-3V8a1 1 0 0 0-1-1h-6V4h10Z"/></svg>
                            Manage folders
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default NavPanel;
