# Complete Rebranding Changes in Branch 1.10.3

## Summary
This document provides a comprehensive list of all changes made in the last 2 commits on branch 1.10.3 for rebranding from **Documenso** to **0xDocHub** by **0xMetaLabs**.

## Commits
1. **f0726bfb** - "Changes made for 0x - 1" (May 11, 2025)
2. **495fc9e0** - "corrected Logo - Branding Logo" (May 11, 2025)

## Total Files Changed: 100 files
- **Modified:** 99 files
- **Added:** 1 file (pdf.worker.min.js - minified PDF.js library v3.11.174)
- **Binary files updated:** 13 image/icon files
- **Total lines changed:** 1,258 (662 added, 596 deleted)

---

## 1. BRAND NAME CHANGES

### Primary Brand Replacements
- **Documenso** → **0xDocHub**
- **Documenso, Inc.** → **0xMetaLabs, Inc.**
- **@documenso** → **@0xmetalabs**
- **"Signed by Documenso"** → **"Signed by 0xDocHub By 0xMetaLabs"** (PDF signatures)
- **"sent by Documenso"** → **"sent by 0xDocHub"**
- **"provided by Documenso"** → **"provided by 0xMetaLabs"**
- **"0xDocHub by 0xMetaLabs"** (new combined branding format)

---

## 2. DOMAIN & URL CHANGES

### Website URLs
- `documenso.com` → `dochub.ngx.0xmetalabs.com` (main domain)
- `https://documenso.com` → `https://0xmetalabs.com` (redirect URL)
- `https://documen.so/mail-footer` → `https://0xmetalabs.com/` (email footer link)

### Email Domains
- `@documenso.com` → `@0xmetalabs.com` (general emails)
- `@documenso.com` → `@ses.0xmetalabs.com` (SMTP from address)
- `noreply@documenso.com` → `noreply@ses.0xmetalabs.com`

### Service Account Emails
- `admin@documenso.com` → `admin@0xmetalabs.com`
- `manager@documenso.com` → `manager@0xmetalabs.com`
- `member@documenso.com` → `member@0xmetalabs.com`
- `support@documenso.com` → `dochub@0xmetalabs.com`
- `security@documenso.com` → `security@0xmetalabs.com`
- `serviceaccount@documenso.com` → `serviceaccount@0xmetalabs.com`
- `deleted-account@documenso.com` → `deleted-account@0xmetalabs.com`
- `recipient@documenso.com` → `recipient@0xmetalabs.com` (placeholder)
- `recipient.{index}@documenso.com` → `recipient.{index}@0xmetalabs.com` (template placeholders)

---

## 3. COMPONENT & CODE CHANGES

### React Components Modified

#### apps/remix/app/components/
1. **dialogs/account-delete-dialog.tsx**
   - "Documenso will delete" → "0xDocHub will delete"

2. **dialogs/team-member-invite-dialog.tsx**
   - Test email addresses updated to @0xmetalabs.com

3. **dialogs/webhook-create-dialog.tsx**
   - "The URL for Documenso to send webhook events" → "The URL for 0xDocHub to send webhook events"

4. **embed/embed-document-completed.tsx**
   - "has been sent by Documenso" → "has been sent by 0xDocHub"

5. **forms/signup.tsx**
   - Placeholder email updated to @0xmetalabs.com

6. **general/app-nav-mobile.tsx**
   - Copyright: "Documenso, Inc." → "0xMetaLabs, Inc."

7. **general/branding-logo.tsx**
   - Major refactoring with completely new SVG logo implementation
   - Component renamed: `BrandingLogo` → `Logo` (first commit), then back to `BrandingLogo` (second commit)
   - Name prop default: "Documenso" → "0xDocHub"
   - Alt text changes:
     - "Documenso Logo" → "Logo" (apps/remix/app/components/general/app-nav-mobile.tsx)
     - "Documenso Logo" → "Logo" (apps/remix/app/routes/_profile+/_layout.tsx)
   - Complete SVG path replacement with new "0xMetaLabs" text design

