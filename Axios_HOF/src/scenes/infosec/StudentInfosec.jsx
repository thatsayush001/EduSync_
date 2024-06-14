import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../scenes/Header";
import { useTheme } from "@mui/material";
import gitDisplayer, { gitExporter } from "../../scenes/gitdisplayer";

const StudentInfosec = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    gitDisplayer();

    const columns = [
        { field: "id", headerName: "ID", flex: 0.2 },
        { field: "login", headerName: "Username", cellClassName: "name-column--cell", flex: 0.3 },
        { field: "infosecscore", headerName: "Score", type: "number", headerAlign: "left", align: "left", flex: 0.2 },
        {
            field: "public_repos",
            headerName: "Repositories",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 0.2
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
                    },
                }}
            >
                <DataGrid
                    // rows={mockDataContacts}
                    rows={gitExporter}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>

        </Box >
    );
};

export default StudentInfosec;