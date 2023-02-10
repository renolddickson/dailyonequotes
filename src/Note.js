import React from 'react'
import Quotes from './quotes.png'
export default function Note() {
    const quotes=["Whatever you do in life, surround yourself with smart people who'll argue with you.",
    "Everything you look at can become a fairy tale and you can get a story from everything you touch.",
    "Time is inversly proposional to love ",
    "Positive anything is better than negative nothing."
    ]
var rand = quotes[(Math.random() * quotes.length) | 0]

  return (
  <div className="box">
    <div className="cover">
    <div className="quotes">
    <img src={Quotes} alt='"' />
      <h2>
        {rand} ✨
      </h2>
      <div className="author">- smart dickson</div>
    </div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
    </div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
  </div>
  )
}
