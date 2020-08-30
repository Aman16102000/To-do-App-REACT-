import React from 'react';
import logo from './logo_lco_t17sd.png';
import "./App.css";
//import { ReactComponent } from '*.svg';

class App extends React.Component{
constructor(props)
{
  super(props);
  this.state={
    list :[],
    newItem:""
  }
}
addItem(todoValue)
{
  if(todoValue!=="")
  {
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list=[...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
  }
}
deleteItem(id)
{
const list=[...this.state.list];
const UpdatedList=list.filter(li=> li.id!==id);
this.setState({
list:UpdatedList
});

}
updateInput(input)
{
this.setState({
newItem:input
});
}

render(){
return(
<div>
  <img src={logo} width="100" height="100" className="App-logo"></img>
  <h1 className="header">LCO To do App</h1>
  <div className="row">
  <div className="col-12"><h3 className="header">Add Task's ...</h3></div>
    <div className="col-9"><input type="text" className="input-text" 
    placeholder="Add to do"
    
    value={this.state.newItem}
    onChange={e=>this.updateInput(e.target.value)}
    ></input>
    </div>

    <div className="col-3"><button type="button" className="add-btn"
    onClick={()=>this.addItem(this.state.newItem)}
        ><span>Add</span></button></div>
   
    </div>
    <div>
    {this.state.list.map(item=>{
      return(
        <div>
        <div className="col-9">
        <li key={item.id} className="lis">
        <input type="checkbox"
        name="isDone"
        
        checked={item.isDone}
        onChange={()=>{}}
        ></input>
      <span> {item.value}</span>
        </li>
        </div>
        <div className="col-3">
        <button
        className="del-btn"
        onClick={()=>this.deleteItem(item.id)}>
         <span> Delete</span>
        </button>
        </div>
        </div>
      );
    })}
  
    </div>
    
</div>
);
}
}
export default App;