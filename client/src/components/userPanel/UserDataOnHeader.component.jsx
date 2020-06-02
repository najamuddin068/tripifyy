// import React, { Component } from 'react';
// import UserHeader from './header/UserHeader.component'
// import userData from './data';
// import { withRouter } from 'react-router-dom';
// class UserDataOnHeader extends Component {
//     constructor(props) {
//         super(props);
//         this.state=
//         {
//             data:userData
//         }
//     }
    
//       renderData (data) {
//         if (data && data.length) {
//           return (
//             <div>
//               {
//                 data.filter(item=>item.id==this.props.match.params.id).map(item => (
//                   <UserHeader key={item.id} {...item}/>
//                 ))
//               }
//             </div>
//           );
//         } else {
//           return <div>No items found</div>
//         }
//       }
    
//       renderLoading () {
//         return <div>Loading...</div>
//       }
//     render() {
//         const { data } = this.state;

//         return data ?
//           this.renderData(data) :
//           this.renderLoading()

         
//     }
// }

// export default withRouter(UserDataOnHeader);