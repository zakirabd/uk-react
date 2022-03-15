import React, { Component } from 'react';
import logo from '../../../images/logo_white.png';
import resp_logo from '../../../images/logo.png';
import MainPageVideo from './MainPageVideo';
class Header extends Component {
    state = {
        lang: false,
        videoModal: false
    }
    componentDidMount(){
        const nav = document.querySelector('.main-nav');
        // const nav_resp = document.querySelector('.main-resp-nav');
       
        const navHeight = nav.getBoundingClientRect().height;
       
        
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



        const btns = document.querySelectorAll('.nav-link');
        for ( let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute('href');
                
                document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            })
        }

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

    playVideo(){
        this.setState({
            videoModal: true
        })
    }
    closeModal = () => {
        this.setState({
            videoModal: false
        })
    }
    render() {
        const {lang, videoModal} = this.state;
        return (
            <header id='home_page' >
                <div className="header_background" onClick={this.closeLang.bind(this)}>
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
                                    <li><a  className="nav-link" href="#home_page">Əsas səhifə</a></li>
                                    <li><a  className="nav-link" href="#services">Xidmətlərimiz</a></li>
                                    <li><a  className="nav-link" href="#about">Haqqımızda</a></li>
                                    <li><a  className="nav-link" href="#news">Xəbərlər</a></li>
                                    <li><a  className="nav-link" href="#teams">Komandamız</a></li>
                                    <li><a  className="nav-link" href="#partners">Tərəfdaşlar</a></li>
                                    <li><a  className="nav-link" href="#contact">Əlaqə</a></li>
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
                                <li><a  className="nav-link" href="#home_page">Əsas səhifə</a></li>
                                <li><a  className="nav-link" href="#services">Xidmətlərimiz</a></li>
                                <li><a  className="nav-link" href="#about">Haqqımızda</a></li>
                                <li><a  className="nav-link" href="#news">Xəbərlər</a></li>
                                <li><a  className="nav-link" href="#teams">Komandamız</a></li>
                                <li><a  className="nav-link" href="#partners">Tərəfdaşlar</a></li>
                                <li><a  className="nav-link" href="#contact">Əlaqə</a></li>
                            </ul>
                            
                            <div className="change_lang_container">
                                <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >Az <i className="fa fa-chevron-left"></i></button>
                                {
                                    lang?
                                    <ul  className="lang_options_container">
                    
                                        {/* {
                                            router.locales.map((locale) => {
                                            return(
                                                <li key={locale}><Link href={router.asPath} locale={locale}><a>{locale}</a></Link></li>
                                            )
                                            })
                                        }
                                         */}
                                    
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
                            <li><a  className="nav-link" href="#home_page">Əsas səhifə</a></li>
                            <li><a  className="nav-link" href="#services">Xidmətlərimiz</a></li>
                            <li><a  className="nav-link" href="#about">Haqqımızda</a></li>
                            <li><a  className="nav-link" href="#news">Xəbərlər</a></li>
                            <li><a  className="nav-link" href="#teams">Komandamız</a></li>
                            <li><a  className="nav-link" href="#partners">Tərəfdaşlar</a></li>
                            <li><a  className="nav-link" href="#contact">Əlaqə</a></li>
                        </ul>
                        <div className="change_lang_container resp-lang">
                            <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >Az <i className="fa fa-chevron-left"></i></button>
                            {
                                lang?
                                <ul  className="lang_options_container">
                
                                    {/* {
                                        router.locales.map((locale) => {
                                            return(
                                            <li key={locale}><Link href={router.asPath} locale={locale}><a>{locale}</a></Link></li>
                                            )
                                        })
                                    } */}
                                    
                                    
                                </ul>:null
                            }
                        </div>
                    </div>
                    <div className="header-text_box">
                        <h1>
                            Dünyanı bizimlə kəşf edin
                        </h1>
                        <button onClick={this.playVideo.bind(this)}>
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                </div>
                {
                    videoModal?
                    <MainPageVideo closeModal={this.closeModal} />:null
                }
                
            </header>
        );
    }
}

export default Header;