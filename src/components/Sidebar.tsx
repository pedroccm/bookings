import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import {
  ChatBubble,
  DirectionsCar,
  Mail,
  Redeem,
  School,
  ShoppingCart,
} from "@mui/icons-material"; // Import icons

const Sidebar: FC = () => {
  const itemList = [
    { text: "Partners", icon: <School /> },
    { text: "Orders", icon: <ShoppingCart /> },
    { text: "Products", icon: <DirectionsCar /> },
    { text: "Redeems & Exchanges", icon: <Redeem /> },
    { text: "Customers", icon: <Mail /> },
    { text: "Users", icon: <ChatBubble /> },
  ];

  return (
    <div
      style={{
        width: 240,
        backgroundColor: "#F1F1F1",
        position: "fixed",
        top: 64,
        bottom: 0,
        left: 0,
        overflowY: "auto",
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <List>
        {itemList.map(({ text, icon }) => (
          <ListItem
            button
            key={text}
            style={{
              marginBottom: 15,
              backgroundColor:
                text === "Redeems & Exchanges" ? "#014C46" : "transparent",
              color: text === "Redeems & Exchanges" ? "white" : "inherit",
              borderRadius: 8,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <ListItemIcon
              style={{
                color: text === "Redeems & Exchanges" ? "white" : "inherit",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
