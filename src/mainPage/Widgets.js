import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgetsArticle">
            <div className="widgetsArticleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgetsArticleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgetsHeader">
                <h2>Latest News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Happy Canada Day!", "July 1st, 2024 - 299 readers")}
            {newsArticle("Ronaldo Misses Penalty vs Slovenia", "July 1st, 2024 - 4023 readers")}
            {newsArticle("Is Coal the New Gold?", "June 29th, 2024 - 302 readers")}
            {newsArticle("Workouts for the Summer", "June 26th, 2024 - 93 readers")}
            {newsArticle("Oilers Defeated in Game 7", "June 24th, 2024 - 2093 readers")}
        </div>
    )
}

export default Widgets