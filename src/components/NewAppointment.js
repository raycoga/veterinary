import React, { Component } from 'react';
import uuid from 'uuid'
const initialState={appointment:{
          pet:'',
          owner:'',
          date:'',
          time:'',
          conditions:''
      },
      error:true}
class NewAppointment extends Component {
  state = { 
      ...initialState
  };

handleChange = e =>{
    const {pet, owner,date, time,conditions}= this.state.appointment /* esto se realiza para verificar si los datos estan vacios o no */

    this.setState({
        appointment:{
            ...this.state.appointment,[e.target.name]: e.target.value /* aca se copia el estado actual del estado, y luego se apunta al nombre del atributo
                                                                        usando los [corchetes] eh ingresando su nombre en el interior para guardar el value   que posea el input en ese momento en este caso lo que sucede es lo siguiente:
                                                                        pet:a donde pet se convierte en la variable e.target.name rodeada de corchetes y la a que pasa a ser e.target.value*/
        }
    })

    if(pet==='' || owner ==='' || date==='' || time==='' || conditions===''){
        this.setState({
            error:true
        })
        return
    }else{
        this.setState({
            error:false
        })
        return
    }
}

handleSubmit = e=> {
    e.preventDefault()
    const newAppointment ={...this.state.appointment}/* copia el estado */
    newAppointment.id=uuid()/* le añade un id unico */
    this.props.createNewAppointment(newAppointment) /* le pasa los parametros del estado a la funcion padre */
    this.setState({...initialState}) /* y se resetea el estado, con los parametros iniciales */
}

  render() {
    return (
      <div className="card mt-5 p-5">
        <div className="car-body">
          <h2 className="card-title text-center mb-5">
            Fill up the form to create a new appointment
          </h2>

          <form onSubmit={e => this.handleSubmit(e)}>
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
            <input disabled={this.state.error} type="submit" className="p-3 mt-2 btn btn-success btn-block" value="add new appointment"/>
             
          </form>

        </div>
      </div>
    );
  }
}

export default NewAppointment;