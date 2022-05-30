import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import "./App.css";
import { Grid, Alert, Card, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Moment from 'react-moment';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function App() {
  const __MAX__ = 10;
  const [counter, setCounter] = useState(20);
  const [moodData, setMoodData] = useState([]);
  const [snapShotData, setSnapShotData] = useState([]);
  const [groupedData, setGroupedData] = useState({
    labels: ['Sad', 'Happy', 'Okay', 'Other Moods'],
    datasets: [
      {
        label: 'Mood',
        data: [0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  });
  useEffect(() => {
    setTimeout(() => {
    fetch('/api').then(async (result) => {
      const data = await result.json();
      setMoodData(data.data);
      setSnapShotData(data.data.slice(0, __MAX__));
      performGroupData(data.data);
    }).catch(err => console.error(err));
    });
  },[]);

  const loadMoreTimeLineDataHandler = async () => {
    setSnapShotData(moodData.slice(0, counter));
    setCounter(counter + __MAX__);
  }

  const performGroupData = async (data: any) => {
    setGroupedData({
      ...groupedData, datasets: [
        {
          ...groupedData.datasets[0],
          data: [0,
          0,
          0,
          0]
        }
      ]
    })
    data.forEach((d: any) => {
      switch (d.mood.toLowerCase()) {
        case 'sad':
          setGroupedData({
            ...groupedData, datasets: [
              {
                ...groupedData.datasets[0],
                data: [groupedData.datasets[0].data[0]++,
                groupedData.datasets[0].data[1],
                groupedData.datasets[0].data[2],
                groupedData.datasets[0].data[3]]
              }
            ]
          })
          break;
        case 'happy':
          setGroupedData({
            ...groupedData, datasets: [
              {
                ...groupedData.datasets[0],
                data: [groupedData.datasets[0].data[0],
                groupedData.datasets[0].data[1]++,
                groupedData.datasets[0].data[2],
                groupedData.datasets[0].data[3]]
              }
            ]
          })
          break;
        case 'okay':
          setGroupedData({
            ...groupedData, datasets: [
              {
                ...groupedData.datasets[0],
                data: [groupedData.datasets[0].data[0],
                groupedData.datasets[0].data[1],
                groupedData.datasets[0].data[2]++,
                groupedData.datasets[0].data[3]]
              }
            ]
          })
          break;
        default:
          setGroupedData({
            ...groupedData, datasets: [
              {
                ...groupedData.datasets[0],
                data: [groupedData.datasets[0].data[0],
                groupedData.datasets[0].data[1],
                groupedData.datasets[0].data[2],
                groupedData.datasets[0].data[3]++]
              }
            ]
          })
          break;
      }
    });
    
  }
  return <Grid container style={{ padding: '3rem' }}>
    <Grid item xs={12} >
      <Grid item lg={6} sx={{ mb: 3 }} >
        <Alert severity="success">Hello <span role="img" aria-label="smiley">🥰</span> and welcome!!!</Alert>
      </Grid>

    </Grid>
    <Grid item xs={12} >
      <Grid item lg={6} sx={{ mb: 3 }} >
        <Alert severity="info">Welcome to Birdie 🐦 mood observation dashboard, this will help you visualize {'Bob'}'s mood</Alert>
      </Grid>
    </Grid>
    <Grid item lg={6} xs={12}><Card   sx={{mb:3, mt:3}}>
        <Doughnut data={groupedData} options={{maintainAspectRatio: false}} height={300}/>
          </Card></Grid>
    <Grid item lg={6} xs={12}>
      <Card sx={{mb:3, mt:3}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h5>Mood</h5></TableCell>
              <TableCell><h5>Frequency</h5></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Sad</TableCell>
              <TableCell>{groupedData.datasets[0].data[0]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Happy</TableCell>
              <TableCell>{groupedData.datasets[0].data[1]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Okay</TableCell>
              <TableCell>{groupedData.datasets[0].data[2]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Other Moods</TableCell>
              <TableCell>{groupedData.datasets[0].data[3]}</TableCell>
            </TableRow></TableBody>
        </Table>
      </Card>
    </Grid>
    <Grid item style={{textAlign:'center'}} xs={12}>
      <h3>Timeline</h3>
      <Timeline position="alternate">
        {
          snapShotData.map((r: any) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={ r.mood.toLowerCase() === "happy"
                  ? "MuiCustom  MuiCustomHappy" : r.mood.toLowerCase() === "sad"
                    ? "MuiCustom  MuiCustomSad" : r.mood.toLowerCase() === "okay"
                      ? "MuiCustom  MuiCustomOkay" : "MuiCustom  MuiCustomAny"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                <Typography variant="h6">{r.mood.toLowerCase()}</Typography>
                  <Typography variant="caption"><Moment format="YYYY/MM/DD hh:mm a">{r.timestamp}</Moment></Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </Grid>

    <Grid item xs={12} style={{textAlign:'center'}}>
      <Button variant="contained" onClick={(e) => loadMoreTimeLineDataHandler()} >Load More</Button>
    </Grid>
  </Grid>
}

export default App;
