import React from 'react';
import icon from './icon.png';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newItem:"",
            list:[]
        }
    }

    addTodo(todo){
        if(todo !== ""){
            const newItem = {
                id: Date.now(),
                value:todo,
                isDone:false
            }
            const list = [...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                newItem: ""
            });
        }
    }

    deleteTodo(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item=>item.id!==id);
        this.setState({list:updatedList});
    }

    updateInput(input){
        this.setState({newItem:input});
    }
    

   render(){
       return(
          <div>
              <img src={icon} width="100" height ="100" className="logo" />
              <h1 className="todo">Simple Todo App</h1>
              <div className="container">
                  Add an Item.
                  <br />
                 <input value={this.state.newItem} onChange={e => this.updateInput(e.target.value)} type="text" name="" className="input-text" placeholder="Enter the text"/>
                 <br />
                <button className="add-btn" onClick={()=>this.addTodo(this.state.newItem)}>ADD</button> 
                <div className="list">
                    <ul>
                        {this.state.list.map(item =>{
                            return(
                                <li>
                                    <input type="checkbox" name="isDone" checked={item.isDone} name=""/>
                                    {item.value}
                                    <button className="delete-btn" onClick={()=>this.deleteTodo(item.id)}>Delete</button>
                                </li>
                                
                            )
                        })}
                       
                    </ul>
                </div>
              </div>
          </div>
       )
   }
}

export default App;