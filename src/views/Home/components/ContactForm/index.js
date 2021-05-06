import { Button, Grid } from '@material-ui/core';
import { Container } from 'components';
import useStyles from './styles';
import Bg from '../../../../assets/img/contact-form.png';
const ContactForm = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          md={7}
          className={classes.bg}
          style={{ backgroundImage: `url(${Bg})` }}></Grid>
        <Grid item xs={12} md={5}>
          <div className={classes.border}>
            <div className={classes.form}>
              <div className={classes.title}>Liên hệ với chúng tôi</div>
              <div className={classes.row}>
                <label className={classes.label}>Họ và Tên</label>
                <input className={classes.input} fullWidth />
              </div>
              <div className={classes.row}>
                <label className={classes.label}>Tiêu đề</label>
                <input className={classes.input} fullWidth />
              </div>
              <div className={classes.row}>
                <label className={classes.label}>Email</label>
                <input className={classes.input} fullWidth />
              </div>
              <div className={classes.row} style={{ alignItems: 'baseline' }}>
                <label className={classes.label}>Nội dung</label>
                <textarea className={classes.textarea} rows={3} />
              </div>
              <div className={classes.row} style={{ alignItems: 'baseline' }}>
                <label className={classes.label}></label>
                <Button className={classes.btn}>Gửi</Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
