import React from "react";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";
import "./Notifications.css";

function Notifications() {

  const handleClick = () => {
    console.log("Close button has been clicked");
  }
  const latestNotification = getLatestNotification(); // Assuming you have the getLatestNotification function

  return (
    <div className="Notifications">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Here is the list of notifications</div>
        <button
          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Close"
          onClick={handleClick}
        >
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: latestNotification }} />
      </ul>
    </div>
  );
};

export default Notifications;
