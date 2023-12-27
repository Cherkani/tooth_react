import React, { useState } from "react";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import "./AppHeader.css"; // Import your CSS file for styling

// Static data for demonstration
const staticComments = [
  { id: 1, body: "Static comment 1" },
  { id: 2, body: "Static comment 2" },
  // Add more static comments as needed
];

const staticOrders = [
  { id: 1, title: "Product A" },
  { id: 2, title: "Product B" },
  // Add more static orders as needed
];

function AppHeader() {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [dashboardTitle, setDashboardTitle] = useState(
    "here username dashbord and role "
  );

  // No need for useEffect since we're using static data

  // Function to dynamically change the dashboard title
  const handleTitleChange = (newTitle) => {
    setDashboardTitle(newTitle);
  };

  return (
    <div
      className="AppHeader"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title style={{ color: "white" }}>
        {dashboardTitle}
      </Typography.Title>
      <Space>
        <Badge count={staticComments.length} dot>
          <MailOutlined
            style={{ fontSize: 18, color: "white" }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={staticOrders.length} className="custom-badge">
          <BellFilled
            style={{ fontSize: 18, color: "white" }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      {/* ... (rest of the code) */}
    </div>
  );
}

export default AppHeader;
