import React, { Component } from 'react'
class TodoItem extends Component {
   
    render() { 
        const firstName ="Ayesiza"
        const lastName = "Hawa"
        return ( 
            <div className=" todo-item ">
              
                  <input type="checkbox" />
                  <p>Placeholder text here</p>
             
            </div>

         );
    }
}
 
export default TodoItem;