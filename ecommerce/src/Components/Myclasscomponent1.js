import React, { Component } from 'react';

export class Myclasscomponent1 extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>sno.</th>
              <th>name</th>
              <th>age</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Radhika</td>
              <td>19</td>
              <td>Passed</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Vijay</td>
              <td>18</td>
              <td>Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Myclasscomponent1;
