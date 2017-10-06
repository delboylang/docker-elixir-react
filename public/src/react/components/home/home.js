import React from 'react'
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.acf)
    }

    render() {
        const theData =  this.props.items;
        const accelerated     = this.props.acf.accelerated_education_approach.map((item) =>
            <div className="col-md-3 col-sm-6">
                <a className="hvr-overline-reveal" href={item.link}>
                    <div className="row">
                        <div className="col-xs-5 col-sm-12">
                            <div className="img-container"><img className="img-responsive" src={item.image} alt=""/></div>
                        </div>
                        <div className="col-xs-7 col-sm-12">
                            <h3>{item.title}</h3>
                            <p>{item.description.replace(/<[^>]+>/g, '')}</p>
                            <span>Find out more</span>
                        </div>
                    </div>
                </a>
            </div>);

        if (Object.keys(theData).length > 0 && theData.constructor === Object) { //if the object is not empty
            let divStyle = {
                backgroundImage: 'url(' + this.props.acf.hero_image + ') ',
            };

            return (
                <div>
                    <div className="home-hero" style={ divStyle } >
                        <div className="hero-text">
                            <div className="hero-cont">
                                <h1>{this.props.acf.hero_title}</h1>
                                <p>{this.props.acf.hero_description}</p>
                                <a href={this.props.acf.hero_link}>{this.props.acf.hero_title}</a>
                            </div>
                        </div>
                        <div className="swoosh">
                            <img className="img-responsive" src="/img/swish.png" alt=""/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="home-form">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-5">
                                    <p>Find the right course for your child</p>
                                </div>
                                <form id="quicklinkCourse">
                                    <div className="col-xs-7 col-sm-8 col-md-4">
                                        <select name="course" id="courseID">
                                            <option value="" disabled="disabled">Choose School Year</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-5 col-sm-4 col-md-3">
                                        <input type="submit" value="View Course"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xs-12">
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="home-education">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>{this.props.acf.main_title}</h2>
                                </div>
                                {accelerated}
                                <div className="col-xs-12">
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="home-bottom-section">
                            <div className="row">
                                <div className="col-sm-4 home-testimonials">
                                    <a href=""><h3>Testimonials <span>View all</span></h3></a>
                                    <div className="blockquote"></div>
                                </div>
                                <div className="col-md-4 col-sm-4 home-news">
                                    <div className="visible-xs">
                                        <hr/>
                                    </div>
                                    <a href="/news"><h3>Latest news <span>View all</span></h3></a>
                                    <div className="news-excerpt">
                                        <a href="">
                                            <span className="entry-date"></span>
                                            <h3></h3>
                                            <p></p>
                                            <span>Read article</span>
                                        </a>
                                    </div>
                                </div>
                                <div className=" col-sm-4 home-resources">
                                    <div className="visible-xs">
                                        <hr/>
                                    </div>
                                    <a href="/resources"><h3>Resources <span>View all</span></h3></a>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <i className="zmdi " aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="coursegroupselect" tabIndex="-1" role="dialog"
                         aria-labelledby="coursegroupselect">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="zmdi zmdi-close"></i></button>
                                </div>
                                <div className="modal-body courses-cont" id="dynamic">

                                </div>
                                <div className="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }else{
            return (<div></div>);
        }
    }
}
export default Home;