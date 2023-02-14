import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import BellIcon from "@mui/icons-material/Notifications";
import { useSelector } from 'react-redux';


export default function Notification() {

  const count = useSelector((state) => state.counter.count )

  return (
    <Badge badgeContent={count} color="primary">
      <BellIcon color="action" />
    </Badge>
  );
}

