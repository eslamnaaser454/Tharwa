# Design Rationale

## Color palette: Navy + Gold

The deep navy (`#0B2233`) and warm gold (`#D8A66D`) palette was chosen to convey trust, authority, and premium quality — attributes essential for a finance product. Navy signals institutional reliability (banking, security), while gold represents wealth, aspiration, and the cultural significance of gold in MENA societies. The alternating navy/off-white sections create visual rhythm and prevent fatigue across a long landing page.

## Layout and trust

The page follows a proven conversion structure: Hero (promise) → Pain (problem) → Features (solution) → How It Works (simplicity) → Product Preview (proof) → Differentiation (comparison) → Security (trust) → Social Proof (validation) → Pricing (action) → Final CTA (urgency). Each section earns a bit more trust before asking for commitment.

The generous whitespace, hairline borders, and subtle shadows are deliberately restrained — financial tools need to feel calm, not flashy. The typography hierarchy (Cormorant Garamond for display, Inter for body) balances elegance with readability.

## Animations

- **Scroll reveals** (fade-up with stagger): draws attention progressively without overwhelming. Threshold 0.12 ensures elements animate just as they enter the viewport.
- **Custom cursor**: differentiates the product and adds a premium, interactive feel. Mix-blend-mode: difference ensures visibility on both light and dark sections.
- **3D tilt cards**: adds depth and playfulness to feature/pricing cards without being distracting.
- **Magnetic buttons**: subtle pull effect signals interactivity and rewards exploration.
- **Hero chart line draw**: draws the spending line on mount, immediately communicating "data visualization" without words.
- **Floating badges**: gentle float animation on Halal/Zakat badges draws the eye to key differentiators.

All animations respect `prefers-reduced-motion` — they are enhancement, not requirement.

## Pricing strategy

Four tiers map to Tharwa's product positioning:
- **Free**: removes friction for first-time users; includes enough value (Zakat calculator, basic tracking) to demonstrate the product.
- **Plus** (featured): the target tier for young professionals — unlimited AI coaching and bank linking justify the subscription.
- **Pro**: family-oriented tier with sharing and advanced features for committed users.
- **Egypt-Local Plus**: addresses purchasing power parity directly, signaling that Tharwa takes local economic reality seriously. This is a key differentiator versus Western apps.

## MENA / Arabic-first / Halal-aware identity

The design embeds cultural awareness at every level:
- **Bilingual from day one**: Arabic and English are equal citizens, not afterthoughts. RTL layout is structurally correct, not CSS-hacked.
- **Tajawal font** for Arabic: a modern, clean Arabic typeface that pairs well with Inter for body text.
- **Zakat and Halal as first-class features**: these appear in the hero, features, dashboard preview, and comparison table — they are central to the value proposition, not buried in settings.
- **Arabic-Indic numerals** in AR mode (٤٨٬٩٢٠): respects the user's locale rather than forcing Western numerals.
- **Regional currencies** (EGP, SAR, AED, USD): the dashboard and pricing acknowledge that MENA users deal in multiple currencies daily.
- **Cultural goal milestones** (Hajj, marriage, home): wealth planning reflects actual life goals in the region.
