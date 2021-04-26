import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary
  }
}))

function CalcDisplay (props) {
  const classes = useStyles()
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>{props.item}</Paper>
    </Grid>
  )
}

CalcDisplay.propTypes = {
  item: PropTypes.string
}

export default CalcDisplay
