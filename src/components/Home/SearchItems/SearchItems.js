import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { SearchContext } from '../../../App';
import Card from '@material-ui/core/Card';
import './SearchItems.css';

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'auto',
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 136,
    },
}));

// components
const SearchItems = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { searchLocation, setSearchLocation } = useContext(SearchContext);

    return (
        <div>
            <h5 className="searchComponentHadeLine">Where do you want to go</h5>
            <div className="location">
                <p className="searchFont">LOCATION</p>
                <input type="text" onChange={(event) => setSearchLocation(event.target.value)} className="Guests" placeholder="Add city. Landmark, or address" />
            </div>
            <div className="row date">
                <div className="col-sm date-div">
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Arrival"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </div>
                <div className="col-sm date-div">
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Departure"
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
            <div>
                <Card className={classes.root}>
                    <CardActions disableSpacing>
                        <h5 className="searchFont">
                            <span className="Guests">Guests</span>
                            <br />
                            2 ADULTS, 1 CHILD
                        </h5>
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
                    <hr />

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div className="row searchFont">
                                <div className="col-sm">
                                    <span>ADULTS</span>
                                </div>
                                <div className="col-sm d-flex justify-content-end">
                                    <span className="count"> <RemoveIcon /> </span>
                                    <span className="count"> 2 </span>
                                    <span className="count"> <AddIcon /> </span>
                                </div>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div className="row searchFont">
                                <div className="col-sm">
                                    <span>CHILD</span>
                                </div>
                                <div className="col-sm d-flex justify-content-end">
                                    <span className="count"> <RemoveIcon /> </span>
                                    <span className="count"> 2 </span>
                                    <span className="count"> <AddIcon /> </span>
                                </div>
                            </div>
                        </CardContent>

                        <CardContent>
                            <div className="row searchFont">
                                <div className="col-sm">
                                    <span>BABIES</span>
                                </div>
                                <div className="col-sm d-flex justify-content-end">
                                    <span className="count"> <RemoveIcon /> </span>
                                    <span className="count"> 2 </span>
                                    <span className="count"> <AddIcon /> </span>
                                </div>
                            </div>

                        </CardContent>

                        <CardContent className="d-flex justify-content-end">
                            <button className="apply-btn">APPLY</button>
                        </CardContent>

                        <CardContent className="d-flex justify-content-center">
                            <Button
                                variant="contained"
                                className="search-btn"
                                startIcon={<SearchIcon />}
                                style={{ color: '#fff', fontWeight: '700' }}
                            >
                                Search
                            </Button>
                        </CardContent>

                    </Collapse>
                </Card>
            </div>
        </div>
    );
};

export default SearchItems;