import React, { Fragment, useContext } from "react";
import { Menu, Header, Icon, Segment, Container } from "semantic-ui-react";
import { Calendar } from "react-widgets";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { observer } from "mobx-react-lite";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const ActivityFilters = () => {
  const rootStore = useContext(RootStoreContext);
  const { predicate, setPredicate } = rootStore.activityStore;
  const spacedHeader: CSSProperties = {
    justifyContent: "spaceBetween" as "spaceBetween",
  };
  const iconStyle: CSSProperties = {
    userSelect: "auto" as "auto",
  };
  return (
    <Container>
      <Menu vertical size={"large"} style={{ width: "100%", marginTop: 50 }}>
        <Header
          // icon={"filter"}
          attached
          color={"teal"}
          content={"Filter advertisements by:"}
          textAlign="center"
        />
        <Menu.Item
          active={predicate.size === 0}
          onClick={() => setPredicate("all", "true")}
          color={"blue"}
          name={"all"}
          content={"All Advertisements"}
        />
        <Menu.Item
          active={predicate.has("isGoing")}
          onClick={() => setPredicate("isGoing", "true")}
          color={"blue"}
          name={"username"}
          content={"My bids"}
        />
        <Menu.Item
          active={predicate.has("isHost")}
          onClick={() => setPredicate("isHost", "true")}
          color={"blue"}
          name={"host"}
          content={"My ads"}
        />
      </Menu>

      <Header
        // icon={"calendar"}
        attached
        color={"teal"}
        content="Filter advertisements by date"
        textAlign="center"
      />
      <Calendar
        onChange={(date) => setPredicate("startDate", date!)}
        value={predicate.get("startDate") || new Date()}
      />
    </Container>
  );
};

export default observer(ActivityFilters);
