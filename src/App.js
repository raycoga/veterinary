import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import Appointment from './components/Appointments'
class App extends Component {
  state={
      Appoinments:[]
  }

  createNewAppointment = data => {
    let array=[...this.state.Appoinments,data]
    this.setState({Appoinments:array})
  }

  removeAppointment = id =>{
    let array=[...this.state.Appoinments]
    array.splice(id,1)
    this.setState({Appoinments:array})
  }

  render() {
    /* Clase */
    return (
      <div className="container">
        <Header
        title='Veterinary Patient Administrator'
        />
        <div className="row pb-5">
          <div className="col-md-10 mx-auto">
          <NewAppointment createNewAppointment={this.createNewAppointment}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Appointment Appoinments={this.state.Appoinments} removeAppointment={this.removeAppointment}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;