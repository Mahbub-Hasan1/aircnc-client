import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import StarIcon from '@material-ui/icons/Star';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './EditHostelDetail.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
  },
  MuiCardActions: {
    padding: 0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
  },
}));

const EditHostelDetail = ({ hostelDetailData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [guests, setGuests] = useState(1)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const hostelPersonPrice = Number(hostelDetailData.price);
    const hostelPrice = hostelPersonPrice * Number(guests);

    const hostelCleaningFee = Number(hostelDetailData.cleaningFee);
    const hostelServiceFee = Number(hostelDetailData.serviceFee);
    const totalPrice = hostelPrice + hostelCleaningFee + hostelServiceFee;

  return (
    <Card className={classes.root}>
      <CardContent style={{ paddingBottom: '0' }}>
        <h5 className="card-input-head-price"><span>${hostelDetailData.price}/</span> night</h5>
        <p>
          <StarIcon style={{ fontSize: 20, color: '#65EB5D' }} />
          <span style={{ fontWeight: 'bold' }}> 4.9</span>
          (20 reviews)
        </p>
      </CardContent>
      <p className="guests-title">Dates</p>
      <CardContent style={{ padding: '0' }}>
        <div className="row hostel-input-card-date-div">
          <div className="col-sm">
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
          <div className="col-sm">
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
        </div>
      </CardContent>
      <p className="guests-title">Guests</p>
      <div className="guests-input-aria">
        <CardActions disableSpacing style={{ padding: '0' }}>
          <h4 className="guest-input-hade-content">{guests} guests</h4>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardContent className="amount-card-div" style={{ paddingTop: '0' }}>
              <div className="row">
                <p className="col-sm c-p">Adults</p>
                <p className="col-sm text-end c-p"><span onClick={guests >= 2 ? ()=> setGuests(guests - 1) : '' }>-</span> {guests} <span onClick={guests < hostelDetailData.guests ? () => setGuests(guests + 1) : ''}>+</span></p>
                <hr />
              </div>
            </CardContent>
            <CardContent className="amount-card-div" style={{ paddingTop: '0' }}>
              <div className="row">
                <p className="col-sm c-p">Children</p>
                <p className="col-sm text-end c-p"><span onClick={guests >= 2 ? ()=> setGuests(guests - 1) : '' }>-</span> {guests} <span onClick={guests < hostelDetailData.guests ? () => setGuests(guests + 1) : ''}>+</span></p>
                <hr />
              </div>
            </CardContent>
            <CardContent className="amount-card-div" style={{ paddingTop: '0' }}>
              <div className="row">
                <p className="col-sm c-p">Infants</p>
                <p className="col-sm text-end c-p"><span onClick={guests >= 2 ? ()=> setGuests(guests - 1) : '' }>-</span> {guests} <span onClick={guests < hostelDetailData.guests ? () => setGuests(guests + 1) : ''}>+</span></p>
                <hr />
              </div>
            </CardContent>
          </CardContent>
        </Collapse>
      </div>

      {/* ----------------------------- */}
      <CardContent className="amount-card-div">
        <div className="row">
          <p className="col-sm c-p">${hostelPrice} x 1 nights</p>
          <p className="col-sm text-end c-p">$136</p>
          <hr />
        </div>
      </CardContent>
      <CardContent style={{ paddingTop: '0' }} className="amount-card-div">
        <div className="row">
          <p className="col-sm c-p">Cleaning fee</p>
          <p className="col-sm text-end c-p">${hostelDetailData.cleaningFee}</p>
          <hr />
        </div>
      </CardContent>
      <CardContent style={{ paddingTop: '0' }} className="amount-card-div">
        <div className="row">
          <p className="col-sm c-p">Service fee</p>
          <p className="col-sm text-end c-p">${hostelDetailData.serviceFee}</p>
          <hr />
        </div>
      </CardContent>
      <CardContent style={{ paddingTop: '0' }} className="amount-card-div">
        <div className="row card-total-number">
          <p className="col-sm c-p">Total</p>
          <p className="col-sm text-end c-p">${totalPrice}</p>
        </div>
      </CardContent>
      <CardContent style={{ paddingTop: '0' }} className="d-flex justify-content-center">
        <Button
          variant="contained"
          className="search-btn"
          style={{ color: '#fff', fontWeight: '700' }}
        >
          Reserve
        </Button>
      </CardContent>
      <CardContent style={{ padding: '0px 0px 20px 0px' }}>
        <div className="amount-card-footer">
          <p>You won't be charged yet</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default EditHostelDetail;