import React, {Component} from 'react'
import './App.css'

export default class App extends Component {

  state = {
      name: "",
      department: "",
      rating: "",
      data: []
  }

  handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value})
            
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const saveData = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating
    }
    const arr = this.state.data
    arr.push(saveData)
    this.setState({data : arr})

  }

  render(){
  return (
    <div className='container'>
      <h1 className='heading'>Employee Feedback Form</h1>
      <form id="my-form">
        <label>Name :</label> <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /> <br />
        <label>Department :</label> <input type='text' name='department' value={this.state.department} onChange={this.handleChange} /> <br />
        <label>Rating :</label> <input type='number' name='rating' value={this.state.rating} onChange={this.handleChange} /> <br />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>

      <div className='section'>
        {this.state.data.map((value,index) => {
          return(
            <div key={index} className="card">
              <p key={index}>Name: {value.name} | Department: {value.department} | Rating: {value.rating} </p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}
}



