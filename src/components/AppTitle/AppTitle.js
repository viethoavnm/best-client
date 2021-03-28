import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((_theme) => ({
  root: { paddingLeft: 150, paddingRight: 150, marginTop: 20 },
  titleBlock: { backgroundColor: "#F6F6F6" },
  title: {
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    marginLeft: 40,
  },
}));

const AppTitle = (props) => {
  const classes = useStyles(props);

  return (
    <div
      className={classNames(classes.root, "w-full flex flex-wrap ")}
      style={{ marginBottom: 24 }}
      {...props}
    >
      <div
        className={classNames(classes.titleBlock, "w-full  sm:w-1/2 px-5 py-5")}
      >
        <div className={classNames("w-full flex flex-wrap px-5")}>
          <img src="assets/images/icn-title.svg" alt="icon-title" />
          <Typography className={classNames(classes.title, "py-5")}>
            {props?.title.toUpperCase()}
          </Typography>
        </div>
      </div>

      <div
        className={classNames(classes.titleBlock, "w-full  sm:w-1/2 px-5 py-5")}
      />
    </div>
  );
};

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.shape({
    show: PropTypes.bool,
  }),
};

AppTitle.defaultProps = {
  title: "AppTitle - Title",
  breadcrumbs: {
    show: false,
  },
};

export default React.memo(AppTitle);
