import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, TimelineOppositeContent } from '@mui/lab'
import '../App.css';
import {  Card, Chip, Typography } from "@mui/material";
import Moment from 'react-moment';
import { capitalizeWords } from '../hooks/functions';
import VaccinesSharpIcon from '@mui/icons-material/VaccinesSharp';

export const RegularMedicationTimeline = (props:any) => {
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
                    <VaccinesSharpIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{p:3}}>
                <Typography variant="body2">{props.props.payload.medication_type}</Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
  )
}
