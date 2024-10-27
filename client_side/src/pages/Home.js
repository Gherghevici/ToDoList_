import React from "react";
import SplineModelHeader from "../components/SplineModelHeader";
import ServiceCard from "../components/ServiceCard";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiTreeStructureLight } from "react-icons/pi";
import { GrSecure } from "react-icons/gr";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
const Home = ()=>{
    return(
        <main className="flex flex-col gap-20 ">
            <header className="flex px-16 py-10 h-auto mt-16" id="home">
                <div className=" flex flex-col justify-between gap-5 w-1/2">
                    <h1 className="text-5xl">Effortlessly <span className="text-indigo-500">Organize and Complete</span> Your Tasks</h1>
                    <h3 className="text-black/60">We created an app to help you stay on top of your tasks effortlessly. Organize, track, and prioritize with ease so you can stay focused and productive every day.</h3>
                    <div>
                        <button className="w-32 h-8 bg-indigo-500 rounded-lg text-white font-bold shadow-lg shadow-indigo-300">Get Started</button>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button className="custom_shadow shadow-indigo-300 w-10 h-10 rounded-full flex justify-center items-center text-indigo-500 ">&#x25BC;</button>
                        <p className="">Explore more</p>
                    </div>
                </div>
                <div className="w-1/2 h-96">
                    <SplineModelHeader/>
                </div>
            </header>
            <section className="px-16 py-10 flex flex-col gap-5" id="services">
                <div>
                    <h2 className="text-4xl text-center font-semibold">We Provide The Best <span className="text-indigo-500">Features</span></h2>
                    <p className="text-center text-black/60">Let your thoughts get organized by our application in a visual way</p>
                </div>
                <div className="flex justify-between">
                    <ServiceCard icon={<MdOutlineManageAccounts/>} color={"bg-green-400"} title={"Manage your account"} p={"Create and manage your account. Change password at anytime and set preferences"}/>
                    <ServiceCard icon={<LiaClipboardListSolid/>} color={"bg-teal-400"} title={"Complete your tasks"} p={"Add task to the list, complete them and reach your goals"}/>
                    <ServiceCard icon={<PiTreeStructureLight/>} color={"bg-purple-400"} title={"Visualise your mind set"} p={" Get inside your mind with visual representation of your tasks."}/>
                    <ServiceCard icon={<GrSecure/>} color={"bg-red-400"} title={"Secure Information"} p={"Secure data and your personal information!"}/>
                </div>
            </section>
            <section className="bg-indigo-100/50 px-16 py-10 flex">
                <aside className="w-1/2">a</aside>
                <aside className="w-1/2">
                    <h2 className="text-4xl font-bold">Simple <span className="text-indigo-500">Interaction</span></h2>
                    <p className="text-black/80">We understant that no two mind are alike. That's why we encourage you to customize your thoughts</p>
                    <div className="flex flex-col gap-5 mt-5">
                        <div className="flex gap-5">
                            <p className="w-12 h-12 z-10 text-white text-xl font-semibold bg-indigo-500 rounded-full flex justify-center items-center relative after:content-[''] after:h-12 after:w-1 after:absolute after:top-full after:border-l-2 after:border-indigo-400 after:border-dashed after:left-1/2 ">1</p>
                            <div>
                                <h3 className="text-2xl font-semibold">Create an account</h3>
                                <p className="text-black/80">Join us today and simplify your tasks effortlessly. Create an account to get started!</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="w-12 h-12 z-10 text-white text-xl font-semibold bg-indigo-500 rounded-full flex justify-center items-center relative after:content-[''] after:h-12 after:w-1 after:absolute after:top-full after:border-l-2 after:border-indigo-400 after:border-dashed after:left-1/2 ">2</p>
                            <div>
                                <h3 className="text-2xl font-semibold">Add your tasks</h3>
                                <p className="text-black/80">Add your tasks and stay organized. Start managing everything in one place!</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="w-12 h-12 z-10 text-xl font-semibold text-white bg-indigo-500 rounded-full flex justify-center items-center relative after:content-[''] after:h-12 after:w-1 after:absolute after:top-full after:border-l-2 after:border-indigo-400 after:border-dashed after:left-1/2 ">3</p>
                            <div>
                                <h3 className="text-2xl font-semibold">Complet or modify them</h3>
                                <p className="text-black/80">Complete or modify your tasks anytime to stay on top of your progress!</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="w-12 h-12 text-white text-xl font-semibold bg-indigo-500 rounded-full z-10  flex justify-center items-center">4</p>
                            <div>
                                <h3 className="text-2xl font-semibold">Achieve your goals</h3>
                                <p className="text-black/80">Achieve your goals with ease. Stay organized, track your progress, and make every task count!</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <button className="w-32 h-8 bg-indigo-500 rounded-lg text-white font-bold shadow-lg shadow-indigo-300">Get Started</button>
                            <button className="w-32 h-8 border-2 border-indigo-500 rounded-lg text-indigo-500 font-bold">Read More</button>
                        </div>
                    </div>
                    
                </aside>
            </section>
            <section className="px-16 py-10 flex" id="about">
                <aside className="w-1/2">
                    <h2 className="text-4xl font-bold">About <span className="text-indigo-500">Us</span></h2>
                    <p className="text-black/80">We created this app to simplify everyday task management for users like you. With a focus on usability and efficiency, We designed this tool to help you organize, prioritize, and achieve your goals effortlessly. Our commitment to continuous improvement drives us to enhance your experience, making this app a reliable companion in your daily routine.</p>
                    <button className="w-32 h-8 bg-indigo-500 rounded-lg text-white font-bold shadow-lg shadow-indigo-300">Read More</button>
                </aside>
                <aside className="w-1/2">
                    a
                </aside>
            </section>
            <section className="px-16 py-10 flex flex-col gap-2">
                <h2 className="text-4xl font-bold text-center">What <span className="text-indigo-500">Clients</span> Say!</h2>
                <p className="text-black/80 text-center">See How Our Task Management App Helped Clients Achive Their Goals </p>
                <aside>
                    <button><FaAngleLeft /></button>
                    
                    <button><FaAngleRight /></button>
                </aside>
            </section>
            <footer className="bg-indigo-100/50 pt-10 relative" id="contact">
                <div className="bg-indigo-500 flex justify-between items-center w-9/12  px-10 py-4 rounded-lg absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-white font-bold text-3xl ">Redy to get started?</h2>
                    <button className="border-2 border-white text-white w-32 h-8 rounded-lg ">Contact Us</button>
                </div>
                <div className="px-16 py-10 ">

                </div>
                <p className="bg-indigo-500 text-white text-center ellipse py-5 ">All rights reserved @Kapa</p>
            </footer>
        </main>
    )
}

export default Home;