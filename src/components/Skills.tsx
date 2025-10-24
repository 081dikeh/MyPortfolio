import dots from '../assets/Dots.png'
import heroback from '../assets/heroback.png'



export default function Skills() {

    return (
        <div className="min-h-screen flex flex-col font-fira mt-60 ">
            <h2 className="text-3xl text-white flex items-center font-[500]"><span className="text-brand-700">#</span>Skills<span className="ring-1 ring-brand-700 w-96 h-[0px] inline-block ml-6"></span></h2>

            <div className='flex justify-between mt-10 gap-8'>
                <div className='relative w-[50%] '>
                    <img src={dots} alt="" className='absolute z-20 right-0 bottom-[30%] w-[15%]' />
                    <img src={dots} alt="" className='absolute z-20 left-0 top-[10%] w-[15%]' />
                    <img src={heroback} alt="heroback" className='absolute z-0 bottom-0 left-0 w-[30%] opacity-50 md:opacity-100' />
                </div>


                <div className=" w-[50%] flex justify-end">
                    <div className="grid grid-cols-2 gap-2 w-[fit-content]">
                        <div className="border-2 border-brand-500 w-[fit-content]">
                            <h2 className="text-white py-2 px-6 font-bold border-b-2 border-brand-500">Languages</h2>
                            <p className="text-brand-500 py-2 px-6">JavaScript <br /> TypeScript</p>
                        </div>
                        <div className="border-2 border-brand-500 w-[fit-content]">
                            <h2 className="text-white py-2 px-6 font-bold border-b-2 border-brand-500">Tools</h2>
                            <p className="text-brand-500 py-2 px-6">VS Code Git <br /> GitHub</p>
                        </div>
                        <div className="border-2 border-brand-500 w-[fit-content]">
                            <h2 className="text-white py-2 px-6 font-bold border-b-2 border-brand-500">Frameworks</h2>
                            <p className="text-brand-500 py-2 px-6">ReactJs</p>
                        </div>
                        <div className="border-2 border-brand-500 w-[fit-content]">
                            <h2 className="text-white py-2 px-6 font-bold border-b-2 border-brand-500">Other</h2>
                            <p className="text-brand-500 py-2 px-6">HTML CSS <br /> Tailwind CSS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}