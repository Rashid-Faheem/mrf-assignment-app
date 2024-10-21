import Link from "next/link";

export default function contact() {
    return (
        <div>
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-600 ">
                <div className="container mx-auto mt-8 py-8 px-4  sm:py-12 sm:px-6 lg:px-8  lg:w-1/4 sm:w-1/2 bg-white shadow-lg shadow-black rounded-lg overflow-hidden box-sizing:border-box">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
                
                    <form className="flex flex-col *:align-middle *:w-full "  action="#" method="POST">
                        <label className="font-semibold font-sans " htmlFor="name">Full Name</label>
                        <input className="p-1 px-2 border-2 border-gray-800  rounded" type="text" id="name" name="name" placeholder="Enter your name" required />
                        <label className="font-semibold font-sans " htmlFor="email">Email</label>
                        <input className="p-1 px-2 border-2 border-gray-800  rounded" type="email" id="email" name="email" placeholder="Enter your email address" required />
                        <label className="font-semibold font-sans " htmlFor="message">Message</label>
                        <textarea className="p-1 px-2 border-2 border-gray-800  rounded" id="message" name="message" placeholder="Enter your message" required />
                        {/* <button type="submit">Submit</button> */}
                        <Link href="#" className="bg-[#1F2937]  hover:bg-slate-400 hover:text-black text-white font-bold rounded-md text-center p-2 mt-5">Submit</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}