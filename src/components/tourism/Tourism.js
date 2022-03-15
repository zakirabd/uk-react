import React, { Component } from "react";
import logo from "../../images/logo_white.png";

import axios from "axios";
import { MAIN_API } from "../../APIKey";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import resp_logo from '../../images/logo.png'


class Tourism extends Component {
  state = {
    drop_down: false,
    option_state: [],
    email: "",
    departure_time: "",
    turn_time: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    where_from: "",
    where_to: "",
    description: "",
    lang: false,
    services: [],
    lang_id: 1
  };

  openOptions(drop_down, e) {
    this.setState({
      drop_down: !drop_down,
    });
    const icon = document.querySelector(".multi_select_icon");
    if (icon) {
      if (drop_down) {
        icon.style.transform = "rotateZ(-90deg)";
      } else {
        icon.style.transform = "rotateZ(90deg)";
      }
    }
  }
  closeOptions = (e) => {
    if(this.state.lang){
        this.setState({
           lang: false
       })
   }
    if (
      e.target.className !== "fa fa-angle-left multi_select_icon" &&
      e.target.className !== "multi_select_container" &&
      e.target.className !== "selected_container" &&
      e.target.className !== "selected_option" &&
      e.target.className !== "multi_option" &&
      e.target.className !== "multi_select_container" &&
      e.target.className !== "option_main_container" &&
      e.target.className !== "drop_down_placeholder"
    ) {
      this.setState({
        drop_down: false,
      });
      const icon = document.querySelector(".multi_select_icon");
      if (icon) {
        icon.style.transform = "rotateZ(-90deg)";
      }
    }
  };

