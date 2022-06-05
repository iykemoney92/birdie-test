import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, 
  TimelineOppositeContent } from '@mui/lab'
import '../App.css';
import {  Card, Typography } from "@mui/material";
import Moment from 'react-moment';

export const MoodTimeline = (props:any) => {
  return (
    <TimelineItem>
        
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        ><Moment format="YYYY/MM/DD hh:mm a">{props.props.timestamp}</Moment></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot  ></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{p:3}}>
                <Typography variant="body2"><strong>{props.props.user}</strong> was <span className={ props.props.payload.mood.toLowerCase() === "happy"
                  ? "MuiCustom  MuiCustomHappy" : props.props.payload.mood.toLowerCase() === "sad"
                    ? "MuiCustom  MuiCustomSad" : props.props.payload.mood.toLowerCase() === "okay"
                      ? "MuiCustom  MuiCustomOkay" : "MuiCustom  MuiCustomAny"}>{props.props.payload.mood}</span></Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
  )
}
