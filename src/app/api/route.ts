import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export default async function GET() {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data } = await supabase.from("posts").select()
  console.log("data >>>>", data);
  return NextResponse.json(data)
}