8. **general/direct-template/direct-template-configure-form.tsx**
   - Profile setup text updated to "0xDocHub public profile"

9. **general/document/document-certificate-qr-view.tsx**
   - "This document is available in your Documenso account" → "This document is available in your 0xDocHub account"

10. **general/user-profile-timur.tsx**
    - Alt text: "image of timur ercan founder of documenso" → "image of timur ercan founder of 0xDocHub"

### Route Files Modified

#### apps/remix/app/routes/
1. **_authenticated+/settings+/webhooks.$id.tsx**
   - Webhook URL description updated

2. **_authenticated+/t.$teamUrl+/settings.webhooks.$id.tsx**
   - Webhook URL description updated

3. **_profile+/_layout.tsx**
   - "Documenso Logo" alt text updated

4. **_profile+/p.$url.tsx**
   - "create your own Documenso account" → "create your own 0xDocHub account"
   - Link to: "https://documenso.com" → "https://dochub.ngx.0xmetalabs.com"
   - "Check out Documenso" → "Check out 0xDocHub"

5. **_recipient+/sign.$token+/_index.tsx**
   - Share metadata updated

6. **_share+/share.$slug.tsx**
   - Title: "Documenso - Share" → "0xDocHub - Share"
   - Description: "I just signed a document in style with Documenso!" → "I just signed a document with 0xMetaLabs!"
   - Meta content: "Documenso - Join the open source signing revolution" → "0xDocHub - Digital Document Signing"
   - Share text: "I just signed with Documenso!" → "I just signed with 0xDocHub!"
   - Twitter creator: "@documenso" → "@0xmetalabs"

7. **_unauthenticated+/articles.signature-disclosure.tsx**
   - Legal text: "Thank you for using Documenso" → "Thank you for using 0xDocHub by 0xMetaLabs"
   - Service provider references updated

8. **_unauthenticated+/verify-email.$token.tsx**
   - "You can now use all features of Documenso" → "You can now use all features of 0xDocHub"

### Utility Files

1. **apps/remix/app/root.tsx**
   - Domain: 'documenso.com' → 'dochub.ngx.0xmetalabs.com'

2. **apps/remix/app/utils/meta.ts**
   - Default description completely rewritten:
     - OLD: "Join Documenso, the open signing infrastructure, and get a 10x better signing experience. Pricing starts at $30/mo. forever! Sign in now and enjoy a faster, smarter, and more beautiful document signing process. Integrates with your favorite tools, customizable, and expandable. Support our mission and become a part of our open-source community."
     - NEW: "0xDocHub, Digital Document Hub for 0xMetaLabs."
   - Title format: "title - Documenso" → "title - 0xDocHub"
   - Keywords: "Documenso" → "0xDocHub" (kept other keywords)
   - Creator: "Documenso, Inc." → "0xMetaLabs, Inc."
   - Site name: "Documenso - The Open Source DocuSign Alternative" → "0xDocHub - Digital Document Hub for 0xMetaLabs"
   - Twitter handle: "@documenso" → "@0xmetalabs"
   - Redirect URL: 'https://documenso.com' → 'https://0xmetalabs.com'

---

## 4. EMAIL TEMPLATES

### All email templates updated in packages/email/templates/
1. **confirm-email.tsx**
2. **confirm-team-email.tsx**
3. **document-cancel.tsx**
4. **document-completed.tsx**
5. **document-created-from-direct-template.tsx**
6. **document-invite.tsx**
7. **document-pending.tsx**
8. **document-recipient-signed.tsx**
9. **document-rejected.tsx**
10. **document-rejection-confirmed.tsx**
11. **document-self-signed.tsx**
12. **document-super-delete.tsx**
13. **forgot-password.tsx**
14. **recipient-removed-from-document.tsx**
15. **reset-password.tsx**
16. **team-delete.tsx**
17. **team-email-removed.tsx**
18. **team-invite.tsx**
19. **team-join.tsx**
20. **team-leave.tsx**
21. **team-transfer-request.tsx**

