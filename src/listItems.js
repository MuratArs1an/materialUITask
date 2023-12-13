import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Container, Typography} from '@mui/material';



export const mainListItems = (
    <React.Fragment>
        <Container>
        <Typography variant="h6" color="primary" gutterBottom> - Projects</Typography>
        <ListItemButton>
            <ListItemText primary=" - All Projects" />
        </ListItemButton>
        <ListItemButton>
            <ListItemText primary=" - Ongoing Projects" />
        </ListItemButton>
        <ListItemButton>
            <ListItemText primary=" - Next Projects" />
        </ListItemButton>
        <ListItemButton>
            <ListItemText primary=" - Completed Projects" />
        </ListItemButton>
        <Button color='primary' variant='contained' style={{ marginTop: '200px' }}>
            Create Project
        </Button>
        </Container>


    </React.Fragment>
);
