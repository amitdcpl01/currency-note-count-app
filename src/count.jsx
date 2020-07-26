import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
            countoutput: 0,
            noteCounter: []
        }
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onSubmitClick() {
        const note = [2000, 500, 200, 100];
        var inputAmount = Number(this.state.inputValue);
        this.state.noteCounter=[];
        //logic for count note
        for (var i = 0; i < note.length; i++) {
            if (inputAmount >= Number(note[i])) {
                console.log(`Number of ${note[i]} :` + parseInt(inputAmount / Number(note[i])));
                this.state.noteCounter.push(`Number of ${note[i]} :` + parseInt(inputAmount / Number(note[i])));
                inputAmount = inputAmount % Number(note[i]);
            }
        }
       // this.setState({ countoutput: this.state.noteCounter });
       this.setState((prevState, prevProps)=>{
           return{
               countoutput: prevState.noteCounter
           }
       })
    }

    handleChange(e) {
        let fields = this.state;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    render() {

        // const items = this.state.noteCounter.map(function (item) {
        //     return <li> {item} </li>;
        // });

        const items = this.state.noteCounter.map((item) => {
            return <li> {item} </li>;
        });

        return (
            <div>
                <label>Enter your amount</label><br />
                <input type='text' name="inputValue" value={this.state.inputValue} onChange={this.handleChange}></input><br />
                <button style={{ color: 'red', width: '100px', height: '30px' }} onClick={this.onSubmitClick}>Submit</button><br />
                <input type='radio' id='radiobutton' name='checkbook' checked={this.state.checkbook === 'Yes'} value='Yes' onChange={this.handleChange}></input>
                <label>Result: {this.state.countoutput}</label>

                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default Count;