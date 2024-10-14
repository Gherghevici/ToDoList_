import React from "react";
import SplineModelHeader from "../components/SplineModelHeader";
const Home = ()=>{
    return(
        <main>
            <header className="flex h-96">
                <div>
                    <h1>Effortlessly <span>Organize and Complete</span> Your Tasks</h1>
                    <h3>We created an app to help you stay on top of your tasks effortlessly. Organize, track, and prioritize with ease so you can stay focused and productive every day.</h3>
                    <button>Get Started</button>
                    <div className="flex">
                        <button>^</button>
                        <p>Explore more</p>
                    </div>
                </div>
                <div className="block">
                    <SplineModelHeader/>
                </div>
            </header>
        </main>
    )
}

export default Home;