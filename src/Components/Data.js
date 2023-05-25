import React, { Component } from 'react'

export default class Data extends Component {
    constructor(props){
        super(props);//used to call the constructor of parent class
        console.log(this.props);

    }
  render() {
    return (
        <>
           <div className='container2'>

            {this.props.value.map((item,index)=>{
             return (
                   <div key={index} className='container3'>
                       <h5>
                           Name : {item.name} |
                           Department : {item.department} |
                           Rating : {item.rating}
                       </h5>
                   </div>
          )
        })}
        </div>

        <button className='button2' onClick={this.props.toggle}>Go Back</button>
        </>
    )
  }
}
