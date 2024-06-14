import '@fullcalendar/react/dist/vdom';
import FullCalendar, { formatDate } from "@fullcalendar/react";
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
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
import CalDisplayer, { initEvents } from '../CalDisplayer';

const StudentCalendar = () => {
    CalDisplayer();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

   



    return (
        <Box m="20px">
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
                        editable={false}
                        selectable={false}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={console.log("object")}
                        eventClick={console.log("object")}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={initEvents}

                    />
                </Box>
            </Box>
        </Box>
    );
};

export default StudentCalendar;