import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../model/IProduct";
import supabase from "../../supabase/supabase";

export const getAllProduct = createAsyncThunk<IProduct[]>(
    'product/getAllProduct',
    async () => {
        try {
            const { data, error } = await supabase.from('product_list').select('*')
            if (error) throw error
            return data
        } catch (e) {
            throw (e)
        }
    }
)