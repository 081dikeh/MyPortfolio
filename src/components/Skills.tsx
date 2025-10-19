export default function Skills() {



    return (
        <div className="min-h-screen flex flex-col font-fira ">
            <h2 className="text-3xl text-white flex items-center font-bold"><span className="text-brand-700">#</span>Skills<span className="ring-1 ring-brand-700 w-96 h-[0px] inline-block ml-6"></span></h2>

            <div>
                <div></div>
                <div className="flex">
                    <div className=" border-2 border-brand-500">
                        <h2 className="text-white p-2 font-bold border-b-2 border-brand-500">Languages</h2>
                        <p className="text-brand-500 p-2">JavaScript <br /> TypeScript</p>
                    </div>
                    <div className=" border-2 border-brand-500">
                        <h2 className="text-white p-2 font-bold border-b-2 border-brand-500">Tools</h2>
                        <p className="text-brand-500 p-2">VS Code Git <br /> GitHub</p>
                    </div>
                    <div className=" border-2 border-brand-500">
                        <h2 className="text-white p-2 font-bold border-b-2 border-brand-500">Frameworks</h2>
                        <p className="text-brand-500 p-2">ReactJs</p>
                    </div>
                    <div className=" border-2 border-brand-500">
                        <h2 className="text-white p-2 font-bold border-b-2 border-brand-500">Other</h2>
                        <p className="text-brand-500 p-2">HTML CSS <br /> Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}