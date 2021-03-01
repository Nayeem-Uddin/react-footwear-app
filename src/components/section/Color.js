import React, { Component } from 'react';

export class Color extends Component{
    render(){
        const {colors} = this.props;
        return(
            <div className="colors">{
                colors.map((color,ind) => (
                    <button key={ind} style={{background: color}}></button>
                ))}
            </div>
        )
    }
}
export default Color;