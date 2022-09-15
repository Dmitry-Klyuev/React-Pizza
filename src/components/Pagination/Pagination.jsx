import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'



export const Pagination = ({setCurrentPagination, currentPagination}) => {

    const onChangeHandler = (event) => {
        setCurrentPagination(event.selected + 1);
    }


    return (
        <div className={styles.root}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                initialPage={currentPagination - 1}
                activeClassName={styles.active}
                onPageChange={onChangeHandler}
                // pageRangeDisplayed={currentPagination}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};