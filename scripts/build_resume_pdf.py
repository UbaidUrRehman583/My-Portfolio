"""Build public/Ubaid_Resume.pdf from plain-text CV (matches Ubaid_Resume.tex)."""
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Ubaid_Resume.pdf"

PAGE1 = """Ubaid Ur Rehman
Senior Android Developer | Android Technical Lead
abbasiubaid80@gmail.com | +92-3145837626
https://www.linkedin.com/in/ubaid-ur-rehman-27645a140
https://github.com/UbaidUrRehman583
https://ubaidurrehman583.github.io/My-Portfolio/

PROFESSIONAL SUMMARY
Senior Android Developer with 5+ years of experience building secure, scalable mobile applications for branchless banking, core banking, and fintech. Currently leading Android development for the Zindigi digital banking application at Roha Tech. Expert in Kotlin, Java, Jetpack Compose, MVVM, Clean Architecture, Hilt, Coroutines, Flow, Retrofit, Room, REST APIs, Firebase Crashlytics, ProGuard, DexGuard, Jenkins CI/CD, and Agile delivery. Proven results including high crash-free session rates and applications supporting 200,000+ monthly active users.

TECHNICAL SKILLS
Programming: Kotlin, Java
Android: Jetpack Compose, Android Jetpack, Material Design, Navigation, ViewBinding, Coroutines, Flow
Architecture: Clean Architecture, MVVM, multi-module architecture, Repository pattern, Use Cases, Dagger Hilt
Backend and Data: REST APIs, Retrofit, Room, Kotlin Serialization, Firebase Analytics, Firebase Crashlytics
Security and DevOps: Encryption, secure storage, ProGuard, DexGuard, Git, Gradle, KSP, Jenkins, CI/CD
Methods: Agile, Scrum, code review, unit testing, performance optimization, technical leadership, mentoring

PROFESSIONAL EXPERIENCE
Senior Android Developer / Android Technical Lead (Zindigi)    Aug 2025 - Present
Roha Tech, Islamabad, Pakistan
- Lead Android development for Zindigi branchless banking: roadmap, architecture, code reviews, and production releases.
- Design and maintain multi-module Clean Architecture using Jetpack Compose, MVVM, Hilt, Coroutines, and Flow.
- Deliver regulated banking features: fund transfers, QR payments, international remittance integrations, and in-app security controls aligned with SBP requirements.
- Implement release hardening including encryption, secure local storage, ProGuard, DexGuard, and Firebase Crashlytics monitoring.
- Collaborate with backend, QA, product, and design teams on secure, user-facing banking releases.
"""

PAGE2 = """- Contribute to related digital wallet products including Aik Digital Wallet (Bank Islami) using shared modules and reusable patterns.
- Built conversational banking assistant features with intent routing, step-up authentication, and Jetpack Compose UI integrated with existing payment modules.

Android Developer    Nov 2021 - Jul 2025
App in Snap, Islamabad, Pakistan
- Developed fintech and core banking Android applications from design through Google Play release.
- Implemented modular MVVM and Clean Architecture with Repository and domain layers.
- Integrated REST APIs, third-party SDKs, biometric authentication, and secure login flows.
- Improved application stability and performance; automated builds and releases with Jenkins CI/CD.
- Delivered JS Mobile core banking, Zindigi branchless banking, Aik Digital Wallet, eChallan, and POS railway ticketing features.

Android Developer    May 2021 - Oct 2021
Innovagic Technologies, Rawalpindi, Pakistan
- Built responsive Android user interfaces with Material Design, custom components, and animations.
- Applied Android best practices and scalable design patterns for production applications.

EDUCATION
Bachelor of Science in Information Technology, 2017 - 2021
PMAS-Arid Agriculture University, Rawalpindi, Pakistan

ADDITIONAL INFORMATION
Leadership: Led a developer team in a university coding competition (Nov 2020); organized internal Android tech talks.
Community: Open-source Android contributions; mentored junior developers at local meetups.
Languages: English (Fluent), Urdu (Native)
"""


def main() -> None:
    doc = pymupdf.open()
    for chunk in (PAGE1, PAGE2):
        page = doc.new_page(width=612, height=792)
        page.insert_textbox(
            pymupdf.Rect(54, 54, 558, 738),
            chunk,
            fontsize=9.3,
            fontname="helv",
        )
    doc.save(OUT)
    doc.close()
    print("Wrote", OUT)


if __name__ == "__main__":
    main()
