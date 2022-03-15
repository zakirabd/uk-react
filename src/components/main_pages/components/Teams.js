import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
class Teams extends Component {
    render() {
        const { teams } = this.props;
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 564 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 564, min: 0 },
              items: 1
            }
          };
        return (
            <section id="teams">
            <h3 className="section_header">Komandamız</h3>
            <div className="container">
                {/* <div className="grid_container_278"> */}
                <Carousel 
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  customTransition="all 2s"
                  transitionDuration={2000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {
                        teams ?
                        teams.map((data, i) => {
                            return(
                                <div key={i} className="card_container_278">
                                    <img src={data.teams.image_full_url} alt="image" />
                                    <div className="grid_card_278_body">
                                        <h4>{data.name}</h4>
                                        <p>{data.position}</p>
                                    </div>
                                </div>
                            )
                        }):null
                    }
                </Carousel>
            </div>
        </section>
        );
    }
}

export default Teams;