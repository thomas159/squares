import React from 'react'
import { Sine, Power2, TimelineLite,TweenMax } from 'gsap';
import styled from 'styled-components'

export default class Box extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {x: 0, opacity: 0}, {x: 500, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {x: 0, opacity: 1}, {y: 400, opacity: 0, onComplete: callback});
  }

  render () {
    return (
    <div className="box" ref={c => this.container = c}/>
    )
  }
}