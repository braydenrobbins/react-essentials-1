import React from 'react';
import styled from 'styled-components';

const FancyDiv = styled.div`
    background-color: gray;
    color: white;
`


class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true

        }
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render () {
        var msg
        if (this.state.checked) {
            msg = 'checked'
        } else {
            msg = 'not checked'
        }
        return (
            <FancyDiv> 
                <input 
                    type='checkbox' 
                    onChange={this.handleCheck}
                    defaultChecked={this.state.checked}
                />
                <p>This box is {msg}</p>
            </FancyDiv>
        )
    }
}



export default Checkbox;