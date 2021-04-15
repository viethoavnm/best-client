import { makeStyles } from '@material-ui/styles';
import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { useState } from 'react';
import { ReactComponent as VnFlag } from '../../../../assets/img/vn-flag.svg';
import { updateLang, updateLanguage } from 'reducers/multiLangSlice';
import { useSelector, useDispatch } from 'react-redux';
import { EN_LANG, VI_LANG } from 'utils/constant';
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
  const lang = useSelector(state => state.multiLang.lang);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpen = event => {
    setAnchorEl(event?.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const clickVn = () => {
    dispatch(updateLanguage(VI_LANG));
    setAnchorEl(null);
  };

  const clickEng = () => {
    dispatch(updateLanguage(EN_LANG));
    setAnchorEl(null);
  };

  const isVi = lang === VI_LANG;
  return (
    <div className={classes.language}>
      {isVi ? (
        <img className={classes.flag} src="/images/vn-flag.svg" alt="flagVN" />
      ) : (
        <img
          className={classes.flag}
          src="/images/ic_america_flag.svg"
          alt="flagAmerica"
        />
      )}

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
          <img
            className={classes.flag}
            src="/images/vn-flag.svg"
            alt="flagVN"
          />
        </MenuItem>

        <MenuItem onClick={clickEng}>
          <img
            className={classes.flag}
            src="/images/ic_america_flag.svg"
            alt="flagAmerica"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Language;
