import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, 
  TimelineOppositeContent } from '@mui/lab'
import '../App.css';
import {  Card, Chip, Typography } from "@mui/material";
import Moment from 'react-moment';
import { capitalizeWords } from '../hooks/functions';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export const FluidIntakeTimeline = (props:any) => {
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
                    <LocalCafeIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{p:3}}>
                <Typography variant="body2">{props.props.user} had a <Chip label={capitalizeWords(props.props.payload.fluid)} variant="outlined" color={props.props.payload.observed ? 'success' : 'error'} /> drink</Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
  )
}
