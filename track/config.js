/* =====================================================================
   EL SHAMS — order tracking configuration
   This is the only file you edit after deploying. Everything else works
   as-is. Find both Supabase values under:
     Supabase Dashboard → Project Settings → API
   The anon key is meant to be public — row level security is what
   protects the data, not the key.
   ===================================================================== */

window.ELSHAMS = {
  SUPABASE_URL:      "https://YOUR-PROJECT-REF.supabase.co",
  SUPABASE_ANON_KEY: "PASTE-YOUR-ANON-PUBLIC-KEY-HERE",

  // Public address of the customer page — used to build QR codes and
  // the shareable link that staff copy for customers.
  TRACK_URL: "https://elshams.org/track/",

  // Shown to a customer when a code is not found.
  WHATSAPP_NUMBER: "201000000000",     // international format, digits only
  SUPPORT_EMAIL:   "info@elshams.org",
  SUPPORT_PHONE:   "+20 15 436 0000"
};
