import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = process.env.REACT_APP_PROJECT_URL || ''
const PROJECT_API_KEY = process.env.REACT_APP_API_KEY || ''

export const supabase = createClient(PROJECT_URL, PROJECT_API_KEY)

export async function getTest() {
  try {
    const { data, error } = await supabase.from('product_list').select('*')
    if (error) throw error
    console.log(data)
    return data
  } catch (e) {
    console.log('error')
    throw (e)
  }
}