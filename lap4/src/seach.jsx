import React from "react";
class Search extends React.Component{
     state={term:''};
     onFormSubmit= event=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log(this.state.term);
     };
     render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}> 
                    <label style={{marginBottom:'20px'}}>
                        Images Search
                    </label>
                    <input type="text"
                    value={ this.state.term}
                    onChange={e=>this.setState({ term:e.target.value})}
                    >

                    </input>
                </form>
            </div>
        )
            
        
     }
}
export default Search;