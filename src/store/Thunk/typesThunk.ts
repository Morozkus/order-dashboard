import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITypeProduct } from "../../model/IType";
import supabase from "../../supabase/supabase";

export const getAllTypes = createAsyncThunk<ITypeProduct[]>(
 'product/getAllType',
 async () => {
  try {
   const { data, error } = await supabase.from('product_type').select('*')
   if (error) throw error
   return data
  } catch (e) {
   throw (e)
  }
 }
)