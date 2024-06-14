import { Box, useTheme, Button } from "@mui/material";
import Header from "../../scenes/Header";
import Accordion from "@mui/material/Accordion";
import { useEffect, useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// import Modal from "@mui/base/Modal";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");
  const [acc, setAcc] = useState([]);
  const token = sessionStorage.getItem("JWT");

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
      id= item.userId;
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
  console.log(acc)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuestionChange = (e) => {
    setQues(e.target.value)
  }
  const handleAnswerChange = (e) => {
    setAns(e.target.value)
  }
  const handleSnackClose = () => {
    setOpenSnack(false);
  }
  const handlePost = (e) => {
    const faqData = {
      question: ques,
      answer: ans
    }
    setOpenSnack(true)
    fetch("http://localhost:8080/post/faq", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
      body: JSON.stringify(faqData)
    })
      .then(() => {
        setOpen(false);

        console.log("Message Sent")
      })
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

        <Box mt="20px">

          <Button type="submit" color="secondary" variant="contained" onClick={handleClickOpen}>
            Add FAQ's
          </Button>


          <div >
            <Dialog open={open} onClose={handleClose} >
              <DialogTitle style={{ fontSize: "24px" }} color="secondary" >Add Question</DialogTitle>
              <DialogContent>
                <DialogContentText style={{ fontSize: "18px" }}>
                  We would love to hear your thoughts! Could you please share a frequently asked question that you think would be helpful for our College students?

                </DialogContentText>
                <TextField
                  style={{ "&:active": { color: "white" } }}
                  autoFocus
                  margin="dense"
                  id="name"
                  onChange={handleQuestionChange}
                  label="Question"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  style={{ marginTop: "10px" }}
                  autoFocus
                  margin="dense"
                  id="name"
                  onChange={handleAnswerChange}
                  label="Answer"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>

              <DialogActions>
                <Button color="secondary" onClick={handleClose}>Cancel</Button>
                <Button color="secondary" onClick={handlePost}>Post</Button>
              </DialogActions>
            </Dialog>
          </div>

        </Box>


        <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleSnackClose}>
          <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>


      </Box>
    </>
  );
};

export default FAQ;
