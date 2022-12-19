import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/index';
import { applyNumber, changeOperation, clearDisplay, memSet, memRetrieval, memClear } from '../actions/index';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Jamison's Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation: </b>{state.operation}</span>
              <span id="memory"><b>Memory: </b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(memSet((state.total)))} />
              <CalcButton value={"MR"} onClick={() => dispatch(memRetrieval((state.memory)))} />
              <CalcButton value={"MC"} onClick={() => dispatch(memClear())} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
              <CalcButton value={2} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
              <CalcButton value={3} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
              <CalcButton value={5} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
              <CalcButton value={6} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
              <CalcButton value={8} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
              <CalcButton value={9} onClick={(evt) => dispatch(applyNumber(parseInt(evt.target.value)))} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(evt) => dispatch(changeOperation((evt.target.value)))} />
              <CalcButton value={"*"} onClick={(evt) => dispatch(changeOperation((evt.target.value)))} />
              <CalcButton value={"-"} onClick={(evt) => dispatch(changeOperation((evt.target.value)))} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}  onClick={() => dispatch(clearDisplay())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
