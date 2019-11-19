import React, { Component } from 'react';
import { isNull } from 'util';

class NewAppointment extends Component {
  state = { 
      appointment:{
          pet:'',
          owner:'',
          date:'',
          time:'',
          conditions:''
      }
  };

handleChange = e =>{
    console.log(`${e.target.name}: ${e.target.value}`)
    this.setState({
        appointment:{
            ...this.state.appointment,[e.target.name]: e.target.value
        }
    })
}

handleSubmit = e=> {
    e.preventDefault()
    console.log(this.state.appointment)
}

  render() {
    return (
      <div className="card mt-5 p-5">
        <div className="car-body">
          <h2 className="card-title text-center mb-5">
            Fill up the form to create a new appointment
          </h2>

          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Name"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div> {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Owner name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Owner Name"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div> {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Appointment
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>
           
              <label className="col-sm-4 col-lg-2 col-form-label">
                Time
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div> {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
              Conditions
              </label>
              <div className="col-sm-8 col-lg-10">
                  <textarea
                  className="form-control"
                  placeholder="Describe conditions"
                  name="conditions"
                  onChange={this.handleChange}
                  value={this.state.appointment.conditions}
                  >
                  </textarea>
              </div>
            </div> {/* Form group */}
            <input type="submit" className="p-3 mt-2 btn btn-success btn-block" value="add new appointment"/>
             
          </form>

        </div>
      </div>
    );
  }
}

export default NewAppointment;