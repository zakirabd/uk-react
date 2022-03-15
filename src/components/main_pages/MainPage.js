import axios from 'axios';
import React, { Component } from 'react';
import { MAIN_API } from '../../APIKey';
import About from './components/About';
import Header from './components/Header';
import MainPageVideo from './components/MainPageVideo';
import News from './components/News';
import Partners from './components/Partners';
import Services from './components/Services';
import Teams from './components/Teams';
class MainPage extends Component {
    state = {
        about: [],
        teams: [],
        partners: [],
        news: [],
        lang_id: 1
    }
    componentDidMount(){
        const { lang_id } = this.state;
        // get about data
        axios.get(`${MAIN_API}/public-about?lang_id=${lang_id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            this.setState({
                about: response.data
            })
        }).catch(err=> console.log(err))

        // get teams data
        axios.get(`${MAIN_API}/public-teams?lang_id=${lang_id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            this.setState({
                teams: response.data
            })
        }).catch(err=> console.log(err))

        // get partners data
        axios.get(`${MAIN_API}/public-partners`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            this.setState({
                partners: response.data
            })
        }).catch(err=> console.log(err))

        // get news data
        axios.get(`${MAIN_API}/public-news?lang_id=${lang_id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            this.setState({
                news: response.data
            })
        }).catch(err=> console.log(err))

        if(localStorage.getItem('page')){
            const x = document.querySelector(localStorage.getItem('page'));
            if(x){
                x.scrollIntoView({ behavior: 'smooth' });
            }
            localStorage.removeItem('page')
          }
          localStorage.removeItem('page')
    }    
    render() {
        const { about, partners, news, teams } = this.state;
        return (
            <div>
                {/* <MainPageVideo /> */}
               <Header />
               <Services />
               <About about={about} />
               <Teams teams={teams} />
               <Partners partners={partners} />
               {
                   news && news.length >0?
                   <News news={news} />:null
               }
               
            </div>
        );
    }
}

export default MainPage;