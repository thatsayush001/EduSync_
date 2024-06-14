import { Box, useTheme} from "@mui/material";
import Header from "../../scenes/Header";
import Accordion from "@mui/material/Accordion";
import { useEffect, useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const StudentFAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const token = sessionStorage.getItem("JWT");

    const [acc, setAcc] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:8080/get/faqs`, {
            mode: "cors",
            headers: { "Authorization": "Bearer " + token }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                showFAQs(data);
            })
    }, [])
    const showFAQs = (data) => {
        const faqList = data.map((item, id) => {
            id = item.userId;
            return (
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })
        setAcc(faqList)

    }
 

  
    return (
        <>
            <Box m="20px">

                <Header title="FAQ" subtitle="Frequently Asked Questions" />
                <div id="faqPage">
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                What is the difference between Automation and Robotics?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Automation refers to the use of technology to perform tasks that would typically require human intervention, while robotics specifically involves the use of mechanical or electromechanical devices to perform those tasks
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                How do I prepare for Competitive Programming?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To prepare for Competitive Programming, you need to have a strong foundation in programming languages such as C++, Java or Python, and data structures and algorithms. You can practice by solving problems on online judges such as Codeforces, Topcoder, or LeetCode. You can also participate in online contests to improve your skills.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                Are Information Security and Hacking same?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                No, Information Security and Hacking are not the same thing. Information security refers to the practice of protecting sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction.
                                Hacking is the act of gaining unauthorized access and can be used to identify vulnerabilities in a system and improve its security.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                What are the benefits of using Blockchain Technology?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Blockchain technology offers several benefits, including decentralization, transparency, immutability, security, and efficiency. It eliminates the need for intermediaries, reduces transaction costs, improves data security, and enables faster transactions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                What is the difference between Server-Side Rendering and Client-Side Rendering?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Server-side rendering involves generating HTML on the server and sending it to the client, while client-side rendering involves generating HTML on the client's device using JavaScript. Server-side rendering can improve page load times and search engine optimization, while client-side rendering can provide a more dynamic user experience.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                What are some key skills that designers in a design wing should possess?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Designers in a design wing should possess strong creative skills, be proficient in design software and technology, have a solid understanding of design principles, and be able to collaborate effectively with other team members and stakeholders.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                What are the most important factors to consider when developing an Application?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The most important factors to consider when developing an application include user experience, security, scalability, performance, and maintainability.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {acc}
                </div>

            </Box>
        </>
    );
};

export default StudentFAQ;
