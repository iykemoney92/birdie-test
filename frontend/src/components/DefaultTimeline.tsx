import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, TimelineOppositeContent } from '@mui/lab'
import '../App.css';
import {  Card,  Typography } from "@mui/material";
import Moment from 'react-moment';
import {  decorateMenuItemText } from '../hooks/functions';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GlobalContext } from '../context/globalContext';
import { useContext} from "react";

export const DefaultTimeline = (props:any) => {
  console.log(props);
  return (
    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0'}}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Moment format="YYYY/MM/DD hh:mm a">{props.props.timestamp}</Moment>
        </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot >
                    <VisibilityIcon />
                </TimelineDot>
              </TimelineSeparator>  
              <TimelineContent>
                <Card sx={{p:3}}>
                <Typography variant="body2">{decorateMenuItemText(props.props.event_type)}</Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
  )
}
