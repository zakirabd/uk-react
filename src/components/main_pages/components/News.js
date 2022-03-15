import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let slider_interval;

class News extends Component {
    state = {
        news_state: [],
        active_news_state: '',
        current_news: 0
    }
     goLeftSide =(news, active_news, current_news, e) =>{
        current_news = current_news+1;
        if(current_news < news.length){

            if(news.length >=5){
                active_news={
                    image: news[current_news].news.image_full_url,
                    title: news[current_news].title,
                    description: news[current_news].description
                }
               
            }
            this.setState({
                active_news_state: active_news,
                current_news: current_news
            })
        }
       
    }
    sliderAnimation(num, active){
        const slides = document.querySelectorAll('.slide');
       
        if(slides && slides.length > 0){
            for(const slide of slides ){
                slide.style.transform = `translateX(${640 - num*320 }px)`;
                slide.classList.remove('active')
                slide.classList.add('top')
            }
            slides[active].classList.add('active')
            slides[active].classList.remove('top')
        }
        
    }
    componentDidMount(){
        
        const leftBtn = document.querySelector('.slider_left_btn');
        const rightBtn = document.querySelector('.slider_right_btn')
        let num = 0;
        let active = 2;
        slider_interval = setInterval(() => {
            if(num === 4){
                num = 0;
                active = 2
            }else{
                num = num+1;
                active = active +1;
            }
            this.sliderAnimation(num, active)
        }, 6000)
        if(leftBtn){
            leftBtn.addEventListener('click', () => {
                if(num === 4){
                    num = 0;
                    active = 2
                }else{
                    num = num+1;
                    active = active +1;
                }
                // num = num +1;
                // active = active +1;
                this.sliderAnimation(num, active)
            })
        }
        
        if(rightBtn){
            rightBtn.addEventListener('click', () => {
                if(num === -1){
                    num = 0;
                    active = 2
                }else{
                    num = num-1;
                    active = active -1;
                }
                // num = num -1;
                // active = active -1;
                this.sliderAnimation(num, active)
            })
        }
        
    }
    componentWillUnmount(){
        clearInterval(slider_interval);
    }
  render() {
    const {news} = this.props;
   const { news_state, active_news_state, current_news } = this.state;
   
    let news_arr = [];
    let active_news;

    // let current_news = 0;
    if(news && news.length >0){
        if(active_news_state === ''){
            active_news={
                id: news[0].news_id,
                image: news[0].news.image_full_url,
                title: news[0].title,
                description: news[0].description
            }
        }else{
            active_news = active_news_state;
        }
        
        if(news.length === 1){
            const params = {
                id: news[0].news_id,
                image: news[0].news.image_full_url,
                title: news[0].title,
                description: news[0].description
            }
            for(let i = 0; i <4; i++){
               news_arr.push(params)
            }
            
        }else if(news.length === 2){
           
            for(let i = 0; i <2; i++){
                for(const property of news){
                    const params = {
                        id: property.news_id,
                        image: property.news.image_full_url,
                        title: property.title,
                        description: property.description
                    }
                    news_arr.push(params)
                }
            }
        }else if(news.length === 3){
            for(let i = 0; i <2; i++){
                for(let j = 1; j < news.length; j++){
                    const params = {
                        id: news[j].news_id,
                        image: news[j].news.image_full_url,
                        title: news[j].title,
                        description: news[j].description
                    }
                    news_arr.push(params)
                }
            }
        }else if(news.length === 4){
            for(let j = 0; j < news.length; j++){
                const params = {
                    id: news[j].news_id,
                    image: news[j].news.image_full_url,
                    title: news[j].title,
                    description: news[j].description
                }
                news_arr.push(params)
            }
        }else if(news.length > 4){
            for(let j = 1; j < 5; j++){
                const params = {
                    id: news[j].news_id,
                    image: news[j].news.image_full_url,
                    title: news[j].title,
                    description: news[j].description
                }
                news_arr.push(params)
            }
        }
    }
   
    // console.log(active_news)
  
    return (
        <section id="news">
        <h3 className="section_header">Xəbərlər</h3>
        
        <div className='slider_container'>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide active">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="slide top">
                <Link to={'/news/'+news_arr[2].id}>
                    <div className="news_card_mini_container">
                        <div className="news_card_mini_container_header">
                            <img src={news_arr[2].image} />
                            <h5>{news_arr[2].title}</h5>
                        </div>
                        <p className="news_card_mini_container_body">
                            {news_arr[2].description}
                        </p>
                    </div>
                </Link>
                
            </div>
        </div>
        <div className='slider_left_right_container'>
            <i className="fa fa-angle-left slider_left_btn"  ></i>
            <i className="fa fa-angle-right slider_right_btn"></i>
        </div>
    </section>
    )
  }
}

export default News

