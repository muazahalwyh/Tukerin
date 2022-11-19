/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

function AddUser() {
  return (
    <div className="columns">
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input" placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input type="text" className="input" placeholder="City" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
