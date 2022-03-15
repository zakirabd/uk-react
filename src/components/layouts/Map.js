import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <div class="gmap_canvas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.440258974865!2d49.8542299153947!3d40.376934079369704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x641e3f4ff0ba1dbb!2zNDDCsDIyJzM3LjAiTiA0OcKwNTEnMjMuMSJF!5e0!3m2!1sen!2s!4v1647291260057!5m2!1sen!2s"  ></iframe>
            </div>
        );
    }
}

export default Map;