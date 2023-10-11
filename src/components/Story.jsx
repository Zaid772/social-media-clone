import React from 'react'
import story from './images/ins-story.png'

const Story = () => {

    const storyArray = Array.from({ length: 6 })
    
    return(
        <div className='storyContainer'>
            {storyArray.map((_, index) => {
                return (
                <div >
                    <img className='outerStory' src={story} key={index}/>
                </div>
                )
            })}
        </div>
    )
}

export default Story;