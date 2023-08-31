
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wbwcdwquffnvigyndarr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indid2Nkd3F1ZmZudmlneW5kYXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MjU3NTAsImV4cCI6MjAwODMwMTc1MH0.4-cWyB2Qc5yhar1wjKEh1h_JHntnS8D9wAuy117umzE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;