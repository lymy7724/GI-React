// import React, { Component } from "react";

// export default class Basicinfo extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <p>{this.props.name}</p>
//           <p>{this.props.email}</p>
//           <p>{this.props.birthday}</p>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";

export default function Basicinfo({ person }) {
  return (
    <div className="Basicinfo">
      <p>{person.name}</p>
      <p>{person.email}</p>
      <p>{person.birthday}</p>
    </div>
  );
}
