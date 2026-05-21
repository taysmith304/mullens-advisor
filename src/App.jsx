import { useState, useRef, useEffect } from "react";

const DOCUMENT_CONTEXT = `
MUNICIPAL AUTHORITY FRAMEWORK IN WEST VIRGINIA
(Full legal reference document for the Town of Mullens, WV)

=== PART I — MUNICIPAL AUTHORITY (DILLON'S RULE) ===

West Virginia is a Dillon's Rule state. Cities like Mullens have ONLY those powers expressly granted by state statute or necessarily implied. Chapter 8, Article 12 of the WV Code enumerates these powers. WV Code §8-12-5 grants municipalities "plenary power and authority" to regulate local affairs by ordinance.

Dillon's Rule: local governments have three types of powers: (1) those granted in express words, (2) those necessarily or fairly implied in or incident to the powers expressly granted, (3) those essential to the declared objects and purposes of the corporation. If there is any reasonable doubt whether a power has been conferred, the power has NOT been conferred.

Express powers must be plainly authorized. Implied powers are construed narrowly. Ambiguous grants are resolved AGAINST the municipality.

Authorized powers under §8-12-5:
- Abate anything the governing body considers a public nuisance
- Provide for elimination of hazards to public health and safety
- Regulate repair, closing, or demolition of unsafe/unsanitary/dangerous structures (§8-12-16)
- Prevent injury or annoyance from anything dangerous, offensive or unwholesome
- Enforce health, safety, and nuisance regulations

Limits under Dillon's Rule:
- Cannot ban land uses entirely without statutory authority
- Cannot supersede state building/fire codes without authority
- Cannot impose regulations beyond what state law allows
- State preemption: WV law preempts inconsistent local rules
- Cannot adopt construction standards conflicting with the uniform State Building Code

Constitutional constraints even on valid police powers:
- Due process (14th Amendment): fair notice + opportunity to be heard
- Equal protection: must apply equally to all similarly situated
- Takings Clause (5th Amendment): cannot effectively take property without compensation
- Excessive fines (8th Amendment): fines cannot be grossly disproportionate
- Fourth Amendment: inspectors generally need a warrant to enter private property

=== PART II — WV HOME RULE PROGRAM ===

WV Code §8-1-5a: voluntary Municipal Home Rule program allows participating cities to adopt ordinances "not otherwise available." Requires submitting a written plan to the state Home Rule Board and legislative approval. Annual fee of $2,000. Up to four Class IV municipalities (like Mullens) may join each year.

Home Rule CAN help with: local innovations, chronic nuisance programs, nontraditional abatement procedures, adjusting tax structure, waiving certain fees.

Home Rule CANNOT: override federal constitutional rights, environmental laws, open-government laws (FOIA, open meetings), state procurement, criminal laws, pension laws, annexation laws, state building/fire codes. Does not waive due process requirements.

=== PART III — UNSAFE STRUCTURES & NUISANCE ABATEMENT (§8-12-16) ===

Core statute: WV Code §8-12-16. Authorizes municipalities to regulate "repair, alteration, improvement, closing, or demolition" of any structure "unsafe, unsanitary, dangerous, or detrimental to the public safety or welfare."

PROCEDURAL REQUIREMENTS (§8-12-16(d)):
Any ordinance must provide fair and equitable rules of procedure. The 10-day notice requirement applies specifically to civil actions filed in circuit court under subsection (h)(1).

ENTRY AUTHORITY (§8-12-16(e)):
Except in exigent circumstances, inspectors must provide reasonable advance notice and request permission. If owner refuses or cannot be found, the code enforcement agency may obtain an administrative search warrant from municipal or magistrate court.

DEMOLITION POWER (§8-12-16(f)):
Category A structures (collapse risk, fire code violations under paragraphs C, E, H): city may demolish after written notice + newspaper publication at least 30 days before the proposed action + opportunity for owner to seek injunctive relief. NO need to show repair cost exceeds fair market value.

Category B structures (vacant, abandoned, or lawfully declared unfit for human habitation under paragraphs F, G, I, K): same procedure PLUS must show repair cost exceeds fair market value.

ABSOLUTE DEFENSE (§8-12-16(f)(3)):
Municipality is NOT liable for civil damages if: (1) acted in good faith, (2) demonstrated structure falls within Category A or B, (3) followed all procedures in subsection (f), AND (4) the municipality had ADOPTED THE STATE BUILDING CODE at time of action.

LIENS AND COST RECOVERY (§8-12-16(g)-(h)):
City may file a lien against real property for ALL costs incurred. May also institute civil action in circuit court to recover all reasonable costs, expenses, and attorney fees. Must send certified mail notice to landowner at least 10 days before filing civil action.

PROSECUTION (§8-12-16(j)):
Violations may be prosecuted consistent with state and local laws. Penalty classification governed by the ordinance adopted and WV Code §8-11-1 (fines + imprisonment not exceeding thirty days).

=== PART IV — VACANT AND UNINHABITABLE PROPERTY REGISTRATION ===

§8-12-16a (Uninhabitable Buildings):
Municipality may require owners of uninhabitable structures violating local building code to register and pay a fee. Process: inspector posts written notice + certified mail within 5 business days → owner has 45 days to repair or respond → 90 days to appeal to enforcement agency → 30 days to appeal to circuit court → then fee assessed as lien. If fee delinquent 2 years, municipality may pursue FORFEITURE. After forfeiture, municipality takes title subject to all existing liens and taxes.

§8-12-16c (Vacant Building Registry):
Municipality MAY (not must) establish vacant building registration program by ordinance. Vacant = unoccupied or unsecured for a defined period. Can charge registration fees, require local in-state agent for out-of-state owners, require maintenance standards, place liens for unpaid fees (30 days notice required), authorize municipality to make repairs and recover costs. Fees must be used only for: public safety efforts, monitoring/administering the program, or repairing/closing/demolishing vacant structures under §8-12-16.

=== PART V — OTHER STATUTORY PROVISIONS ===

JUNK, LITTER AND DEBRIS (§8-12-5):
Municipality can require owners to clean up garbage, refuse, debris, waste, ashes, trash on both private and public property. Can act against offensive, unwholesome, or nuisance conditions. Can adopt ordinances defining what counts as junk, declare those conditions a nuisance, and enforce cleanup. Litter officer program under §8-12-16b also available.

BUILDING AND FIRE CODES (§8-12-13, §15A-11):
Municipality can adopt the State Building Code by ordinance. If it has NOT done so, it can still act against dangerous buildings under §8-12-16. For municipalities without the state building code, the enforcement body is: mayor + municipal engineer/building inspector + one additional member selected by mayor (health officer and fire chief serve in advisory capacity). NOTE: The absolute defense to civil liability under §8-12-16(f)(3) REQUIRES that the municipality had adopted the state building code.

MUNICIPAL LIENS (§8-12-16(g)):
When municipality spends money repairing, securing, or demolishing a property, it can recover costs by filing a lien. Lien priority governed by WV general lien law under Chapter 38.

=== PART VI — OCCUPIED BUT BLIGHTED RESIDENTIAL PROPERTIES ===

Courts distinguish purely aesthetic complaints (which raise land-use/speech issues) from genuine health/safety nuisances.

KEY PRINCIPLE: Standards must be OBJECTIVE and MEASURABLE.

Good (defensible): "more than 5 cubic yards of trash in the yard," "overgrown vegetation exceeding 12 inches," "more than 3 junk vehicles visible from public right-of-way"
Bad (vulnerable to legal challenge): "eyesore," "inappropriate appearance," "neighborhood character"

Definitions (model language):
- "Junk/Debris": Discarded material including scrap metal, wood, plastic, construction remnants, furniture, appliances, etc., not stored in an orderly manner
- "Inoperable/Junk Vehicle": Motor vehicle lacking current registration, not operable under its own power, or visibly dismantled, in that condition for more than 30–90 days. Agricultural vehicles on farms exempt.
- "Public Nuisance": Condition injurious to health, obstructive to use of public ways, or noticeably degrades surrounding properties
- "Unlawful Accumulation": trash covering >200 sq ft; >5 cubic yards of loose waste; >3 junk vehicles visible from public right-of-way; >50 tires outside; any hazardous material improperly stored
- "Hazardous Exterior Condition": creates fire risk (piles of flammable material), sanitation risk (matted garbage, animal carcasses, rodent infestation), or structural danger (collapsed porches, unsafe stairs)

Enforcement distinctions:
- Sanitation/Health Nuisance (rotting garbage, standing sewage): justified under public health authority
- Fire/Vermin Hazard (scrap piles, tires, overgrown brush): justified under public safety power
- Unsafe Structures/Accessory Danger: covered by §8-12-16
- Aesthetic Clutter (decorative trash, old toys): likely BEYOND legitimate power unless it ALSO causes vermin or hazards

CRITICAL: Ordinance must apply UNIFORMLY. Cannot single out specific groups (only renters, elderly, specific families). Enforcement cannot target one neighborhood while ignoring another.

Special populations: Allow hardship waivers or extended compliance periods for elderly/disabled. Coordinate with social services. This reduces enforcement burden and legal risk.

=== PART VII — CONSTITUTIONAL AND LITIGATION RISKS ===

DUE PROCESS:
- Written notices required (certified mail + newspaper publication)
- Allow appeals to independent board or court
- Issue written findings
- Always offer administrative appeal AND judicial review
- Best practice: keep detailed records of notices sent, hearing minutes, orders

TAKINGS CLAUSE:
- Reasonable nuisance abatement is generally NOT a taking (it's police power, not appropriation for public use)
- Requiring demolition of collapsing porch or toxic material removal is allowed
- DANGER: If ordinance leaves owner with NO economically viable use of property (Lucas v. South Carolina Coastal Council), may cross into regulatory taking
- Ensure foreclosure/demolition used only for actual nuisances, not aesthetics

EQUAL PROTECTION:
- Must apply equally to all similarly situated
- Cannot enforce against one neighborhood but ignore another
- Use objective criteria to ensure non-discrimination
- Mitigation: rotating/randomized inspection schedule; consistent documentation

VAGUENESS DOCTRINE:
- Laws must give ordinary person reasonable opportunity to know what is prohibited
- DANGEROUS terms: "eyesore," "unsightly," "neighborhood character," "offensive appearance"
- SAFE terms: concrete numeric thresholds, specific measurements, defined categories
- Include severability clause

EXCESSIVE FINES (8th Amendment):
- Fines cannot be grossly disproportionate to the offense
- Recommended caps: up to $100/day, not to exceed $250/day for repeat offenses, not to exceed $2,000-$5,000 total per violation
- WV §8-11-1 authorizes municipalities to prescribe fines and imprisonment not exceeding thirty days

FOURTH AMENDMENT:
- Generally need warrant to enter private property
- §8-12-16(e) requires administrative search warrant if entry refused
- Emergency exceptions (imminent collapse, fire risk) may allow immediate entry but must be well-documented
- Warrantless entries can invalidate subsequent orders

LITIGATION TRAPS (common pitfalls):
1. Failing to record liens properly
2. Skipping a statutorily required hearing
3. Not providing right to appeal to court
4. Proceeding to abate before notice period expires
5. Enforcing against one area but not others (selective enforcement)
6. Using subjective standards vulnerable to vagueness challenge

=== PART VIII — RECOMMENDED ORDINANCE FRAMEWORK ===

PROPERTY MAINTENANCE ORDINANCE:
- Prohibit accumulation of debris, garbage in exterior property areas
- Standards: grass/weeds below 12 inches, trash in proper containers, no outdoor storage of materials not in use on permitted work site
- Inspection: code officer may enter (with warrant if needed)
- Fines: up to $100/day civil infraction

WEEDS/GRASS ORDINANCE:
- Grass/weed over X inches is public nuisance
- Must cut within 7 days of notice
- After deadline, city may hire contractor and lien costs

JUNK VEHICLES ORDINANCE:
- Junk vehicle = no current registration + inoperable or substantially dismantled + in that condition for more than 90 days
- Exempt: vehicles stored in enclosed structure, actively undergoing repair, emergency vehicles, classic cars under restoration (with permit), farm equipment
- More than 2 junk vehicles on any lot = violation
- Screening: if visible from public view, owner must shield within 30 days of notice
- After 90 days impounded, vehicles can be forfeited or recycled per WV motor vehicle laws (Title 17C)

VACANT/ABANDONED BUILDING REGISTRY:
- Register within 30 days of building becoming vacant
- Provide local agent for service of process
- Pay annual registration fee (e.g., $100/year)
- Maintain in secured condition (no open doors/windows)
- Fees go into Blight Remediation Fund
- Failure to register = daily fine; failure to maintain = abatement by city (lien on property)

UNSAFE STRUCTURES ORDINANCE:
- Adopt §8-12-16 for all buildings
- Define Category A and Category B unsafe structures
- Owner has 10 days to appeal condemnation; then city can board/secure or demolish
- Additional notice for demolition: notify owner (and mortgagees) at least 60 days before demolition
- Demolition costs become lien on property

ENFORCEMENT LADDER:
Step 1: Complaint/Inspection — document conditions (photos, notes)
Step 2: Informal Warning — courtesy notice, reasonable deadline (10 days)
Step 3: Formal Notice of Violation — certified mail + posting on property, specify violation + corrective action + deadline (often 30 days), include appeal instructions
Step 4: Reinspection — if fixed, close file; if not, proceed
Step 5: Administrative Citation/Fine — $50/day per day past deadline, capped (e.g., $500 total)
Step 6: Hearing — administrative hearing if owner requests; good practice and often required by due process
Step 7: Civil Injunction — file in Circuit Court, declaring condition a public nuisance, compelling abatement + recovering city costs (attorney fees included)
Step 8: Municipal Abatement — city directly abates; contractor removes trash or demolishes; record lien for all costs
Step 9: Lien Placement — file against property; costs collected "like taxes"
Step 10: Demolition/Condemnation — additional notice required (newspaper publication); opportunity for owner to sue or appeal

=== PART IX — FUNDING SOURCES ===

- State/Federal Grants: WV Demolition Landfill Assistance Program (DEP-administered, check for future versions); WV Abandoned Mine Land and Reclamation program for hazardous properties
- CDBG: WV Community Advancement and Development authority (WVCAD) runs CDBG Demolition Program for rehabilitation or demolition of substandard housing
- USDA Rural Development: Community Facilities grants/loans for public infrastructure including demolition tied to public health
- Appalachian Regional Commission (ARC): community development grants for distressed counties, downtown revitalization, brownfield remediation. POWER grants available.
- EPA Brownfields: grants for assessment and cleanup of contaminated vacant sites
- Historic Tax Credits: Federal Historic Tax Credit (20%) + WV state tax credits (up to 25%) for historic downtown structures
- WV Land Stewardship Corporation: statewide land bank; acquires blighted properties after forfeiture and redevelops them

=== PART X — APPALACHIAN CONTEXT (SPECIAL CONSIDERATIONS FOR MULLENS) ===

- High rates of "heirs' property" (inherited land held by unproven heirs) — must attempt notice (publish in paper) before abating
- Limited municipal budget/staff — use statutory lien authority so city doesn't fund cleanups upfront
- Politically sensitive enforcement — emphasize public safety benefits, not aesthetics
- Compassionate enforcement options: hardship waivers, payment plans, community cleanup days, coordination with charities
- Focus on true hazards (collapsed roofs, rat infestations) before minor aesthetic issues
- Allow temporary fixes like secured tarps (with time limits) while owners work on full repairs
- Recommended: start with worst cases only, build community trust before broader enforcement

=== SECTION A — ZONING AND LAND USE ===

GOVERNING STATUTES: WV Code Chapter 8A (Land Use Planning Act), §8A-7-1 through §8A-7-13 (Zoning Ordinance), §8A-2-1 (Planning Commissions), §8A-8-1 (Board of Zoning Appeals).

WHAT MULLENS CAN DO:
- Adopt a comprehensive zoning ordinance dividing the municipality into districts (residential, commercial, industrial, mixed-use) with permitted and conditional uses in each zone
- Create overlay districts and special design districts with additional standards (§8A-7-3(c))
- Establish a Planning Commission to prepare a comprehensive plan before zoning is adopted
- Create a Board of Zoning Appeals (BZA) to hear variance requests and appeals
- Regulate nonconforming uses — those uses that existed before zoning was adopted but no longer comply. The town can prevent them from expanding, require they end if abandoned for a set period (typically 12 months), and prohibit rebuilding them if destroyed beyond a certain percentage
- Regulate home-based businesses by requiring they remain secondary to residential use, limiting employees, signage, traffic, and noise
- Adopt sign ordinances regulating size, height, placement, and lighting — but content-neutral rules only. A sign ordinance that treats commercial signs differently from political signs based on their message will be struck down under the First Amendment (Reed v. Town of Gilbert, 576 U.S. 155 (2015))
- Create historic districts under §8A-11 to encourage preservation of historic character

WHAT MULLENS CANNOT DO:
- Zone in a way that is arbitrary, discriminatory, or without rational basis — every zoning decision must relate to legitimate land-use goals (health, safety, welfare)
- Adopt content-based sign regulations that treat signs differently based on what they say (First Amendment violation)
- Use zoning to exclude a legitimate land use entirely without justification (can rise to a taking)
- Adopt a zoning ordinance without first preparing or adopting a comprehensive plan (§8A-3-1 requires planning before zoning)
- TIF is available only to Class I, II, and III municipalities — Mullens as Class IV CANNOT use TIF directly (see Section O)

REQUIRED PROCEDURES:
1. Create a Planning Commission (§8A-2-1)
2. Planning Commission prepares a comprehensive plan
3. Draft zoning ordinance consistent with the plan
4. Hold public hearing with proper published notice
5. Governing body adopts ordinance by majority vote
6. Amendments follow §8A-7-8 process (public hearing + notice)
7. Create Board of Zoning Appeals for variances and appeals (§8A-8-1)

KEY CASE LAW:
- Reed v. Town of Gilbert, 576 U.S. 155 (2015): Sign ordinances that regulate based on message content are presumptively unconstitutional. Content-neutral rules (size, height, setback) are fine; content-based rules are not.
- Village of Euclid v. Ambler Realty Co., 272 U.S. 365 (1926): Foundational US Supreme Court case upholding municipal zoning as a valid exercise of police power. Still good law.
- Robinson v. City of Bluefield, 234 W.Va. (WV): WV courts have upheld zoning restrictions so long as they bear a rational relationship to health, safety, and welfare.
- City of Fairmont v. Investors Syndicate: Zoning powers must be expressly granted — Dillon's Rule still constrains how broadly zoning can be applied.

COMMON MISTAKES:
- Adopting zoning before creating a comprehensive plan (procedurally invalid)
- Approving variances too easily — a variance is for hardship unique to the property, not for general neighborhood preferences
- Sign ordinances that distinguish political from commercial signs (unconstitutional)
- Failing to give proper notice before a zoning hearing (voids the action)
- Spot zoning: rezoning one small parcel differently from surrounding land for private benefit — courts disfavor this

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens currently have a comprehensive plan, and does it need to be updated before adopting a zoning ordinance?
2. What is the proper procedure in Wyoming County for adopting or amending a zoning map?
3. Are there any existing nonconforming uses that need to be addressed before zoning is adopted?

=== SECTION B — TAXATION AND FEES ===

GOVERNING STATUTES: WV Code §8-13-1 through §8-13-15 (Municipal Taxation); §8-13-5 (Business & Occupation Tax); §8-13-3 (Hotel Occupancy Tax); §8-13-6 (Amusement Tax); §8-13C-4 and §8-13C-5 (Municipal Sales and Use Tax); §8-13-13 (Special Charges for Services).

WHAT MULLENS CAN DO:
- Impose a Business & Occupation (B&O) tax on businesses operating within town limits (§8-13-5). The B&O is a privilege tax on the gross receipts of doing business. Rate limits apply — the statute caps rates and requires the tax to go into effect only after a minimum 30-day notice period.
- Impose a hotel/motel occupancy tax (§8-13-3)
- Impose an amusement/admission tax up to 2% (§8-13-6)
- Impose a domestic animal tax (§8-13-10)
- Charge fees for municipal services — garbage collection, water, sewer, permits, inspections — so long as the fee is reasonably related to the cost of providing the service (§8-13-13)
- Impose a municipal sales and use tax up to 1% IF the municipality does NOT already impose a B&O tax, under §8-13C-4. If Mullens has a B&O tax, it must repeal it (or get Home Rule Board permission) before adding a sales tax.
- Offer tax abatements or economic incentives within limits set by state law (see Section O)

WHAT MULLENS CANNOT DO:
- Impose a local income tax — WV does not authorize municipal income taxes
- Impose a property tax beyond what §8-13-1 allows (municipalities have limited property tax authority; county assessor controls real property tax)
- Charge a "fee" that is really a tax in disguise — if a fee exceeds the cost of the service it funds, courts will treat it as an unauthorized tax. Example: charging $500/year for a $50 permit is not a fee, it is a tax.
- Impose a B&O tax AND a municipal sales tax simultaneously without Home Rule Board approval
- Impose impact fees on new development without specific statutory authority — WV has not enacted general impact fee enabling legislation, making this legally risky for Mullens without Home Rule

KEY CASE LAW:
- City of Charleston v. Pub. Serv. Comm'n of W. Va. (WV): Fees that generate revenue far exceeding the cost of the service provided are treated as taxes and invalidated unless expressly authorized
- Pittston Co. v. City of Logan (WV): B&O tax rates must comply with statutory caps; excessive rates can be struck down
- Cities Service Gas Co. v. City of Clarksburg (WV): Municipalities cannot impose taxes not authorized by the Legislature — Dillon's Rule applies fully to taxation

COMMON MISTAKES:
- Treating regulatory fees as revenue sources without tracking actual service costs
- Not providing the required notice period before B&O tax takes effect
- Imposing both B&O and sales tax without Home Rule Board approval
- Failing to apply B&O tax uniformly to all businesses in the same classification

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens currently have a B&O tax ordinance, and is it properly structured under §8-13-5?
2. What is the town's current fee schedule, and are any fees potentially vulnerable to being recharacterized as unauthorized taxes?
3. Is there a legal path to impose impact fees on new development under Home Rule?

=== SECTION C — BUSINESS REGULATION ===

GOVERNING STATUTES: WV Code §8-12-5 (general police powers including business regulation); §8-13-4 (municipal license tax); §8-13-5 (B&O tax as business licensing mechanism); WV Code §60A (Controlled Substances, for drug paraphernalia).

WHAT MULLENS CAN DO:
- Require a local business license as a condition of operating within town limits. This is done through a licensing ordinance under §8-12-5 and §8-13-4. The license can include an annual fee.
- Regulate business hours for businesses in residential-adjacent zones (noise and public order basis), provided the regulation is content-neutral and not targeted at a specific type of business based on its message
- Regulate the location of adult businesses using zoning — courts allow municipalities to use time/place/manner zoning restrictions on adult businesses (secondary effects doctrine), but cannot ban them entirely if they have no other place to operate in town (First Amendment, Reno v. ACLU)
- Regulate short-term rentals (Airbnb, VRBO) by requiring registration, safety inspections, limiting the number of guests, and requiring owner contact information — this is a growing area where WV has no preemptive statute yet, leaving municipalities room to act
- Revoke a business license for health, safety, or zoning violations after notice and a hearing

WHAT MULLENS CANNOT DO:
- Ban an entire category of legal business (e.g., payday lenders) outright without specific statutory authority — payday lending is regulated at the state level, and municipalities cannot create a stricter ban without Home Rule
- Regulate business content (what a business sells or says) based on disagreement with the message — First Amendment bars content-based business restrictions
- Require a business license fee so large it effectively bans the business (excessive fines / due process issue)
- Enforce a business regulation inconsistently — applying rules to some businesses but not similar ones creates equal protection exposure

SPECIAL NOTE — SHORT-TERM RENTALS: As of 2025, WV has no statewide preemption of local short-term rental regulation. Mullens can require registration, fees, safety standards, and neighbor-notification requirements. This is a relatively low-litigation area right now but is evolving rapidly.

KEY CASE LAW:
- City of Erie v. Pap's A.M., 529 U.S. 277 (2000): Municipalities can regulate adult businesses through neutral zoning (location, hours) but cannot ban them entirely
- Masterpiece Cakeshop v. Colorado Civil Rights Comm'n, 584 U.S. 617 (2018): Government cannot target a business for religious or viewpoint reasons under the guise of regulation
- Rogers v. City of South Charleston, 256 S.E.2d 557 (WV 1979): Municipal licensing authority must be expressly granted; broad licensing schemes not rooted in express statute can be invalidated

COMMON MISTAKES:
- Creating a business license scheme that looks like a revenue tax rather than a regulatory tool
- Trying to ban payday lenders or other regulated industries without Home Rule authority
- Regulating short-term rentals as "commercial hotels" under hotel codes without adapting language to residential contexts
- Not including appeal rights in a license revocation procedure (due process requirement)

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens have a business license ordinance, and does it need to be updated to cover short-term rentals?
2. Can we restrict payday lenders or check-cashing businesses through zoning or is that preempted by state law?
3. What is the process for revoking a business license, and what due process steps are required?

=== SECTION D — STREETS, SIDEWALKS, AND PUBLIC RIGHT-OF-WAY ===

GOVERNING STATUTES: WV Code §8-12-5 (municipal authority over streets); §8-22-1 et seq. (municipal street powers); §8-21-1 et seq. (street vacations); WV Code §31H (Small Wireless Facilities Deployment Act); Federal Telecommunications Act of 1996 §253 and §332 (wireless preemption).

WHAT MULLENS CAN DO:
- Maintain, repair, and improve all streets within town limits
- Regulate traffic and parking within town limits, including restricting parking to certain hours or requiring permits for overnight parking (§8-12-5)
- Vacate (formally abandon) a public street that is no longer needed. The process under WV law requires: a petition or council resolution, a public hearing with proper notice, a finding that vacation serves the public interest, and an ordinance vacating the street. Abutting property owners typically receive title to the centerline of the vacated right-of-way.
- Require adjacent property owners to maintain sidewalks in safe condition and hold them liable for injuries caused by their negligence (this is a matter of local ordinance and common law)
- Regulate placement of utility lines, poles, and equipment in the right-of-way through franchise agreements and right-of-way permits
- Regulate placement of small wireless facilities (cell nodes) in the right-of-way subject to limits in the WV Small Wireless Facilities Deployment Act (§31H) and federal shot clock rules

WHAT MULLENS CANNOT DO:
- Vacate a street if it leaves a property owner without access to a public road (cannot landlocked private property)
- Prohibit wireless carriers from placing small cell equipment in the right-of-way — federal law (47 U.S.C. §332) and WV §31H limit the town's ability to deny placement; the town can regulate aesthetics and placement but cannot effectively ban wireless infrastructure
- Charge wireless carriers fees for right-of-way use that exceed the town's actual administrative costs — courts and the FCC have cracked down on excessive right-of-way fees for wireless
- Impose shot clock violations: the town must act on wireless facility applications within 60 days (co-location) or 90 days (new structures) or the application is deemed approved

KEY CASE LAW:
- City of Huntington v. Bacon, 196 W. Va. 457 (1996): Municipality has broad authority over its streets but must compensate for takings if street access is eliminated
- T-Mobile South LLC v. City of Roswell, 574 U.S. 293 (2015): City must provide written reasons when denying a wireless tower application; failure to do so in writing within the shot clock is reversible error
- WV Code §31H (enacted 2018): codifies the state framework for small wireless facility deployment in rights-of-way, limits fees, and sets timelines

COMMON MISTAKES:
- Vacating streets without checking for utility easements that survive the vacation
- Denying wireless facility applications without written, specific, record-based reasons (automatic federal law violation)
- Charging wireless carriers fees that exceed actual cost recovery (FCC has issued rules on this)
- Failing to maintain sidewalks the town itself owns, creating municipal liability

QUESTIONS FOR THE CITY ATTORNEY:
1. What is the exact process to vacate a street in Mullens, and what happens to utility easements in that right-of-way?
2. Has the town adopted a right-of-way management ordinance for telecommunications equipment?
3. Are we exposed to liability for sidewalk injuries, and should we adopt a sidewalk maintenance ordinance?

=== SECTION E — PUBLIC SAFETY ORDINANCES ===

GOVERNING STATUTES: WV Code §8-12-5 (general police powers); §7-1-12 (curfew authority for counties, municipal curfews prevail over county); §8-12-5(22) (fireworks); WV Code Chapter 20 (natural resources/burning); §19-20-1 et seq. (animal control); WV Code §60A (drug paraphernalia).

NOISE ORDINANCES:
Mullens can adopt a noise ordinance. The key is using objective, measurable standards rather than subjective terms. Defensible approaches: decibel limits measured at the property line (e.g., no more than 65 dB during daytime, 55 dB nighttime), prohibiting specific activities at specific hours (e.g., no construction before 7 a.m. or after 9 p.m.), or prohibiting noise plainly audible at 50 feet from the source. Dangerous language: "unreasonably loud," "disturbing the peace," "offensive noise" without objective backup — courts have struck these down as void for vagueness.

CURFEWS:
Mullens can adopt a juvenile curfew ordinance under its general police powers. WV Code §7-1-12 explicitly authorizes counties to do this, and when a municipal curfew conflicts with a county curfew, the municipal ordinance prevails. Curfews must include exemptions for minors traveling to/from work, school, religious activities, and accompanied by a parent. Courts have upheld juvenile curfews when narrowly drawn with proper exemptions (Schleifer v. City of Charlottesville, 159 F.3d 843 (4th Cir. 1998)).

FIREWORKS:
WV Code §8-12-5 gives municipalities authority to "regulate or prohibit" fireworks within town limits. Mullens can ban consumer fireworks, restrict them to certain times/dates, or require permits. This is one of the cleaner regulatory areas with little litigation risk if standards are clear.

OPEN BURNING:
Municipalities can restrict or ban open burning within town limits as a public health and fire safety measure. This must coordinate with WV Division of Forestry regulations (§19-3-1 et seq.), which govern burning on state lands and during dry conditions. A local ban on open burning is generally preemptive within town limits.

DANGEROUS DOGS AND ANIMAL CONTROL:
WV Code §19-20-1 et seq. governs animal control at the state level. Municipalities can adopt stricter local animal control ordinances. Dangerous dog ordinances are permissible if they: (1) define "dangerous dog" based on behavior (has bitten, has attacked) rather than breed alone, (2) require registration/microchipping of dangerous dogs, (3) impose confinement/muzzle requirements. Pure breed-specific legislation (BSL) — banning a specific dog breed — has been challenged in courts nationwide and many states have preempted it; WV has not expressly banned BSL but courts have been skeptical. Behavior-based ordinances are far more defensible.

DRUG PARAPHERNALIA:
WV Code §60A-4-412 makes possession of drug paraphernalia a misdemeanor at the state level. A municipality can reinforce this through a local ordinance, but cannot create penalties more severe than state law for the same conduct (preemption risk). Focus local ordinances on sales of paraphernalia in proximity to schools or parks.

KEY CASE LAW:
- Schleifer v. City of Charlottesville, 159 F.3d 843 (4th Cir. 1998): Upheld juvenile curfew with adequate exemptions; WV municipalities should model their curfew on this framework
- Grayned v. City of Rockford, 408 U.S. 104 (1972): Noise ordinance struck down for vagueness; established that noise rules must give fair notice of what is prohibited
- American Dog Owners Assoc. v. City of Lynn, 533 N.E.2d 642 (Mass. 1989): Breed-specific bans upheld in some jurisdictions but subject to equal protection challenge — behavior-based is safer

COMMON MISTAKES:
- Noise ordinances using only subjective language with no objective standard
- Curfew ordinances with no exemptions for legitimate activities (school, work, religion) — courts will strike these
- Dangerous dog ordinances based on breed rather than behavior — vulnerable to challenge and practically difficult to enforce
- Fireworks ordinances that conflict with state-issued fireworks permits without specifically addressing the conflict

QUESTIONS FOR THE CITY ATTORNEY:
1. Does our existing noise ordinance use objective decibel standards, or is it vulnerable to a vagueness challenge?
2. Can we ban consumer fireworks entirely, or does the state fireworks permitting scheme preempt us?
3. What exemptions does our curfew ordinance need to survive constitutional scrutiny?

=== SECTION F — HOUSING AND RENTAL REGULATIONS ===

GOVERNING STATUTES: WV Code §8-12-16 (unsafe structures, applies to rental as well as vacant); §8-12-5 (general police powers for habitability); Federal Fair Housing Act, 42 U.S.C. §3604 (prohibits discrimination in housing); Federal Fair Housing Amendments Act of 1988.

RENTAL PROPERTY INSPECTIONS AND REGISTRATION:
Mullens can require landlords to register rental properties and submit to periodic inspections for habitability. This is grounded in §8-12-5 (public health authority) and §8-12-16 (unsafe structures). The town cannot conduct warrantless inspections of occupied rental units — it must either obtain consent or get an administrative search warrant. A rental registration program is legally straightforward: require registration, charge a fee, conduct inspections with proper notice.

HABITABILITY STANDARDS:
If Mullens has adopted the State Building Code (§8-12-13), it can enforce minimum habitability standards through code enforcement. The town cannot impose standards stricter than the State Building Code without Home Rule. Even without the state code, §8-12-16 allows action against structures that are "unsanitary, dangerous, or detrimental" to public health — which covers most severe habitability failures (no heat, sewage backup, structural collapse risk).

CHRONIC NUISANCE PROPERTIES:
A "chronic nuisance" or "crime-free housing" ordinance holds landlords responsible when their properties generate repeated police calls for drug activity, violence, or other crimes. Mullens can adopt such an ordinance under §8-12-5. CRITICAL WARNING: These ordinances have drawn fair housing scrutiny because they can have a disparate impact on domestic violence victims (who call police frequently) and on racial minorities. The Department of Housing and Urban Development has warned against nuisance ordinances that penalize 911 calls. Best practice: exempt calls by victims of domestic violence, and focus on drug manufacturing, weapons offenses, and repeat criminal activity rather than calls for police service generally.

FAIR HOUSING ACT LIMITS:
The Federal Fair Housing Act prohibits municipalities from adopting housing regulations that have a discriminatory purpose or effect based on race, color, national origin, religion, sex, disability, or familial status. Local housing ordinances that facially neutral but disproportionately affect a protected class can still be struck down under "disparate impact" theory (Texas Dept. of Housing v. Inclusive Communities Project, 576 U.S. 519 (2015)). Mullens must ensure rental registration, inspection, and chronic nuisance programs are enforced uniformly and do not target neighborhoods that are predominantly of one race or class.

KEY CASE LAW:
- Texas Dept. of Housing v. Inclusive Communities Project, 576 U.S. 519 (2015): Federal Fair Housing Act covers disparate impact claims, not just intentional discrimination. Local housing ordinances that have a racially disproportionate effect can be challenged even without discriminatory intent.
- Briggs v. City of Rolling Meadows (7th Cir.): Nuisance ordinances that penalize landlords for domestic violence 911 calls may violate the Fair Housing Act by discouraging victims from calling for help
- Gladstone Realtors v. Village of Bellwood, 441 U.S. 91 (1979): Municipalities cannot use housing regulations as a tool of racial steering

COMMON MISTAKES:
- Conducting warrantless inspections of occupied rental units
- Enforcing chronic nuisance ordinances against landlords whose tenants call 911 for domestic violence
- Applying rental inspection programs only in certain neighborhoods (equal protection + fair housing risk)
- Setting rental habitability standards above the State Building Code without Home Rule authority

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens have authority to require landlord registration and periodic rental inspections, and what warrant procedures apply?
2. How should we draft a chronic nuisance ordinance to avoid fair housing liability?
3. Can we require that all rental units be brought into compliance with the state building code before a rental license is issued?

=== SECTION G — EMPLOYMENT AND PERSONNEL ===

GOVERNING STATUTES: WV Code §21-5C-1 (state minimum wage — preempts local); §8-14-1 et seq. (municipal police civil service); WV Code §6C-1-1 et seq. (WV Whistle-Blower Law); WV Code §6B (Ethics Act); WV Code §21-3-1 et seq. (workplace safety).

MINIMUM WAGE:
Mullens CANNOT set a local minimum wage above the state minimum wage. WV Code §21-5C-7 expressly preempts local minimum wage ordinances — the state has occupied this field entirely. This is one of the clearest preemption cases in WV municipal law. If Mullens passed a local minimum wage ordinance, it would be void from day one.

CIVIL SERVICE / MUNICIPAL EMPLOYEES:
WV Code §8-14-1 et seq. governs civil service for municipal police departments. For other municipal employees (public works, administration), the town has more flexibility in setting its own personnel policies, hiring/firing procedures, and compensation. However, basic employment protections apply: employees cannot be fired for constitutionally protected reasons (speech, association, race, sex under federal law), and the Whistle-Blower Law protects employees who report violations of law.

WV WHISTLE-BLOWER LAW (§6C-1-1):
A municipal employee who reports a violation of law by the town government — to the town itself, to a state agency, or to law enforcement — is protected from retaliation. Retaliating against a whistle-blower (firing, demoting, disciplining) exposes the town to a civil lawsuit with back pay, reinstatement, and attorney fees as potential remedies. This applies to council decisions as well — if a council member votes to fire an employee who reported a code violation, that could be retaliation.

ANTI-DISCRIMINATION ORDINANCES:
Mullens CANNOT adopt anti-discrimination ordinances broader than state and federal law without Home Rule. WV does not have a state anti-discrimination law protecting LGBTQ+ employees in the public sector equivalent to Title VII. However, under Bostock v. Clayton County, 590 U.S. 644 (2020), federal Title VII protects municipal employees from discrimination based on sexual orientation and gender identity. The town must comply with federal Title VII regardless of state or local law.

DRUG TESTING:
Municipalities can drug test employees in safety-sensitive positions (police, equipment operators) without violating the Fourth Amendment. For non-safety-sensitive positions, random drug testing raises constitutional concerns. Pre-employment and post-accident testing are generally permissible. The town should have a written drug testing policy adopted by ordinance or resolution.

KEY CASE LAW:
- Bostock v. Clayton County, 590 U.S. 644 (2020): Title VII's prohibition on sex discrimination includes discrimination based on sexual orientation and gender identity — applies to all municipal employers
- Connick v. Myers, 461 U.S. 138 (1983): Public employees have First Amendment protection for speech on matters of public concern, but not for speech on purely private employment grievances — critical for understanding what firings are protected
- National Treasury Employees Union v. Von Raab, 489 U.S. 656 (1989): Government drug testing of safety-sensitive employees is permissible under the Fourth Amendment

COMMON MISTAKES:
- Passing a local minimum wage ordinance (automatically preempted by state law)
- Firing an employee without documentation, especially if the termination could be characterized as retaliation for protected activity
- Not having a written personnel manual — disputes about whether proper procedures were followed become very expensive
- Failing to maintain records of hiring, discipline, and termination decisions (essential in litigation)

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens have a current personnel manual, and does it comply with Title VII, the ADA, and the WV Whistle-Blower Law?
2. What civil service protections apply to Mullens police officers specifically, and what process is required to terminate one?
3. Can we require drug testing for all town employees, and what policy do we need in place first?

=== SECTION H — PROCUREMENT AND CONTRACTS ===

GOVERNING STATUTES: WV Code §8-12-10 (municipal purchasing authority); §8-27-23 (competitive bidding for municipal authorities — construction over $25,000); WV Code §6B (Ethics Act — conflict of interest); WV Code §6D (public contracts); §8-11-4 (ordinance adoption procedures applicable to some contracts).

COMPETITIVE BIDDING:
Mullens must use competitive bidding for major purchases. The specific threshold is set by the town's own purchasing ordinance (§8-12-10 authorizes towns to set their own procedures). Best practice and common local ordinance standards: formal sealed bids for purchases over $25,000–$50,000; competitive quotes (at least three) for purchases $5,000–$25,000; open market purchase below $5,000. Construction contracts over $25,000 require formal sealed bids with public notice published at least 14 days before bid opening (§8-27-23).

SOLE SOURCE CONTRACTS:
A sole source contract (awarding a contract without bidding) is permitted only when there is genuinely only one available provider. This is narrow — it does not mean "we prefer this vendor" or "this is the cheapest we found without looking." The justification must be documented and approved by the governing body. Improper sole source awards are a common source of ethics complaints and audit findings.

CONFLICT OF INTEREST:
Under the WV Ethics Act (§6B-2-5), a council member who has a personal financial interest in a contract before the council MUST disclose that interest and RECUSE from the vote. Voting on a contract from which you personally benefit (or your family benefits) is a violation of the Ethics Act and can result in personal liability, fines, and potentially criminal prosecution. This applies to the mayor as well. "Financial interest" includes contracts with businesses the council member owns, businesses where their spouse is employed, or businesses in which they hold stock.

COMMON MISTAKES:
- Splitting a large purchase into smaller pieces to avoid competitive bidding (bid splitting — a serious ethics violation)
- Awarding sole source contracts because of personal relationships rather than genuine unavailability
- Council members voting on contracts with their own businesses without disclosing the conflict
- Not documenting the bid process — when there is no paper trail, it looks like violations occurred even if they didn't
- Failing to check if a vendor is debarred from government contracts

QUESTIONS FOR THE CITY ATTORNEY:
1. What are Mullens' current competitive bidding thresholds, and do they need to be updated by ordinance?
2. What is the proper procedure when a council member has a financial interest in a contract being voted on?
3. Does the town have a written procurement policy, and does it comply with any federal grant requirements we are subject to?

=== SECTION I — OPEN MEETINGS AND PUBLIC RECORDS ===

GOVERNING STATUTES: WV Code §6-9A-1 et seq. (Open Governmental Proceedings Act — "Sunshine Law"); WV Code §29B-1-1 et seq. (Freedom of Information Act — FOIA).

OPEN MEETINGS (§6-9A):
Every meeting of a quorum of the town council is a "meeting" subject to the Open Governmental Proceedings Act. This means: proper advance notice must be given, the meeting must be open to the public, minutes must be kept, and no official decisions can be made outside of an open meeting. A "meeting" is any gathering of a quorum to deliberate or decide public policy — this includes informal gatherings, walking quorums, and serial one-on-one conversations designed to build consensus outside a meeting room.

NOTICE REQUIREMENTS: Regular meetings — agenda and notice published per the town's schedule. Special meetings — at least 3 days advance notice with the reason stated. Emergency meetings — as much notice as practicable, with the emergency specified.

EXECUTIVE SESSION: The council can close a meeting to the public only for specific authorized reasons listed in §6-9A-4. These include: personnel matters (individual employee performance, hiring, firing); pending or threatened litigation; real estate purchase/sale negotiations where disclosure would harm the town's position; and matters of law enforcement. The presiding officer must state the legal basis for executive session publicly before going in. No official votes or decisions can be made in executive session — the vote must happen in open session.

FOIA (§29B-1):
Any person can request any public record from the town. The town must respond within 5 business days — either by providing the record, providing a date when it will be provided, or stating the specific legal exemption that applies. Blanket refusals without citing an exemption are violations. Fees for copies must be reasonable.

EXEMPT RECORDS include: personnel files, law enforcement investigative records, attorney-client communications, records that would give unfair commercial advantage, and security-sensitive information. Even these exemptions are not automatic — the town must specifically invoke the exemption and, in some cases, the court will review the records in camera to verify the exemption applies.

PENALTIES: Violations of the Open Meetings Act can result in fines up to $500 for a first offense. Actions taken in violation of the Open Meetings Act can be voided by a court. Courts can award attorney fees to a person who successfully sues to enforce FOIA.

KEY CASE LAW:
- State ex rel. Boner v. Kanawha Cty. Bd. of Educ., 197 W.Va. 176 (1996): Meeting requirement applies to gatherings of a quorum even when no formal vote is taken — informal deliberations in private violate the Open Meetings Act
- Hechler v. Casey, 175 W.Va. 434 (1985): FOIA is to be liberally construed in favor of disclosure; exemptions are narrowly construed
- Daily Gazette Co. v. Development Office, 206 W.Va. 51 (1999): Economic development records claimed as exempt were ordered disclosed after the commercial competition was complete — exemptions don't last forever

COMMON MISTAKES:
- Council members texting or emailing each other about pending votes outside of a noticed meeting (this can be an Open Meetings violation if it constitutes deliberation by a quorum)
- Going into executive session without stating the specific legal basis on the record
- Making decisions in executive session rather than in open session
- Ignoring FOIA requests or responding after 5 days without explanation
- Withholding records without citing a specific statutory exemption

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens' current meeting notice procedure comply with the Open Governmental Proceedings Act?
2. What records does the town generate that could be subject to FOIA, and do we have a retention and response policy?
3. Are there any past council actions that might be vulnerable to challenge for Open Meetings violations?

=== SECTION J — MUNICIPAL LIABILITY AND IMMUNITY ===

GOVERNING STATUTES: WV Code §29-12A-1 et seq. (Governmental Tort Claims and Insurance Reform Act); 42 U.S.C. §1983 (federal civil rights liability); WV Code §29-12A-4 (governmental vs. proprietary functions); §29-12A-5 (immunities from liability).

WHEN MULLENS IS IMMUNE:
Under §29-12A-5, a municipality is immune from liability for: legislative decisions (passing or not passing ordinances), judicial or quasi-judicial decisions (rulings by the town's hearing board), discretionary decisions (policy choices requiring judgment), and a long list of specific activities including the issuance or denial of permits, and claims arising from natural conditions on unimproved public land. The key word is "discretionary" — if a town had a choice about whether to act, it is generally immune.

WHEN MULLENS IS NOT IMMUNE:
The town CAN be sued and lose for: negligent maintenance of streets, sidewalks, and public buildings (ministerial duties — once you decide to maintain them, you must do it non-negligently); negligent operation of town vehicles; failure of utilities the town operates; and certain police misconduct. The distinction is: once the town decides to do something (maintain a sidewalk), it must do it properly. The immunity covers the decision to act; not the negligent execution.

INDIVIDUAL LIABILITY OF COUNCIL MEMBERS AND MAYOR:
Under §29-12A-5(b), individual employees and officials are immune from personal liability UNLESS their act was (1) manifestly outside the scope of employment, (2) done with malicious purpose, in bad faith, or in a wanton/reckless manner, or (3) expressly made liable by statute. This means a council member voting on a legitimate ordinance is protected. A council member who orders the demolition of someone's house out of a personal vendetta, without following procedures, is not protected.

FEDERAL §1983 LIABILITY:
Under 42 U.S.C. §1983, any person deprived of federal constitutional rights by government action can sue. Municipalities — including small towns — can be sued under §1983 for constitutional violations that result from an official policy or custom (Monell v. Dept. of Social Services, 436 U.S. 658 (1978)). Individual officials acting "under color of law" can also be sued personally. Key areas of §1983 exposure for Mullens: unlawful property seizures/demolitions without due process; selective enforcement targeting protected classes; and police misconduct.

INSURANCE:
WV Code §29-12A requires municipalities to maintain liability insurance. The town should have: (1) general liability coverage, (2) law enforcement liability coverage if it has a police department, (3) public officials/errors and omissions coverage (protects council members and mayor for official decisions), and (4) property coverage. Under-insurance is a serious risk — a judgment against the town exceeding policy limits comes out of the town's budget.

KEY CASE LAW:
- Monell v. Dept. of Social Services, 436 U.S. 658 (1978): Municipalities can be sued under §1983 for constitutional violations that are the result of official policy or entrenched custom — even if no single person is to blame
- State v. Chase Securities, 188 W.Va. 356 (1992): WV court established that the governmental/proprietary distinction matters for immunity analysis; water and sewer operation is often a proprietary function with less immunity
- Parkulo v. W. Va. Bd. of Probation and Parole, 199 W.Va. 161 (1997): Individual employees are not personally immune if they act with malice or in bad faith — bad-faith enforcement actions expose individual officials

COMMON MISTAKES:
- Not maintaining adequate insurance coverage (especially law enforcement liability)
- Failing to follow procedures before demolishing property (creates both §1983 and state law liability)
- Believing council members are automatically immune no matter what — bad-faith or malicious acts strip immunity
- Operating municipal water or sewer systems without recognizing reduced immunity exposure for proprietary functions

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens carry adequate public officials errors and omissions insurance, and when was it last reviewed?
2. Are there any past code enforcement actions or demolitions that may expose the town to §1983 liability?
3. What constitutes "malicious purpose" or "bad faith" under the WV immunity statute, and how do we document that we acted in good faith?

=== SECTION K — ANNEXATION ===

GOVERNING STATUTES: WV Code §8-6-1 et seq. (Annexation); §8-6-2 (petition procedure); §8-6-4a (annexation without election in counties with urban growth boundaries); §8A-7-1 (zoning in annexed areas).

HOW ANNEXATION WORKS:
Standard annexation requires a petition by 5% or more of the town's freeholders (property owners) AND a majority vote of the freeholders of both the territory to be annexed AND the municipality. The process involves: filing a petition with the governing body, a public hearing, a vote, and certification to the county commission. The county commission can review and approve, modify, or deny. The process is fairly involved for a small town.

ALTERNATIVE — ANNEXATION WITHOUT ELECTION (§8-6-4a):
If Wyoming County has adopted a countywide zoning ordinance that includes urban growth boundaries, Mullens can pursue annexation without an election for territory within those growth boundaries. This streamlined process requires council action and county commission approval but not a public vote. This is potentially relevant if Wyoming County has a comprehensive zoning plan.

WHAT THE TOWN MUST DO AFTER ANNEXATION:
The newly annexed territory becomes fully part of the municipality for all purposes — taxation, services, ordinances, and representation. The town must begin providing municipal services (police, streets, utilities if applicable) within a reasonable time. It cannot annex territory and then fail to provide services — that creates both legal and political problems.

RESISTANCE TO ANNEXATION:
Property owners and residents in the territory to be annexed can resist by voting against the annexation in the required election. They can also challenge the annexation in circuit court on procedural grounds. Common grounds for challenge: improper boundary description, failure to follow notice requirements, territory is not contiguous to the municipality.

KEY CASE LAW:
- State ex rel. City of Huntington v. Lombardo, 149 W.Va. 671 (1965): Annexation must strictly follow statutory procedure; failure to comply with any procedural step voids the annexation
- City of Morgantown v. Pratt (WV): Municipalities cannot annex territory and then fail to extend services — courts have ordered service delivery as a condition of maintaining annexation

COMMON MISTAKES:
- Annexing territory the town lacks the capacity to serve (fiscally and operationally)
- Imprecise legal descriptions of territory to be annexed (invalidates the proceeding)
- Not updating zoning, licensing, and ordinances to reflect annexed territory
- Failing to notify all property owners in the territory of the proposed annexation (due process requirement)

QUESTIONS FOR THE CITY ATTORNEY:
1. Is any territory adjacent to Mullens currently being considered for annexation, and what is the proper process?
2. Does Wyoming County have an urban growth boundary plan that would allow streamlined annexation?
3. What service obligations would the town incur if it annexed adjacent unincorporated areas?

=== SECTION L — UTILITIES AND INFRASTRUCTURE ===

GOVERNING STATUTES: WV Code §8-20-1 et seq. (municipal utilities — water, sewer, etc.); §24-1-1 et seq. (Public Service Commission jurisdiction over utilities); WV Code §16-13-1 et seq. (county and municipal public service districts); §8-12-5(28) (municipal authority to own/operate utilities); Federal Clean Water Act §402 (MS4 stormwater permits).

MUNICIPAL WATER AND SEWER:
Mullens can own and operate a water system, sewer system, and other utilities under §8-20-1. This is a "proprietary function" — meaning the immunity protections under the Tort Claims Act are more limited when the town acts as a utility provider rather than as a government. Setting rates, collecting fees, and operating utilities are all within town authority.

RATE SETTING:
The town can set water and sewer rates by ordinance. However, if the utility serves territory outside the town, rate-setting may come under the jurisdiction of the WV Public Service Commission (PSC). The PSC regulates rates for public utilities providing service to the public — if Mullens' water system serves customers outside town limits, the PSC likely has jurisdiction over rates for those customers. Within town limits, the town council sets rates.

MANDATORY CONNECTION:
Municipalities can require property owners within the service area to connect to the municipal water or sewer system within a reasonable time, especially where private wells or septic systems pose a public health risk. This requires proper notice, a reasonable compliance period, and an inspection/enforcement mechanism.

STORMWATER/MS4:
If Mullens is a designated MS4 (Municipal Separate Storm Sewer System) community under the Clean Water Act, it has federal obligations: adopt a Stormwater Management Program, prohibit illicit discharges, control construction site runoff, and file periodic reports with the WV DEP. Failure to comply with MS4 permit requirements can result in significant federal fines. Small municipalities sometimes do not realize they have these obligations — check with WV DEP.

KEY CASE LAW:
- State v. Chase Securities (WV, 1992): Water and sewer operations are proprietary functions — the town has less immunity when acting as a utility operator than when acting in a purely governmental capacity
- Williamson v. City of Morgantown (WV): Municipality that extends water service outside its limits creates a service obligation it cannot easily revoke; terminating service can constitute a taking or breach of contract

COMMON MISTAKES:
- Setting water/sewer rates for out-of-town customers without checking PSC jurisdiction
- Failing to maintain the water system to the point where it fails — creates both tort liability and regulatory violations
- Not knowing whether Mullens has MS4 permit obligations and failing to comply
- Terminating utility service to a property without proper notice (due process issue)

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens serve water or sewer customers outside town limits, and if so, is rate-setting subject to PSC oversight?
2. Does Mullens have MS4 permit obligations under the Clean Water Act, and are we in compliance?
3. What is the proper procedure for mandatory connection to municipal water or sewer when a property owner refuses?

=== SECTION M — EMERGENCY POWERS ===

GOVERNING STATUTES: WV Code §8-12-5 (general municipal police powers); §15-5-1 et seq. (WV Division of Homeland Security and Emergency Management — primarily Governor-level); §8-11-1 (ordinances to make municipal powers effective); WV Code §15-5-6 (Governor's emergency powers — applicable backdrop for local action).

LOCAL EMERGENCY DECLARATIONS:
There is no WV statute that explicitly grants municipalities the power to declare their own formal "state of emergency" with the same scope as a gubernatorial declaration. However, under general police power authority (§8-12-5), a mayor and council can:
- Declare a local emergency situation through a resolution or proclamation
- Invoke emergency spending authority under the town's budget ordinance
- Issue emergency orders protecting public health and safety
- Coordinate with county and state emergency management

WHAT LOCAL EMERGENCIES CAN DO:
A local emergency declaration under general police powers can: allow expedited contracting (bypassing normal bidding for urgent repairs), authorize emergency spending, direct town employees and resources, request state or federal emergency assistance, and impose emergency curfews or access restrictions. The key is that even emergency actions must have a basis in the town's existing police powers — the emergency does not create new powers, it accelerates the use of existing ones.

STATE/FEDERAL INTERACTION:
The Governor controls formal state emergency declarations under §15-5-6. COVID-era litigation (2020-2022) established in WV and nationally that: (1) local emergency orders that conflict with the Governor's emergency orders are preempted, (2) localities cannot be more restrictive than the Governor's order on constitutional matters like church closures and firearms, and (3) emergency powers are temporary and must have a defined duration. A post-COVID WV statutory change (§15-5-6(k)) explicitly limits local health officers from imposing restrictions more severe than the Governor's executive order without express gubernatorial authorization.

KEY CASE LAW:
- Friends of Devito v. Wolf (Pa. 2020): State courts upheld broad gubernatorial emergency powers but noted they require legislative check after a defined period — WV courts observed this trend
- Mingo County Board of Health v. Maynard (WV): Local health board actions during COVID were subject to challenge where they exceeded state authorization; illustrated limits of local health emergency authority
- Post-COVID WV legislation (2021-2022): WV Legislature significantly curtailed executive emergency powers after COVID, requiring legislative approval for extensions — affects both Governor and, by implication, local officials who claim emergency authority

COMMON MISTAKES:
- Assuming an emergency declaration creates new legal powers the town doesn't otherwise have
- Continuing emergency orders indefinitely without regular review and re-authorization
- Entering into emergency contracts without proper documentation (creates audit and ethics exposure)
- Taking emergency action that conflicts with an active Governor's executive order

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens have an emergency operations plan, and does it address the town's spending authority during a declared emergency?
2. What bidding and procurement procedures can be waived during a local emergency, and what documentation is required?
3. What are the limits on our emergency authority given post-COVID changes to WV emergency powers law?

=== SECTION N — ORDINANCE ADOPTION AND GOVERNANCE ===

GOVERNING STATUTES: WV Code §8-11-4 (ordinance adoption procedure); §8-5-1 et seq. (municipal officers and governance); §8-3-3 (quorum requirements); WV Code §6B-2-5 (Ethics Act — conflict of interest and recusal).

HOW TO PROPERLY PASS AN ORDINANCE IN WV:
Under §8-11-4, every ordinance must be:
1. Read by title at NOT LESS THAN TWO separate meetings of the governing body, with at least one week intervening between each meeting (unless a council member demands a full reading — then it must be read in full)
2. For revenue-raising ordinances: published as a Class II legal advertisement at least 5 days before final adoption, with notice of where the public can inspect the full text
3. Adopted by a majority vote of the full governing body (not just those present — quorum rules apply)
4. The effective date is typically 30 days after adoption unless otherwise specified, or immediately upon adoption if the ordinance states an emergency

QUORUM:
A quorum is a simple majority of the governing body. For a 5-member council, that is 3. You cannot legally conduct business without a quorum. If a council member recuses due to a conflict of interest, and that drops attendance below quorum, business cannot proceed.

RECUSAL:
Under the WV Ethics Act (§6B-2-5), a public official with a personal financial interest in a matter before the governing body must: (1) disclose the conflict publicly on the record, (2) recuse from deliberation AND the vote, and (3) leave the meeting room during discussion of that item. Failure to recuse when required can result in a personal Ethics Act violation with fines up to $5,000 per violation.

ROBERT'S RULES:
WV law does not require municipalities to follow Robert's Rules of Order. The town can adopt its own rules of procedure. However, many towns do adopt Robert's Rules by reference in their bylaws. If adopted, they must be followed consistently — selective application creates equal protection and procedural challenges.

RECALL:
WV law does not provide a general statutory recall mechanism for municipal officials. Removal of a mayor or council member in WV requires a quo warranto proceeding (a legal challenge to the right to hold office) or impeachment under the municipal charter. This is essentially a court action, not a voter referendum.

SPECIAL ELECTIONS:
Vacancies on the town council are filled by a special election called by the council, or by appointment if the vacancy occurs within a certain period before the next regular election. WV Code §8-5-7 and related sections govern the process.

COMMON MISTAKES:
- Adopting an ordinance at a single meeting without the required two-reading interval (void ordinance)
- Failing to publish revenue-raising ordinances before adoption
- Council members with conflicts of interest failing to recuse (Ethics Act violation)
- Conducting business without a quorum and then having actions challenged
- Not recording recusal and conflict disclosures in the meeting minutes

QUESTIONS FOR THE CITY ATTORNEY:
1. Does Mullens have a standard ordinance adoption checklist to ensure the two-reading and publication requirements are always met?
2. What is the procedure if a council member refuses to recuse despite an obvious conflict of interest?
3. How does the town fill a vacancy on the council, and what is the timeline?

=== SECTION O — ECONOMIC DEVELOPMENT ===

GOVERNING STATUTES: WV Code §7-11B-1 et seq. (WV Tax Increment Financing Act — TIF); §8-38-1 et seq. (Economic Opportunity Development Districts); §8-12-5 (general authority to promote economic welfare); WV Code Chapter 5B (Economic Development Act of 1985); WV Code §54-2-14 (eminent domain — economic development post-Kelo); WV CDBG program administered through WV Development Office.

TAX INCREMENT FINANCING (TIF):
CRITICAL LIMITATION FOR MULLENS: WV Code §7-11B-7 authorizes TIF only for Class I, Class II, and Class III municipalities. Mullens, as a Class IV municipality, CANNOT use TIF directly under the current statute. This is a significant limitation. To use TIF, Mullens would need to either: (a) grow its population to Class III status, (b) work through Wyoming County (county commissions can create TIF districts), or (c) seek a legislative change. This is worth raising with state legislators.

ECONOMIC OPPORTUNITY DEVELOPMENT DISTRICTS (§8-38):
Class IV municipalities may participate in Economic Opportunity Development Districts, which allow a special district excise tax to fund development expenditures. This requires application to the WV Development Office and Legislative authorization. It is more complex than TIF but is available to smaller municipalities.

INCENTIVES — WHAT MULLENS CAN DO:
- Offer property tax abatements within the limits of state law (WV Code §11-6B allows industrial development abatements)
- Offer to forgive or defer municipal fees (permitting fees, B&O tax exemptions for new businesses) as incentives
- Create a local development authority or economic development corporation to manage and promote development
- Apply for CDBG funds through the WV Development Office for business development, infrastructure, and housing rehabilitation
- Participate in state enterprise zone programs if Wyoming County is designated

EMINENT DOMAIN AFTER KELO:
The U.S. Supreme Court in Kelo v. City of New London, 545 U.S. 469 (2005) allowed economic development takings for private developers. WV responded quickly: WV Code §54-2-14 (enacted post-Kelo) requires that any economic development taking must primarily benefit the public, not a private developer. The WV constitutional provision on takings is stricter than federal law — the WV Constitution requires a "public use" and WV courts have read this more narrowly than the federal standard. Using eminent domain to take private property and give it to another private developer for economic development is very high-risk in WV.

CDBG PROGRAM:
Federal Community Development Block Grants flow through the WV Development Office. Eligible uses include: housing rehabilitation, infrastructure improvements, business development in low-to-moderate-income areas, public facilities. Mullens, as a small low-income community, likely qualifies for CDBG funds. Application requires documentation of need, a citizen participation process, and compliance with federal program rules (Davis-Bacon prevailing wage, environmental review, equal opportunity). Contact the WV Development Office Region 4 representative.

KEY CASE LAW:
- Kelo v. City of New London, 545 U.S. 469 (2005): Federal Constitution permits economic development takings but states can be more restrictive — and WV is
- WV Code §54-2-14 (post-Kelo reform): WV Legislature limited economic development takings to require a primary public benefit — private developer benefit alone is not sufficient
- Mountaineer Gas Co. v. Divita, 185 W.Va. 346 (1991): WV courts have consistently read "public use" narrowly in the takings context

COMMON MISTAKES:
- Assuming Mullens can create a TIF district (it cannot as a Class IV municipality without county or legislative involvement)
- Using eminent domain for economic development without a clear public use showing — very high litigation risk
- Accepting CDBG funds without understanding the federal compliance requirements (Davis-Bacon, environmental review, reporting) — noncompliance can require funds to be returned
- Not having a written economic development plan before making individual incentive decisions — ad hoc incentives without a policy framework create equal protection exposure

QUESTIONS FOR THE CITY ATTORNEY:
1. What incentive tools does Mullens have available as a Class IV municipality, since TIF is not available to us directly?
2. Can Wyoming County create a TIF district that would benefit Mullens, and how would that work?
3. What federal compliance obligations attach to CDBG funds, and does the town have the administrative capacity to manage them?
`;


