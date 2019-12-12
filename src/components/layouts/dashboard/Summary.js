import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Displayed Data</Title>
      <Typography component="p" variant="h4">
        [INDICATOR]
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        [ORGANIZATION UNIT]
      </Typography>
      <div>
      <Typography component="p" variant="h5">
        [PERIOD]
      </Typography>
        
      </div>
    </React.Fragment>
  )
}
