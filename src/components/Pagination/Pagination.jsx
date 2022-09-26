import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {SetCurrenPaginatePage} from "../../features/filterSlice";

export const Pagination = () => {
    const dispatch = useDispatch()
    const currentPaginationPage = useSelector(state => state.filterSlice.currentPaginatePage)
    const onChangeHandler = (event) => {
        dispatch(SetCurrenPaginatePage(event.selected + 1));
    }

    return (
        <div className={styles.root}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                initialPage={currentPaginationPage - 1}
                activeClassName={styles.active}
                onPageChange={onChangeHandler}
                // pageRangeDisplayed={currentPagination}
                pageCount={3}
                forcePage={currentPaginationPage -1}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};