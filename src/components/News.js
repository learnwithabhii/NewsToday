import React, { Component } from 'react'
import Newsiteam from './Newsiteam'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    // Passing PropTypes in class component
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
        sports: 'sports',
        technology: 'technology'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        sports: PropTypes.string,
        technology: PropTypes.string
    }


    constructor() {
        // super is important in constructor
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async componentDidMount() {
        //Passing props through app.js into news
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bd1394af832f4f1981493b73d793a57c&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bd1394af832f4f1981493b73d793a57c&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }


    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bd1394af832f4f1981493b73d793a57c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles, loading: false,

            })
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center my-3"> TodayNews - Top Headlines </h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {/* Using ternary operators in JSX */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newsiteam title={element.title ? element.title.slice(0, 58) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next  &raquo;</button>
                </div>
            </div>

        )
    }
}

export default News