### Email Template Components
1. **template-confirmation-email.tsx**
2. **template-document-self-signed.tsx**
3. **template-footer.tsx**
   - Footer links: "https://documen.so/mail-footer" → "https://0xmetalabs.com/"
   - Company name: "Documenso, Inc." → "0xMetaLabs, Inc."
   - Physical address: "2261 Market Street, #5211, San Francisco, CA 94114, USA" → "INDIA - UAE - USA"

---

## 5. CONFIGURATION & CONSTANTS

### packages/lib/constants/
1. **direct-templates.ts**
   - Template descriptions updated

2. **email.ts**
   - FROM_ADDRESS: 'noreply@documenso.com' → 'noreply@ses.0xmetalabs.com'
   - FROM_NAME: 'Documenso' → '0xDocHub - 0xMetaLabs'
   - SERVICE_USER_EMAIL: 'serviceaccount@documenso.com' → 'serviceaccount@0xmetalabs.com'

### packages/lib/utils/
1. **authenticator.ts**
   - rpName: 'Documenso' → '0xDocHub'

2. **templates.ts**
   - Template related branding updated

---

## 6. SERVER-SIDE FUNCTIONS

### packages/lib/server-only/
All server-side email sending functions updated with SMTP defaults:
1. **auth/send-confirmation-email.ts**
2. **auth/send-forgot-password.ts**
3. **auth/send-reset-password.ts**
4. **document/send-completed-email.ts**
   - SMTP From Name: 'Documenso' → '0xDocHub'
   - SMTP From Address: 'noreply@documenso.com' → 'noreply@0xmetalabs.com'
5. **document/send-delete-email.ts**
6. **document/send-pending-email.ts**
7. **team/create-team-email-verification.ts**
8. **team/create-team-member-invites.ts**
9. **team/create-team.ts**
10. **team/delete-team.ts**
11. **team/request-team-ownership-transfer.ts**
12. **template/create-document-from-direct-template.ts**
13. **user/create-user.ts**
14. **user/service-accounts/deleted-account.ts**
    - Service account email updated

---

## 7. ASSETS & IMAGES

### Binary Files Updated (All locations)
Updated in both `apps/remix/public/` and `packages/assets/`:
1. **android-chrome-192x192.png** - New logo
2. **android-chrome-512x512.png** - New logo
3. **apple-touch-icon.png** - New logo
4. **favicon-16x16.png** - New favicon
5. **favicon-32x32.png** - New favicon
6. **favicon.ico** - New favicon
7. **static/logo.png** - New logo
8. **static/og-share-frame2.png** - New social share image

### Additional Asset Updates in packages/assets/:
1. **logo.png** - Main logo file
2. **logo_icon.png** - Icon version of logo

### packages/email/static/
1. **logo.png** - Email template logo updated

---

## 8. MANIFEST FILES

### Updated Files:
1. **apps/remix/public/site.webmanifest**
2. **packages/assets/site.webmanifest**
   - name: "Documenso" → "0xDocHub"
   - short_name: "Documenso" → "0xDocHub"

---

## 9. SECURITY & LEGAL

### Security File
1. **apps/remix/public/.well-known/security.txt**
   - Contact: mailto:security@documenso.com → mailto:security@0xmetalabs.com
   - Canonical URL remains unchanged

### License Files
1. **packages/ee/LICENSE**
   - "The Documenso Commercial License" → "The 0xDocHub Commercial License"
   - Copyright: "Copyright (c) 2023 Documenso, Inc" → "Copyright (c) 2023 0xDocHub, Inc"
   - All references to Documenso updated to 0xDocHub
   - Enterprise Edition subscription references updated

2. **packages/ee/FEATURES**
   - Copyright: "Copyright (c) 2023 Documenso, Inc" → "Copyright (c) 2023  0xMetaLabs, Inc" (note: double space before 0xMetaLabs)
   - Feature descriptions updated with new branding
   - **INCONSISTENCY FOUND:** LICENSE uses "0xDocHub, Inc" while FEATURES uses "0xMetaLabs, Inc"

---

## 10. TRANSLATIONS

