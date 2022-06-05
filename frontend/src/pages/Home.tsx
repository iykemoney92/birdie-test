import { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from "@mui/material/Box";
import '../App.css';
import { Grid, Alert, Card, Backdrop, CircularProgress } from '@mui/material';
import { Timeline } from '@mui/lab'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { decorateMenuItemText, randomColor } from '../hooks/functions';
import { MoodTimeline } from '../components/MoodTimeline';
import { FluidIntakeTimeline } from '../components/FluidIntakeTimeline';
import { DefaultTimeline } from '../components/DefaultTimeline';
import { PhysicalHealthTimeline } from '../components/PhysicalHealthTimeline';
import { RegularMedicationTimeline } from '../components/RegularMedicationTimeline';
import { TaskTimeline } from '../components/TaskTimeline';
import { VisitTimeline } from '../components/VisitTimeline';
import { GroupedData } from '../types/groupedData';
import { GlobalContext } from '../context/globalContext';
import { BasicEvent } from '../types/event';

ChartJS.register(ArcElement, Tooltip, Legend);


function Home(props:any) {
  const __MAX__ = 25;
  let { id } = useParams();
  const { user } = useContext(GlobalContext);
  const [counter, setCounter] = useState(20);
  const [data, setData] = useState<BasicEvent[]>([]);
  const [obvType, setObvType] = useState<any>();
  const [dateTimeFrom, setDateTimeFrom] = useState<any>();
  const [dateTimeTo, setDateTimeTo] = useState<any>();
  const [obvTypes, setObvTypes] = useState([]);
  const [snapShotData, setSnapShotData] = useState<BasicEvent[]>([]);
  const [open, setOpen] = useState(true);
  const [groupedData, setGroupedData] = useState<GroupedData>({
    labels: [],
    datasets: [
      {
        label: "Observations",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 0.5,
      },
    ],
  });
  

  const loadMoreTimeLineDataHandler = async () => {
    setSnapShotData(data.slice(0, counter));
    setCounter(counter + __MAX__);
  }
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event);
    setObvType(event.target.value as any);
  };
  const handleDateTimeFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setDateTimeFrom(event.target.value);
  }
  const handleDateTimeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTimeTo(event.target.value);
  }
  const search = () => {
    let uri = 'api/' + (id != null ? id : props?.id)
      + (
        (obvType != null && (dateTimeTo == null || dateTimeFrom == null))
          ? "/events/" + obvType.event_type
          :
          (obvType == null && (dateTimeTo != null && dateTimeFrom != null))
            ? "/search"
            :
            (obvType == null && (dateTimeTo == null || dateTimeFrom == null))
              ? ""
              :
              "/events/" + obvType.event_type + "/search");

    let method = (obvType != null && (dateTimeTo == null || dateTimeFrom == null))
      ? "GET"
      :
      (obvType == null && (dateTimeTo != null && dateTimeFrom != null))
        ? "POST"
        :
        (obvType == null && (dateTimeTo == null || dateTimeFrom == null))
          ? "GET"
          :
          "POST";

    let data = dateTimeTo != null && dateTimeFrom != null ? { from: new Date(dateTimeFrom).toISOString(), to: new Date(dateTimeTo).toISOString() } : {};
    setOpen(true);
    fetch(uri, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: method == "GET" ? null : JSON.stringify(data)
    }).then(async (result) => {
      const data = await result.json();
      setData(data.data);
      setSnapShotData(data.data.slice(0, __MAX__));
      performGroupData(data.data);
    }).catch(err => console.error(err)).finally(() => {
      setOpen(false);
    });
  };
  const clear = () => {
    setObvType(null);
    setDateTimeFrom(null);
    setDateTimeTo(null);
    loadAllData();
  }
  const performGroupData = async (entryData: any) => {
    const arr: any = {};
    let labels: any = [];
    let borderBg: any = [];
    let data: any = [];
    entryData.forEach((d: any) => {
      arr[d.payload.event_type] == null ? arr[d.payload.event_type] = 1 : arr[d.payload.event_type] += 1;
    });
    labels = Object.keys(arr);
    labels.forEach((e: any, f: any, g: any) => g[f] = decorateMenuItemText(g[f]));
    data = Object.values(arr);

    for (var i = 0; i < data.length; i++) {
      borderBg.push(randomColor());
    }
    setGroupedData({
      ...groupedData,
      labels: labels,
      datasets: [{
        ...groupedData.datasets[0],
        data: data,
        borderColor: borderBg,
        backgroundColor: borderBg
      }]
    });
  }
  const loadAllData = () => {
    setOpen(true);
    fetch('api/' + (id != null ? id : props?.id)).then(async (result) => {
      const data = await result.json();
      setData(data.data);
      setSnapShotData(data.data.slice(0, __MAX__));
      performGroupData(data.data);
    }).catch(err => console.error(err)).finally(() => {
      setOpen(false);
    });
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('api/event_types').then(async (result) => {
        const data = await result.json();
        setObvTypes(data.data);
        loadAllData()
      }).catch(err => console.error(err));
    });
  }, []);
  return <div>
    <Backdrop
      open={open} sx={{zIndex:1000}}>
      <CircularProgress />
    </Backdrop>
    <Grid container style={{ padding: '3rem' }}>
      <Grid item xs={12} >
        <Grid item lg={6} sx={{ mb: 3 }} >
          <Alert severity="success">Hello <span role="img" aria-label="smiley">🥰</span> and welcome!!!</Alert>
        </Grid>

      </Grid>
      <Grid item xs={12} >
        <Grid item lg={6} sx={{ mb: 3 }} >
          <Alert severity="info">Welcome to Birdie 🐦 observation dashboard, this will help you visualize how we have observed {user} </Alert>
        </Grid>
      </Grid>
      <Grid item lg={6} xs={12}><Card sx={{ m: 1, minHeight: 500 }}>
        <Doughnut data={groupedData} options={{ maintainAspectRatio: false }} height={450} />
      </Card></Grid>
      <Grid item lg={6} xs={12}>
        <Card sx={{ m: 1, minHeight: 500 }}>
          {
            (groupedData.labels.map((label, index) => (
              <Chip avatar={<Avatar>{groupedData.datasets[0].data[index]}</Avatar>} sx={{ m: 1, backgroundColor: groupedData.datasets[0].backgroundColor[index] }} label={label} />
            )))
          }
        </Card>
      </Grid>


      <Grid item lg={4} sx={{ mb: 3 }} xs={12} >
        <FormControl fullWidth>
          <InputLabel >Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={obvType}
            label="Sort By"
            onChange={handleChange}
          >
            {
              obvTypes.map((r: any) => (
                <MenuItem value={r}>{decorateMenuItemText(r.event_type)}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>

      <Grid item lg={4} sx={{ mb: 3 }} xs={12}>
        <FormControl fullWidth>
          <TextField
            id="datetime-local-from"
            label="From"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={dateTimeFrom}
            onChange={handleDateTimeFrom}
          /></FormControl>
      </Grid>
      <Grid item lg={4} sx={{ mb: 3 }} xs={12} >
        <FormControl fullWidth>
          <TextField
            id="datetime-local-to"
            label="To"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={dateTimeTo}
            onChange={handleDateTimeTo}
          /></FormControl>
      </Grid>
      <Grid item lg={12} sx={{ mb: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <ButtonGroup variant="contained">
            <Button onClick={search} id="search">Search</Button>
            <Button color="secondary" onClick={clear} id="clear">Clear</Button>
          </ButtonGroup></Box>
      </Grid>
      <Grid item style={{ textAlign: 'center' }} xs={12} id="timeline-container">
        <h3>Timeline</h3>
        <Timeline position="alternate">
          {

            snapShotData.map((r: any) => (
              (r.payload.event_type == "fluid_intake_observation")
                ?
                <FluidIntakeTimeline props={{...r, user: user }} />
                :
                (
                  (r.payload.event_type == "mood_observation") ?
                    <MoodTimeline props={{...r, user: user }} />
                    :
                    (
                      (r.payload.event_type == "physical_health_observation") ?
                        <PhysicalHealthTimeline props={{...r, user: user }} />
                        :
                        (
                          (r.payload.event_type == "task_completed") ?
                            <TaskTimeline props={{...r, user: user }} />
                            : 
                            (
                              (r.payload.event_type == "regular_medication_taken") ?
                                <RegularMedicationTimeline props={{...r, user: user }} />
                                :
                                (
                                  (r.payload.event_type) == "visit_completed") ?
                                  <VisitTimeline props={{...r, user: user }} />
                                  :
                                  <DefaultTimeline props={{...r, user: user }} />
                            )
                        )
                    )
                )
            ))
          }
        </Timeline>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={(e) => loadMoreTimeLineDataHandler()} id="load-more" >Load More</Button>
      </Grid>
    </Grid></div>
}

export default Home;
