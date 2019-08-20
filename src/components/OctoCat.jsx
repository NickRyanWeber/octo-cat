import React, { Component } from 'react'

class OctoCat extends Component {
  render() {
    return (
      <section className="cat-card">
        <section className="cat-image-area">
          <img className="cat-image" src={this.props.image} alt="" />
        </section>
        <section className="cat-data">
          <section className="cat-title">
            <p className="cat-number">#{this.props.number}:</p>
            <p className="cat-title">&nbsp;{this.props.name}</p>
          </section>
          <section>
            <a href={this.props.author1Link}>
              <img
                className="author-image"
                src={this.props.author1Img}
                alt=""
              />
            </a>
          </section>
        </section>
      </section>
    )
  }
}

export default OctoCat
