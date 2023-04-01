import React from 'react'
import Filter from '../Filter/Filter'
import Product from '../Product/Product'
import styles from './Catalog.module.scss'
import { Pagination } from '../Pagination/Pagination'
import { selectProductData } from '../../store/product/selectors'
import { useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../store/filter/selectors'
import { setCategoryId, setCurrentPage } from '../../store/filter/slice'
import { fetchProducts } from '../../store/product/asyncActions'
import { Skeleton } from '../Product/Skeleton'
const Catalog: React.FC = () => {
	const dispatch = useAppDispatch();

	const { items, status } = useSelector(selectProductData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

	const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

	const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

	const getProducts = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchProducts({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

	React.useEffect(() => {
    getProducts();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

	const products = items.map((obj: any) => <Product key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

	return (
		<div className={styles.catalog}>
			<Filter/>
			<div className={styles.container}>
				<div className={styles.products}>
					{products}
				</div>
				<Pagination currentPage={currentPage} onChangePage={onChangePage}/>
			</div>
		</div>
	)
}

export default Catalog