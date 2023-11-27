import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../model/IProduct";
import { getProducts } from "../../supabase/supabase";

export const getAllProduct = createAsyncThunk<IProduct[]>(
    'product/getAllProduct',
    getProducts
)