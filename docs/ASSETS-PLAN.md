# Platinya Clinic — AI Image Assets Plan

**Document:** ASSETS-PLAN.md
**Status:** Pending Approval (no images generated yet)
**Scope:** Sprint 07 → Asset Integration (AI-generated imagery)
**Basis:** Drawn strictly from **Sprint 03 — Design System** → `Photography Direction` (Visual Assets System) and **Sprint 05 — High-Fidelity** specs. No new art direction is introduced outside the approved plan.

---

## 1. Governing Photography Direction (from Design System)

The entire image set must obey the following approved rules:

| Principle | Approved Directive |
|-----------|--------------------|
| **Philosophy** | *Real Experience Over Marketing* — show the patient's journey, not just the medical result. |
| **Preferred subjects** | Welcome, reception, coordination, follow-up, travel, hotel, transport, consultation, care. Medical shown only when necessary. |
| **Human presence** | Natural; communicates trust, comfort, respect, attentiveness. Avoids staged smiles / marketing poses / stiff shots. |
| **Medical representation** | Quality and professionalism. No shocking imagery, no direct surgical shots, nothing that provokes anxiety. |
| **Environment** | Hotel, transport, consultation suites, waiting areas, city, refined details — the full experience is the real product. |
| **Composition** | Breathing space, natural light, calm colours, clean angles, balanced framing, few elements in frame. |
| **Diversity** | Reflect varied ages/nationalities/backgrounds without stereotyping. |
| **Quality** | High resolution, excellent clarity, professional lighting, natural colours, consistent grading, no watermarks, no compression artifacts. |

**Palette anchor (site-wide):** Deep Obsidian `#0F172A`, Warm Alabaster `#F8FAFC`, Champagne Gold `#D4AF37`, Calm Sage `#0D9488`.

---

## 2. Scope Decision (confirmed by client)

- **Excluded:** the `doctors` page/section (client chose to drop it from scope).
- **Included (basic set):** the sections listed below.

---

## 3. Image Inventory (the full basic set)

| # | Slug | Placement | Exact use | Art-direction brief |
|---|------|-----------|-----------|----------------------|
| 1 | `hero-lobby` | Home → Hero | Full-width hero backdrop (landscape 16:9) | Luxury clinic lounge, warm champagne-gold ambient light, deep navy tones, marble, 5-star hotel feel, no people/text. *(validation sample — approved)* |
| 2 | `service-hair` | Home → Services grid + `/services` | Card image, Hair Transplantation | Modern, clean hair-restoration consulting suite; discreet, no procedure shots, no gore. |
| 3 | `service-dental` | Home → Services grid + `/services` | Card image, Aesthetic Dentistry | Premium dental suite / perfect-smile aesthetic, professional, calm. |
| 4 | `service-plastic` | Home → Services grid + `/services` | Card image, Plastic & Reconstructive | Refined pre-consultation / sculpted body-confidence aesthetic, elegant. |
| 5 | `service-bariatric` | Home → Services grid + `/services` | Card image, Bariatric & Metabolic | Healthful, supportive lifestyle imagery; vitality, not surgery. |
| 6 | `service-aesthetics` | Home → Services grid + `/services` | Card image, Medical Aesthetics | Serene spa-like aesthetic treatment, gentle glow, non-invasive. |
| 7 | `why-us` | Home → Why Choose Us | Contextual/background image | Refined waiting area or consultation suite; breathing space, calm. |
| 8 | `concierge` | Home → Concierge banner | Banner backdrop | 5-star hotel lobby / premium travel detail symbolising the all-inclusive journey. |
| 9 | `about` | Home → About + `/about` | Side image | Elegant concierge desk / coordination-welcome moment; natural human presence (optional). |

> All images: landscape where used as backgrounds; no text; no watermarks; palette-consistent; photorealistic; no direct surgery.

---

## 4. Generation Method & Pipeline

- **Tool:** OpenRouter image model (`google/gemini-2.5-flash-image`) — validated; the workflow extracts and saves a PNG automatically.
- **Prompt system:** each image uses a reusable structured template:
  - Scene + subject → environment → lighting/colour (palette anchors) → composition (breathing space, clean angles) → exclusion list (no text/watermark/surgery/people-as-marketing).

### 4.1 Professional Cinematography Rules (Photographer's Art Direction)

Added after client review of the first sample pass. These rules ensure **unmistakable visual cues** of the service and true professional composition (not generic stock):

