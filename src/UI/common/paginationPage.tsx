import React, {ChangeEvent, useState} from 'react'
import s from './pagination.module.scss'
import {Pagination} from "@material-ui/lab";
import {PATH} from "../../App";
import {Redirect} from "react-router-dom";
type TypePropsPagination = {
    count: number
}
const PaginationPage:React.FC<TypePropsPagination> = ({count}) => {
    const [pages, setPages] = useState<any>(1)
        let countPage = Math.ceil(count/4)
    return (
        <div className={s.pagination}>
            <Redirect to={PATH.userPage + '/' + pages}/>
            <Pagination count={countPage} color="primary"
                        onChange={(event: ChangeEvent<unknown>, page: number) => {
                            setPages(page)
                        }}/>

        </div>
    )
}
export default PaginationPage