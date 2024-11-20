import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckListIcon from "./lib/CheckListIcon";

interface ActionsScheduleElement {
  stepLabel: string;
  isDone?: boolean;
}

interface CollActionsSchedule {
  actionsSchedule: ActionsScheduleElement[];
}

export const ActionsSchedule: React.FC<CollActionsSchedule> = ({
  actionsSchedule,
}) => {
  return (
    <List>
      {actionsSchedule.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
            <CheckListIcon green={item.isDone} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "body2" }}
            primary={item.stepLabel}
          />
        </ListItem>
      ))}
    </List>
  );
};
