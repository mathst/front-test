import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const styles = theme => ({
    root: {
        backgroundColor: fade("#0A1929", 0.60),
        width: '50%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade("#0A1929", 0.15),
        '&:hover': {
            backgroundColor: fade("#0A1929", 0.25),
        },
        marginRight: theme.spacing(9),
        marginLeft: theme.spacing(9),
        width: '100%',
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(),
        paddingRight: theme.spacing(),
        paddingBottom: theme.spacing(),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 600,
        },
    },
});

const BASE_URI = 'api-test-matheus.herokuapp.com';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {
  getValues(meses){
      console.log(meses);
      console.log(this.perform('get', (`/b?meses=${meses}`)));
    return this.perform('get', (`/b?meses=${meses}`));
  }

  async perform (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
      }
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}
class SearchBar extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <html>
			<head>

			</head>
            <div className={classes.root}>
                <div>
                    <AppBar position="static" style={{ alignItems: 'center' }}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Digite as quantidade de meses para buscar no Banco de Dados"
                                value=""
                                onKeyPress={APIClient.getValues(this.value)}
                            />
                        </div>
                    </AppBar>
                </div>
            </div>
            </html>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);