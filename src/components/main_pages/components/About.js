import React, { Component } from 'react';

class About extends Component {
    render() {
        const { about } = this.props;
        return (
            <section id="about">
            <h3 className="section_header">Haqqımızda</h3>
            <div className="about_section_container">
                <div className="about_section_background_shadow">
                    <div className="about_section_text_container">
                        <p className="about_section_text_box">
                            {about.description}
                        </p>
                        {/* <p className="about_section_text_box">
                            “Ukrayna Mərkəzi” fəaliyyətinə təhsil, turizm ,mədəniyyət və səhiyyə üzrə başlamışdır. İlk hədəfimiz təhsil sahəsində qarşılıqlı keyfiyyət standartlarına uyğun işlər görmək olacaq. 
                        </p>
                        <p className="about_section_text_box">
                            Ukraynada təhsil almaq istəyən vətəndaşların düzgün istiqamətləndirilməsi və onlara dəstək , eləcə də universitet seçimində yardım, dil kurslarının təşkili və sertifikatlaşdırma mərkəzin əsas hədəfidir. 
                        </p>
                        <p className="about_section_text_box">
                            Məqsədimiz hər iki ölkə vətəndaşlarının bu sahədə daha çox məlumat və təklif almasına yardım etməkdən ibarətdir. 
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default About;