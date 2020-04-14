import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

interface IGridProps {
    gridFull: Array<any>,
    
    cols: number,
    rows: number

}

class Grid extends Component<IGridProps> {
  render() {
    const width = this.props.cols * 14;
    var rowsArr:Array<any> = [];
    var boxClass:string = "";

    return (
      <div className="grid" style={{width: width}}>
        {{rowsArr}}
      </div>
    );
  }
}

interface IMainState {
    generation: number,
    gridFull: Array<any>
}

 interface IMainProps {
    cols: number,
    rows: number,
    speed: number
}

class Main extends Component<IMainProps, IMainState> {
/**
 *
 */
constructor(props: IMainProps) {
  super(props);

  props = {
      cols: 50,
      rows: 30,
      speed: 100
  }

  this.state = {
    generation: 0,
    gridFull: Array(this.props.rows)
    .fill(0)
    .map(() => Array(this.props.cols).fill(false))
  }
}

  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.props.rows}
          cols={this.props.cols}
        />
        <h2>
          Generations: {this.state.generation}
        </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
