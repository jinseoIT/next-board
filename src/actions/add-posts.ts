import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export default async function addPosts(post) {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data, error} = await supabase.from("posts").insert([
    { 
     title: post.title,
     contents: post.contents,
     user_id: 123,
     status: "posting",
     thumnail_image: post.thumnailImage
    }
  ]).select();
  console.log("error ::", error);
  return data;
}