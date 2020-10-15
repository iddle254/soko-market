import React, { useContext, Fragment } from "react";
import { Container, Segment, Header, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
import LoginForm from "../user/LoginForm";
import RegisterForm from "../user/RegisterForm";

const HomePage = () => {
  const token = window.localStorage.getItem("jwt");
  const rootStore = useContext(RootStoreContext);
  const { user, isLoggedIn } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Header as="h1" inverted>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                size="large"
                src="/assets/logo.svg"
                alt="logo"
                style={{ marginBottom: 12 }}
              />
              SokoMarket
            </div>
          </Header>
        </div>
        {isLoggedIn && user && token ? (
          <Fragment>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Header
                as="h2"
                inverted
                content={`Welcome back ${user.displayName}`}
              />
              <Button as={Link} to="/activities" size="huge" inverted>
                Explore marketplace!
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Header as="h2" inverted content={`Welcome to SokoMarket`} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => openModal(<LoginForm />)}
                  size="huge"
                  inverted
                >
                  Login
                </Button>
                <Button
                  onClick={() => openModal(<RegisterForm />)}
                  size="huge"
                  inverted
                >
                  Register
                </Button>
              </div>
            </div>
          </Fragment>
        )}
      </Container>
    </Segment>
  );
};

export default HomePage;
