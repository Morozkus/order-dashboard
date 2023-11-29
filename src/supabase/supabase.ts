import { createClient } from '@supabase/supabase-js'
import { IProduct } from '../model/IProduct'

const PROJECT_URL = process.env.REACT_APP_PROJECT_URL || ''
const PROJECT_API_KEY = process.env.REACT_APP_API_KEY || ''

export const supabase = createClient(PROJECT_URL, PROJECT_API_KEY)

export async function getProducts() {
  try {
    const { data, error } = await supabase.from('product_list').select('*')
    if (error) throw error
    // const newData = data.map(product => {
    //   console.log(updateSizeImages(100, 1500, product.image))
    //   return { ...product, image: 'https://lrwjkqgielnjpoigcqxf.supabase.co/storage/v1/object/public/images/drink/milk-shake.jpg?width=350&height=200' }
    // })
    return data
  } catch (e) {
    throw (e)
  }
}

export async function getTypes() {
  try {
    const { data, error } = await supabase.from('product_type').select('*')
    if (error) throw error
    return data
  } catch (e) {
    throw (e)
  }
}

const updateSizeImages = (width: number, height: number, url: string) => {
  const image = supabase.storage.from('images').getPublicUrl(url, {
    transform: {
      width,
      height,
    },
  })

  return image.data.publicUrl
}