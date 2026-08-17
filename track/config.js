/* =====================================================================
   EL SHAMS — order tracking configuration
   This is the only file you edit after deploying. Everything else works
   as-is. Find both Supabase values under:
     Supabase Dashboard → Project Settings → API
   The anon key is meant to be public — row level security is what
   protects the data, not the key.
   ===================================================================== */

window.ELSHAMS = {
  SUPABASE_URL:      "https://wdjabghmafjuiltwvugn.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_ZMl_-_dwQ7st2ZOvYhArcA_2Rjn67qU",

  // Public address of the customer page — used to build QR codes and
  // the shareable link that staff copy for customers.
  TRACK_URL: "https://elshams.org/track/",

  // Shown to a customer when a code is not found.
  WHATSAPP_NUMBER: "201222599826",     // international format, digits only
  SUPPORT_EMAIL:   "gergis095@gmail.com",
  SUPPORT_PHONE:   "+201066713166"
};
