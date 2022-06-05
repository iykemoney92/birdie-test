import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, TimelineOppositeContent } from '@mui/lab'
import '../App.css';
import {  Card, Chip, Typography } from "@mui/material";
import Moment from 'react-moment';
import { capitalizeWords } from '../hooks/functions';
import TaskSharpIcon from '@mui/icons-material/TaskSharp';

export const TaskTimeline = (props:any) => {
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
                    <TaskSharpIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{p:3}}>
                <Typography variant="body2">{props.props.payload.task_definition_description}</Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
  )
}
