import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export default async function uploadImage(file) {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data, error } = await supabase.storage.from("postImages").upload(`images/${file.name}`, file);
  if (error) {
    console.log("image error ::", error);
  } 
  return {data, error};
}