import React, {KeyboardEvent, useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {createStyles, fade, FormControl, InputBase, makeStyles, Theme} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import s from './header.module.scss'
import git from '../../img/git.png'
import {useDispatch, useSelector} from "react-redux"
import {setUserTC} from "../../../BLL/reducers/reducer"
import {Redirect} from "react-router-dom"
import {PATH} from "../../../App"
import {statusSelector} from "../../../BLL/selectors/selectors"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },

    }),
);

function Header() {
    const classes = useStyles();
    const [valueInput, setValueInput] = useState<string>('')
    const status = useSelector(statusSelector)

    const dispatch = useDispatch()
    const searchFunction = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.code === "Enter") {
            dispatch(setUserTC(valueInput))
            setValueInput('')
        }

    }
    return <>
        {status === "succeed"?<Redirect  to={PATH.userPage + '/' + 1}/>:""}
        {status === "error"? <Redirect  to={PATH.noResultsPage}/>:""}
        <AppBar position="static">

            <Toolbar>
                <img className={s.iconGit} src={git} alt={'Git'}/>

                <FormControl>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            onKeyUp={searchFunction}
                            value={valueInput}
                            onChange={(e) =>
                                setValueInput(e.currentTarget.value)}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>

                </FormControl>

            </Toolbar>
        </AppBar>
    </>
}

export default Header;