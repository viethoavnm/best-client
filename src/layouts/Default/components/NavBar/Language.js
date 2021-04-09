const { makeStyles } = require('@material-ui/styles');
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { useState } from 'react';
import { ReactComponent as VnFlag } from '../../../../assets/img/vn-flag.svg';
const useStyles = makeStyles(() => ({
  language: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20
  },
  flag: {
    width: 30,
    height: 24
  },
  icon: {
    padding: 0,
    color: '#3A3A3A'
  }
}));
const Language = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpen = event => {
    setAnchorEl(event?.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const clickVn = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.language}>
      <VnFlag className={classes.flag} />
      <IconButton className={classes.icon} onClick={onOpen}>
        <ExpandMore fontSize="large" />
      </IconButton>
      <Menu
        keepMounted
        elevation={2}
        style={{ top: 4 }}
        MenuListProps={{
          classes: { padding: classes.padding }
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}>
        <MenuItem onClick={clickVn}>
          <VnFlag className={classes.flag} />
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Language;
