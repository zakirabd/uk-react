import React, { Component } from 'react';
import logo from '../../images/logo_white.png';

import { MAIN_API } from '../../APIKey';
import EducationModal from './EducationModal';
import {Link} from 'react-router-dom'
import resp_logo from '../../images/logo.png'
import axios from 'axios';


class Education extends Component {

    state={
        modalData: '',
        lang: false,
        services: [],
        subServices: [],
        lang_id: 1
    }

    openDialog(data, e){
        this.setState({
            modalData: data
        })
    }
    closeDialog = () => {
        this.setState({
            modalData: ''
        })
    }
    componentDidMount(){
        const { lang_id } = this.state;
        axios.get(`${MAIN_API}/public-services?lang_id=${lang_id}`).
        then(response => {
           
            this.setState({
                services: response.data
            })
        }).catch(err => console.log(err.response))

        axios.get(`${MAIN_API}/public-education-services?lang_id=${lang_id}`).
        then(response => {
            this.setState({
                subServices: response.data
            })
        }).catch(err => console.log(err.response))





        const btns = document.querySelectorAll('.nav-link');
        for ( let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e) => {
                const id = e.target.getAttribute('href');
                
               localStorage.setItem('page', id);
            })
        }

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
    render() {
        const {services, subServices, modalData, lang } = this.state;

        return (
            <div>
                <header  onClick={this.closeLang.bind(this)} id="services_header">
                    <div id="services_background" className="header_background">
                    <nav>
                    <div className="logo">
                        <img src={logo} width={'139px'} height={'91px'} />
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
                            <li><Link to={'/'}><a  className="nav-link" href="#home_page">Əsas səhifə</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#services">Xidmətlərimiz</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#about">Haqqımızda</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#news">Xəbərlər</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#teams">Komandamız</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#partners">Tərəfdaşlar</a></Link></li>
                            <li><Link to={'/'}><a  className="nav-link" href="#contact">Əlaqə</a></Link></li>
                        </ul>
                        
                        <div className="change_lang_container">
                            <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >Az <i className="fa fa-chevron-left"></i></button>
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
                        <li><Link to={'/'}><a  className="nav-link" href="#home_page">Əsas səhifə</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link" href="#services">Xidmətlərimiz</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link" href="#about">Haqqımızda</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link" href="#news">Xəbərlər</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link" href="#teams">Komandamız</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link" href="#partners">Tərəfdaşlar</a></Link></li>
                        <li><Link to={'/'}><a  className="nav-link" href="#contact">Əlaqə</a></Link></li>
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
                    <div className="header_main_container">
                            <div className="header_title">
                                <h2>Turizm xidmətləri</h2>
                            </div>
                        <div className="education_header_container">
                           
                            {
                                subServices?
                                subServices.map((data, i) => {
                                    return(
                                        <button 
                                        onClick={this.openDialog.bind(this, data)} 
                                        key={i} 
                                        className={modalData !== '' && modalData.id === data.id? "education_header_btns education_header_btns_active":"education_header_btns"}
                                        >{data.title}</button>
                                    )
                                }):null
                            }
                            
                        </div>
                        <p className="education_header_text_box">
                            {services.find(data => data.services_id === 3)? 
                            services.find(data => data.services_id === 3).description: null}
                        </p>
                       
                    </div>

                    
                    </div>
                </header>
                {
                    modalData !== ''?
                    <EducationModal closeDialog={this.closeDialog} data={modalData} />:null
                }
            </div>
        );
    }
}

export default Education;