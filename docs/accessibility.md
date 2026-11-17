# Accessibility baseline

Murgh targets WCAG 2.2 Level AA. Accessibility is a release requirement for every new page and interactive component.

## Implemented in the foundation

- A keyboard-accessible “Skip to main content” link appears when focused.
- The site uses a single main landmark with a stable `main-content` target.
- Keyboard focus is visibly indicated on links, buttons, form controls, summaries and other tab stops.
- Disabled form controls communicate their disabled cursor state.
- Recipe region filters are grouped and named for assistive technology.
- Recipe result counts are announced politely when filters change.
- Reduced-motion preferences are respected by the global motion styles.
- Recipe imagery has descriptive alternative text; decorative iconography is hidden from assistive technology where appropriate.

## Required checks for every release

### Keyboard
- [ ] Tab and Shift+Tab reach every interactive control in a logical order.
- [ ] Enter and Space activate links, buttons, disclosure summaries and custom controls as expected.
- [ ] Focus is never hidden behind the sticky header or clipped by overlays.
- [ ] Dialogs and full-screen modes move focus inside on open, support Escape where appropriate, and return focus to the invoking control on close.

### Screen readers
- [ ] Page title, landmarks, heading hierarchy and navigation labels are meaningful.
- [ ] Form fields have persistent accessible names and instructions.
- [ ] Filter state, result counts, validation errors and action feedback are announced without excessive chatter.
- [ ] Images have useful alt text; decorative images have empty alt text.
- [ ] Progress indicators expose a name, current value and range.

### Visual and motor access
- [ ] Normal text contrast is at least 4.5:1; large text and meaningful UI graphics meet 3:1.
- [ ] Content remains usable at 200% text zoom and at narrow mobile viewport widths.
- [ ] Pointer targets meet WCAG 2.2 AA minimum sizing/spacing; aim for 44 × 44 CSS pixels for primary controls.
- [ ] No information is conveyed by colour alone.
- [ ] Reduced-motion settings remove non-essential movement.

### Language and direction
- [ ] The document language updates when a language is selected.
- [ ] Urdu content uses right-to-left direction and correct text alignment.
- [ ] Mixed-language content uses local language/direction attributes where needed.

## Manual test matrix

Run these checks on the home page, recipe listing, a recipe detail page, and the About page:

1. Keyboard-only navigation (Chrome and Safari).
2. VoiceOver on macOS/iOS and TalkBack on Android.
3. Browser zoom at 200% and 400%.
4. Windows High Contrast / forced-colors where available.
5. Reduced-motion preference enabled.
6. Light/dark OS preferences if theme support is added.

## Current follow-up audit

This foundation establishes shared navigation and announcement patterns. A full page-by-page WCAG audit remains necessary, especially for cooking-mode dialog focus management, mobile navigation behaviour, contrast of muted/opacity text, translated text direction, and touch-target sizing. Do not mark the application WCAG 2.2 AA conformant until those checks are completed and documented.
