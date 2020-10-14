import React, { useContext } from "react";
import { Menu, Container, Button, Dropdown, Image } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { NavLink, Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  return (
    <Menu fixed="top" inverted style={{ width: "100%" }}>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img src="/assets/logo.svg" alt="logo" style={{ marginRight: 10 }} />
          SokoMarket
        </Menu.Item>
        <Menu.Item name="Stores" as={NavLink} to="/landing" />
        <Menu.Item name="Advertisements" as={NavLink} to="/activities" />
        <Menu.Item>
          <Button
            style={{ backgroundColor: "white", color:"purple" }}
            as={NavLink}
            to="/postAd"
            positive
            content="Post an ad"
          />
        </Menu.Item>
        {/* <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create an event"
          />
        </Menu.Item> */}
        {user && (
          <Menu.Item position="right">
            <Image
              avatar
              spaced="right"
              src={user.image || "/assets/user.png"}
            />
            <Dropdown pointing="top left" text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  text="My profile"
                  icon="user"
                />
                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
