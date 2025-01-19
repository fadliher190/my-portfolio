import React from "react";

export default function Navbar() {
    return <div className="fixed left-0 right-0 top-0 shadow z-50 bg-white">
        <div className="w-full max-w-screen-2xl flex mx-auto h-16 items-center p-4">
            <div className="flex-auto"></div>
            <ul className="inline flex gap-3">
                <li>About Me</li>
                <li>My Project</li>
                <li>My Contact</li>
                <li>Job Experience</li>
            </ul>
        </div>
    </div>
}