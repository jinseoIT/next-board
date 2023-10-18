import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export default async function getPosts() {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data } = await supabase.from("posts").select()
  return data;
}