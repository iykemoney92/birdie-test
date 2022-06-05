import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, TimelineOppositeContent } from '@mui/lab'
import '../App.css';
import {  Card, Chip, Typography } from "@mui/material";
import Moment from 'react-moment';
import HikingSharpIcon from '@mui/icons-material/HikingSharp';
import { decorateMenuItemText } from '../hooks/functions';

export const VisitTimeline = (props:any) => {
  return (
    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Moment format="YYYY/MM/DD hh:mm a">{props.props.timestamp}</Moment>
        </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot >
                    <HikingSharpIcon />
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
