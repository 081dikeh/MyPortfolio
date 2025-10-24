import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() { 
    return (
        <section className="font-fira gap-8 mt-20 mb-20">
            <h2 className="text-3xl text-white flex items-center font-[500]"><span className="text-brand-700">#</span>Contacts<span className="ring-1 ring-brand-700 w-96 h-[0px] inline-block ml-6"></span></h2>
            <div className="flex gap-8 mt-8">
                <div className="w-[50%]">
                    <p className="text-base text-brand-500">
                        I'm actively seeking freelance opportunities to create impactful web solutions. If you have any other questions, specific requests, or exciting projects in mind, please don't hesitate to get in touch with me!
                    </p>
                </div>

                <div className=" flex w-[50%] justify-end">
                    <div className="w-[fit-content] ring-1 ring-brand-500 p-4">
                        <h3 className="text-white text-base font-semibold mb-4">Message me here</h3>
                        <div className="flex flex-col gap-4 text-brand-500">
                            <a href="mailto:" className="flex gap-3"><Mail /> dikehdaniel2020@gmail.com</a>
                            <a href="http://" className="flex gap-3"><Linkedin /> Daniel Dikeh</a>
                            <a href="http://" className="flex gap-3"><Twitter /> @Danishadow081</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}