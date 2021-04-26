import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function CalcButton (props) {
  const classes = useStyles()

  function evaluate () {
    if (props.evaluate) {
      props.updateInfix(props.evaluate)
    } else {
      if (props.passedInfix === '0') {
        props.updateInfix(props.item)
      } else {
        props.updateInfix(props.passedInfix + props.item)
      }
    }
  }

  return (
    <Grid item xs={props.xs}>
      <Paper className={classes.paper}>
        <Button onClick={evaluate}>
          {props.item}
        </Button>
      </Paper>
    </Grid>
  )
}

CalcButton.propTypes = {
  xs: PropTypes.number,
  item: PropTypes.string,
  passedInfix: PropTypes.string,
  updateInfix: PropTypes.func,
  evaluate: PropTypes.func
}

export default CalcButton
