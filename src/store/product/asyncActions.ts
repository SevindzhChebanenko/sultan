import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  'product/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Product[]>(`https://63c6867c4ebaa8028547adb6.mockapi.io/Items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 9,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
