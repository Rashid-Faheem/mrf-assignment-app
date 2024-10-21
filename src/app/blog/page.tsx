import Link from "next/link";

export default function blog() {
    return (
        <div>
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-600 ">
            <main className="container mx-5">
            <h1 className="text-2xl font-bold  mb-4 ">My Blog</h1>

        <div className=" bg-white shadow-lg shadow-black rounded-lg overflow-hidden p-4 m-4 ">
            <img className="h-40 rounded" src="/bgimg.jpg" alt="Blog post image 1" /> 
            <div className="flex-1">
                <h3>Blog Post Title 1</h3>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci nec eros bibendum volutpat.</p>
                <Link href="#" className="bg-[#1F2937]  hover:bg-slate-400 hover:text-black text-white font-bold rounded-md text-center p-2">Read More..</Link>
            </div>
        </div>
        <div className=" bg-white shadow-lg shadow-black rounded-lg overflow-hidden p-4 m-4">
            <img className="h-40 rounded" src="/bgimg.jpg" alt="Blog post image 1" /> 
            <div className="flex-1">
                <h3>Blog Post Title 2</h3>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci nec eros bibendum volutpat.</p>
                <Link href="#" className="bg-[#1F2937]  hover:bg-slate-400 hover:text-black text-white font-bold rounded-md text-center p-2">Read More..</Link>
            </div>
        </div>
        <div className=" bg-white shadow-lg shadow-black rounded-lg overflow-hidden p-4 m-4">
            <img className="h-40 rounded" src="/bgimg.jpg" alt="Blog post image 1" /> 
            <div className="flex-1">
                <h3>Blog Post Title 3</h3>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci nec eros bibendum volutpat.</p>
                <Link href="#" className="bg-[#1F2937]  hover:bg-slate-100 hover:text-black text-white font-bold rounded-md text-center p-2">Read More..</Link>
            </div>
        </div>


    </main>
            </div>
        </div>
    );
}