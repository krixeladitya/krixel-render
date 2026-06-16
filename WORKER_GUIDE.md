# 🔥 How to be a Krixel Render "worker" (for teammates)

You're going to lend your free cloud GPU to render the studio's videos. It's easy.
You don't need to know Blender or coding. ~5 min to set up once, then it's just
"open and run".

> **Two things to understand:**
> 1. The GPU that does the work is **yours** (your free Google/Kaggle hours).
> 2. The video files live in the **studio's Google Drive**, not yours — you just
>    hold a "spare key" (a Secret) that the notebook uses. You'll never see the
>    studio's password.

---

## One-time setup (5 minutes)

You'll get **two values** from the founder. Keep them private.
- `KR_GOOGLE_TOKEN` (a long block of text)
- `KR_SHEET_KEY` (a short code)

### On Kaggle (recommended — gives 2 GPUs)
1. Go to **kaggle.com**, sign in with **your own Google account**, and verify your
   phone if it asks (one time — unlocks the free GPU).
2. **Create → New Notebook**.
3. Right side: **Add-ons → Secrets** → add both values exactly:
   - name `KR_GOOGLE_TOKEN`, value = the long text
   - name `KR_SHEET_KEY`, value = the short code
4. Right side: **Settings → Accelerator → GPU T4 x2**.
5. **File → Import Notebook** → upload `krixel_render.ipynb` (the founder will send it).

### On Colab (alternative)
1. **colab.research.google.com**, sign in with **your own Google account**.
2. Open `krixel_render.ipynb`.
3. Left bar → 🔑 key icon → add the same two secrets, and toggle "notebook access" on.
4. **Runtime → Change runtime type → T4 GPU**.
5. **Runtime → Run all.** (The notebook auto-detects Colab — nothing to edit.)

---

## Every time you want to help render

1. Open the notebook (bookmark it!).
2. Click **Run All** (Kaggle) / **Runtime → Run all** (Colab).
3. **Leave the tab open.** It will render one job after another by itself.

That's it. You can watch live progress on the studio website.

---

## If it stops (this is normal — don't worry)

Free GPUs disconnect after a while (Colab sooner, Kaggle ~12 hours, or randomly).
**Nothing is lost.** Just:

- Open the notebook again → **Run All**. It continues **exactly where it left off**.
- Or do nothing — if another teammate's worker is running, it picks the job up
  automatically after ~20 minutes.

## Rules
- ✅ Keep the two secret values private. Don't paste them in chat or share them.
- ✅ Use **your own** Google account (that's the whole point — your free hours).
- ❌ Don't change the code unless the founder asks.
- 🙋 Stuck? Send the founder a screenshot of the notebook's last lines.
