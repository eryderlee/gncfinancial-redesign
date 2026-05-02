# GNC Financial – Image Assets To Download

The live site serves all images with a 403 block on server-side requests.
**These must be downloaded manually via browser and placed in `public/images/`.**

---

## Accreditation Logos (place in `public/images/accreditations/`)

| File to save as | Source URL |
|---|---|
| `xero-partner.png` | https://gncfinancial.com.au/wp-content/uploads/2024/09/gnc.png |
| `tax-practitioners-board.png` | https://gncfinancial.com.au/wp-content/uploads/2024/09/Group-1.png |
| `ipa-logo.jpg` | https://gncfinancial.com.au/wp-content/uploads/2024/09/IPA_Logo_Master_HR-scaled.jpg |

After downloading, update `src/lib/constants.ts` ACCREDITATIONS imageUrl values to:
```
/images/accreditations/xero-partner.png
/images/accreditations/tax-practitioners-board.png
/images/accreditations/ipa-logo.jpg
```

---

## GNC Financial Logo (place in `public/images/`)

| File to save as | Source URL |
|---|---|
| `gnc-logo.png` | https://gncfinancial.com.au/wp-content/uploads/2024/09/cropped-fulllogo-1.png |

---

## Section / Content Photos (Pexels stock — free license)
Place in `public/images/sections/`

| Suggested filename | Pexels URL | Used for |
|---|---|---|
| `bookkeeping-support.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/@UnSi-uHVRvDr7pg-1024x683.jpg | "reliable bookkeeping support" image |
| `accounting-senior-couple.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/close-up-senior-couple-while-learning-1024x683.jpg | Everyday Australians section |
| `notes-agenda.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/old-couple-taking-notes-agenda-1024x683.jpg | Services/advice section |
| `certified-accountant.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/pexels-kampus-8441811-1024x684.jpg | "certified accountant Baulkham Hills" |
| `experienced-accountant.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/pexels-rdne-7821541-1024x683.jpg | "experienced accountant Baulkham Hills" |
| `professional-accountant.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/pexels-rdne-8293744-1024x683.jpg | Industries / professional section |
| `financial-guidance.jpg` | https://gncfinancial.com.au/wp-content/uploads/2025/11/pexels-shkrabaanthony-5816286-1024x683.jpg | Cloud accounting / financial guidance |

**Note:** The Pexels photos (pexels-kampus, pexels-rdne, pexels-shkrabaanthony) can alternatively be
downloaded directly from pexels.com using the IDs in the filenames (8441811, 7821541, 8293744, 5816286).

---

## Icons (place in `public/images/icons/`)

| File to save as | Source URL | Used for |
|---|---|---|
| `mail.png` | https://gncfinancial.com.au/wp-content/uploads/2025/12/mail-2.png | Email icon in header/footer |
| `phone.png` | https://gncfinancial.com.au/wp-content/uploads/2025/12/phone-call-2.png | Phone icon in header/footer |

**Note:** The redesign uses lucide-react icons instead of these PNG icons — they are included for reference
only. No action needed unless you want to match the exact icon style.

---

## Favicon

| File to save as | Source URL |
|---|---|
| `favicon.png` | https://gncfinancial.com.au/wp-content/uploads/2025/12/cropped-467935180_122108759504609705_3889690595897249933_n-270x270.png |

After downloading, place in `public/` as `favicon.ico` (or `icon.png`) and Next.js will pick it up automatically
via the App Router metadata icons convention in `src/app/layout.tsx`.

---

## After Downloading

Once accreditation images are local, switch `next/image` remote pattern refs to local paths:

1. Update `ACCREDITATIONS` in `src/lib/constants.ts`
2. Remove `remotePatterns` for `gncfinancial.com.au` from `next.config.ts` (if present)
3. Run `npm run build` to verify
