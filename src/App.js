import './App.css';
import React ,{Component} from 'react';
import axios from 'axios';
class App extends Component{
  state={
    text:""
  };
  handleAdd=async e=>{
    await this.setState({
      text:e.target.value
    })
  }
  handleSubmit=e=>{
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append('text',this.state.text);
    const url="http://localhost:80/react-backend/";
    axios.post(url,formData)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
  }
  render()
  {
    return(
      <div className="App-header">
     <input onChange={this.handleAdd} type='text' className='form-control' id ="text" placeholder='Type you shit Oshani'/>
     <br/>
    <button className="btn btn-success" onClick={this.handleSubmit} id='submit'>Save</button>
    </div>
    );

  }
}





export default App;
