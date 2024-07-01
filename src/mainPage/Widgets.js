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
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("PAPA React Is Back", "Top news - 9099 readers")}
            {newsArticle("LEKON!!!", "Top news - 4023 readers")}
            {newsArticle("Manchester City Knock Out Bayern Munich", "Top news - 2093 readers")}
            {newsArticle("April 21st Haul Incoming", "Top news - 302 readers")}
            {newsArticle("Calorie Deficit?", "Top news - 93 readers")}
        </div>
    )
}

export default Widgets