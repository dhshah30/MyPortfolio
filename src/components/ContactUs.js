import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
      <Helmet>
        <title>Dhruvi shah</title>
      </Helmet>
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                  {resumeData.EmailId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        </div>
        );
  }
}