import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../scenes/Header";
import { useTheme } from "@mui/material";
import gitDisplayer, { gitExporter } from "../../scenes/gitdisplayer";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
const useFakeMutation = () => {
  return useCallback(
    (user) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user.name?.trim() === '') {
            reject();
          } else {
            resolve(user);
          }
        }, 200);
      }),
    [],
  );
};

function computeMutation(newRow, oldRow) {

  if (newRow.age !== oldRow.age) {
    return `Age from '${oldRow.age || ''}' to '${newRow.age || ''}'`;
  }
  return null;

}

const Foss = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  gitDisplayer();

  const noButtonRef = useRef(null);
  const [promiseArguments, setPromiseArguments] = useState(null);
  const [dialog, setDialog] = useState(false)
  const [snackbar, setSnackbar] = useState(null);
  const [gitName, setGitName] = useState()
  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = (rowData) => {
    setDialog(true)
    setGitName(rowData);
    console.log(rowData.login)
  }




  const handleNo = () => {
    setDialog(false);
    window.location.reload();

  };
  const token = sessionStorage.getItem("JWT");

  const handleYes = async () => {

    console.log(gitName)
    const nameScore = {
      githubownername: gitName.login,
      fossscore: gitName.fossscore
    }

    fetch("http://localhost:8080/put/fossscore", {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
      body: JSON.stringify(nameScore)
    })
      .then(() => {
        console.log("Message Sent")
        window.location.reload();
      })

    setDialog(false);
    setSnackbar({ children: 'User successfully saved', severity: 'success' });

  };

  const handleEntered = () => {

  };

  const renderConfirmDialog = () => {

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={dialog}
      >
        <DialogTitle color="secondary" style={{ fontSize: "16px" }}>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will change the Score.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} color="secondary" onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes} color="secondary">Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };


  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "login", headerName: "Username", cellClassName: "name-column--cell", flex: 0.3 },
    { field: "fossscore", headerName: "Score", editable: "true", type: "number", headerAlign: "left", align: "left" },
    { field: "githubreponame", headerName: "Contribution", headerAlign: "left", align: "left", cellClassName: "name-column--cell", flex: 0.5 },
    {
      field: "public_repos",
      headerName: "Repositories",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "followers",
      headerName: "Followers",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "html_url",
      headerName: "Profile Link",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },

  ];

  return (
    <Box m="20px">
      <Header
        title="Rank List"
        subtitle="for your Standings in your college"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          }

        }}
      >
        {renderConfirmDialog()}
        <DataGrid
          rows={gitExporter}
          columns={columns}
          onRowEditCommit={processRowUpdate}
          processRowUpdate={processRowUpdate}
          editMode="row"
          components={{ Toolbar: GridToolbar }}
          onProcessRowUpdateError={(error) => console.log(error)}
        />
        {!!snackbar && (
          <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
            <Alert {...snackbar} onClose={handleCloseSnackbar} />
          </Snackbar>
        )}
      </Box>

    </Box>
  );
};

export default Foss;
