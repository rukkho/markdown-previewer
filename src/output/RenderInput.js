import React from 'react';
class RenderInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>Render Input</h3>
                <input value={this.props.input} />
            </div>
        )
    }
}
export default RenderInput