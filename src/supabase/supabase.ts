import { createClient } from '@supabase/supabase-js'
import { IProduct } from '../model/IProduct'
import { safe } from '../utils/safe'

const PROJECT_URL = process.env.REACT_APP_PROJECT_URL || ''
const PROJECT_API_KEY = process.env.REACT_APP_API_KEY || ''

const supabase = createClient(PROJECT_URL, PROJECT_API_KEY)
export default supabase

export async function getOrder(id: number) {
  const { data, error } = await supabase
    .from('order_list')
    .select('*')
    .match({ id })
}

export async function getOrders() {

}