const SYSTEM_PROMPT = `You are a municipal policy advisor for the Town of Mullens, West Virginia. You help the mayor, town council members, and staff understand what the town can and cannot do under West Virginia law — BEFORE they spend money on a city attorney.

Your audience is NOT lawyers. It is elected officials and local staff who may have no legal background. Your job is to give them enough understanding to walk into a meeting with their attorney already knowing the basics: whether their idea is on solid ground, what the main risks are, and what questions to ask.

You have access to a comprehensive legal reference document about the Municipal Authority Framework in West Virginia, specifically tailored for Mullens.

When someone asks about a policy idea, always follow this exact structure:

1. **Give a plain-English verdict first** — one clear sentence. Use one of these labels:
   ✅ "Yes, the town can do this."
   ⚠️ "The town can do this, but only if certain steps are followed."
   ❌ "No, the town cannot legally do this."
   🔍 "This depends — here's what matters."

2. **Give a real-world example** — Imagine a specific house, lot, or person in Mullens. Walk through exactly what would happen in plain English. No legal jargon. Write it like you're explaining it to someone at a town council meeting who has never read a law. For example: "Think about the old white house on the corner that's been empty for two years. Here's how this would actually work: the code officer would walk by, take photos, then mail a letter to whoever owns it saying they have 30 days to fix it up or register it with the town..."

3. **What the law actually says** — Cite the specific WV statute (e.g., §8-12-16) in one short sentence. Keep this brief — just enough so they know the rule has a name and exists.

4. **What the town CAN do** — Short bullet list. Plain language. No Latin, no legal shorthand.

5. **What the town CANNOT do** — Short bullet list. Be specific about the line they cannot cross.

6. **The one biggest risk** — In one or two sentences, name the single most likely way this could go wrong or get the town sued. Keep it concrete: "If you skip the certified mail notice, the whole case gets thrown out."

7. **What to tell the city attorney** — Two or three specific questions they should bring to their attorney now that they understand the basics. This is the handoff.

Keep your tone conversational and warm — like a knowledgeable friend explaining things over coffee, not a professor giving a lecture. Use short paragraphs. Avoid words like "pursuant to," "herein," "aforementioned," or "notwithstanding." If you must use a legal term, immediately explain it in plain English in parentheses.

Reference document:
${DOCUMENT_CONTEXT}`;

