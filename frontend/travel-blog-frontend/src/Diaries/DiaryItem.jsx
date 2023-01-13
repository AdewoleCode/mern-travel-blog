import React from 'react'
import "../Diaries/Diaries.css"
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions, } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const DiaryItem = ({ title, description, image, location, date, id, user }) => {

  const isLoggedInUser = () => {
    if (localStorage.getItem('userId') === user) {
      return true
    }
    else return false
  }



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
        title={location}
        header={location}
        subheader={date}
      />
      <img
        height="250"
        src={image}
        // src='https://www.webintravel.com/wp-content/uploads/2016/11/eco-littlehenrabiiStock.jpg'
        alt={title}
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Typography paddingTop={2} variant="div" fontWeight={"bold"}>
          Adewole ademola
        </Typography>

        <Typography paddingTop={1} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {
        isLoggedInUser() ? 
        <CardActions sx={{ marginLeft: '75%' }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color='warning'><EditIcon /></IconButton>
          <IconButton color='error'><AutoDeleteIcon /></IconButton>
        </CardActions> :  null
      }
    </Card>)
}

export default DiaryItem