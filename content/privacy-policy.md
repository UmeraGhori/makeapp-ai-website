# Mesi.ai Privacy Policy

**Effective date: October 5, 2026**

**Data Controller:** Umera Ghori (developer of Mesi.ai), India
**Privacy contact / Grievance Officer:** khanumera51@gmail.com

## 1. Scope and Who We Are

Mesi.ai ("we", "us", "our") is an AI-personalized makeup guidance mobile application developed and operated by Umera Ghori, an individual developer based in India. This Privacy Policy applies to everyone who uses the Mesi.ai app ("you"), wherever you are located. It explains what data we collect, why, which third-party services process it, how long we keep it, and the rights you have over it.

It is written with the requirements of India's Digital Personal Data Protection Act, 2023; the EU/UK GDPR; the California CCPA/CPRA; US state biometric-privacy laws (for example Illinois, Texas and Washington); and Canada's PIPEDA in mind. By creating an account or using the app you acknowledge this policy. Mesi.ai is for adults only (see Section 10).

## 2. Information We Collect

**(a) Account information.** Your email address and display name, and (if you provide it) your mobile number with country code. You sign in with email and password. On Android only, you may instead sign in with Google; in that case Google shares your name and email address with us. Sign-in is handled by Supabase Auth; we never see or store your password in plain text. We also keep a record that you confirmed you are 18 or older.

**(b) Face-scan photos and biometric information.** If you choose to use the face-scan feature, and only after you give explicit consent on a dedicated consent screen, the app captures photos of your face from three angles. From them we derive a "face profile": face shape and a confidence score, estimated skin tone and undertone, skin type, and visible skin characteristics (for example pores, dark circles, uneven tone). Facial geometry and these derived measurements may be treated as biometric information or sensitive personal data in some places, so we treat them that way throughout. Section 4 sets out the specific rules.

**(c) Other images you provide.** If you upload your own reference photo of a makeup look, that image is processed too (see Section 5 — it is sent to Google Gemini together with your face photo to create a preview). Only upload images you have the right to use, and do not upload images of other people without their permission.

**(d) AI-generated content.** Makeup-preview images made from your face photo and a style reference, product recommendations, and step-by-step guides. If you save a look, it is stored in your account together with a copy of the relevant face profile details used to draw its illustrations.

