import Link from "next/link";

export default function Navigation({
  companyName,
}: Readonly<{ companyName: string }>) {
  return (
    <div className="bg-slate-300 text-white p-5">
      <div className="flex justify-between items-center ">
        <Link href="/" className="text-xl text-black font-bold">{companyName}</Link>
        <ul className="flex gap-4 font-semibold">
          <Link href="/" className="px-6 p-2 bg-slate-700 rounded text-white hover:bg-slate-100 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="px-6 p-2 bg-slate-700 rounded text-white hover:bg-slate-100 hover:text-black">
            About
          </Link>
          <Link href="/projects" className="px-6 p-2 bg-slate-700 rounded text-white hover:bg-slate-100 hover:text-black">
            Projects
          </Link>
          <Link href="/contact" className="px-6 p-2 bg-slate-700 rounded text-white hover:bg-slate-100 hover:text-black">
            Contact
          </Link>
          <Link href="/blog" className="px-6 p-2 bg-slate-700 rounded text-white hover:bg-slate-100 hover:text-black">
            Blog
          </Link>


        </ul>
      </div>
    </div>
  );
}
