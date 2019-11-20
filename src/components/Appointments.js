import React, { Fragment } from "react";

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
        {Appoinments.map((res, key) => {
          console.log(res);
          return (
            <div className="card mb-3">
              <table class="table table-borderless text-center" key={res.id}>
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
                    <td scope="row">{res.pet}</td>
                    <td>{res.owner}</td>
                    <td>{res.date}</td>
                    <td>{res.time}</td>
                    <td>{res.conditions}</td>
                    <td>
                      <button
                        type="buttons"
                        className="btn btn-success"
                        onClick={() => removeAppointment(res.id)}
                      >
                        Remove Appointment
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

export default Appointments;
