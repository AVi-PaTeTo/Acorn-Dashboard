import { useState } from "react"
import icon from "../assets/icon.png"

export default function ReportHeader(){
  const [modal,setModal] = useState(false)
  return(
          <div className='h-8 mb-6'>
            <div className='flex  justify-between pb-6 px-6'>
              
              {/* User List */}
              <section className='flex gap-4'>

                {/* Add Button */}
                <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                  <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                </span>

                {/* User 1 */}
                <span className='flex h-fit items-center justify-center gap-2 p-1 pr-3  rounded-4xl outline-2 outline-gray-200'>
                  <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                    <img src="https://i.pinimg.com/1200x/11/9b/e3/119be3e55baf402c4a4b095bce132364.jpg" alt="" />
                  </span>
                  <p className='font-bold text-[.9rem]'>Armin A.</p>
                </span>

                {/* User 2 */}
                <span className='flex h-fit items-center justify-center gap-2 p-1 pr-3  rounded-4xl outline-2 outline-gray-200'>
                  <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                    <img src="https://i.pinimg.com/1200x/30/26/55/302655f823b3edc923b26c4a1e52b6b5.jpg" alt="" />
                  </span>
                  <p className='font-bold text-[.9rem]'>Eren Y.</p>
                </span>

                {/* User 3 */}
                <span className='flex h-fit items-center justify-center gap-2 p-1 pr-3  rounded-4xl outline-2 outline-gray-200'>
                  <span className='h-6 w-6  rounded-4xl overflow-hidden' >
                    <img src="https://i.pinimg.com/1200x/88/f4/32/88f43213cdad2adcea4db2e3c4168ba7.jpg" alt="" />
                  </span>
                  <p className='font-bold text-[.9rem]'>Mikasa A.</p>
                </span>

                <span className='flex h-fit items-center justify-center gap-2 p-1  rounded-4xl outline-2 outline-gray-200'>
                  <span className='h-6 w-6 rounded-4xl overflow-hidden' >
                    <img src={icon} alt="" />
                  </span>
                </span>
              </section>

              <section className='lg:hidden gap-4 relative'>
                  <span onClick={() => setModal(prev => !prev)} className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                    <svg className='h-5 w-5 stroke-black' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
                  </span>
                  <div
                    onClick={() => setModal(prev => !prev)}
                    className={`grid absolute right-38 top-10  rounded-2xl cursor-pointer
                      transition-all duration-500 ease-in-out
                      ${modal ? "grid-rows-[1fr]" : "grid-rows-[0fr] duration-700"}
                      `}
                  >
                    <div className={`overflow-hidden w-fit`}>
                      <div className="flex flex-col gap-3 rounded-xl bg-white border-2 border-gray-200  p-2">
                        {/* settings button*/}
                        <div className="flex gap-2 items-center px-2 pt-1">
                          <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                            <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 13c-1.86 0-3.41 1.28-3.86 3H2v2h2.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22v-2H11.86c-.45-1.72-2-3-3.86-3m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M19.86 6c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H2v2h10.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22V6zM16 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>
                          </span>
                          Settings
                        </div>

                        {/* download button*/}
                        <div className="flex gap-2 items-center px-2">
                          <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                            <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                          </span>
                          Download
                        </div>

                        {/* upload button*/}
                        <div className="flex gap-2 items-center px-2 pb-1">
                          <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                            <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"/><path stroke-linejoin="round" d="M12 15V2m0 0l3 3.5M12 2L9 5.5"/></g></svg>
                          </span>
                          Upload
                        </div>

                      </div>
                    </div>
                  </div>
              </section>

              {/* tools */}
              <section className='hidden lg:flex gap-4'>

                {/* settings button*/}
                <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                  <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 13c-1.86 0-3.41 1.28-3.86 3H2v2h2.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22v-2H11.86c-.45-1.72-2-3-3.86-3m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M19.86 6c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H2v2h10.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22V6zM16 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>
                </span>

                {/* download button*/}
                <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                  <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                </span>

                {/* upload button*/}
                <span className='flex items-center justify-center h-8 w-8  rounded-4xl outline-2 outline-gray-200 hover:cursor-pointer'>
                  <svg className='h-5 w-5 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"/><path stroke-linejoin="round" d="M12 15V2m0 0l3 3.5M12 2L9 5.5"/></g></svg>
                </span>
              </section>
            </div>
          </div>
  )
}