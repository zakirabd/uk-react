import React, { Component } from 'react';

class WriteUsCard extends Component {
    closeModal(){
        this.props.closeModalBtn()
    }
    render() {
        return (
            <div className='footer_write_us_container'>
                <i onClick={this.closeModal.bind(this)} className='fa fa-times'></i>
                <input placeholder='Ad' className='footer_write_us_input' type={'text'} />
                <input placeholder='E poçt' className='footer_write_us_input' type={'text'} />
                <input placeholder='Telefon' className='footer_write_us_input' type={'text'} />
                <textarea placeholder='Buraya yazın…' className='footer_write_us_textarea' ></textarea>
                <button className='footer_write_us_btn'>Göndərin</button>
            </div>
        );
    }
}

export default WriteUsCard;