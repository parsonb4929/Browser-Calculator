import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import CalcButton from './CalcButton.jsx'
import CalcDisplay from './CalcDisplay.jsx'
import ShuntingYard from './postfix.js'
import postFixEvaluation from './postfixEvaluation.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function Calculator () {
  const classes = useStyles()
  const [infix, updateInfix] = useState('')

  useEffect(() => {
    updateInfix(infix + '0')
  }, [])

  function evaluatePostfix () {
    const postfixed = ShuntingYard(infix)
    const evaluated = postFixEvaluation(postfixed)
    return evaluated
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <CalcDisplay item={infix} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <CalcButton item={'^'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'('} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={')'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'C'} xs={3} updateInfix={updateInfix} evaluate={'0'} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <CalcButton item={'7'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'8'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'9'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'*'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <CalcButton item={'4'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'5'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'6'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'/'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <CalcButton item={'1'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'2'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'3'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'-'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <CalcButton item={'='} xs={6} updateInfix={updateInfix} evaluate={evaluatePostfix} />
          <CalcButton item={'0'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
          <CalcButton item={'+'} xs={3} updateInfix={updateInfix} passedInfix={infix} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Calculator
