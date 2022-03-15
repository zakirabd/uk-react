import React, { Component } from 'react';
import logo from '../../images/logo_white.png';

import axios from 'axios';
import { MAIN_API } from '../../APIKey';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'
import resp_logo from '../../images/logo.png'
class Insurance extends Component {
    state={
        first_name: '',
        last_name: '',
        email: '',
        country: '',
        phone_number: '',
        date: '',
        date_of_birth: '',
        description: '',
        lang: false
    }

    changeInputValue = (e) =>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    cleareState = () =>{
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            date_of_birth: '',
            date: '',
            country: '',
            description: ''
        })
    }
    sendInsuranceData(first_name, last_name, email, country, phone_number, date, date_of_birth, description, e){
        if(first_name !== '' && last_name !== '' && email !== '' && country !== '' && phone_number !== '' && date !== '' && date_of_birth !== '' && description !== ''){
            let formData = new FormData();
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('email', email);
            formData.append('country', country);
            formData.append('phone_number', phone_number);
            formData.append('date', date);
            formData.append('date_of_birth', date_of_birth);
            formData.append('description', description);

            axios.post(`${MAIN_API}/public-insurance`, formData).
            then(response => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Sorğunuz Göndərildi.'
                  })
                  this.cleareState()
            }).catch(err => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'error',
                    title: 'Xəta baş verdi. Biraz sonra cəhd edin'
                  })
                  this.cleareState()
            })

        }
    }

    componentDidMount(){
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
        // const {router} = this.props
        const { first_name, last_name, email, country, phone_number, date, date_of_birth, description, lang } = this.state;
        // console.log(insuranceParams)
        return (
            <div>
               
                <header onClick={this.closeLang.bind(this)} id="services_header">
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
                            <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >Az<i className="fa fa-chevron-left"></i></button>
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
                        <button className="change_lang_btn" onClick={this.openLangBtn.bind(this)} >En<i className="fa fa-chevron-left"></i></button>
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
                     <div className="header_main_container">
                        <div className="header_title">
                            <h2>Sığorta</h2>
                        </div>
                        <div className="grid-container-header ">
                        
                            <div className="item2">
                                <input type="text" onChange={this.changeInputValue.bind()} name='first_name' value={first_name} placeholder='Ad' className="header_left_input" />
                                <input type="text" onChange={this.changeInputValue.bind()} name='email' placeholder='E-poçt' value={email} className="header_left_input" />
                                <input type="date" onChange={this.changeInputValue.bind()} name='date' placeholder='Tarix' value={date} className="header_left_input" />
                                {/* <input type="text" className="header_left_input" /> */}
                            </div>
                            <div className="item3">
                                <input type="text"  onChange={this.changeInputValue.bind()} name='last_name' placeholder='Soyad' value={last_name} className="header_left_input" />
                                <input type="text"  onChange={this.changeInputValue.bind()} name='phone_number' placeholder='Nömrə' value={phone_number} className="header_left_input" />

                            </div>  
                            <div className="item4">
                                <input type="text"  onChange={this.changeInputValue.bind()} name='date_of_birth' placeholder='Təvəllüd' value={date_of_birth} className="header_left_input" />
                                <input type="text"  onChange={this.changeInputValue.bind()} name='country' placeholder='Ölkə' value={country} className="header_left_input" />
                             
                            </div>
                            <div className="item5">
                                <textarea name='description'  onChange={this.changeInputValue.bind()} placeholder='Bura Yazın...' value={description} className="services_description"></textarea>
                            </div>
                        </div>

                        <button onClick={this.sendInsuranceData.bind(this, first_name, last_name, email, country, phone_number, date, date_of_birth, description)} className="header_form_button">Göndər</button>
                    </div>
                    
                
                </div>
            </header>
            </div>
        );
    }
}

export default Insurance