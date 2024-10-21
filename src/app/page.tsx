import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-600 ">
      <img className="w-64 h-64 rounded-full mx-auto mt-10" src="/man.png" alt="Picture" />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center"> 
      <div className="font-bold text-2xl">Hi!</div>
      <div className="font-bold text-5xl">
         I'm M. Rashid Faheem
         </div><div className="font-4xl font-bold">
        Software Developer
        </div>

        <div className="space-x-2 pt-5">
        <Link href="./projects" className="bg-[#1F2937] hover:bg-slate-100 hover:text-black  text-white font-bold py-3 px-4 rounded-full">Projects</Link>
        <Link href="#" className="bg-[#1F2937] hover:bg-slate-100 hover:text-black text-white font-bold py-3 px-4 rounded-full">Download Resume</Link>
          
        </div>

        </div>
    </div>
  );
}