1. **Unambiguous context cue:** every service image must carry a clear, visible signal of the specific treatment —
   - *Hair:* visible hairline consultations, trichoscope/mirror reflection, dense-hair macro, male-pattern area in frame, scalp/hair-care props — never generic business laptops with chart data.
   - *Dental:* smile-reflection in mirror, dental chair, porcelain-veneer macro, clean mouth/teeth motif (not open-mouth gore).
   - *Plastic:* elegant silhouette confidence, before-less refined sculpted look, high-end consultation on aesthetic outcomes.
   - *Bariatric:* healthy-lifestyle visual — fresh food, vitality, supportive physician scale consult, never surgery.
   - *Aesthetics:* serene facial treatment, glowing skin macro, spa-light atmosphere.
2. **Human presence is *active in the scene*:** subject(s) engaged in that treatment's context (pointing at scalp, holding smile mirror, reviewing an aesthetic result), clearly it is about the service — not neutral people sitting.
3. **Casting consistency:** if the concept implies a "patient", the subject must read as such (e.g. visibly relevant hair state or aged against hair concerns) and the partner as a professional (white-coat less; smart clinic attire).
4. **Composition:** rule-of-thirds, subject not centred-flat, shallow depth-of-field, one hero action/person, breathing space behind.
5. **Grading:** consistent warm champagne-gold key light + deep navy shadow tone; skin true-to-life; no over-saturation.
6. **Exclusions:** no text/labels/watermarks; no instruments in the wound; no masks/anguish; no cheesy staged smiles; no chart/business-screenshot props unless tied to the treatment.

### 4.2 Medical-Authenticity Rules (added after client rejection of first pass)

The first sample pass read as "luxury hotel / salon" rather than a real premium **clinic/hospital**. The site positions Platinya as a medical concierge — the imagery must therefore read as **authentic healthcare**, not generic hospitality. These rules are mandatory:

1. **Real clinical environment, not a lounge:** set scenes inside an actual consultation suite, treatment room, or surgical-prep area — recognisable clinic furniture (exam chair, dental chair, overhead examination light, clean clinical surfaces). Avoid generic sofas/lobbies as the subject backdrop.
2. **Medical professionals present and active:** an attending physician/specialist in clinical attire (medical coat / smart clinical uniform) actively engaged with the patient — examining, pointing at a scan, writing/gesturing at a treatment plan — not idle concierge staff.
3. **Visible "treatment plan before treatment" moment:** include a readable treatment-consult artefact — a hairline diagram / trichology report, a digital smile-design preview, a 3D facial-mapping screen, a printed care plan — on a desk or screen, making the pre-treatment consult unmistakable.
4. **Clinical props over decorative props:** exam instruments (trichoscope, oral mirror, imaging monitor, sterile trays) feature with restraint and elegance. No gore, no wounds, no post-op blood.
5. **Premium but clinical grading:** the champagne-gold + deep-navy luxury palette stays, but lighting should read *clinical soft daylight + warm accent* — bright, clean, high-end, not dim "otel candlelight".
6. **Architecture ties to medicine:** visible modern hospital/clinic architecture (glass walls, clean corridors, diagnostic signage subtly) grounds it as a healthcare facility.

- **Verification:** every image is inspected (vision) and scored (0–10) against:
  - (a) Photography Direction rules (§1),
  - (b) Cinematography rules (§4.1),
  - (c) **Medical-Authenticity rules (§4.2)** — this is the binding gate,
  - acceptance threshold ≥ 8/10 and the treatment context unmistakable.



---

## 5. Delivery Phases (no generation before approval)

| Phase | Deliverables | After completion |
|-------|--------------|------------------|
| **A** | Generate service set (`service-hair/dental/plastic/bariatric/aesthetics`) | Review & approve |
| **B** | Generate contextual set (`why-us`, `concierge`, `about`) | Review & approve |
| **C** | Integrate images into components (Services grid, Why Us, Concierge banner, About, Hero) | Build + Commit |
| **D** | Responsive + visual QA on all breakpoints | Final polish |

---

## 6. Open decision points (awaiting client)

1. **People or no people** in the non-highly-factual images (`about`, `why-us`)? Spec prefers natural human presence but requires seeing them non-staged. Default: mostly environment-only (safer for brand consistency), optional single natural human.
2. **Aspect/density:** all landscape for flexibility; the Services grid images will be cropped to a fixed card ratio (e.g. 4:3) in CSS — acceptable?
3. **Count per service:** one hero image per service card, or a small carousel? Default: one per card.

---

## 7. Explicit approval gate

No image in this plan is generated or committed until the client approves this document (and the decisions in §6 are answered).
