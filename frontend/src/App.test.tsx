import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from "react-dom/test-utils";
import { MoodTimeline } from "./components/MoodTimeline";
import Home from './pages/Home';
import { unmountComponentAtNode } from 'react-dom';
import  moment from 'moment';

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders home page', () => {
  const onChange = jest.fn();
  act(()=>{
    render(<Home id="df50cac5-293c-490d-a06c-ee26796f850d"/>, container); //pass care_recipient_id 
  });
  
});

test('renders mood timeline component', () => {
  const mockData = {
      user: "Bob",
      timestamp:'2019-05-03T19:03:21.305Z',
      event_type:'mmod_observation',
      payload: {
        mood: "happy"
      }
  };

  render(<MoodTimeline props={mockData} />);
  const r_date_time = moment(mockData.timestamp).format("YYYY/MM/DD hh:mm a");
  const textElement = screen.getByText(mockData.user);
  const textElement2 = screen.getByText(r_date_time);
  const textElement3 = screen.getByText(mockData.payload.mood);
  expect(textElement).toBeInTheDocument();
  expect(textElement2).toBeInTheDocument();
  expect(textElement3).toBeInTheDocument();
});

// templating above code for other timeline components

