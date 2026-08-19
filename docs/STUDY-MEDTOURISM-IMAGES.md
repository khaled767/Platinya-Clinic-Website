# Medical Tourism Image Study — High-Rated Competitor Analysis

**Document:** STUDY-MEDTOURISM-IMAGES.md
**Status:** Research basis for Phase 07 image generation
**Method:** Live analysis of high-rated medical-tourism sites (MCAN Health, Esthetica Turkey, Rana Clinic, HEVA Clinic, Euro Istanbul Clinic, Healtigo, BestClinic) — fetched pages + vision analysis of their actual service imagery.

---

## 1. Scope & Method

Studied how the top-rated Turkish health-tourism operators present service imagery for: **hair transplant, aesthetic dentistry, plastic surgery, and supporting concierge content**. Extracted both (a) site structure/UX patterns and (b) the concrete photographic treatment of representative images (analysed frame-by-frame with a vision model).

---

## 2. Observed Site-Level Patterns (what "high-rated" sites do)

1. **Trust is the product.** Everything is designed around credibility: review badges (Google, Trustpilot, WhatClinic, Bookimed, RealSelf), independent stat bands ("2,400+ patients · 15K+ procedures · 30 yrs · 50+ countries · 5★ hotel"), accreditation mentions (JCI, TEMOS, **Turkish Ministry of Health**), and "doctor-founded" claims.
2. **Service imagery is result/aspiration oriented — NOT clinical gore.** The "hair transplant" and "smile" images show **natural, confident patients** (portraits with soft studio light, ring-light catchlights) and **clean smile close-ups** — never needles, blood, scalpels, or mid-procedure shots.
3. **Each specialty gets a distinct, consistently-named image** with descriptive alt text ("hair transplant consultation", "cosmetic dentistry smile design", "plastic surgery consultation") — clarity and scannability.
4. **Reassuring context images** appear routinely: modern operating theatre, doctor consultation, Istanbul/Bosphorus skyline, luxury recovery — grounding the "journey" story.
5. **Multi-language + lead-gen form** is universal (flags EN/DE/FR/ES/NL/RU/DA/TR + a free-consultation form with treatment-interest dropdown).

---

## 3. Photographic Treatment — Frame-by-Frame Findings

Analysed real representative images from Esthetica Turkey & Rana Clinic:

### 3.1 "Hair transplant" — a trust portrait, not a scalp macro
- **Subject:** a confident, well-groomed man's headshot/mid-chest portrait (often smiling). NOT a scalp close-up, NOT before/after grid.
- **Lighting:** soft, even, flattering studio light; distinct **ring-light catchlight in the pupils** (lively, engaging eyes).
- **Backdrop:** clean, light, mildly textured studio wall (marble/brick pattern) — modern, non-clinical, deliberately generic so the person is the focus.
- **Lesson:** the goal is **aspiration + trust** — a believable "successful outcome" face, not surgical documentation.

### 3.2 "Hollywood Smile" — clean result close-up with before/after
- **Subject:** portrait close-up framing the mouth/teeth (lower face), on a **solid dark background** so focus stays on the smile.
- **Treatment:** presented as **before/after** to show real transformation, but styled clean and clinical (controlled, no gore).
- **Lesson:** a tight smile macro on a neutral/dark ground reads credible and lets the "result" speak.

### 3.3 "Consultation" — human warmth in a real clinic
- **Subject:** doctor (lab coat) + patient interacting (reviewing papers, smiling, making eye contact) — the dominant content is **the human interaction**.
- **Setting:** a clean, functional clinic room (white walls, monitor, X-ray viewer) — **functional and reassuring**, not over-designed "luxury-spa".
- **Lesson:** patients trust **professional competence** more than opulence; show real doctor-patient rapport, not a hotel lobby.

### 3.4 Supporting context
- **Operating theatre** and **Bosphorus/Istanbul** shots reinforce "we are a real, situated medical provider."
- **Concierge/recovery** imagery (hotel, transport) supports the end-to-end journey, but is secondary to clinical credibility.

---

## 4. Conclusions → Guiding Rules for Our Platinya Imagery

Consolidating the findings into rules that will drive AI image generation:

1. **Aspiration-first, diagnosis-never:** show confident, natural patients and clean results — **no scalpels, blood, needles, open-mouth gore, or mid-procedure frames, ever.**
2. **Trust portraits over clinical macros:** a believable, warm face with soft studio light + catchlight signals success better than a close-up of a treated area.
3. **Human warmth is mandatory:** every service image should include a natural doctor-patient or caretaker interaction (or a warm results portrait) — not empty equipment.
4. **Consistent per-specialty imagery with clear labels:** one strong visual per specialty (hair, dental, plastic) that reads instantly.
5. **Palette & setting:** bright, clean, credible clinical interiors; warm natural light; NOT dim "luxury-spa/gold candlelight". Gold/navy are fine as subtle brand accents but must not overpower a believable clinic.
6. **Real-world grounding:** a modern operating theatre and an Istanbul context shot reinforce authenticity (we already have the hospital-partner images for this).
7. **Credibility artifacts:** review bodies, accreditation/MoH licence, and stat bands pair with the imagery (we have the Turkish MoH licence section already).

---

## 5. Implication for Our Asset Plan (differs from earlier drafts)

- **Earlier hair drafts** (scalp-tracing, mirror, trichoscope) were **too clinical/clinical-topic-focused** vs. what high-rated sites actually show. **New direction:** a warm, confident "successful patient" portrait + a clean consultation scene.
- **Apply the same treatment to dental & plastic:** patient-result portraits and doctor-patient consultation — not procedure close-ups.
- Keep the **hospital-partner + Turkish MoH licence** imagery we already integrated for credibility; add the **Istanbul/context** grounding per specialty.

*Next: generate the specialty set following these rules, verify each against §4.*

---

## 6. Client Revision — "Authentic Procedure" Direction (Aug 2026)

After reviewing the first generated portraits, the client rejected the posed/aspirational-into-uncomfortable approach ("human presence felt very uncomfortable") and supplied reference images of the style they actually want:

**Client reference style (approved):**
- **Mid-procedure candour:** gloved medical hands actively working (drawing a hairline, holding the patient's face, preparing gently) on a real, calm patient — the *actual treatment* in progress, not a posed marketing smile.
- **Close-up clinical framing + bright, clean, even lighting** — sterile, professional, calm; no harsh shadows, no dim "spa" mood.
- **Serene, trusting patient** (often eyes closed, relaxed) — conveys confidence and competence, not strain.
- One clean, empty, well-equipped clinic room shot is also appreciated (sterile environment credibility).

**Concrete approved brief (hair):** a handsome blonde man ~35 with thinning at the front hairline, the **new hairline drawn on his forehead**, lying back on the examination chair, about to begin the transplant.

**Revised generation rules:**
1. Show the treatment moment authentically (gloved hands, drawn hairline, gentle action) — not posed portraits.
2. Keep the patient calm/serene (eyes relaxed/closed), natural skin, bright clinical light.
3. Close-up framing over wide mid-shots; clean clinical background.
4. No gore, no obvious pain, no needles piercing visibly, no blood; serene professional mood.

