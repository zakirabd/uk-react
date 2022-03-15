import axios from 'axios';
import React, { Component } from 'react';
import { MAIN_API } from '../../../APIKey';

class MainPageVideo extends Component {
    state={
        video_link: ''
    }
    componentDidMount(){
        axios.get(`${MAIN_API}/public-main-page`).
        then(response => {
            this.setState({
                video_link: response.data.video_link
            })
        })
    }
    closeModalBtn(){
        this.props.closeModal()
    }
    render() {
        const { video_link } = this.state;
        return (
            <div className='background_shadow'>
                <div className='video_container'>
                    <i className='fas fa-times' onClick={this.closeModalBtn.bind(this)}></i>
                    <iframe src={video_link} allow="autoplay; encrypted-media" ></iframe>
                </div>
            </div>
        );
    }
}

export default MainPageVideo;