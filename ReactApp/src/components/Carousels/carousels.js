import React, { Component } from "react";
import img1 from '../../assets/imas/Carrusel_1.png'
import img2 from '../../assets/imas/Carrusel_2.png'
import img3 from '../../assets/imas/Carrusel_3.png'
import './carousels.css'

const movies = [
  {
    name: 'Movie 1',
    image: img1
  },
  {
    name: 'Movie 2',
    image: img2
  },
  {
    name: 'Movie 3',
    image: img3
  },
];

export default class Slide extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel');
    let sliders = [];
    let slideIndex = 0;
    let intervalId = null;

    const createSlide = () => {
      if (slideIndex >= movies.length) {
        slideIndex = 0;
      }

      let slide = document.createElement('div');
      let imgElement = document.createElement('img');
      let content = document.createElement('div');
      let h1 = document.createElement('h1');

      h1.appendChild(document.createTextNode(movies[slideIndex].name));
      content.appendChild(h1);
      slide.appendChild(imgElement);
      slide.appendChild(content);
      carousel.appendChild(slide);
      imgElement.src = movies[slideIndex].image;

      slide.className = 'slider';
      content.className = 'slide-content';
      h1.className = 'title';

      sliders.push(slide);

      if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
      }
    }

    for (let i = 0; i < 3; i++) {
      slideIndex++;
      createSlide();
    }

    intervalId = setInterval(() => {
      slideIndex++;
      createSlide();
    }, 6000);
  }

  render() {
    return (
      <div className="SliderContainer">
        <div className="carousel"></div>
      </div>
  );
 }
}