### All translation files updated (8 languages):
Location: `packages/lib/translations/`
1. **de/web.po** - German
2. **en/web.po** - English
3. **es/web.po** - Spanish
4. **fr/web.po** - French
5. **it/web.po** - Italian
6. **ko/web.po** - Korean
7. **pl/web.po** - Polish
8. **sq/web.po** - Albanian

### Common translation updates across all languages:
- Team join/leave messages
- Email verification messages
- Webhook descriptions
- Document signing messages
- All references to "Documenso" → "0xDocHub"
- All references to "on Documenso" → "on 0xDocHub"

---

## 11. TEST FILES

### packages/app-tests/e2e/
1. **document-flow/stepper-component.spec.ts**
   - Test redirect URL: 'https://documenso.com' → 'https://dochub.ngx.0xmetalabs.com'
   - Wait for URL changed accordingly

2. **templates/create-document-from-template.spec.ts**
   - Test redirect URL: 'https://documenso.com' → 'https://dochub.ngx.0xmetalabs.com'
   - Expected redirect URLs in assertions updated (multiple occurrences)

---

## 12. SIGNING FUNCTIONALITY

### packages/signing/helpers/
1. **add-signing-placeholder.ts**
   - Signing related branding updated

2. **update-signing-placeholder.test.ts**
   - Test descriptions and expectations updated

---

## 13. UI COMPONENTS

### packages/ui/components/document/
1. **document-share-button.tsx**
   - Share functionality text updated with new branding

---

## 14. NEW FILES ADDED

1. **apps/remix/public/pdf.worker.min.js**
   - New PDF.js worker library added (minified)
   - Version: 3.11.174
   - Contains Mozilla Foundation copyright 2023
   - Purpose: PDF rendering and processing functionality

---

## VERIFICATION CHECKLIST

### Brand Name Replacements ✓
- [x] All instances of "Documenso" replaced with "0xDocHub"
- [x] All instances of "Documenso, Inc." replaced with "0xMetaLabs, Inc."
- [x] Social media handle updated from @documenso to @0xmetalabs

### Domain & URL Updates ✓
- [x] Main domain updated to dochub.ngx.0xmetalabs.com
- [x] All email domains updated to @0xmetalabs.com
- [x] Service email addresses updated
- [x] Support email changed to dochub@0xmetalabs.com

### Visual Assets ✓
- [x] All favicons updated (16x16, 32x32, .ico)
- [x] Android Chrome icons updated (192x192, 512x512)
- [x] Apple touch icon updated
- [x] Logo files updated in all locations
- [x] Social share image (og-share-frame2.png) updated

### Code & Configuration ✓
- [x] React components updated with new branding
- [x] Email templates updated (21 templates)
- [x] Translation files updated (8 languages)
- [x] Configuration constants updated
- [x] Server-side functions updated
- [x] Test files updated
- [x] License and legal documents updated

### Special Component Updates ✓
- [x] BrandingLogo component refactored and renamed
- [x] Authenticator rpName updated
- [x] Manifest files updated
- [x] Security contact information updated

---

## NOTES & IMPORTANT FINDINGS

### Key Observations:
1. The second commit (495fc9e0) specifically corrected the Logo component by renaming it to BrandingLogo
2. All binary image files were replaced with new branded versions
3. The canonical URL in security.txt still references documenso.com (may need attention)
4. A new pdf.worker.min.js file (PDF.js v3.11.174) was added in the first commit
5. Total of 100 files were modified across both commits with comprehensive rebranding

### Inconsistencies Found:
1. **Copyright mismatch:** packages/ee/LICENSE uses "0xDocHub, Inc" while packages/ee/FEATURES uses "0xMetaLabs, Inc" (with double space)
2. **Canonical URL:** security.txt still points to https://documenso.com/.well-known/security.txt
3. **"in style" phrase:** Removed from some places but potentially kept in others

### Statistics:
- **Total line changes:** 1,258 (662 additions, 596 deletions)
- **Files changed:** 100
- **Languages affected:** 8 translation files
- **Test files updated:** 2 test suites with URL changes
- **Email templates updated:** 21 templates