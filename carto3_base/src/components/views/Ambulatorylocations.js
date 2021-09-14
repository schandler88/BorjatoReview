import { useEffect } from 'react';
import ambulatorySource from 'data/sources/ambulatorySource';
import { AMBULATORY_LAYER_ID } from 'components/layers/AmbulatoryLayer';
import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  ambulatorylocations: {},
}));

export default function Ambulatorylocations() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(ambulatorySource));

    dispatch(
      addLayer({
        id: AMBULATORY_LAYER_ID,
        source: ambulatorySource.id,
      })
    );

    return () => {
      dispatch(removeLayer(AMBULATORY_LAYER_ID));
      dispatch(removeSource(ambulatorySource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.ambulatorylocations}>
      <Grid item>Hello World</Grid>
    </Grid>
  );
}
