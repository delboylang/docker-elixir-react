import React from 'react'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-signup">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p><span>Sign up to our mailing list.</span> Receive news, enrolment notifications, course availability and more.</p>
                            <button type="button" className="redButton visible-xs" data-toggle="modal" data-target="#footerSignUp">
                                Sign up now
                            </button>
                        </div>
                        <div className="hidden-xs" id="footerForm"></div>
                        <div className="modal fade" id="footerSignUp" tabIndex="-1" role="dialog"
                             aria-labelledby="FooterSignUpLabel">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Close"><i className="zmdi zmdi-close"></i></button>
                                    </div>
                                    <div className="modal-body " id="footerFormMove">
                                        <h4 className="modal-title" id="myModalLabel"><span>Sign up to our mailing list.</span>
                                        </h4><p>Receive news, enrolment notifications, course availability and
                                        more.</p>
                                    </div>
                                    <div className="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;