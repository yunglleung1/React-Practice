import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey: ''
});



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      faces: [],
      faceBox: [],
      faceBoxes: [],
      route: 'signin'
    }
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    })

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then((response) => {
        this.mapFaces(response);
        this.calculateFaceLocation(this.state.faces);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  mapFaces = (response) => {
    const faces = response.rawData.outputs[0].data.regions.map((region) => {
    return region.region_info.bounding_box;
    });

    this.setState({
      faces: faces
    });
  }

  calculateFaceLocation = (faces) => {
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);

    const boxes = faces.map((face) => {
      return {
        leftCol: (face.left_col * width),
        topRow: (face.top_row * height),
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    });

    this.setState({
      faceBox: boxes[0],
      faceBoxes: boxes
    });
  }

  onImageSizeChange = () => {
    this.calculateFaceLocation(this.state.faces);
  }

  componentDidMount = () => {//performs recalculation of face location on window resize
    if(this.state.route !== 'signin' && this.state.faceBox){
      window.addEventListener("resize", this.onImageSizeChange);
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    });
  }

  render() {
    const {imageUrl, faceBox, route} = this.state;//destructuring the state object
    if(this.state.route === 'signin'){
      return (
        <div className="App">
          <Signin onRouteChange = {this.onRouteChange}/>
        </div>
      )
    } else if (this.state.route === 'home'){
      return (
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange = {this.onInputChange}
            onButtonSubmit = {this.onButtonSubmit}
          />
          <FaceRecognition
            imageUrl = {imageUrl}
            box = {faceBox}
          />
        </div>
      )
    } else if(route === 'register'){
      return (
        <div className="App">
          <Register onRouteChange = {this.onRouteChange}/>
        </div>
      )
    }
  }
}

export default App;
