import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

const ListItemLink = (props: ListItemProps) => {
  const { primary, to } = props;

  const CustomLink = useMemo(
    () => React.forwardRef((linkProps, _) => <Link to={to} {...linkProps} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;

interface ListItemProps {
  primary: string;
  to: string;
  icon?: any;
}
