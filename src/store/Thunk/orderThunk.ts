import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOrder } from "../../model/IOrder";
import supabase from "../../supabase/supabase";
import { response } from "../../model/ISupabase";

export const getOneOrder = createAsyncThunk<IOrder, number>(
    'order/getOneOrder',
    async (id) => {
        try {
            const { data, error } = await supabase
                .from('order_list')
                .select('*')
                .match({ id })
                .single()
            if (error) throw error
            return data as IOrder
        } catch (e) {
            throw (e)
        }
    }
)

export const getAllOrder = createAsyncThunk<IOrder[]>(
    'order/getAllOrder',
    async () => {
        try {
            const { data, error } = await supabase
                .from('order_list')
                .select('*')
            if (error) throw error
            return data as IOrder[]
        } catch (e) {
            throw (e)
        }
    }
)

export const pushOrder = createAsyncThunk<void, Omit<IOrder, 'id' | 'status'>>(
    'order/pushOrder',
    async ({ products }) => {
        try {
            const { data, error } = await supabase
                .from('order_list')
                .insert({ products })
            if (error) throw error
        } catch (e) {
            throw (e)
        }
    }
)

export const setOrderStatus = createAsyncThunk<void, Omit<IOrder, 'products'>>(
    'order/pushOrder',
    async ({ id, status }) => {
        try {
            const { data, error } = await supabase
                .from('order_list')
                .update({ status })
                .eq('id', id)
            if (error) throw error
        } catch (e) {
            throw (e)
        }
    }
)