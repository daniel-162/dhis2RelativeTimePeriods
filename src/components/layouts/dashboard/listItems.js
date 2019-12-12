import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CategoryIcon from '@material-ui/icons/Category'
import ApartmentIcon from '@material-ui/icons/Apartment'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Button from '@material-ui/core/Button'


const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary='Indicators' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ApartmentIcon />
      </ListItemIcon>
      <ListItemText primary='Organization Unit' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessTimeIcon />
      </ListItemIcon>
      <ListItemText primary='Period' />
    </ListItem>
    <Button className= 'btn' variant='outlined' color='primary'>
      Update
    </Button>
  </div>
)

export default mainListItems
