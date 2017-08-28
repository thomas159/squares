import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'sanitize.css'
import { TimelineLite,timeline, Linear, fromTo } from 'gsap';
import TransitionGroup from 'react-addons-transition-group';
import './styles.jsx'

export default class Loader extends Component {
  componentDidMount() {

    const tl = new TimelineLite()
    tl .to(this.github, 0, { opacity: 0, ease: Linear.easeNone, repeat: -1 })
      .to(this.box, 1, { x: 50, })
      .to(this.box, 3, { y: 600, rotation: 360, ease: Linear.easeNone, repeat: -1 })
      .to(this.grid, 2, { y: 2000, ease: Linear.easeNone, repeat: -1 })
      .to(this.github, 2, { opacity: 1, ease: Linear.easeNone, repeat: -1 })
  }

  render() {

    const res = [...Array(100)].map(i =>
      <div className="cell">
        <div className="innerCell" key={i} ref={con => { this.box = con; }} />
      </div>
      )

    const gitHub = (
      <div className="githubWrap" ref={con => { this.github = con; }}>
        <div className="github">https://github.com/thomas159</div>
      </div>
    )

    return (
      <div>
      {gitHub}
        <div className="grid" ref={con => { this.grid = con; }}>
          {res}
        </div>
      </div>
    )
  }
}