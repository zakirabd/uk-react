import React, { Component } from 'react';
import { MAIN_API } from '../../APIKey';
import moment from 'moment';
import {Link} from 'react-router-dom';
import resp_logo from '../../images/logo.png';
// import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import axios from 'axios';
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class News extends Component {
    state={
        lang: false,
        news: [],
        news_all: [],
        lang_id: 1
    }
    componentDidMount(){
        const { lang_id } = this.state
        const {id} = this.props.params;
        axios.get(`${MAIN_API}/public-news/${id}?lang_id=${lang_id}`).
        then(response => {
            this.setState({
                news: response.data
            })
        }).catch(err => {console.log(err.response)})

        axios.get(`${MAIN_API}/public-news?lang_id=${lang_id}`).
        then(response => {
            this.setState({
                news_all: response.data
            })
        }).catch(err => {console.log(err.response)})





        const nav = document.querySelector('.main-nav');
   
        const sticky = document.querySelector('.sticky-navbar')
        const stickyNav = function (entries) {
            
            const [entry] = entries;
            if (!entry.isIntersecting){
                sticky.style.display = 'block';
            } 
            else {
                sticky.style.display = 'none';
            }
          };
       
          const headerObserver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-${22-20}px`,
          });
          
          headerObserver.observe(nav);
    }
    closeLang(e){
        if(this.state.lang){
             this.setState({
                lang: false
            })
        }
       
    }
    openLangBtn (e){
       this.setState({
            lang: true
       })
    }
    closeNavbar(){
        const nav = document.querySelector('#resp-nav');
        nav.checked = false;
    }
    getNews(id, e){
        const { lang_id } = this.state
        axios.get(`${MAIN_API}/public-news/${id}?lang_id=${lang_id}`).
        then(response => {
            this.setState({
                news: response.data
            })
        }).catch(err => {console.log(err.response)})
    }
    render() {
        const { lang, news, news_all } = this.state;
  
  
        // console.log('cccccc',this.props.match.params.id)
        return (
            <div>
           
            <nav>
                
                <div className="logo">
                    <img src={resp_logo} width={'139px'} height={'91px'} />
                </div>
                <input type={'checkbox'} id="resp-nav" style={{display: 'none'}} />
                <div className="resp-nav-container" onClick={this.closeNavbar.bind(this)}>
                    <div className='resp-nav'>
                        <div className='res-nav-header'>
                            <div className='res-nav-logo'>
                                <img src={resp_logo} width={'110px'} height={'68px'} />
                            </div>
                           
                            <i className='fas fa-times'></i>
                          
                            
                        </div>
                        <ul className="main-resp-nav">
                            <li><Link to={'/'}><a  className="nav-link" href="#home_page">Əsas səhifə</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#services">Xidmətlərimiz</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#about">Haqqımızda</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#news">Xəbərlər</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#teams">Komandamız</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#partners">Tərəfdaşlar</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#contact">Əlaqə</a></Link></li>
                        </ul>
                        <div className='resp-nav-footer'>
                            <a target={'blank'} href='#'><i className="fa fa-linkedin"></i></a>
                            <a target={'blank'} href='#'><i className="fa fa-instagram"></i></a>
                            <a target={'blank'} href='#'><i className="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div className="header_head_container">
                    <ul className="main-nav ">
                        
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#home_page">Əsas səhifə</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#services">Xidmətlərimiz</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#about">Haqqımızda</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#news">Xəbərlər</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#teams">Komandamız</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#partners">Tərəfdaşlar</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link news_page_link" href="#contact">Əlaqə</a></Link></li>
                    </ul>
                    
                    <div className="change_lang_container">
                        <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >Az<i className="fa fa-chevron-left"></i></button>
                        {
                            lang?
                            <ul  className="lang_options_container">
            
                                {/* {
                                    router.locales.map((locale) => {
                                    return(
                                        <li key={locale}><Link to={router.asPath} locale={locale}><a>{locale}</a></Link></li>
                                    )
                                    })
                                } */}
                                
                            
                            </ul>:null
                        }
                        
                    </div>
                </div>
            </nav>
            <div className='sticky-navbar'>
                <label htmlFor='resp-nav' className='resp-icon' >
                  <i className='fas fa-bars '></i>
                </label>
                <ul className="main-nav ">
                    <li><a  className="nav-link news_page_link " href="#home_page">Əsas səhifə</a></li>
                    <li><a  className="nav-link news_page_link" href="#services">Xidmətlərimiz</a></li>
                    <li><a  className="nav-link news_page_link" href="#about">Haqqımızda</a></li>
                    <li><a  className="nav-link news_page_link" href="#news">Xəbərlər</a></li>
                    <li><a  className="nav-link news_page_link" href="#teams">Komandamız</a></li>
                    <li><a  className="nav-link news_page_link" href="#partners">Tərəfdaşlar</a></li>
                    <li><a  className="nav-link news_page_link" href="#contact">Əlaqə</a></li>
                </ul>
                <div className="change_lang_container resp-lang">
                    <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >Az<i className="fa fa-chevron-left"></i></button>
                    {
                        lang?
                        <ul  className="lang_options_container">
        
                            {/* {
                                router.locales.map((locale) => {
                                    return(
                                    <li key={locale}><Link to={router.asPath} locale={locale}><a>{locale}</a></Link></li>
                                    )
                                })
                            } */}
                            
                            
                        </ul>:null
                    }
                </div>
            </div>
            <div className="news_page_container">
                <div className="news_about_container">
                    <h1 className="news_main_title">
                        {news.title}
                    </h1>
                    {
                        news.news && news.news.image_full_url?
                        <img className="news_main_img" alt="image" src={news.news.image_full_url} />:null
                    }
                    
                    <p className="news_main_text">
                    {news.description}
                    </p>
                </div>
                <div className="news_list_container">
                    <div className="news_list">
                        <div className="news_list_header">
                            <h4>
                                Xəbərlər
                            </h4>
                        </div>
                        <div className="news_list_body">
                            <ul>
                                {
                                    news_all.map((data, i) => {
                                        return(
                                            <li key={i}>
                                                <h3>
                                                    <Link onClick={this.getNews.bind(this, data.news_id)} to={'/news/'+data.news_id}>
                                                        {data.title}
                                                    </Link>
                                                </h3>
                                                <p><i className="fa fa-clock"></i> <span>{moment(data.created_at).format("DD/MM/YYYY, hh:mm")}</span></p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="news_label_container">
                            <h4>Etiketlər:</h4>
                            <div className="news_labels">
                                {  news.label &&
                                    news.label.includes(',')?
                                    news.label.split(',').map((label , i) => {
                                        return (
                                            <span key={i}>{label}</span>
                                        )
                                    }):<span >{ news.label}</span>
                                }
                            </div>
                        </div>

                        <div className="news_label_container">
                            <h4>Paylaş:</h4>
                            <div className="news_socials">
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-facebook-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withParams(News);