const STARTER_QUESTIONS = [
  "Can we fine people for junk cars in their yard?",
  "Can we require landlords to register rental properties?",
  "Can we go into executive session to discuss a land deal?",
  "Can we offer a tax break to attract a new business?",
  "Can we pass an ordinance at one meeting if it is urgent?",
  "What if a council member votes on a contract with their own business?",
  "Can we adopt a zoning ordinance to control development?",
  "Can we declare a local emergency and bypass normal bidding?",
  "Can we ban a specific breed of dog in town?",
  "Can we use eminent domain to clear land for a developer?",
];

export default function MullensAdvisor() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const adjustTextarea = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  };

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = (data.content && data.content.length > 0) ? data.content.map((b) => b.text || "").join("") : (data.error || JSON.
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "Error connecting to the advisor. Please try again." }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("✅") || line.startsWith("⚠️") || line.startsWith("❌") || line.startsWith("🔍")) {
        const isGreen = line.startsWith("✅");
        const isYellow = line.startsWith("⚠️");
        const isRed = line.startsWith("❌");
        const bg = isGreen ? "var(--color-background-success)" : isYellow ? "var(--color-background-warning)" : isRed ? "var(--color-background-danger)" : "var(--color-background-info)";
        const col = isGreen ? "var(--color-text-success)" : isYellow ? "var(--color-text-warning)" : isRed ? "var(--color-text-danger)" : "var(--color-text-info)";
        return (
          <div key={i} style={{ background: bg, color: col, padding: "10px 14px", borderRadius: "var(--border-radius-md)", marginBottom: "10px", fontWeight: 500, fontSize: "15px" }}>
            {line}
          </div>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} style={{ fontWeight: 500, marginBottom: "4px", marginTop: i > 0 ? "12px" : 0, color: "var(--color-text-primary)" }}>{line.replace(/\*\*/g, "")}</p>;
      }
      if (/^\*\*[^*]+\*\*/.test(line)) {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} style={{ marginBottom: "6px", color: "var(--color-text-primary)", lineHeight: 1.65 }}>
            {parts.map((p, j) => p.startsWith("**") ? <strong key={j} style={{ fontWeight: 500 }}>{p.replace(/\*\*/g, "")}</strong> : p)}
          </p>
        );
      }
      if (line.match(/^[\-•]\s/)) {
        return <p key={i} style={{ paddingLeft: "16px", marginBottom: "4px", color: "var(--color-text-primary)", lineHeight: 1.65 }}>{"→ " + line.replace(/^[\-•]\s/, "")}</p>;
      }
      if (line.trim() === "") return <div key={i} style={{ height: "8px" }} />;
      return <p key={i} style={{ marginBottom: "6px", color: "var(--color-text-primary)", lineHeight: 1.65 }}>{line}</p>;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "620px", background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>

      {/* Header */}
      <div style={{ padding: "16px 20px", borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--color-background-info)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i className="ti ti-building-community" style={{ fontSize: "18px", color: "var(--color-text-info)" }} aria-hidden="true" />
        </div>
        <div>
          <p style={{ fontWeight: 500, fontSize: "15px", margin: 0, color: "var(--color-text-primary)" }}>Mullens Municipal Policy Advisor</p>
          <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: 0 }}>Plain-English answers before you call the city attorney • Ask about any idea</p>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {messages.length === 0 && (
          <div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "14px", lineHeight: 1.6 }}>
              Ask any question about what Mullens can or cannot do under West Virginia law. The advisor will tell you whether your idea is permitted, what statutes apply, what procedures are required, and what risks to watch for.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
              {STARTER_QUESTIONS.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)} style={{ textAlign: "left", padding: "10px 14px", fontSize: "13px", cursor: "pointer", lineHeight: 1.4, color: "var(--color-text-secondary)", borderRadius: "var(--border-radius-md)" }}>
                  <i className="ti ti-arrow-right" style={{ fontSize: "12px", marginRight: "6px", opacity: 0.5 }} aria-hidden="true" />
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
            {msg.role === "assistant" && (
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--color-background-info)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: "10px", marginTop: "2px" }}>
                <i className="ti ti-scale" style={{ fontSize: "14px", color: "var(--color-text-info)" }} aria-hidden="true" />
              </div>
            )}
            <div style={{
              maxWidth: "82%",
              padding: "12px 16px",
              borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: msg.role === "user" ? "var(--color-background-info)" : "var(--color-background-secondary)",
              border: msg.role === "user" ? "none" : "0.5px solid var(--color-border-tertiary)",
              fontSize: "14px",
            }}>
              {msg.role === "user"
                ? <p style={{ margin: 0, color: "var(--color-text-info)", fontWeight: 500 }}>{msg.content}</p>
                : <div>{formatMessage(msg.content)}</div>
              }
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--color-background-info)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="ti ti-scale" style={{ fontSize: "14px", color: "var(--color-text-info)" }} aria-hidden="true" />
            </div>
            <div style={{ padding: "12px 16px", borderRadius: "18px 18px 18px 4px", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", display: "flex", gap: "5px", alignItems: "center" }}>
              {[0, 1, 2].map(n => (
                <span key={n} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-text-tertiary)", display: "inline-block", animation: `pulse 1.2s ease-in-out ${n * 0.2}s infinite` }} />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: "12px 16px", borderTop: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => { setInput(e.target.value); adjustTextarea(); }}
            onKeyDown={handleKeyDown}
            placeholder="Ask about a policy idea… e.g. 'Can we tow junk cars from private property?'"
            rows={1}
            style={{ flex: 1, resize: "none", fontSize: "14px", lineHeight: 1.5, padding: "10px 14px", borderRadius: "var(--border-radius-md)", overflow: "hidden", minHeight: "40px" }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: input.trim() && !loading ? "pointer" : "not-allowed", opacity: input.trim() && !loading ? 1 : 0.4, flexShrink: 0, padding: 0 }}
            aria-label="Send message"
          >
            <i className="ti ti-send" style={{ fontSize: "16px" }} aria-hidden="true" />
          </button>
        </div>
        <p style={{ fontSize: "11px", color: "var(--color-text-tertiary)", margin: "6px 0 0", textAlign: "center" }}>
          Plain-language guidance to help you prepare • Always confirm with your city attorney
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
