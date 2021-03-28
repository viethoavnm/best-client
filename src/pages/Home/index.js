import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Header from "../../components/Header/Header";
import DefaultLayoutFooter from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import classNames from "classnames";
import routes from "../../routes";
import useStyles from "./styles";

import { Link } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import CardMedia from "@material-ui/core/CardMedia";
import AppEventPickers from "../../components/AppEventPickers";
import GoogleMapReact from "google-map-react";
import { Paper } from "@material-ui/core";
import Image from "./Image";
import MarkerMap from "./MarkerMap";

const HomePageContent = (props) => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);

  const handleToggleDrawer = () => {
    console.log("toggleDrawer");
    setOpened(!opened);
  };

  const _renderTitle = (title) => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="30px"
      >
        <CardMedia
          className={classes.icSlash}
          image="assets/images/ic-slash-title.svg"
          alt="slash"
        />

        <Typography className={classes.title}>{title}</Typography>
      </Box>
    );
  };

  return (
    <div>
      <Header toggleDrawer={handleToggleDrawer} />
      {opened && (
        <div className={classNames(classes.panel, "theme-dark")}>
          <Sidebar
            routes={routes.items}
            opened={opened}
            toggleDrawer={handleToggleDrawer}
          />
        </div>
      )}

      <Grid container direction="column">
        {_renderTitle("TIN MỚI NHẤT")}
        <Hidden mdDown>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Link
                to="/news-detail"
                underline="none"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div style={{ position: "relative", color: "white" }}>
                  <Image
                    src="assets/images/latest-new-1.png"
                    alt="latest-new-1"
                  />
                  <Box
                    position="absolute"
                    bottom="20px"
                    left="30px"
                    paddingRight="30px"
                  >
                    <Typography>
                      ĐBSCL vượt qua khủng hoảng kép như thế nào?
                    </Typography>

                    <Box display="flex" flexDirection="row">
                      <CardMedia
                        image="assets/images/ic-clock-white.svg"
                        alt="small-clock"
                      />
                      <Typography>30/12/2020</Typography>
                    </Box>
                  </Box>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link
                    to="/news-detail"
                    underline="none"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div style={{ position: "relative", color: "white" }}>
                      <Image
                        src="assets/images/latest-new-2.png"
                        alt="latest-new-2"
                      />

                      <Box
                        position="absolute"
                        left="16px"
                        bottom="16px"
                        paddingRight="16px"
                      >
                        <Typography>
                          Thành công - Khởi nghiệp, tại sao không?
                        </Typography>
                      </Box>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link
                    to="/news-detail"
                    underline="none"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div
                      className={clsx("py-10")}
                      style={{ position: "relative", color: "white" }}
                    >
                      <Image
                        src="assets/images/latest-new-3.png"
                        alt="latest-new-3"
                      />
                      <Box
                        position="absolute"
                        left="16px"
                        bottom="16px"
                        paddingRight="16px"
                      >
                        <Typography>
                          Đệm lót sinh học - giải pháp trong chăn nuôi
                        </Typography>
                      </Box>
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden lgUp>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link
                to="/news-detail"
                underline="none"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div style={{ position: "relative", color: "white" }}>
                  <Image
                    src="assets/images/latest-new-1.png"
                    alt="latest-new-1"
                  />
                  <Box
                    position="absolute"
                    bottom="20px"
                    left="30px"
                    paddingRight="30px"
                  >
                    <Typography>
                      ĐBSCL vượt qua khủng hoảng kép như thế nào?
                    </Typography>

                    <Box display="flex" flexDirection="row">
                      <CardMedia
                        image="assets/images/ic-clock-white.svg"
                        alt="small-clock"
                      />
                      <Typography>30/12/2020</Typography>
                    </Box>
                  </Box>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link
                to="/news-detail"
                underline="none"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div style={{ position: "relative", color: "white" }}>
                  <Image
                    src="assets/images/latest-new-2.png"
                    alt="latest-new-2"
                  />

                  <Box
                    position="absolute"
                    left="16px"
                    bottom="16px"
                    paddingRight="16px"
                  >
                    <Typography>
                      Thành công - Khởi nghiệp, tại sao không?
                    </Typography>
                  </Box>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link
                to="/news-detail"
                underline="none"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div
                  className={clsx("py-10")}
                  style={{ position: "relative", color: "white" }}
                >
                  <Image
                    src="assets/images/latest-new-3.png"
                    alt="latest-new-3"
                  />
                  <Box
                    position="absolute"
                    left="16px"
                    bottom="16px"
                    paddingRight="16px"
                  >
                    <Typography>
                      Đệm lót sinh học - giải pháp trong chăn nuôi
                    </Typography>
                  </Box>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <div
        className={clsx(
          "flex flex-col items-center justify-center",
          classes.root
        )}
      >
        <div className={clsx("w-full flex flex-wrap", classes.latestNewsBox)}>
          <div
            className={clsx(
              "w-full  sm:w-2/3 px-5 py-5",
              classes.latestNewLeftBlock
            )}
          ></div>

          <div
            className={clsx(
              "w-full sm:w-1/3 px-5 py-5",
              classes.latestNewRightBlock
            )}
          ></div>
        </div>

        {_renderTitle("BẢN TIN")}
        <div
          className="w-full flex flex-wrap"
          style={{ paddingLeft: 150, paddingRight: 150 }}
        >
          <div className="w-full sm:w-2/3 px-5 py-5">
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Box>
                <Image src="assets/images/new-1.png" alt="logo" />
                <Typography className={classes.name2}>
                  Biomass Gasification Technology (BEST)
                </Typography>

                <Box display="flex" flexDirection="row" alignItems="center">
                  <img
                    src="assets/images/clock-gray.svg"
                    alt="clock"
                    style={{ marginRight: 5 }}
                  />
                  <Typography className="text-16">30/12/2020</Typography>
                </Box>

                <div
                  className={clsx(
                    "flex flex-wrap justify-start ",
                    classes.descriptionNew
                  )}
                >
                  <img src="assets/images/clock.svg" alt="clock" />
                  <Typography className={classes.desc2}>
                    Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa
                    học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu
                    oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2,
                    CH4).{" "}
                  </Typography>
                </div>
              </Box>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 px-5 py-5">
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className={clsx("flex flex-wrap py-5")}>
                <div className={clsx("w-full sm:w-1/2")}>
                  <Image
                    className=""
                    src="assets/images/new-2.png"
                    alt="logo"
                  />
                </div>

                <div className={clsx("w-full sm:w-1/2 px-10")}>
                  <Typography
                    className={clsx("text-16 font-bold", classes.titleSideNew)}
                  >
                    Nông nghiệp
                  </Typography>
                  <Typography className="text-16 font-bold">
                    CLIMATELAUNCHPAD tại Việt Nam
                  </Typography>
                  <div className={clsx("flex flex-wrap")}>
                    <img src="assets/images/clock-gray.svg" alt="clock" />
                    <Typography
                      className={clsx(
                        "text-16 font-bold px-6",
                        classes.timeSideNew
                      )}
                    >
                      30/12/2020
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className={clsx("flex flex-wrap py-5")}>
                <div className={clsx("w-full sm:w-1/2")}>
                  <Image
                    className=""
                    src="assets/images/new-2.png"
                    alt="logo"
                  />
                </div>

                <div className={clsx("w-full sm:w-1/2 px-10")}>
                  <Typography
                    className={clsx("text-16 font-bold", classes.titleSideNew)}
                  >
                    Nông nghiệp
                  </Typography>
                  <Typography className="text-16 font-bold">
                    CLIMATELAUNCHPAD tại Việt Nam
                  </Typography>
                  <div className={clsx("flex flex-wrap")}>
                    <img src="assets/images/clock-gray.svg" alt="clock" />
                    <Typography
                      className={clsx(
                        "text-16 font-bold px-6",
                        classes.timeSideNew
                      )}
                    >
                      30/12/2020
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className={clsx("flex flex-wrap py-5")}>
                <div className={clsx("w-full sm:w-1/2")}>
                  <Image
                    className=""
                    src="assets/images/new-2.png"
                    alt="logo"
                  />
                </div>

                <div className={clsx("w-full sm:w-1/2 px-10")}>
                  <Typography
                    className={clsx("text-16 font-bold", classes.titleSideNew)}
                  >
                    Nông nghiệp
                  </Typography>
                  <Typography className="text-16 font-bold">
                    CLIMATELAUNCHPAD tại Việt Nam
                  </Typography>
                  <div className={clsx("flex flex-wrap")}>
                    <img src="assets/images/clock-gray.svg" alt="clock" />
                    <Typography
                      className={clsx(
                        "text-16 font-bold px-6",
                        classes.timeSideNew
                      )}
                    >
                      30/12/2020
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className={clsx("flex flex-wrap py-5")}>
                <div className={clsx("w-full sm:w-1/2")}>
                  <Image
                    className=""
                    src="assets/images/new-2.png"
                    alt="logo"
                  />
                </div>

                <div className={clsx("w-full sm:w-1/2 px-10")}>
                  <Typography
                    className={clsx("text-16 font-bold", classes.titleSideNew)}
                  >
                    Nông nghiệp
                  </Typography>
                  <Typography className="text-16 font-bold">
                    CLIMATELAUNCHPAD tại Việt Nam
                  </Typography>
                  <div className={clsx("flex flex-wrap")}>
                    <img src="assets/images/clock-gray.svg" alt="clock" />
                    <Typography
                      className={clsx(
                        "text-16 font-bold px-6",
                        classes.timeSideNew
                      )}
                    >
                      30/12/2020
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {_renderTitle("Thư Viện")}
        <div className={clsx("w-full flex flex-wrap", classes.latestNewsBox)}>
          <div className={clsx("w-full sm:w-1/3 px-5 py-5")}>
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div
                className={clsx("py-10")}
                style={{ position: "relative", color: "white" }}
              >
                <Image src="assets/images/lib-1.png" alt="lib-1" />
                <div
                  className={clsx("flex flex-wrap justify-center ")}
                  style={{ position: "absolute", bottom: 25, left: 30 }}
                >
                  <img src="assets/images/clock.svg" alt="clock" />
                  <Typography className="text-16">30/12/2020</Typography>
                </div>
                <div
                  className={clsx("flex flex-wrap justify-center ")}
                  style={{ position: "absolute", bottom: 60, left: 30 }}
                >
                  <Typography className="text-16 font-bold">
                    Đệm lót sinh học - giải pháp trong chăn nuôi
                  </Typography>
                </div>
              </div>
            </Link>
          </div>

          <div className={clsx("w-full sm:w-1/3 px-5 py-5")}>
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div
                className={clsx("py-10")}
                style={{ position: "relative", color: "white" }}
              >
                <Image src="assets/images/lib-2.png" alt="lib-2" />
                <div
                  className={clsx("flex flex-wrap justify-center ")}
                  style={{ position: "absolute", bottom: 25, left: 30 }}
                >
                  <img src="assets/images/clock.svg" alt="clock" />
                  <Typography className="text-16">30/12/2020</Typography>
                </div>
                <div
                  className={clsx("flex flex-wrap justify-center ")}
                  style={{ position: "absolute", bottom: 60, left: 30 }}
                >
                  <Typography className="text-16 font-bold">
                    Đệm lót sinh học - giải pháp trong chăn nuôi
                  </Typography>
                </div>
              </div>
            </Link>
          </div>

          <div className={clsx("w-full sm:w-1/3 px-5 py-5")}>
            <Link
              to="/news-detail"
              underline="none"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div
                className={clsx("py-10")}
                style={{ position: "relative", color: "white" }}
              >
                <Image src="assets/images/lib-3.png" alt="lib-3" />
                <div
                  className={clsx("flex flex-wrap justify-center ")}
                  style={{ position: "absolute", bottom: 25, left: 30 }}
                >
                  <img src="assets/images/clock.svg" alt="clock" />
                  <Typography className="text-16">30/12/2020</Typography>
                </div>
                <div
                  className={clsx("flex flex-wrap justify-center ")}
                  style={{ position: "absolute", bottom: 60, left: 30 }}
                >
                  <Typography className="text-16 font-bold">
                    Đệm lót sinh học - giải pháp trong chăn nuôi
                  </Typography>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <img
          src="assets/images/su-kien-sap-toi.png"
          alt="events"
          className="w-full"
          style={{
            height: 48,
            marginTop: 50,
            paddingLeft: 150,
            paddingRight: 150,
          }}
        />

        <AppEventPickers style={{ paddingLeft: 150, paddingRight: 150 }} />

        {_renderTitle("ĐỊA BÀN DỰ ÁN")}
        <Paper className={classes.wrapperProject} elevation={2}>
          <Box className={classes.leftProject}>
            <Typography className={classes.titleProject}>
              Hộ cơ khí Hiệp Phát
            </Typography>
            <Typography className={classes.contentProject}>
              139 Trần Nhật Duật, P. Kim Tân, Tp Lào Cai
            </Typography>
            <Typography className={classes.subTitle}>Giờ mở cửa</Typography>
            <Typography className={classes.contentProject}>
              08:00 - 18:00
            </Typography>
            <Typography className={classes.subTitle}>Mặt hàng</Typography>
            <Typography className={classes.contentProject}>
              Bếp khí hóa, sinh khối
            </Typography>
            <Typography className={classes.subTitle}>
              Dịch vụ về cơ khí
            </Typography>
            <Typography className={classes.contentProject}>
              Lắp đặt và sữa chữa
            </Typography>
          </Box>

          <Box height="328px" width="720px">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyApTCjw-LZYi0eZq47tvrm7gM_W1qQZQSg",
              }}
              defaultCenter={{ lat: 21.02, lng: 105.83416 }}
              defaultZoom={11}
            >
              <MarkerMap lat={21.027763} lng={105.83416} text="My Marker" />
            </GoogleMapReact>
          </Box>
        </Paper>

        <img
          className="w-full"
          src="assets/images/download-app.png"
          alt="download-app"
          style={{}}
        />
      </div>

      <DefaultLayoutFooter />
    </div>
  );
};

export default React.memo(HomePageContent);