  selectOption(option, index, type, e) {
    option[index].checked = type;

    this.setState({
      option_state: option,
    });
  }
  changeStateValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  cleareState = () => {
    this.setState({
      email: "",
      departure_time: "",
      turn_time: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      where_from: "",
      where_to: "",
      description: "",
    });
    let option = this.state.option_state;
    for (const opt of option) {
      opt.checked = false;
    }
    this.setState({
      option_state: option,
    });
  };
  modal(icon, msg) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: msg,
    });
  }
  sendUserRequest(
    email,
    departure_time,
    turn_time,
    first_name,
    last_name,
    phone_number,
    where_from,
    where_to,
    description,
    option,
    e
  ) {
    if (
      email !== "" &&
      departure_time !== "" &&
      turn_time !== "" &&
      first_name !== "" &&
      last_name !== "" &&
      phone_number !== "" &&
      where_from !== "" &&
      where_to !== "" &&
      description !== "" &&
      option !== "" &&
      option.find((data) => data.checked === true)
    ) {
      let services = [];
      for (const opt of option) {
        if (opt.checked) {
          services.push(opt.id);
        }
      }

      let formData = new FormData();
      formData.append("email", email);
      formData.append("departure_time", departure_time);
      formData.append("turn_time", turn_time);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("phone_number", phone_number);
      formData.append("where_from", where_from);
      formData.append("where_to", where_to);
      formData.append("description", description);
      formData.append("services", services);

      axios
        .post(`${MAIN_API}/public-tourism-user`, formData)
        .then((response) => {
          this.modal("success", "Sorğunuz Göndərildi.");
          this.cleareState();
        })
        .catch((err) => {
          this.modal("error", "Xəta baş verdi. Biraz sonra cəhd edin");
          this.cleareState();
        });
    } else {
      this.modal("error", "Bütün Xanaları doldurun");
    }
  }

  componentDidMount() {
    const { lang_id } = this.state;
    axios.get(`${MAIN_API}/public-tourism-services?lang_id=${lang_id}`).
    then(response => {
        this.setState({
            services: response.data
        })
    })


    const btns = document.querySelectorAll(".nav-link");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", (e) => {
        const id = e.target.getAttribute("href");

        localStorage.setItem("page", id);
      });
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
    const {
      drop_down,
      option_state,
      email,
      departure_time,
      turn_time,
      first_name,
      last_name,
      phone_number,
      where_from,
      where_to,
      description,
      lang
    } = this.state;
    const { services } = this.state;
    let option = [];
    for (const service of services) {
      const params = {
        id: service.tourism_services_id,
        name: service.name,
        checked: false,
      };
      option.push(params);
    }
    if (option_state.length !== 0) {
      option = [...option_state];
    }
    return (
      <div>
        
        <header id="services_header"  onClick={this.closeOptions.bind(this)}>
          <div id="services_background" className="header_background">
            <nav>
              <div className="logo">
                <img src={logo} width={"139px"} height={"91px"} />
              </div>
              <input
                type={"checkbox"}
                id="resp-nav"
                style={{ display: "none" }}
              />
              <div
                className="resp-nav-container"
                onClick={this.closeNavbar.bind(this)}
              >
                <div className="resp-nav">
                  <div className="res-nav-header">
                    <div className="res-nav-logo">
                      <img src={resp_logo} width={"110px"} height={"68px"} />
                    </div>

                    <i className="fas fa-times"></i>
                  </div>
                  <ul className="main-resp-nav">
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#home_page">
                          Əsas səhifə
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#services">
                          Xidmətlərimiz
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#about">
                          Haqqımızda
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#news">
                          Xəbərlər
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#teams">
                          Komandamız
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#partners">
                          Tərəfdaşlar
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <a className="nav-link" href="#contact">
                          Əlaqə
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="resp-nav-footer">
                    <a target={"blank"} href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a target={"blank"} href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a target={"blank"} href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="header_head_container">
                <ul className="main-nav ">
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#home_page">
                        Əsas səhifə
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#services">
                        Xidmətlərimiz
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#about">
                        Haqqımızda
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#news">
                        Xəbərlər
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#teams">
                        Komandamız
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#partners">
                        Tərəfdaşlar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="nav-link" href="#contact">
                        Əlaqə
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="change_lang_container">
                  <button
                    className="change_lang_btn"
                    onClick={this.openLangBtn.bind(this)}
                  >
                    Az <i className="fa fa-chevron-left"></i>
                  </button>
                  {lang ? (
                    <ul className="lang_options_container">
                      {/* {router.locales.map((locale) => {
                        return (
                          <li key={locale}>
                            <Link to={router.asPath} locale={locale}>
                              <a>{locale}</a>
                            </Link>
                          </li>
                        );
                      })} */}
                    </ul>
                  ) : null}
                </div>
              </div>
            </nav>
            <div className="sticky-navbar">
              <label htmlFor="resp-nav" className="resp-icon">
                <i className="fas fa-bars "></i>
              </label>
              <ul className="main-nav ">
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#home_page">
                      Əsas səhifə
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#services">
                      Xidmətlərimiz
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#about">
                      Haqqımızda
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#news">
                      Xəbərlər
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#teams">
                      Komandamız
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#partners">
                      Tərəfdaşlar
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <a className="nav-link" href="#contact">
                      Əlaqə
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="change_lang_container resp-lang">
                <button
                  className="change_lang_btn"
                  onClick={this.openLangBtn.bind(this)}
                >
                  Az <i className="fa fa-chevron-left"></i>
                </button>
                {lang ? (
                  <ul className="lang_options_container">
                    {/* {router.locales.map((locale) => {
                      return (
                        <li key={locale}>
                          <Link to={router.asPath} locale={locale}>
                            <a>{locale}</a>
                          </Link>
                        </li>
                      );
                    })} */}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="header_main_container">
              <div className="header_title">
                <h2>Turizm xidmətləri</h2>
              </div>
              <div className="grid-container-header ">
                <div className="item2">
                  <div className="header_left_input multi_select_header">
                    <div
                      className="option_main_container"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={this.openOptions.bind(this, drop_down)}
                    >
                      <div className="selected_container">
                        {option.map((data, i) => {
                          if (data.checked) {
                            return (
                              <span key={i} className="selected_option">
                                {data.name}
                              </span>
                            );
                          }
                        })}
                        {!option.find((data) => data.checked === true) ? (
                          <p className="drop_down_placeholder">
                            Turizm xidmətlərimiz
                          </p>
                        ) : null}
                      </div>
                      <i className="fa fa-angle-left multi_select_icon"></i>
                    </div>

                    {drop_down ? (
                      <ul className="multi_select_container">
                        {option.map((data, i) => {
                          if (data.checked) {
                            return (
                              <li
                                onClick={this.selectOption.bind(
                                  this,
                                  option,
                                  i,
                                  false
                                )}
                                key={i}
                                className="multi_option"
                              >
                                {data.name} <i className="fas fa-check"></i>
                              </li>
                            );
                          } else {
                            return (
                              <li
                                onClick={this.selectOption.bind(
                                  this,
                                  option,
                                  i,
                                  true
                                )}
                                key={i}
                                className="multi_option"
                              >
                                {data.name}
                              </li>
                            );
                          }
                        })}
                      </ul>
                    ) : null}
                  </div>
                  {/* <input type="text" className="header_left_input" /> */}
                  <input
                    type="text"
                    value={email}
                    onChange={this.changeStateValue.bind(this)}
                    name="email"
                    placeholder="E-poçt"
                    className="header_left_input"
                  />
                  <input
                    type="text"
                    value={departure_time}
                    onChange={this.changeStateValue.bind(this)}
                    name="departure_time"
                    placeholder="Gediş"
                    className="header_left_input"
                  />
                  <input
                    type="text"
                    value={turn_time}
                    onChange={this.changeStateValue.bind(this)}
                    name="turn_time"
                    placeholder="Dönüş"
                    className="header_left_input"
                  />
                </div>
                <div className="item3">
                  <input
                    type="text"
                    value={first_name}
                    onChange={this.changeStateValue.bind(this)}
                    name="first_name"
                    placeholder="Ad"
                    className="header_left_input"
                  />
                  <input
                    type="text"
                    value={phone_number}
                    onChange={this.changeStateValue.bind(this)}
                    name="phone_number"
                    placeholder="Nömrə"
                    className="header_left_input"
                  />
                  {/* <!-- <input type="text" className="header_left_input" /> --> */}
                </div>
                <div className="item4">
                  <input
                    type="text"
                    placeholder="Soyad"
                    onChange={this.changeStateValue.bind(this)}
                    name="last_name"
                    value={last_name}
                    className="header_left_input"
                  />
                  <div className="mini_grid_container">
                    <input
                      placeholder="Hardan"
                      value={where_from}
                      onChange={this.changeStateValue.bind(this)}
                      name="where_from"
                      type="text"
                    />
                    <input
                      placeholder="Haraya"
                      value={where_to}
                      onChange={this.changeStateValue.bind(this)}
                      name="where_to"
                      type="text"
                    />
                  </div>
                </div>
                <div className="item5">
                  <textarea
                    placeholder="Buraya yazın..."
                    value={description}
                    onChange={this.changeStateValue.bind(this)}
                    name="description"
                    className="services_description"
                  ></textarea>
                </div>
              </div>

              <button
                className="header_form_button"
                onClick={this.sendUserRequest.bind(
                  this,
                  email,
                  departure_time,
                  turn_time,
                  first_name,
                  last_name,
                  phone_number,
                  where_from,
                  where_to,
                  description,
                  option
                )}
              >
                Göndər
              </button>

              <div className="grid_container-w-225">
                <div className="card_container_225"></div>
                <div className="card_container_225"></div>
                <div className="card_container_225"></div>
                <div className="card_container_225"></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Tourism;
