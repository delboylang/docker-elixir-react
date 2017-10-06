import React from 'react'
import ReactDOM from 'react-dom';

const Home = () => (
<div class="container-fluid" id="navbar">
    <div class="row">
        <nav class="navbar navbar-default navbar-static-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/logo@2x.png" alt="AE Tuition Logo" /></a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="portal-btn"><a href="http://enrol.aetuition.co.uk">Parent Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>
);