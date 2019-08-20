import React, { Component } from 'react'
import OctoCat from './OctoCat'
// import OctoCat from './components/OctoCat.jsx'
import DinoCat from '../images/dinotocat.png'
import FilmCat from '../images/filmtocat.png'
import FilmCats from '../images/filmtocats.png'
import Inflatocat from '../images/inflatocat.png'
import JusticeCat from '../images/justicetocat.jpg'
import PrivateCat from '../images/privateinvestocat.jpg'

const OctoCatData = [
  {
    imageLink: DinoCat,
    number: 132,
    title: 'Dinotocat'
    // authorImg: ,
    // authorLink:
  },
  {
    imageLink: FilmCat,
    number: 123,
    title: 'Filmtocat'
    // authorImg: ,
    // authorLink:
  },
  {
    imageLink: FilmCats,
    number: 146,
    title: 'Filmtocats'
    // authorImg: ,
    // authorLink:
  },
  {
    imageLink: Inflatocat,
    number: 126,
    title: 'Inflatocat'
    // authorImg: ,
    // authorLink:
  },
  {
    imageLink: JusticeCat,
    number: 136,
    title: 'Justicetocat'
    // authorImg: ,
    // authorLink:
  },
  {
    imageLink: PrivateCat,
    number: 122,
    title: 'Private Investocat'
    // authorImg: ,
    // authorLink:
  }
]

class OctoCats extends Component {
  state = {
    cats: []
  }

  async componentDidMount() {
    const response = await fetch('https://sdg-octodex.herokuapp.com')
    const data = await response.json()
    this.setState({ cats: data.data })
    console.log(this.state.cats)
  }

  render() {
    console.log('render')
    return (
      <section className="Octo-Cat-Area">
        {this.state.cats.map(cat => {
          return (
            <OctoCat
              key={cat.number}
              number={cat.number}
              image={cat.image}
              name={cat.name}
              author1Link={cat.authors[0].link}
              author1Img={cat.authors[0].image}
            />
          )
        })}
      </section>
    )
  }
}

export default OctoCats
