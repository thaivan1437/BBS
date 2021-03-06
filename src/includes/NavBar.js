import React, { Component } from 'react';
import { Navbar, Nav, Image } from "react-bootstrap";
import menuDatas from './menu'
import { Animated } from "react-animated-css";
import Link from 'next/link'
import {config} from '../helper/get_config';

class NavBar extends Component {
  state = {
    isTop: true,
    isToggle:false
  };
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  onMouseOver = (index) => {
    this.setState({ focus: true, activeIndex: index })
  }
  onMouseOut = () => {
    this.setState({ focus: false })
  }
  render() {
    return <div id="header">
      <Navbar className={this.state.isTop ? `navbar navbar-fixed-top ${this.state.isToggle ? "scrolled" : ""}` : "navbar navbar-fixed-top scrolled"} fixed="top" expand="lg">
        {/* <Navbar className={"navbar navbar-fixed-top scrolled"}> */}
        <Navbar.Brand className='navbar-brand' href="/">
          <Image src={config.CDN_URL + "/site/logo.png"} style={{ width: 200 }} className='logo-brand ml-sm-5 img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle style={{ border: 0 }} onClick={() => {this.setState({isToggle:!this.state.isToggle})}}>
          <img src={config.CDN_URL + "/site/navbar-toggler-icon.png"} height="20" width="20" alt="" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar" className="navbar-collapse collapse">
          <Nav id="top-menu" className="nav navbar-nav navbar-right">
            {
              menuDatas.map((item, index) => {
                return <Link
                  key={index}
                  href={item.route}
                  style={{ marginTop: 10, flexDirection: 'row' }}
                >
                  <a target={item.target}
                    onMouseOver={() => { this.onMouseOver(index) }}
                    onMouseOut={this.onMouseOut}
                    className={'nav-link'}
                  >
                    {item.title}
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.focus}>
                      <div style={{ width: "100%", height: 2, backgroundColor: index === this.state.activeIndex ? '#CF003C' : 'transparent' }} />
                    </Animated>
                  </a>
                  
                </Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  }
}

export default NavBar;