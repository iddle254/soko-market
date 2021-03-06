import React from "react";
import { Item, Button, Segment, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";
import { format } from "date-fns";
import ActivityListItemAttendees from "./ActivityListItemAttendees";

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const host = activity.attendees.filter((x) => x.isHost)[0];
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className="activitylistitem__avatar"
                style={{ display: "flex", flex: 0.3 }}
              >
                <Item.Image
                  size="tiny"
                  circular
                  src={host.image || "/assets/user.png"}
                  style={{ marginBottom: 3, marginRight: "30px" }}
                />
              </div>
              <div
                className="activitylistitem__header"
                style={{
                  display: "flex",
                  flex: 0.7,
                }}
              >
                <Item.Content>
                  <Item.Header as={Link} to={`/activities/${activity.id}`}>
                    {activity.title}
                  </Item.Header>
                  <Item.Description>
                    Posted by
                    <Link to={`/profile/${host.username}`}>
                      {" "}
                      {host.displayName}
                    </Link>
                  </Item.Description>
                  {activity.isHost && (
                    <Item.Description>
                      <Label basic color="orange" content="You posted this" />
                    </Item.Description>
                  )}
                  {activity.isGoing && !activity.isHost && (
                    <Item.Description>
                      <Label
                        basic
                        color="green"
                        content="You are interested in this "
                      />
                    </Item.Description>
                  )}
                </Item.Content>
              </div>
            </div>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> {format(activity.date, "h:mm a")}
        <Icon name="marker" /> {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>
        <ActivityListItemAttendees attendees={activity.attendees} />
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
