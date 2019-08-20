import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <section className="header-left header-section">
          <a href="#" className="header-link header-logo">
            <i className="fab fa-github header-icon" /> &nbsp; Octodex
          </a>
          <a href="#" id="active" className="header-link">
            Home
          </a>
          <a href="https://octodex.github.com/faq/" className="header-link">
            FAQ
          </a>
        </section>
        <section className="header-right header-section">
          <a href="https://twitter.com/githubdesign" className="header-link">
            Follow Us on Twitter
          </a>
          <a href="https://github.com/" className="header-link">
            Back to GitHub.com
          </a>
        </section>
      </header>
    )
  }
}

export default Header
