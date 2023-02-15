import React, { Component } from 'react'

export class Newsiteam extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (

            // Bringing a card from bootstap to display news
            <div className="my-3">
                <div className="card" >
                    <img src={!imageUrl ? "https://timesofindia.indiatimes.com/thumb/msid-97672613,width-1200,height-900,resizemode-4/97672613.jpg" : imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{title}...</h4>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsiteam