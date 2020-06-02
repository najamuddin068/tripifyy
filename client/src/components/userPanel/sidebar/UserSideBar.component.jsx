import React, { Component } from 'react';
import Sidebar from "react-sidebar";

class UserSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    render() {
        return (
            <Sidebar
            sidebar={<b>Content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            
          </Sidebar>
        );
    }
}

export default UserSideBar;