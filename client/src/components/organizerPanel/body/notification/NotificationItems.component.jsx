import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NotificationItems extends Component {
  render() {
    const { notification } = this.props;
    return (
      <div>
        <div
          className="p-4 rounded  border mb-1 view overlay d-flex justify-content-between"
          style={{ backgroundColor: "#FAFAFA" }}
          onClick={() => {
            this.props.history.push(
              `/organizer/trips/${notification.notification[0].link}`
            );
          }}
        >
          <div>{notification.notification[0].message}</div>
          <div>
            {new Date(notification.notification[0].date).toLocaleString()}
          </div>
          <div
            className="mask flex-center rgba-grey-light"
            style={{ cursor: "pointer", color: "white" }}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(NotificationItems);
