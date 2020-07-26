//create a program for ATM process count number of note for 1000,500,200,100

import React, { Component } from 'react';

class CountNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            totalCount: '',
            counttotal: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const NoteType = [1000, 500, 200, 100];
        var inputValue = Number(this.state.inputValue);
        for (var i = 0; i < NoteType.length; i++) {
            if (inputValue >= NoteType[i]) {
                this.state.counttotal.push(`Count of ${NoteType[i]} Rs :` + parseInt(inputValue / NoteType[i]));
                inputValue = inputValue % NoteType[i];
            }
        }

        this.setState({ totalCount: this.state.counttotal });
    }

    render() {
        return (
            <div>
                <h3>This is for Count your deposit note details: {this.state.totalCount}</h3><br></br>
                <input type='text' name='inputValue' value={this.state.inputValue} onChange={this.handleChange}></input>
                <input type='radio' name='checkbox' value='Yes' checked={this.state.checkbox === 'Yes'} onChange={this.handleChange}></input><br></br>
                <button onClick={this.onSubmit}>Submit</button><br></br>
                <label>total count : {this.state.totalCount}</label>
            </div>
        );
    }

}

export default CountNew