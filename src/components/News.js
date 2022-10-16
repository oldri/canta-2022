import React from 'react';
import '../App.css';
import useData from '../hooks/useData';

export default function News({ showNewsModal }) {
    const [ newData ] = useData("news/");
    
    const postDate = (data) => {
        if(data.null !== null){
            let date = new Date(data.Date.seconds * 1000);
            let newsPostDate = date.toLocaleDateString("en-US");
            return newsPostDate;
        }
    }

    let news = Array.from(new Set(newData.map(a => a.post)))
    .map(post => {
        return newData.find(a => a.post === post);
    })

    return (
        <React.Fragment>
            {showNewsModal && <div className='about'>
                {news.map((data, index) => (
                    <React.Fragment key={index}>
                        <h2>{data && postDate(data)}</h2>
                        <p>{data.post}</p>
                    </React.Fragment>
                ))}
            </div>}
        </React.Fragment>
    )
}
