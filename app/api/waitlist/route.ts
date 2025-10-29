// Waitlist API Route
// Authors: [Your Team Name]
// Handles email submissions to Supabase

import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
// You'll add your credentials in the setup steps below
const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase credentials not configured")
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Insert email into Supabase
    const supabase = getSupabaseClient()
    const { data, error } = await supabase.from("waitlist").insert([
      {
        email,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      // Handle duplicate email gracefully
      if (error.code === "23505") {
        return NextResponse.json({ success: true, message: "You're already on the waitlist!" })
      }
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Successfully added to waitlist!", data })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
