import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITypeProduct } from "../../model/IType";
import { getTypes } from "../../supabase/supabase";

export const getAllTypes = createAsyncThunk<ITypeProduct[]>(
    'product/getAllType',
    getTypes
  )