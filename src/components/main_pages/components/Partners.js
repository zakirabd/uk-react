import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
class Partners extends Component {
    render() {
        const { partners } = this.props;
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
            <section id="partners">
            <h3 className="section_header">Tərəfdaşlar</h3>
            <div className="container">
                {/* <div className="grid_container_269"> */}
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
                //   deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                    {
                        partners?
                        partners.map((data, i) => {
                            return (
                                   <div key={i} className="card_container_269">
                                        <img src={data.image_full_url} />
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

export default Partners;