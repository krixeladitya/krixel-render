// ============================================================
//  Krixel Render — front-end config
//  Edit the two lines marked TODO after you deploy the Apps Script.
// ============================================================
window.RENDER_CONFIG = {
  // TODO (after setup): paste your deployed Apps Script Web App URL here.
  // It looks like: https://script.google.com/macros/s/AKfy....../exec
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxbJL2J_QcyLTlGH0vRpFzgDTc_o48ZyHbW0jFdK0s1woD_zaKqQl19jvY_nvscoaCEgg/exec",

  // Shared secret — must match the SECRET in the Apps Script. Keeps random
  // people on the internet from adding jobs to your queue.
  SUBMIT_KEY: "krixel2026",

  // How often the dashboard refreshes (seconds).
  POLL_SECONDS: 6,

  // A worker counts as "alive" if its heartbeat is newer than this (seconds).
  WORKER_STALE_SEC: 180,

  // Link to your worker notebook (Kaggle/Colab). Shown on the "start a worker"
  // button when the queue stalls. Leave "" to hide the button.
  NOTEBOOK_URL: "",

  // MOCK = true shows fake jobs so you can see the design without any setup.
  // Set to false once APPS_SCRIPT_URL is filled in.
  MOCK: false,

  // Cosmetic
  BRAND: "Krixel Render",
};
