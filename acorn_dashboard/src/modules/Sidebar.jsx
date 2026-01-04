import { useState } from "react"
import icon from "../assets/icon.png"

const Side = () => {
    const [active, setActive] = useState(1)

    return(
        <div className="h-dvh relative">
            <div className="fixed flex flex-col items-center justify-between p-4 2xl:p-5 h-full w-[70px]">

                <div className="hover:cursor-pointer w-10 h-10 flex items-center justify-center overflow-hidden rounded-4xl mb-14">
                    <img className="object-center" src={icon} alt="" />
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div 
                        onClick={()=> setActive(0)}
                        className={`hover:cursor-pointer w-10 h-10 flex items-center justify-center  rounded-4xl transition-all duration-200 ${active == 0? 'w-12 h-12 bg-accent':'w-10 h-10 bg-s-white'}`}>
                        <svg className={`${active == 0? 'stroke-white':'stroke-black'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke-width="4"><path d="M13.5 39.37A16.93 16.93 0 0 0 24 43c3.963 0 7.61-1.356 10.5-3.63M19 9.747C12.051 11.882 7 18.351 7 26c0 1.925.32 3.775.91 5.5M29 9.747C35.949 11.882 41 18.351 41 26c0 1.925-.32 3.775-.91 5.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M43 36c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 43 36m-28 0c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 15 36M29 9c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 29 9"/></g></svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="[6px]" d="M3 4.4c0-1.131 0-1.697.351-2.049C3.703 2 4.27 2 5.4 2h.2c1.131 0 1.697 0 2.049.351C8 2.703 8 3.27 8 4.4v.2c0 1.131 0 1.697-.351 2.049C7.297 7 6.73 7 5.6 7h-.2c-1.131 0-1.697 0-2.049-.351C3 6.297 3 5.73 3 4.6zm13 5c0-1.131 0-1.697.352-2.049C16.702 7 17.269 7 18.4 7h.2c1.131 0 1.697 0 2.048.351C21 7.703 21 8.27 21 9.4v.2c0 1.131 0 1.697-.352 2.049c-.35.351-.917.351-2.048.351h-.2c-1.131 0-1.697 0-2.048-.351C16 11.297 16 10.73 16 9.6zm-13 5c0-1.131 0-1.697.351-2.049C3.703 12 4.27 12 5.4 12h.2c1.131 0 1.697 0 2.049.351C8 12.704 8 13.27 8 14.4v.2c0 1.131 0 1.697-.351 2.048C7.297 17 6.73 17 5.6 17h-.2c-1.131 0-1.697 0-2.049-.352C3 16.298 3 15.731 3 14.6zm13 5c0-1.131 0-1.697.352-2.048c.35-.352.917-.352 2.048-.352h.2c1.131 0 1.697 0 2.048.352c.352.35.352.917.352 2.048v.2c0 1.131 0 1.697-.352 2.048c-.35.352-.917.352-2.048.352h-.2c-1.131 0-1.697 0-2.048-.352C16 21.298 16 20.731 16 19.6zM8 4.5l7 5l-6 5l7 5" color="currentColor"/></svg> */}
                    </div>
                    <div 
                        onClick={()=> setActive(1)}
                        className={`hover:cursor-pointer  flex items-center justify-center rounded-4xl transition-all duration-200 ${active == 1? 'w-12 h-12 bg-accent':'w-10 h-10 bg-s-white'}`}>
                        <svg className={`${active == 1? 'stroke-white':'stroke-black'}`} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Zm0 11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1ZM3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/></g></svg>
                        {/* <svg className={`${active == 1? 'fill-white':'fill-black'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.5 13.5v-3A.5.5 0 0 1 8 10h.672a.5.5 0 0 1 .353.146l.414.415l.44.439H13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5M6 13H4.5a3 3 0 0 1-3-3V1.25a.75.75 0 0 1 [6px] 0V2a[6px] [6px] 0 0 0 [6px] [6px]H6v-1a2 2 0 0 1 2-2h.672a2 2 0 0 1 1.414.586l.414.414H13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5H4.5A3 3 0 0 1 3 4.599V10a[6px] [6px] 0 0 0 [6px] [6px]H6v-1a2 2 0 0 1 2-2h.672a2 2 0 0 1 1.414.586l.414.414H13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm[6px]-8.75V5.5A.5.5 0 0 0 8 6h5a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 13 3H9.879l-.44-.44l-.414-.414A.5.5 0 0 0 8.672 2H8a.5.5 0 0 0-.5.5z" clip-rule="evenodd"/></svg> */}
                    </div>
                    <div 
                        onClick={()=> setActive(2)}
                        className={`hover:cursor-pointer w-10 h-10 flex items-center justify-center  rounded-4xl transition-all duration-200 ${active == 2? 'w-12 h-12 bg-accent':'w-10 h-10 bg-s-white'}`}>
                        <svg className={`${active == 2? 'fill-white':'fill-black'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" ><g fill=""><path d="M25 5h-.17v2H25a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h.17V5H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3"/><path d="M23 3h-3V0h-8v3H9v6h14zm-2 4H11V5h3V2h4v3h3z"/><path d="M10 13h12v2H10zm0 5h12v2H10zm0 5h12v2H10z" class="ouiIcon__fillSecondary"/></g></svg>
                    </div>
                    <div 
                        onClick={()=> setActive(3)}
                        className={`hover:cursor-pointer w-10 h-10 flex items-center justify-center  rounded-4xl transition-all duration-200 ${active == 3? 'w-12 h-12 bg-accent':'w-10 h-10 bg-s-white'}`}>
                        <svg className={`fill-none ${active == 3? 'stroke-white':'stroke-black'}`} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14"><path  stroke-linecap="round" stroke-linejoin="round" d="M11.75 10A1.75 1.75 0 1 1 10 11.75v-9.5A1.75 1.75 0 1 1 11.75 4h-9.5A1.75 1.75 0 1 1 4 2.25v9.5A1.75 1.75 0 1 1 2.25 10z"/></svg>
                    </div>
                    <div 
                        onClick={()=> setActive(4)}
                        className={`hover:cursor-pointer  flex items-center justify-center rounded-4xl transition-all duration-200 ${active == 4? 'w-12 h-12 bg-accent':'w-10 h-10 bg-s-white'}`}>
                        <svg className={`fill-none ${active == 4? 'stroke-white':'stroke-black'}`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"><path d="m8 10.5l6.492-6.492M13.496 16L20 9.496zm-4.91-.586L19.413 4.587M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"/><path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2"/></g></svg>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                    <div className="hover:cursor-pointer w-10 h-10 flex items-center justify-center bg-s-white rounded-4xl relative">
                        <div className="absolute h-[6px] w-[6px] outline-accent outline-3 rounded-2xl top-1 right-1"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#000000" d="M7.291 20.824L2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176m.29-2.113l.653.35A7.96 7.96 0 0 0 12 20a8 8 0 1 0-8-8c0 1.335.325 2.617.94 3.766l.349.653l-.655 2.947zM7 12h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0"/></svg>
                    </div>
                    <div className="hover:cursor-pointer w-10 h-10 flex items-center justify-center bg-s-white rounded-4xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024"><path fill="#000000" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side