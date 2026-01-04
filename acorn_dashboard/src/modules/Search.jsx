export default function Search() {
  return (
    <div className="flex justify-between mb-6">

        {/* Search bar  */}
        <div className="flex items-center px-4 lg:w-[450px] bg-s-white rounded-3xl gap-2">
            <svg
            className="fill-none stroke-black/50"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            >
            <path
                stroke-width="2"
                d="M2 11a9 9 0 1 0 18 0a9 9 0 1 0-18 0m15.364 6.364L22 22"
            />
            </svg>
            <input
            className="font-semibold text-[0.9rem] flex-1 focus:outline-0"
            type="text"
            name="search"
            id=""
            placeholder="Try searching 'insights'"
            />
        </div>

        
        <div className="flex gap-2">
            <div className="h-10 px-2 flex justify-center items-center bg-s-white rounded-4xl gap-3">
                <svg
                    className="hover:cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                >
                    <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M20 7H4m16 5H4m16 5H4"
                    />
                </svg>
            <div className="w-8 h-8 rounded-3xl overflow-hidden">
                <img
                className="object-cover"
                src="https://i.pinimg.com/736x/35/88/83/358883929120ee377c2d3c467872fb26.jpg"
                alt="profile pic"
                />
            </div>
            </div>
            <div className="flex justify-center items-center h-10 w-10 rounded-4xl bg-accent hover:cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path fill="#ffffff" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z" />
                </svg>
            </div>
        </div>
    </div>
  );
}
