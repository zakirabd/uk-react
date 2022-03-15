import React, { Component } from 'react';

class EducationModal extends Component {
    closeModal(e){
        if(e.target.className === 'education_modal_shadow'){
            this.props.closeDialog()
        }
    }

    openSelecOptions(data, e){
        

        if(data.length !== 0){ 
            if(e.target.parentElement.parentElement.children[1].style.display === 'none' ||
                e.target.parentElement.parentElement.children[1].style.display === '' ){
                const allOptions = document.querySelectorAll('.education_modal_option_container');
                const btns = document.querySelectorAll('.edu_btn');
        
                for(const opt of allOptions){
                    opt.style.display = 'none';
                }
        
                for(const btn of btns){
                    btn.classList.remove('education_section_active')
                }
                e.target.parentElement.parentElement.children[1].style.display = 'initial'; 
                e.target.classList.add('education_section_active');  
            }else{
                const allOptions = document.querySelectorAll('.education_modal_option_container');
                const btns = document.querySelectorAll('.edu_btn');
        
                for(const opt of allOptions){
                    opt.style.display = 'none';
                }
        
                for(const btn of btns){
                    btn.classList.remove('education_section_active')
                }
                e.target.parentElement.parentElement.children[1].style.display = 'none'; 
                e.target.classList.remove('education_section_active');  
            }
            

        }else{
            const allOptions = document.querySelectorAll('.education_modal_option_container');
            const btns = document.querySelectorAll('.edu_btn');
    
            for(const opt of allOptions){
                opt.style.display = 'none';
            }
    
            for(const btn of btns){
                btn.classList.remove('education_section_active')
            }
        }

        
       
    }

    closeOptions(e){
      
        if(e.target.className !== 'education_modal_options' && 
            e.target.className !== 'edu_btn' &&
            e.target.className !== 'edu_btn education_section_active' &&
            e.target.className !== 'education_modal_option_container'){

                const allOptions = document.querySelectorAll('.education_modal_option_container');
                const btns = document.querySelectorAll('.edu_btn');
                if(allOptions && btns){
                    for(const opt of allOptions){
                        opt.style.display = 'none';
                    }
            
                    for(const btn of btns){
                        btn.classList.remove('education_section_active')
                    }
                }
           }
            
            
    }
    render() {
        const { data } = this.props;
       
        return (
            <div className='education_modal_shadow' onClick={this.closeModal.bind(this)}>
                <div onClick={this.closeOptions.bind(this)} className="education_modal_container">
                    <p className="education_modal_text_box">
                        <b>{data.title}</b> – {data.description}
                    </p>
                    <div className="education_modal_grid_container">
                        {
                            data.sub_services.map((result, i) => {
                                return(
                                    <div key={i} className="education_section_container">
                                        <div className="education_section">
                                            <button className='edu_btn' onClick={this.openSelecOptions.bind(this, result.labels)}>
                                                {/* education_section_active */}
                                                {result.title}
                                            </button>
                                        </div>
                                        <ul className="education_modal_option_container">
                                            {
                                                result.labels.map((label, j) => {
                                                    return(
                                                        <li className='education_modal_options' key={j} >{label.title}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationModal;