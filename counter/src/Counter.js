import React, { Component } from 'react';
import ButtonsPanel from './ButtonsPanel';
import CounterDisplay from './CounterDisplay';
import Step from './Step';

class Counter extends Component {
    constructor(props) {
        super(props);
        let initValue = 0;
        let initStep = 1;
        if (!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }
        this.state = {
            counterValue: initValue,
            stepValue: initStep
        };
    }

    addOne = () => {
        this.setState(prevState => {
            return ({ counterValue: prevState.counterValue + 1 });
        });
    }

    reset = resetBool => {
        if (resetBool) {
            this.setState({ counterValue: 0 })
        }
        else {
            this.setState({ counterValue: parseInt(this.props.initValue) });
        }
    }

    updateButtonValue = (event) => {
        this.setState({ stepValue: event.target.value });
    }

    updateCounter = () => {
        this.setState(prevState => {
            return ({ counterValue: parseInt(prevState.counterValue) + parseInt(this.state.stepValue) });
        })
    }

    render() {
        return (
            <div className='counter'>

                <CounterDisplay value={this.state.counterValue} />

                <ButtonsPanel changeValue={this.addOne} resetValue={this.reset} stepValue={this.state.stepValue} stepChange={this.updateCounter} />

                <Step stepValue={this.state.stepValue} changeButtonValue={this.updateButtonValue} />

            </div>
        )
    }
}

export default Counter;