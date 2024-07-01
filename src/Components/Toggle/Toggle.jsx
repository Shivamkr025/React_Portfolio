import React, { useState, useEffect } from 'react'
import './Toggle.css'

function Toggle() {

    const [isNight, setIsNight] = useState(false)

    useEffect(() => {
        const currentThem = localStorage.getItem('theme') || 'day-mode';
        document.body.classList.add(currentThem)
        setIsNight(currentThem == 'night-mode')
    }, [])

    const toggleTheme = () => {
        const newTheme = isNight ? 'day-mode' : 'night-mode';
        document.body.classList.remove(isNight ? 'night-mode' : 'day-mode');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme)
        setIsNight(!isNight)
    }

    return (
        <div className="toggle-button" onClick={toggleTheme}>
            <i className={`bi ${isNight ? 'bi-sun' : 'bi-moon-stars'} icon`}></i>
            {/* <span>{isNight ? '𝐃𝐀𝐘-𝐌𝐎𝐃𝐄' : '𝐍𝐈𝐆𝐇𝐓-𝐌𝐎𝐃𝐄'}</span> */}
        </div>

    )
}

export default Toggle
