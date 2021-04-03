import {
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Paper
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      flex: 1,
      paddingLeft: 20
    },
    iconButton: {
      backgroundColor: '#92BF1F',
      borderRadius: 0,
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#92BF1F'
      }
    }
  })
);

const SearchBar2 = ({ placeholder, defaultValue, onSubmit }) => {
  const classes = useStyles();
  const onSubmitValue = e => {
    e.preventDefault();
    onSubmit instanceof Function && onSubmit();
  };
  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmitValue}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        inputProps={{ 'aria-label': placeholder }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};

SearchBar2.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func
};

export default SearchBar2;