**(e) Preferences and approximate location.** Your chosen app language and, only to estimate local currency in product suggestions, your approximate country (from your device region or your phone number's country code).

**(f) Purchase and plan information.** Your plan, billing period end date, how many AI looks you have used or bought, and store transaction identifiers. Payments are made through Apple or Google; we do not receive your card number or full payment details.

**(g) Consent and report records.** The date and wording version of the consents you gave, and any report you send about AI-generated content (your chosen reason, any text you add, and a reference to the item).

**(h) Technical data.** Standard request data (such as IP address) is processed by our hosting and service providers when the app connects to them, and we keep short-lived counters per account to limit abuse.

We do not use advertising SDKs or our own analytics, and we do not sell or share personal information for advertising. The on-device face-position check that guides your scan uses Google ML Kit; it runs on your device and does not send your photos anywhere, but ML Kit itself may send Google limited technical diagnostics (device model, OS and app version, a per-installation identifier and performance metrics) — see developers.google.com/ml-kit.

## 3. Why We Process Your Data

We process account information and preferences to provide the app's features (performing our contract with you).

We process your face-scan photos and derived face profile only on the basis of your explicit consent, which the app asks for on a separate screen before your first scan (an unticked checkbox, then "Agree and Continue"). If you decline, the camera is not used and nothing is captured, uploaded or analysed. You can withdraw consent at any time (Section 8).

We process purchase data to provide the plan you bought and to meet tax and accounting obligations.

We do not make automated decisions with legal or similarly significant effects about you: all AI outputs are cosmetic suggestions you are free to ignore.

## 4. Biometric Data: Consent, Purpose, Retention and Destruction

This section applies to your face-scan photos and the face profile derived from them.

- **Purpose.** Solely to give you cosmetic makeup guidance — face-shape-aware illustrations, skin-tone-matched shade and product suggestions, and AI previews of makeup looks on your own photo. We do not use it to identify you or anyone else, to compare against other people's photos, for surveillance or law enforcement, or for any medical or dermatological diagnosis.
- **Consent.** Face scanning is optional and requires the explicit consent described in Section 3 before the first scan. Our servers also refuse to process face data for an account without a consent record. You may use parts of the app without ever scanning your face, although personalized features need a face profile.
- **No sale or unrelated disclosure.** We do not sell, lease or trade your biometric data. It is shared only with the processors in Section 5, only to provide the result you asked for.
- **Retention and destruction.** We keep your face-scan photos and face profile until you delete them or delete your account — there is no automatic time-based deletion. You can delete them yourself at any time in the app under Settings → Delete my face data (this also withdraws your consent). Settings → Delete Account removes everything (Section 9). Generated preview images and saved looks are kept until you delete them.

## 5. Third-Party Service Providers (Processors)

These services process data on our behalf to run the app. Each is bound by its own terms and privacy policy, which you should read.

- **Supabase** — our database, authentication and file storage (including face-scan photos and AI-generated previews), hosted in the Northeast Asia (Seoul) region. Row-level security and private storage buckets restrict each record to its owner. See supabase.com/privacy.
- **Face++ (Megvii)** — receives your face-scan photos, over an encrypted connection, to return face-shape and skin-analysis measurements. We use its US API endpoint. Megvii is a China-headquartered company; we cannot independently verify where its systems store or access data, or how long it retains images, beyond what its own policy states. See faceplusplus.com/privacy-policy.
- **Google (Gemini API)** — receives your face photo and, if you provide one, your uploaded reference image, together with your face profile and style choices, only when you ask for an AI preview, product recommendations or an application guide. We use the Gemini API through a billing-enabled (paid) Google Cloud project. Under Google's Gemini API Additional Terms, for paid services Google does not use prompts or responses to improve its products, but it does log prompts and responses for a limited period solely to detect and prevent violations of its Prohibited Use Policy and to meet legal or regulatory requirements. We therefore cannot say that Google never stores your images. See ai.google.dev/gemini-api/terms and policies.google.com/privacy.
- **Pinterest** — receives text search queries (style and occasion keywords), never your photos. The inspiration images you browse are loaded from Pinterest's servers, so Pinterest can see your device's IP address and standard request data. See policy.pinterest.com/privacy-policy.
- **RevenueCat** — receives your account's random user ID and your store purchase and subscription events, to manage your plan. It does not receive your face photos, face profile or other images.
- **Apple (App Store) and Google (Google Play)** — process your purchases, subscriptions, billing and refunds under their own terms.
- **Google Sign-In (Android only)** — if you choose it, Google authenticates you and tells us your name and email address.
- **Google ML Kit** — on-device face detection used to guide your scan. Your photos are not sent to it; see Section 2(h) for the limited diagnostics it may send.

"Find Where to Buy" opens a plain Google Shopping search in your browser. We have no affiliate, advertising or data-broker relationship with any store or brand shown, and no personal data is sent to Google by us when you tap it.

We do not authorize these providers to use your data for their own independent purposes, but their handling is governed by their own terms; we cannot guarantee how each one retains or uses data beyond what those terms say.

## 6. International Data Transfers

Your data is processed in several countries: South Korea (Supabase), the United States (Google, Apple, RevenueCat and Face++'s US API endpoint), and other countries where these providers operate infrastructure. Where GDPR or similar law applies, transfers rely on the mechanisms each provider publishes (for example adequacy decisions or standard contractual clauses) — see their policies in Section 5.

## 7. Data Security

Face-scan photos and previews are kept in private storage that only your authenticated account can read; previews are shown through time-limited links. All database tables use row-level security. Data is encrypted in transit (HTTPS/TLS). Server-side functions read your face profile, consent and plan directly from our database instead of trusting values sent by the app, and purchase state is written only by our server from verified store events. No system is perfectly secure, but we take these steps to protect your data to a standard suited to its sensitivity.

## 8. Your Rights and Choices

Wherever you are, you can ask to access, correct, port or erase your personal data and to withdraw consent.

**In the app:**

- Settings → Name: edit your display name. Email and phone are shown there but can only be changed by contacting us.
- Settings → Delete my face data: erases your face-scan photos and face profile and withdraws face-scan consent, keeping your account.
- Saved Looks: delete any saved look.
- Settings → Delete Account: erases your account and all data (Section 9).
- Settings → Manage Subscription: opens your App Store / Google Play subscription settings.

**By email (khanumera51@gmail.com),** for anything not self-service — including a copy of your data (there is no automated export, so we prepare it manually) or a correction to your email or phone. We aim to respond within 30 days, or sooner where law requires.

**Region-specific rights:**

- **EU/UK (GDPR):** you also have the right to restrict processing, to object, and to complain to your local data-protection authority.
- **California (CCPA/CPRA):** you can know, delete and correct your personal information, including sensitive personal information (which covers biometric data). We do not sell or share personal information, so there is nothing to opt out of, and we will not discriminate against you for using these rights.
- **Illinois, Texas, Washington:** see Section 4 for purpose, consent, retention and no-sale disclosures.
- **India (DPDP Act 2023):** you can seek a summary of your data and processing, correction and erasure, grievance redressal (contact our Grievance Officer in Section 14), and nominate another person to act on your behalf in the event of death or incapacity.
- **Canada (PIPEDA):** you can access your information and challenge its accuracy.

## 9. Account Deletion: What Happens, Exactly

Settings → Delete Account (after a confirmation that also reminds you to cancel any store subscription first) sends a request verified against your own signed-in session; nobody else can delete your account.

Our server then, in order: (1) deletes every file in your face-scan and preview-image storage and checks that none remain; (2) asks RevenueCat to delete your subscriber record; (3) removes per-account abuse counters; (4) deletes your authentication record, which cascades to your profile, face profile, saved looks, plan and purchase records, consents, reports and click history; and (5) checks that those records are gone. If any critical step fails, the app tells you the deletion did not complete and you can safely retry — your account is only reported as deleted once the checks pass.

Deleting your account does not cancel an Apple or Google subscription — cancel it in your store settings first. Apple, Google and RevenueCat keep their own records of purchases as their policies and legal obligations require. Copies in our hosting provider's backups may persist for a limited time determined by its backup schedule, and are not used for any other purpose. This cannot be undone.

For step-by-step instructions, including what to do if you cannot sign in, see our Account Deletion page.

## 10. Children's Privacy

Mesi.ai is for people aged 18 and over. It is not directed at children, and we do not knowingly collect personal data or face photos from them. The signup form requires you to confirm you are 18 or older, and any account without that confirmation is asked to give it before using the app. If someone answers that they are under 18, the app removes the account right away. This is a self-declaration — we do not collect a date of birth or check identity documents. If you believe a child has given us data, contact khanumera51@gmail.com and we will delete it.

## 11. Cosmetic-Only, Not Medical Advice

All AI-generated guidance is cosmetic only. If a scan or request suggests a possible medical or dermatological concern, the app is designed to direct you to a qualified dermatologist instead of offering a cosmetic workaround or a diagnosis. Skin-analysis results are informational input for cosmetic suggestions, never a medical signal.

## 12. Cookies, Local Storage and Tracking

The app does not use browser cookies. It stores a few things on your device for your convenience (your sign-in session and your language choice). We do not use third-party advertising trackers and do not track you across other companies' apps or websites. The only SDK-level diagnostics we are aware of are those of Google ML Kit described in Section 2(h).

## 13. Changes to This Policy

We may update this policy as the app changes. If a change materially affects how we handle your face or biometric data, we will ask for your consent again before applying it to you. The effective date above shows the version in force.

## 14. Contact Us / Grievance Officer

For questions, requests or complaints about this policy or your data, including exercising any right in Section 8:

Umera Ghori
khanumera51@gmail.com

We aim to acknowledge privacy requests within 7 days and resolve them within 30 days.
