import React, { Component } from 'react';

import axios from 'axios';
import {MAIN_API} from '../../APIKey';
import WriteUsCard from './WriteUsCard';
import Map from './Map';
// import WriteUsCard from '../components/main_page/WriteUsCard';
class Footer extends Component {
    state={
        links: {},
        modal: false,
        mapModal: false
    }

    closeModalBtn =()=>{
        this.setState({
            modal: false
        })
    }
    openModalBtn(){
        this.setState({
            modal: true
        })
    }
    componentDidMount(){
        axios.get(`${MAIN_API}/public-contact`).
        then(response => {
            this.setState({
                links: response.data
            })
        }).catch(err => console.log(err))
       
    }
    
    showMapBtn(modal, e){
        this.setState({
            mapModal: !modal
        })
    }
    render() {
        const { router } = this.props;
        const { links, modal, mapModal } = this.state;
        let static_contact;
        const az_lang = {
            address:'Adres',
            phone: 'Telefon',
            email: 'Email',
            office_hour: 'İş Saatları',
            write_us: 'Bizə yazın',
            contact_us: 'Bizimlə Əlaqə',
            map: 'Xəritəyə bax'
        }
        const en_lang = {
            address:'Address',
            phone: 'Phone',
            email: 'Email',
            office_hour: 'Office Hour',
            write_us: 'Write to us',
            contact_us: 'Contact Us',
            map: 'Look at the map'
        }
        const uk_lang = {
            address:'Адреса',
            phone: 'Телефон',
            email: 'Електронна пошта',
            office_hour: 'Робочі години',
            write_us: 'Напишіть нам',
            contact_us: "Зв'яжіться з нами",
            map: 'Подивіться на карту'
        }
        // console.log(router)
        // if(router.locale === 'az'){
        //     static_contact = az_lang
        // }else if(router.locale === 'en'){
        //     static_contact = en_lang
        // }else if(router.locale === 'uk'){
        //     static_contact = uk_lang
        // }else{
        //     static_contact = az_lang
        // }
        static_contact = az_lang
        return (
            <footer id="contact">
                <p className="copy_right">{links.copy_right}</p>
                <div className="footer_main_container">
                    <div className="footer_background_shadow">
                        <div className="footer_information_box_container">
                            <div className="column">
                                <h1>{static_contact.contact_us}</h1>
                                <ul>
                                    <li><b>{static_contact.address}: </b>{links.address}</li>
                                    <li><b>{static_contact.office_hour}: </b> {links.office_hour}</li>
                                    <li><b>{static_contact.phone}: </b> {links.phone}</li>
                                    <li><b>{static_contact.email}: </b>{links.email}</li>
                                </ul>
                                <button onClick={this.openModalBtn.bind(this)}>{static_contact.write_us}</button>
                                <div className="footer_social_links">
                                    <a target={'blank'} href={links.linkedin}><i className="fa fa-linkedin"></i></a>
                                    <a  target={'blank'} href={links.instagram}><i className="fa fa-instagram"></i></a>
                                    <a  target={'blank'} href={links.facebook}><i className="fa fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <button className="show_map_btn" onClick={this.showMapBtn.bind(this, mapModal)}>{static_contact.map}</button>
                    </div>
                    {
                        modal?
                        <WriteUsCard closeModalBtn={this.closeModalBtn} />:null
                    }
                    {
                        mapModal?
                        <Map />:null
                    }
                    
                </div>
            </footer>
        );
    }
}

export default Footer;