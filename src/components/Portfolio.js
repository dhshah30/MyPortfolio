import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
      <Helmet>
        <title>Dhruvi shah</title>
      </Helmet>
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} alt="description" className="item-img"/>
                      <div className="overlay">
                        <div class="row">
                        <div ID="Pnl_prodL"> 
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
  </div>
        );
  }
}