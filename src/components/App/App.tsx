import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Catalog from '../../pages/Catalog'
import CatalogLayout from '../../Layouts/CatalogLayout';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ '../../pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const Product = React.lazy(() => import(/* webpackChunkName: "Product" */ '../../pages/Product'));

const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound'));

function App() {
	return (
		<Routes>
      <Route path="/" element={<CatalogLayout />}>
        <Route path="" element={<Catalog />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="product/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
	)
}

export default App