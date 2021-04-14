import { Container, Title } from 'components';
import Box from '@material-ui/core/Box';
import React, { useRef, Fragment, useEffect, useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { VI_LANG } from 'utils/constant';
import CircularProgress from '@material-ui/core/CircularProgress';

import Lodash from 'lodash';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import 'moment/locale/vi';
import { getEventDetail } from 'services/event';
import renderHTML from 'react-render-html';

const eventDetail = {
  image: 'images/lib-1.png',
  name: `Hội thảo “Khí hóa sinh khối - Giải pháp bền vững và kinh tế”.`,
  address: 'Đường số 68, Nguyễn Hoàng, Hà Nội',
  startTime: '2020-03-27T06:30'
};

const events = [
  {
    image: 'images/lib-1.png',
    name: `Hội thảo “Khí hóa sinh khối - Giải pháp bền vững và kinh tế”.`,
    address: 'Đường số 68, Nguyễn Hoàng, Hà Nội',
    startTime: '2020-03-27T06:30'
  },
  {
    image: 'images/lib-2.png',
    name: `Hội thảo hoa quả và thực phẩm lần thứ XXI`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-06-12T10:30'
  },
  {
    image: 'images/lib-3.png',
    name: `Công cuộc đổi mới nông thôn 2021`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-12-01T15:30'
  },
  {
    image: 'images/new-1.png',
    name: `Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng. Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng.`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-01-31T10:30'
  }
];

const htmlStr = `<h2><strong>Pin mặt trời truyền điện từ không gian xuống trái đất</strong></h2><p>&nbsp;</p><p><strong>Mới đây, giới khoa học vừa có một bước tiến mới trong tham vọng truyền điện mặt trời từ không gian xuống bất cứ vị trí nào trên mặt đất.</strong></p><p>&nbsp;</p><p style="text-align:justify;">Các nhà khoa học làm việc cho dự án của Bộ Quốc phòng Mỹ vừa thử nghiệm thành công một tấm pin năng lượng mặt trời với kích thước cỡ một hộp bánh pizza trong không gian.</p><p style="text-align:justify;">&nbsp;</p><p style="text-align:justify;">Theo CNN, thiết bị này là nguyên mẫu và bước đầu trong kế hoạch chế tạo hệ thống có thể truyền điện từ không gian xuống bất cứ vị trí nào trên mặt đất.</p><p style="text-align:justify;">&nbsp;</p><p style="text-align:justify;"><strong>Nhà máy phát điện không gian</strong></p><p style="text-align:justify;">&nbsp;</p><p style="text-align:justify;">Tấm pin được gọi là bộ phận ăng ten tần số vô tuyến quang năng (PRAM), được phóng lên lần đầu vào tháng 5/2020. PRAM được gắn trên X-37B - phi thuyền thực hiện nhiều nhiệm vụ bí ẩn của Lầu Năm Góc. PRAM chuyển hóa quang năng thành điện năng khi X-37B bay quanh trái đất với tốc độ 90 phút/vòng.</p><p style="text-align:justify;">&nbsp;</p><p style="text-align:justify;">Tấm pin này được thiết kế để tận dụng tối đa ánh sáng trong không gian chưa đi xuyên qua bầu khí quyển của trái đất, do đó giữ lại nhiều năng lượng sóng xanh với cường độ mạnh hơn so với trên mặt đất. Ánh sáng xanh khuếch tán khi đi vào bầu khí quyển, cũng là nguyên nhân khiến bầu trời có màu xanh.</p><figure class="image image_resized" style="width:55.57%;"><img src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_2e1fb7d4d103449c9aff1956ce121f81/test_container/c1f383fe-15d3-415e-8816-50aa7df3203a.jpeg"></figure><p style="text-align:justify;">“Chúng tôi có được vô số ánh sáng trong không gian nhờ điều đó”, theo ông Paul Jaffe, chuyên gia phát triển dự án.</p><p style="text-align:justify;">Thử nghiệm mới nhất cho thấy tấm pin năng lượng kích thước 30cm x 30cm có thể sản sinh ra 10watt năng lượng để truyền đi, đủ để cấp nguồn cho một máy tính bảng.</p><p style="text-align:justify;">&nbsp;</p><p style="text-align:justify;">Dự án có kế hoạch dùng hàng chục tấm pin nên có thể tạo ra cuộc cách mạng trong lĩnh vực phát điện và phân phối đến những nơi xa xôi trên địa cầu. Bên cạnh đó, nó còn có thể bổ sung cho các lưới điện lớn trên thế giới.</p><p style="text-align:justify;">“Tương lai, một dự án điện mặt trời trong không gian sẽ có công suất nhiều gigawatt, bằng hoặc vượt cả những nhà máy điện lớn nhất hiện nay, nên sẽ cung cấp đủ điện cho một thành phố”, ông Jaffe dự báo.</p><p style="text-align:justify;">Hiện tấm pin trong thử nghiệm vẫn chưa thực sự truyền điện trở về trái đất, nhưng công nghệ đã được chứng minh. Nếu dự án phát triển những tấm pin năng lượng khổng lồ với diện tích nhiều km2, nó có thể gửi vi ba (sóng tần số siêu cao) trở về trái đất để chuyển hóa thành điện năng.</p><p>&nbsp;</p>
`;
const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const DATE_FORMAT_2 = 'DD/MM/YYYY';
const EventDetail = props => {
  moment.locale('vi');
  const classes = useStyles();
  const pageLayout = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const [event, setEvent] = useState(eventDetail);
  const [lang, setLang] = useState(VI_LANG);
  const [loading, setLoading] = useState(true);

  const image = Lodash.get(event, 'urlImg', '');
  const name = Lodash.get(event, 'name', '');
  const address = Lodash.get(event, 'address', '');
  const startTime = Lodash.get(event, 'startDate', '');
  const date = new Date(startTime);
  const formatDate = moment(date).format(DATE_FORMAT);
  const month = moment(date).month() + 1; // Moment base month on 0
  const day = moment(date).date();
  const dayStr = moment(date).format('dddd');

  const transformData = obj => {
    const transArr = Lodash.get(obj, 'translations', []);
    const objTrans = Lodash.find(transArr, obj => obj.lang === lang);
    const { _id, ...res } = objTrans;
    return { ...obj, ...res };
  };

  useEffect(() => {
    const idEvent = props.match.params.id;

    setLoading(true);
    getEventDetail(idEvent)
      .then(res => {
        const data = Lodash.get(res, 'data', {});
        const newData = transformData(data);
        setEvent(newData);
        console.log('newData', newData);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const _renderInfoEvent = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="row"
          marginTop="25px"
          marginBottom="35px">
          <Box
            bgcolor="#FFFFFF"
            width="104px"
            marginLeft="20px"
            marginRight="20px">
            <Box
              bgcolor="#92BF1F"
              paddingTop="5px"
              paddingBottom="5px"
              justifyContent="center"
              alignItems="center"
              marginBottom="13px">
              <Typography align="center" className={classes.monthEvent}>
                Tháng {month}
              </Typography>
            </Box>

            <Typography align="center" className={classes.dayEvent}>
              {day}
            </Typography>

            <Typography align="center" className={classes.dateEvent}>
              {dayStr}
            </Typography>
          </Box>

          <Box>
            <Typography className={classes.titleItem}>{name}</Typography>

            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              marginBottom="15px">
              <CardMedia
                className={classes.media}
                image="images/ic-location.svg"
                alt="location"
              />
              <Typography className={classes.addressItem}>{address}</Typography>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="row">
              <CardMedia
                className={classes.media}
                image="images/ic-clock.svg"
                alt="location"
              />
              <Typography className={classes.addressItem}>
                {formatDate}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider className={classes.divider} />
      </>
    );
  };

  const _renderTitle = title => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="30px">
        <CardMedia
          className={classes.icSlash}
          image="images/ic-slash-title.svg"
          alt="slash"
        />

        <Typography className={classes.title}>{title}</Typography>
      </Box>
    );
  };

  const handleClickItem = item => {
    //
  };

  const _renderItem = item => {
    const imageItem = Lodash.get(item, 'image', '');
    const nameItem = Lodash.get(item, 'name', '');
    const startTimeItem = Lodash.get(item, 'startTime', '');
    const dateItem = new Date(startTimeItem);
    const formatDateItem = moment(dateItem).format(DATE_FORMAT_2);

    return (
      <ListItem onClick={() => handleClickItem(item)}>
        <Box>
          <CardMedia
            className={classes.thumbnailSuggest}
            alt=""
            image={imageItem}
          />
          <Typography className={classes.titleItemSuggest}>
            {nameItem}
          </Typography>

          <Box display="flex" flexDirection="row">
            <CardMedia
              className={classes.smallClock}
              image="images/ic-small-clock.svg"
              alt="small-clock"
            />
            <Typography className={classes.timeSuggest}>
              {formatDateItem}
            </Typography>
          </Box>
        </Box>
      </ListItem>
    );
  };

  const _renderSuggestEvents = () => {
    return (
      <List className={classes.listSuggest}>
        {events.map(item => _renderItem(item))}
      </List>
    );
  };

  const _renderContentEvent = () => {
    const content = Lodash.get(event, 'content', '');
    const htmlContent = htmlStr; //Lodash.unescape(htmlStr);

    return (
      <Box>
        {_renderTitle('GIỚI THIỆU')}
        {renderHTML(htmlContent)}

        {/* <Typography className={classes.content}>
          Sản xuất nông nghiệp tại Việt Nam hàng năm tạo ra khoảng 118 triệu tấn
          chất thải nông nghiệp, nhưng mới chỉ có 11% chất thải này được sử dụng
          còn một lượng lớn phế phụ phẩm nông lâm nghiệp đang bị coi như chất
          thải, vứt bỏ và đốt gây ô nhiễm môi trường. Công nghệ khí hóa sinh
          khối sẽ là giải pháp năng lượng bền vững cho chế biến nông sản và quản
          lý chất thải nông thôn ở Việt Nam.Trên thị trường Việt Nam đã có một
          số mô hình thiết bị năng lượng sinh khối, nhưng chưa có mô hình nào
          được áp dụng rộng rãi. Chính phủ cũng đã có chính sách khuyến khích
          đầu tư mạnh mẽ cho năng lượng sinh khối. Tuy nhiên, việc áp dụng công
          nghệ năng lượng sinh khối vẫn chưa khả quan do nhiều nguyên nhân khác
          nhau, nhưng về cơ bản là do chưa có mô hình công nghệ sinh khối phù
          hợp với khả năng tài chính và hạ tầng công nghệ của các địa phương và
          sự thiếu hụt hệ thống hỗ trợ để triển khai mô hình. Dự án "Công nghệ
          khí hóa sinh khối - Giải pháp năng lượng bền vững cho chế biến nông
          sản và quản lý chất thải ở nông thôn Việt Nam" (BEST), do Oxfam tại
          Việt Nam quản lý và phối hợp thực hiện cùng Trung tâm Nghiên cứu, Tư
          vấn Sáng tạo và Phát triển Bền vững (CCS), với sự tài trợ của Liên
          minh châu Âu. Mục tiêu của dự án là nhằm tận dụng phụ phẩm trong sản
          xuất nông lâm nghiệp để tạo thành năng lượng phục vụ sản xuất. Dự án
          đang được triển khai tại 4 tỉnh Thái Nguyên, Lào Cai, Tuyên Quang và
          Yên Bái từ năm 2020 – 2024.
        </Typography> */}

        <Divider className={classes.divider} />

        {_renderTitle('SỰ KIỆN KHÁC')}
        {_renderSuggestEvents()}
      </Box>
    );
  };

  return (
    <Fragment>
      <Container bgcolor="#FDFDFD">
        {loading ? (
          <div
            style={{
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <CircularProgress size={30} style={{ color: '#A0BE37' }} />
          </div>
        ) : (
          <Fragment>
            <Box marginTop="40px" />

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <CardMedia className={classes.thumbnail} alt="" image={image} />

                {_renderInfoEvent()}
                {_renderContentEvent()}
              </Grid>

              <Grid item xs={12} md={4}></Grid>
            </Grid>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default EventDetail;
