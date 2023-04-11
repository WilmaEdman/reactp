import React from "react";

class Likes extends React.Component{

    state = {
        likes:0
    }

    handleclick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleclick}> Like ♥️ {this.state.likes}</button>
            </div>
        )
    }
}

export default Likes