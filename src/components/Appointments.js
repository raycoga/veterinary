import React, { Fragment } from "react";
import PropTypes from 'prop-types'

const Appointments = ({ Appoinments, removeAppointment }) => {
  if (Appoinments.length <= 0) {
    return (
      <div className="card">
        <div className="row justify-content-center p5">
          <h1>No Appoinments in list</h1>
        </div>
      </div>
    );
  } else {
    return (
      <Fragment>
        {Appoinments.map((res) => {
          console.log(res);
          return (
            <div className="card mb-3"  key={res.id}>
              <table className="table table-borderless text-center">
                <thead>
                  <tr>
                    <th scope="col">Pet name</th>
                    <th scope="col">Pet Owner</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Time for the Appoinments</th>
                    <th scope="col">Conditions</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >{res.pet}</td>
                    <td>{res.owner}</td>
                    <td>{res.date}</td>
                    <td>{res.time}</td>
                    <td>{res.conditions}</td>
                    <td>
                      <button
                        type="buttons"
                        className="btn btn-danger"
                        onClick={() => removeAppointment(res.id)}
                      >
                        Remove Appointment
                        &times;
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </Fragment>
    );
  }
};

Appointments.propTypes={
    Appoinments:PropTypes.array.isRequired,
    removeAppointment:PropTypes.func.isRequired
  }
  
export default Appointments;
