import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsComponent extends Component {
  constructor() {
    super();
    console.log("Constructor is invoked");
    this.state = {
      articles: [],
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68915d0b665d4c85a1cd9e6d742e8f57";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles, page: 1 });
  }
  handleNext = async () => {
    let page = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68915d0b665d4c85a1cd9e6d742e8f57&page=${page}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: page });
  };
  handlePrev = async () => {
    let page = this.state.page - 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68915d0b665d4c85a1cd9e6d742e8f57&page=${page}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: page });
  };
  render() {
    return (
      
        <div className="container my-3">
          <h1 className="text-center">NEWSIFY - HEADLINES</h1>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : "Click know More"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.wsj.net/im-846926?width=700&size=1.7227456258411844&pixel_ratio=1.5"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page<=1}
              onClick={this.handlePrev}
              className="btn btn-dark"
            >
              &larr;Previous
            </button>
            <button
              type="button"
              disabled={this.state.page>this.state.pageSize}
              onClick={this.handleNext}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      
    );
  }
}

export default NewsComponent;
