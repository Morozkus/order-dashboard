import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOrder } from "../../model/IOrder";
import supabase from "../../supabase/supabase";

export const getOneOrder = createAsyncThunk<IOrder, number>(
 'order/getOneOrder',
 async (id) => {
  try {
   const { data, error } = await supabase
    .from('order_menu')
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
    .from('order_menu')
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
   const { error } = await supabase
    .from('order_menu')
    .insert({ products: products })
   if (error) console.log(error)
  } catch (e) {
   throw (e)
  }
 }
)

export const setOrderStatus = createAsyncThunk<IOrder, Omit<IOrder, 'products'>>(
 'order/pushOrder',
 async ({ id, status }) => {
  try {
   const { data, error } = await supabase
    .from('order_menu')
    .update({ status })
    .eq('id', id)
    .select()
    .single()
    
   if (error) throw error

   return data
  } catch (e) {
   throw (e)
  }
 }
)