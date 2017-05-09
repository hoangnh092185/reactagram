import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {'contrast':100,'hue':0,'brightness':100,'saturate':100,'sepia':0};
  },
  handleChange(){

  },
  render() {
    return (
      <div className="Setting">
        <div className="MainWrapper">
          <div className="Sidebar">
            <div className="Title">Reactagram v1.0</div>
            <Setting name="contrast"   min={0} max={200} value={this.state.contrast} onChange={this.handleChange}></Setting>
            <Setting name="hue"        min={-360} max={360} value={this.state.hue} onChange={this.handleChange}></Setting>
            <Setting name="brightness" min={0} max={200} value={this.state.brightness} onChange={this.handleChange}></Setting>
            <Setting name="saturate"   min={0} max={100} value={this.state.saturate} onChange={this.handleChange}></Setting>
            <Setting name="sepia"      min={0} max={100} value={this.state.sepia} onChange={this.handleChange}></Setting>
          </div>
          <div className="ImageContainer">
            <Filter key="Default" filterFunctions={this.state}><Image image={this.props.image}/></Filter>
          </div>
        </div>
        <div className="FilterList">
            <Filter key="Noir" filterFunctions={{'contrast':138,'hue':0,'brightness':122,'saturate':0,'sepia':0}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
            <Filter key="Aged" filterFunctions={{'contrast':94,'hue':-54,'brightness':92,'saturate':100,'sepia':44}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
            <Filter key="Whiteout" filterFunctions={{'contrast':32,'hue':0,'brightness':173,'saturate':0,'sepia':0}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
            <Filter key="Vintage" filterFunctions={{'contrast':164,'hue':0,'brightness':47,'saturate':0,'sepia':100}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
        </div>
      </div>
    );
  }
}

function Setting(props) {

  return(

  );

  Setting.propTypes={
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    onChange : React.PropTypes.func
  };
}

class Filter extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div />
    );
  }
}
export default App;
