import React from 'react'
import "../Diaries/Diaries.css"
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions,} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';

const DiaryItem = () => {
  return (
    <Card sx={{ height: '50%', width: '50%', margin: 1, padding: 1, displex: 'flex', flexDirection: 'column', boxShadow: "5px 5px 10px #ccc" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<LocationOnIcon />}
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <img
        height="250"
        src='https://www.webintravel.com/wp-content/uploads/2016/11/eco-littlehenrabiiStock.jpg'
        alt="travelimage"
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          This impressive paella
        </Typography>
        <hr />
        <Typography paddingTop={2} variant="div" fontWeight={"bold"}>
          Adewole ademola
        </Typography>

        <Typography paddingTop={1} variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{marginLeft:'75%'}}>
        <IconButton color='warning'><EditIcon /></IconButton>
        <IconButton color = 'error'><AutoDeleteIcon /></IconButton>
      </CardActions>
    </Card>)
}

export default DiaryItem