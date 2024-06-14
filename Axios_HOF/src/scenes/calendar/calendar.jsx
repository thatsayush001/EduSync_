import '@fullcalendar/react/dist/vdom';
import FullCalendar, { formatDate } from "@fullcalendar/react";
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import emailjs from "@emailjs/browser"
import listPlugin from "@fullcalendar/list";
import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import CalDisplayer, {initEvents} from '../CalDisplayer';

const Calendare = () => {
  CalDisplayer();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const token = sessionStorage.getItem("JWT");

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    // console.log(selected.endStr);
    sendEmail({});
    // console.log(selected.endStr.slice(0, 19));
    let dater1 = selected.endStr.slice(0, 19);
    // console.log(dater1)
    const sliced = dater1.slice(0, 19)
    console.log(sliced)
    console.log(title);
    const obj = {
      userId: 100,
      allDay: false,
      start: sliced,
      title: title
    }
    try{

      

    fetch("http://localhost:8080/post/calendar", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
      body: JSON.stringify(obj)
    })
      .then(() => {
        console.log("Class Scheduled")

        // email to be sent here
        
        
      })
    }
    catch(err){
      console.log("Error")
    }
    // localStorage.setItem("date", sliced);
    // localStorage.setItem("title", title);
    setCurrentEvents((olditem) => {
      return [
        ...olditem,
        {
          title: localStorage.getItem("title"),
          start: localStorage.getItem("date"),
          allDay: false,
        },
      ];
    });
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      // console.log(selected.event.startStr)
      let timeX = selected.event.startStr;
      let timeDate = timeX.slice(0,19);
      console.log(timeDate)
      selected.event.remove();

      try {
        fetch("http://localhost:8080/del/calendar", {
          method: "DELETE",
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
          body: timeDate
        })
          .then(() => {
            console.log("Class Scheduled")
          })
      }
      catch (err) {
        console.log("Error")
      }
      
      
    }
  };
  
  const sendEmail = (data) =>{

    console.log("email send calleds")
    
    const serviceID= "service_toeim6j";
    const templateID="template_bwqmdcu";
    const fakeData = {
      name: "rahi durge"
    };
    emailjs.send(serviceID,templateID, fakeData)
    .then(
      res =>{
        console.log(res);
        alert("your message has been sent");
      })
        .catch((err) => {
          console.log("error has occurred in calling");
          console.error(err);
        });
    }
      
    



  return (
    <Box m="20px">
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
      </script>
            {(function(){
                emailjs.init("hcWZbjJ31Qeml9uCJ");
            })()};
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={initEvents}

          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendare;