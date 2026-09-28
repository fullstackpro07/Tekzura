// Generated from public/CalderForge_Legal_Compliance_Pack_2026.docx (sections 1–4 only;
// the internal compliance checklist and research sources are intentionally not published).

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] };

export interface LegalSection {
  id: string;
  number: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  lead: string;
  sections: LegalSection[];
}

export const legalMeta = {
  effectiveDate: '27 September 2026',
  version: '1.0',
  contactEmail: 'info@calderforge.com',
  phone: '+1 808 998 5302',
};

// Business facts the compliance pack requires CalderForge to confirm before publishing.
// Fill these in; any left empty render as a highlighted placeholder on the live pages.
export const legalIdentity: Record<string, string> = {
  '[REGISTERED BUSINESS ADDRESS]': 'Dallas, Texas, USA and Bahawalpur, Punjab, Pakistan',
  '[GOVERNING LAW]': '',
  '[COURTS/ARBITRATION FORUM]': '',
};

export const legalDocuments: LegalDocument[] = [
  {
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "description": "How CalderForge collects, uses, shares and protects personal information across our website, lead forms and service delivery.",
    "lead": "This Privacy Policy explains how CalderForge collects, uses, discloses, stores and protects personal information when you visit our website, submit a form, respond to an advertisement, book a consultation, communicate with us, purchase or receive services, or otherwise interact with CalderForge.",
    "sections": [
      {
        "id": "s1-1",
        "number": "1.1",
        "heading": "Who we are and who controls your data",
        "blocks": [
          {
            "type": "paragraph",
            "text": "“CalderForge,” “we,” “us” and “our” refer to the business operating the CalderForge brand and website at www.calderforge.com. For personal information that we collect for our own business purposes, CalderForge generally acts as the controller/business/organisation responsible for deciding why and how the information is processed."
          },
          {
            "type": "paragraph",
            "text": "When CalderForge processes personal information solely on behalf of a client while building, maintaining or supporting the client’s product, website, application, CRM, analytics environment or other system, the client may be the controller/business and CalderForge may act as a processor/service provider/contractor. In those cases, the applicable client agreement, data processing agreement and client privacy notice may also apply."
          },
          {
            "type": "paragraph",
            "text": "Contact for privacy questions or rights requests: info@calderforge.com. We may request reasonable information to verify a request before acting on it."
          }
        ]
      },
      {
        "id": "s1-2",
        "number": "1.2",
        "heading": "Scope",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This Policy applies to the CalderForge website, lead forms, consultation forms, marketing pages, direct enquiries, project communications, client portals and service-delivery activities that link to or reference this Policy."
          },
          {
            "type": "paragraph",
            "text": "This Policy does not control the independent privacy practices of third-party websites, marketplaces, payment processors, social networks, advertising networks, hosting providers or client systems. Those third parties may process personal information under their own notices and terms."
          }
        ]
      },
      {
        "id": "s1-3",
        "number": "1.3",
        "heading": "Personal information we may collect",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Identity and contact information: name, business name, role/job title, email address, phone/WhatsApp number, postal address and other contact details you provide.",
              "Business and project information: website/domain, industry, company size, project requirements, preferred platform, budget range, target market, launch timeline, technical stack, product catalog information, brand assets and project notes.",
              "Account and authentication information: usernames, role information and credentials or access tokens that you deliberately provide for a project. We encourage clients to use secure invitation/role-based access instead of sending passwords whenever possible.",
              "Transaction and billing information: invoice details, billing address, tax information, transaction status, payment method type, payment platform identifiers and related accounting records. Full card data is generally processed by third-party payment providers rather than stored directly by CalderForge.",
              "Communications: messages, emails, meeting notes, form responses, support requests, feedback, survey responses and records of agreed project decisions.",
              "Technical and usage information: IP address, browser/device type, operating system, referring URLs, pages viewed, timestamps, approximate region, cookie identifiers, campaign parameters and similar diagnostic/analytics information when enabled.",
              "Advertising and lead information: information submitted through Meta, LinkedIn, Google or other lead-generation forms; campaign/ad identifiers; and engagement information made available by those platforms under their terms.",
              "Project content: text, images, code, databases, files, user stories, API data, test data and other materials a client supplies or authorises us to access. Project content may include personal information controlled by the client.",
              "Recruitment/contractor information, if applicable: professional profile, CV/resume, work history, portfolio, rates, availability and related screening information."
            ]
          }
        ]
      },
      {
        "id": "s1-4",
        "number": "1.4",
        "heading": "Sensitive information",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge does not seek to collect sensitive personal information unless it is necessary for a legitimate project or legal requirement. Please do not submit health data, government identifiers, biometric data, financial account credentials, precise geolocation, political/religious beliefs or other highly sensitive information through general enquiry forms."
          },
          {
            "type": "paragraph",
            "text": "If a project legitimately requires sensitive data, CalderForge and the client should agree appropriate scope, security controls, access restrictions, retention rules and, where required, a data processing agreement before production access is provided."
          }
        ]
      },
      {
        "id": "s1-5",
        "number": "1.5",
        "heading": "Sources of personal information",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Directly from you when you submit a form, book a call, request a quote, sign a proposal, pay an invoice, communicate with us or provide project assets.",
              "From your organisation, colleagues or authorised representatives when they include you in project communications or provide your business contact information.",
              "From advertising and social platforms when you submit a CalderForge lead form or interact with our ads, subject to the platform’s privacy terms.",
              "From marketplaces such as Upwork or Fiverr when you engage CalderForge through those services, subject to the marketplace’s rules and privacy notices.",
              "From service providers that support our business, such as scheduling, analytics, CRM, payment, hosting or security providers.",
              "From public professional/business sources where lawful and reasonably expected, such as a company website or public professional profile, particularly for B2B communications."
            ]
          }
        ]
      },
      {
        "id": "s1-6",
        "number": "1.6",
        "heading": "Why we use personal information",
        "blocks": [
          {
            "type": "list",
            "items": [
              "To respond to enquiries, assess project fit, prepare proposals and quotes, schedule meetings and communicate about requested services.",
              "To create, manage and perform contracts, including discovery, design, development, QA, deployment, maintenance, consulting and support.",
              "To process invoices and payments, maintain accounting/tax records and prevent fraud or misuse.",
              "To manage client relationships, document decisions, provide customer support and maintain project history.",
              "To operate, secure, troubleshoot and improve our website, services and infrastructure.",
              "To measure advertising and marketing performance, understand campaign attribution and improve our business development activities where legally permitted.",
              "To send service-related communications and, where allowed, marketing communications. Marketing can be opted out of at any time.",
              "To comply with legal obligations, respond to lawful requests, establish or defend legal claims, enforce agreements and protect rights, safety and security.",
              "To evaluate and improve internal workflows, including the responsible use of automation and AI tools, subject to confidentiality and data-protection safeguards."
            ]
          }
        ]
      },
      {
        "id": "s1-7",
        "number": "1.7",
        "heading": "Legal bases for EEA/UK processing",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where the EU GDPR or UK GDPR applies, CalderForge relies on one or more lawful bases depending on the activity: performance of a contract or steps requested before entering a contract; legitimate interests in operating and securing a B2B services business, responding to enquiries, preventing fraud and improving services; consent where required, particularly for non-essential cookies or certain marketing; and compliance with legal obligations."
          },
          {
            "type": "paragraph",
            "text": "Where we rely on legitimate interests, we consider whether our interests are proportionate and whether your rights and reasonable expectations override those interests. You may have a right to object, particularly to direct marketing."
          }
        ]
      },
      {
        "id": "s1-8",
        "number": "1.8",
        "heading": "Lead forms and advertising platforms",
        "blocks": [
          {
            "type": "paragraph",
            "text": "When you submit a lead form through Meta, LinkedIn, Google or another platform, the platform may pre-fill or collect information under its own terms, and CalderForge receives the fields you choose to submit. We use this information to respond to your enquiry, qualify the project, provide a quote and follow up about relevant services."
          },
          {
            "type": "paragraph",
            "text": "Where permitted, we may upload or match limited identifiers to advertising platforms for measurement, retargeting, suppression of existing leads/customers or audience creation. We configure such activities in accordance with applicable law, consent requirements and platform terms. If a jurisdiction treats certain advertising disclosures as a “sale” or “sharing,” we provide required opt-out controls where applicable."
          }
        ]
      },
      {
        "id": "s1-9",
        "number": "1.9",
        "heading": "Payments and financial information",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Payments may be processed through banks, card/payment processors, invoicing providers or approved work marketplaces. Those providers may independently collect payment credentials, fraud-prevention signals and identity information. Their privacy notices govern their processing."
          },
          {
            "type": "paragraph",
            "text": "CalderForge generally retains invoices, transaction references and accounting records rather than complete payment-card numbers. If a payment fails, we may receive a failure code or status and contact you to arrange another permitted payment method."
          }
        ]
      },
      {
        "id": "s1-10",
        "number": "1.10",
        "heading": "Marketplace projects (Upwork, Fiverr and similar services)",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a relationship originates on a marketplace, CalderForge handles marketplace-derived information in accordance with the marketplace’s terms and this Policy. Platform transaction history, work diaries, messages, escrow records and dispute information may be controlled or retained by the marketplace independently."
          },
          {
            "type": "paragraph",
            "text": "CalderForge does not use this Privacy Policy to override marketplace restrictions on communication, payment, off-platform contracting or circumvention. Where a platform requires payments or communications to remain on-platform, CalderForge and the client must comply with those requirements."
          }
        ]
      },
      {
        "id": "s1-11",
        "number": "1.11",
        "heading": "Cookies, pixels and similar technologies",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Our website may use cookies, local storage, pixels, SDKs, tags and similar technologies for security, functionality, preferences, analytics and advertising. Non-essential technologies are enabled only as permitted by applicable law and the choices available in our consent mechanism."
          },
          {
            "type": "paragraph",
            "text": "For details, including categories and how to change preferences, see the CalderForge Cookie Policy."
          }
        ]
      },
      {
        "id": "s1-12",
        "number": "1.12",
        "heading": "AI, automation and assisted tools",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge may use AI-assisted or automation tools for activities such as drafting, coding assistance, debugging, content classification, meeting/workflow summarisation or internal productivity. We do not intentionally use confidential client information to train public models unless the client has authorised that use."
          },
          {
            "type": "paragraph",
            "text": "Where a tool would receive client confidential information or personal data, CalderForge should use an approved configuration/provider and apply contractual, access and minimisation controls appropriate to the sensitivity of the data."
          },
          {
            "type": "paragraph",
            "text": "We do not intend to make solely automated decisions about individuals that produce legal or similarly significant effects through the public CalderForge website. If that changes, we will provide additional notices where required."
          }
        ]
      },
      {
        "id": "s1-13",
        "number": "1.13",
        "heading": "How we share personal information",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Service providers/processors: hosting, cloud infrastructure, email, CRM, scheduling, analytics, security, communication, project management, payment, accounting, customer support and similar vendors that process information to support our operations.",
              "Professional advisers: lawyers, accountants, auditors, insurers and consultants where reasonably necessary.",
              "Subcontractors and project collaborators: only to the extent necessary to deliver agreed services and subject to appropriate confidentiality/data-protection obligations.",
              "Advertising/analytics partners: limited technical or campaign information where legally permitted and consistent with consent choices.",
              "Business transactions: a buyer, investor, successor or adviser involved in a merger, acquisition, financing, restructuring or sale, subject to reasonable confidentiality safeguards.",
              "Legal/safety recipients: regulators, courts, law enforcement or other parties when disclosure is required by law or reasonably necessary to protect rights, security or users."
            ]
          }
        ]
      },
      {
        "id": "s1-14",
        "number": "1.14",
        "heading": "We do not sell personal information for money",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge does not sell personal information for monetary payment as a standalone data-broker business. However, some privacy laws define “sale” or “sharing” broadly enough to include certain disclosures to advertising/analytics partners for cross-context behavioural advertising. Where such laws apply, CalderForge will provide required notices and opt-out mechanisms and will honour recognised opt-out preference signals such as Global Privacy Control where technically and legally applicable."
          }
        ]
      },
      {
        "id": "s1-15",
        "number": "1.15",
        "heading": "International data transfers",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge may work with clients, team members and service providers in multiple countries, so personal information may be processed outside the country where it was collected. Privacy protections can differ between jurisdictions."
          },
          {
            "type": "paragraph",
            "text": "Where EEA/UK transfer rules apply, CalderForge will use an available lawful transfer mechanism as appropriate, which may include adequacy decisions, approved standard contractual clauses, the UK International Data Transfer Agreement/Addendum or another recognised safeguard. Where required, we assess transfer risks and supplementary measures."
          },
          {
            "type": "paragraph",
            "text": "Where Canadian or Australian privacy rules apply, CalderForge will take reasonable steps and contractual measures appropriate to cross-border processing and will provide transparency regarding overseas processing where required."
          }
        ]
      },
      {
        "id": "s1-16",
        "number": "1.16",
        "heading": "Data retention",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We retain personal information only for as long as reasonably necessary for the purpose collected, to perform contracts, maintain business records, resolve disputes, enforce agreements and comply with legal/tax/accounting obligations. Retention periods vary by record type and jurisdiction."
          },
          {
            "type": "paragraph",
            "text": "When information is no longer required, we take reasonable steps to delete, anonymise or securely dispose of it, subject to backups, legal holds and technical limitations."
          }
        ]
      },
      {
        "id": "s1-17",
        "number": "1.17",
        "heading": "Security",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge uses reasonable administrative, technical and organisational safeguards appropriate to the nature of the information and risks involved. Measures may include role-based access, multi-factor authentication, secure development practices, encryption in transit, encrypted or access-controlled storage, backups, logging, patching and confidentiality obligations."
          },
          {
            "type": "paragraph",
            "text": "No internet transmission or storage system can be guaranteed completely secure. Clients are also responsible for protecting their own credentials, user accounts, payment accounts and production systems and for promptly removing access when it is no longer required."
          }
        ]
      },
      {
        "id": "s1-18",
        "number": "1.18",
        "heading": "Your privacy rights",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Depending on where you live and which law applies, you may have rights to access, know, correct, delete or obtain a copy of personal information; restrict or object to processing; withdraw consent; opt out of certain targeted advertising, sale or sharing; request data portability; and appeal certain decisions."
          },
          {
            "type": "paragraph",
            "text": "We will not discriminate against you for exercising legally protected privacy rights. Rights are subject to legal exceptions, verification requirements and scope thresholds. Some information may need to be retained for legal, security, contract or accounting purposes."
          }
        ]
      },
      {
        "id": "s1-19",
        "number": "1.19",
        "heading": "EEA and UK rights",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where GDPR/UK GDPR applies, rights may include access, rectification, erasure, restriction, portability, objection and withdrawal of consent. You also have the right to lodge a complaint with your competent supervisory authority. The right to object to direct marketing can be exercised at any time."
          },
          {
            "type": "paragraph",
            "text": "If CalderForge is legally required to appoint an EU/UK representative or DPO, the applicable contact information will be published in this Policy before the relevant processing begins."
          }
        ]
      },
      {
        "id": "s1-20",
        "number": "1.20",
        "heading": "California and other U.S. state privacy rights",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If CalderForge is subject to a U.S. state privacy law for a particular person, that person may have rights such as knowing/accessing categories and specific pieces of data, deletion, correction, portability, opting out of targeted advertising or sale/sharing, limiting certain uses of sensitive information and non-discrimination, depending on the state and law."
          },
          {
            "type": "paragraph",
            "text": "California residents may also use an applicable “Do Not Sell or Share My Personal Information” mechanism and recognised Global Privacy Control signals when required. Because statutory thresholds and exemptions vary, a right applies only where the relevant law covers CalderForge and the processing activity."
          }
        ]
      },
      {
        "id": "s1-21",
        "number": "1.21",
        "heading": "Canada",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where PIPEDA or applicable provincial privacy law applies, CalderForge follows principles of accountability, identified purposes, meaningful consent where required, limited collection/use/retention, accuracy, safeguards, openness, access and complaint handling. Commercial electronic messages to recipients in Canada are sent in accordance with applicable CASL consent, identification and unsubscribe requirements."
          }
        ]
      },
      {
        "id": "s1-22",
        "number": "1.22",
        "heading": "Australia",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where the Australian Privacy Act and Australian Privacy Principles apply, CalderForge will handle personal information transparently, collect information reasonably necessary for its functions, protect it with reasonable safeguards, address access/correction requests, manage direct marketing opt-outs and take appropriate steps for overseas disclosures."
          },
          {
            "type": "paragraph",
            "text": "CalderForge will update this Policy if it becomes subject to specific automated-decision disclosure obligations or other reforms that require additional statements."
          }
        ]
      },
      {
        "id": "s1-23",
        "number": "1.23",
        "heading": "Marketing communications",
        "blocks": [
          {
            "type": "paragraph",
            "text": "You may opt out of marketing emails at any time by using the unsubscribe link or contacting us. Opting out of marketing does not stop service-related communications necessary to respond to an enquiry, administer an account, perform a contract, issue billing/security notices or complete a transaction."
          },
          {
            "type": "paragraph",
            "text": "Where a jurisdiction requires consent before sending commercial electronic messages, CalderForge will obtain or document the required consent or another lawful basis before sending them."
          }
        ]
      },
      {
        "id": "s1-24",
        "number": "1.24",
        "heading": "Children",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge services are designed for businesses and adults and are not directed to children. We do not knowingly collect personal information from children under 13 through general website services. If we learn that such information was collected without required parental authorisation, we will take reasonable steps to delete it."
          },
          {
            "type": "paragraph",
            "text": "If a client project involves children’s data, the client must disclose that fact before production processing so the parties can determine applicable requirements, including COPPA or other child-privacy rules."
          }
        ]
      },
      {
        "id": "s1-25",
        "number": "1.25",
        "heading": "Third-party links and integrations",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Our website or deliverables may link to or integrate third-party services. CalderForge is not responsible for the independent privacy or security practices of those third parties. Review their privacy notices before providing information."
          }
        ]
      },
      {
        "id": "s1-26",
        "number": "1.26",
        "heading": "Data incidents",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If CalderForge becomes aware of a security incident affecting personal information, we will investigate and take reasonable containment/remediation steps. Where applicable law or contract requires notification to a client, regulator or affected individual, we will provide notice consistent with those obligations."
          }
        ]
      },
      {
        "id": "s1-27",
        "number": "1.27",
        "heading": "Requests, verification and authorised agents",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Submit privacy requests to info@calderforge.com with enough detail for us to identify the relevant records. We may verify identity or authority before providing access, deleting data or acting on an authorised-agent request. We will respond within the period required by applicable law, subject to permitted extensions and exceptions."
          }
        ]
      },
      {
        "id": "s1-28",
        "number": "1.28",
        "heading": "Changes to this Privacy Policy",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We may update this Policy when our services, technology, vendors or legal obligations change. The “Effective” date will identify the current version. If a change materially affects how we use information already collected, we will provide additional notice or seek consent where required."
          }
        ]
      },
      {
        "id": "s1-29",
        "number": "1.29",
        "heading": "Contact and complaints",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Privacy questions, requests and complaints: info@calderforge.com."
          },
          {
            "type": "paragraph",
            "text": "Postal/legal contact: [REGISTERED BUSINESS ADDRESS]. Phone: +1 808 998 5302. If you are entitled to complain to a privacy regulator, you may contact the regulator in your jurisdiction after giving us an opportunity to address the concern."
          }
        ]
      },
      {
        "id": "s1-30",
        "number": "1.30",
        "heading": "Processing-purpose summary",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Activity",
              "Typical information",
              "Typical basis / reason"
            ],
            "rows": [
              [
                "Enquiries & quotes",
                "Contact, business, project, budget/timeline",
                "Pre-contract steps; legitimate interests; consent where required"
              ],
              [
                "Project delivery",
                "Contact, project content, credentials, technical data",
                "Contract performance; legitimate interests; legal obligations"
              ],
              [
                "Billing & accounting",
                "Billing, tax, transaction references",
                "Contract performance; legal obligations; legitimate interests"
              ],
              [
                "Security & fraud prevention",
                "IP/device/logs, account activity",
                "Legitimate interests; legal obligations"
              ],
              [
                "Analytics",
                "Device/cookie/usage data",
                "Consent where required; otherwise legitimate interests or permitted exceptions"
              ],
              [
                "Advertising/retargeting",
                "Identifiers, campaign and engagement data",
                "Consent/opt-out framework as required by applicable law"
              ],
              [
                "Marketing",
                "Business contact and engagement data",
                "Consent or legitimate interests where permitted; always subject to opt-out"
              ],
              [
                "Legal claims & compliance",
                "Relevant records and communications",
                "Legal obligations; legitimate interests; establishment/defence of claims"
              ]
            ]
          }
        ]
      },
      {
        "id": "s1-31",
        "number": "1.31",
        "heading": "Illustrative retention schedule",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The following schedule is a practical baseline, not a promise to retain every record for the maximum period. Actual retention should be aligned with applicable tax, limitation, employment and privacy law in the governing jurisdiction."
          },
          {
            "type": "table",
            "head": [
              "Record category",
              "Baseline retention approach"
            ],
            "rows": [
              [
                "Unconverted sales/lead enquiries",
                "Typically 12–24 months after last meaningful interaction, unless consent/law supports longer retention or the person opts out sooner."
              ],
              [
                "Client contracts, SOWs, invoices and core project records",
                "Typically the contract term plus 6–7 years, subject to applicable tax/claims rules."
              ],
              [
                "Payment transaction references",
                "As required for accounting, tax, fraud prevention and dispute handling; full card credentials are not intentionally retained by CalderForge."
              ],
              [
                "Support tickets and project communications",
                "For the project term and a reasonable post-project period for support, dispute and knowledge continuity."
              ],
              [
                "Website logs/security events",
                "Usually days to 12 months depending on security need and system configuration."
              ],
              [
                "Analytics/advertising identifiers",
                "According to consent choices, vendor configuration and documented business need; minimise wherever practical."
              ],
              [
                "Backups",
                "Deleted or overwritten on the normal backup rotation unless subject to legal hold or incident investigation."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "terms",
    "title": "Terms & Conditions",
    "description": "The terms that govern use of the CalderForge website and the provision of CalderForge software, web, AI and digital services.",
    "lead": "These Terms & Conditions (“Terms”) govern access to the CalderForge website and, unless a signed proposal, statement of work, marketplace contract or other written agreement states otherwise, the provision of CalderForge services. By using the website, requesting services, accepting a proposal, paying an invoice or otherwise engaging CalderForge, you agree to these Terms.",
    "sections": [
      {
        "id": "s2-1",
        "number": "2.1",
        "heading": "Business identity and contract party",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge is the trading/brand name used for the services described on www.calderforge.com. The contracting legal entity must be identified on the applicable proposal, invoice, statement of work or order form."
          },
          {
            "type": "paragraph",
            "text": "Business locations: [REGISTERED BUSINESS ADDRESS]. Phone: +1 808 998 5302. Email: info@calderforge.com."
          }
        ]
      },
      {
        "id": "s2-2",
        "number": "2.2",
        "heading": "Who may use the services",
        "blocks": [
          {
            "type": "paragraph",
            "text": "You must be legally capable of entering a binding agreement and, if acting for a company or other organisation, authorised to bind that organisation. CalderForge primarily provides professional services for business/commercial purposes."
          },
          {
            "type": "paragraph",
            "text": "If mandatory consumer law applies because you are acting outside a trade/business capacity, those mandatory rights are not excluded by these Terms."
          }
        ]
      },
      {
        "id": "s2-3",
        "number": "2.3",
        "heading": "Services",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Services may include product strategy, discovery, UI/UX design, website and web application development, SaaS development, MVP development, custom software, e-commerce development, Shopify/WooCommerce work, API/integration work, AI/automation, testing/QA, deployment, hosting assistance, maintenance, consulting, marketing technology and related digital services."
          },
          {
            "type": "paragraph",
            "text": "The specific deliverables, scope, assumptions, dependencies, timeline, price and acceptance criteria for a project should be stated in a proposal, quote, statement of work (“SOW”), order form, marketplace contract or written confirmation."
          }
        ]
      },
      {
        "id": "s2-4",
        "number": "2.4",
        "heading": "Order of precedence",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If documents conflict, the following order normally applies: (1) signed master/service agreement or negotiated client contract; (2) SOW/order form/proposal accepted by both parties; (3) applicable marketplace contract and mandatory marketplace rules for a marketplace project; (4) these Terms; and (5) website marketing copy."
          },
          {
            "type": "paragraph",
            "text": "A specific written term controls over a general term only for the project to which it applies."
          }
        ]
      },
      {
        "id": "s2-5",
        "number": "2.5",
        "heading": "Quotes and proposals",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unless stated otherwise, a quote is an estimate based on information available when issued and is valid for the period stated in the quote. A project is not reserved until any required acceptance, deposit/funding, onboarding information and platform steps are completed."
          },
          {
            "type": "paragraph",
            "text": "CalderForge may correct obvious clerical errors before work begins. Material scope changes require updated pricing/timing before the additional work is performed."
          }
        ]
      },
      {
        "id": "s2-6",
        "number": "2.6",
        "heading": "Client responsibilities",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Provide accurate and timely requirements, content, product information, credentials/access, approvals, legal notices, brand assets and decisions reasonably needed for the work.",
              "Ensure you own or have permission to use all materials, data, trademarks, images, fonts, product descriptions, code, APIs and other content supplied to CalderForge.",
              "Maintain lawful privacy notices, cookie consent, terms, product claims, refund/shipping policies and regulatory requirements applicable to your own business and end users.",
              "Review deliverables and respond to approval/feedback requests within agreed periods.",
              "Maintain backups of business-critical content unless backup services are expressly included.",
              "Use secure access practices and remove/revoke CalderForge access when no longer required."
            ]
          }
        ]
      },
      {
        "id": "s2-7",
        "number": "2.7",
        "heading": "Project timing and client dependencies",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Delivery dates are estimates unless expressly guaranteed in a signed SOW. Timelines depend on prompt access, content, approvals, third-party availability, scope stability and payment."
          },
          {
            "type": "paragraph",
            "text": "Any stated “7-day” or rapid-launch offer begins only after required payment/funding, project brief, product/content assets, platform access and other prerequisites are complete. Client delays, scope changes, third-party approval delays, outages or force-majeure events extend the schedule accordingly."
          },
          {
            "type": "paragraph",
            "text": "A rapid launch may cover an agreed launch-ready scope rather than every future feature. Additional features can be scheduled separately."
          }
        ]
      },
      {
        "id": "s2-8",
        "number": "2.8",
        "heading": "Change requests and revisions",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Included revisions, if any, are defined in the project scope. A revision means a reasonable adjustment to an agreed deliverable, not a new feature, new page type, new integration, platform migration or material redesign after approval."
          },
          {
            "type": "paragraph",
            "text": "CalderForge may provide a change order, additional estimate or revised timeline for out-of-scope work. We will not intentionally perform chargeable out-of-scope work without reasonable notice/authorisation."
          }
        ]
      },
      {
        "id": "s2-9",
        "number": "2.9",
        "heading": "Client review and acceptance",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The client should test/review deliverables within any stated review period and identify material non-conformities against the agreed scope. CalderForge will use reasonable efforts to correct verified scope defects."
          },
          {
            "type": "paragraph",
            "text": "A deliverable may be treated as accepted when the client expressly approves it, deploys/uses it in production, pays the relevant milestone without reservation, or fails to identify a material scope defect within a reasonable stated review period, subject to mandatory law."
          }
        ]
      },
      {
        "id": "s2-10",
        "number": "2.10",
        "heading": "Fees, taxes and pricing",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Fees are stated in the applicable proposal, invoice, platform contract or SOW. Unless expressly stated otherwise, quoted fees exclude taxes, duties, marketplace fees, card/processor fees, app/plugin subscriptions, domain registration, hosting, premium themes/assets and other third-party costs."
          },
          {
            "type": "paragraph",
            "text": "Where law requires CalderForge to collect tax, the applicable tax will be added or included as required. The client remains responsible for taxes it must self-assess, withhold or report, except taxes on CalderForge’s own income."
          }
        ]
      },
      {
        "id": "s2-11",
        "number": "2.11",
        "heading": "Payment methods for direct clients",
        "blocks": [
          {
            "type": "paragraph",
            "text": "For relationships that originate directly with CalderForge (not through a marketplace that imposes payment restrictions), payment may be accepted through the methods shown on an invoice or proposal, such as bank transfer, an approved payment processor, card/invoice payment, or another mutually agreed secure method."
          },
          {
            "type": "paragraph",
            "text": "If a client has difficulty using a direct payment method, CalderForge may offer an alternative compliant payment route, including an eligible escrow/work marketplace arrangement, only where both parties are eligible and the platform’s current rules permit the arrangement. The client may choose hourly or fixed-price structure where the selected platform supports it and CalderForge agrees."
          },
          {
            "type": "paragraph",
            "text": "Platform fees, transaction fees, exchange-rate charges and platform-specific protections are determined by the relevant provider and may change. CalderForge will not misrepresent a platform’s protection or eligibility."
          }
        ]
      },
      {
        "id": "s2-12",
        "number": "2.12",
        "heading": "Upwork-originated relationships: non-circumvention and payments",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a client and CalderForge first identify or meet each other through Upwork, both parties must comply with Upwork’s then-current Terms of Service, including applicable non-circumvention and payment requirements."
          },
          {
            "type": "paragraph",
            "text": "As reflected in Upwork’s User Agreement effective July 20, 2026, Upwork generally requires users to communicate through the Site and make/receive payments through Upwork for two years from the start of an Upwork relationship unless an authorised exception applies, such as payment of an applicable Conversion Fee or another route expressly permitted by Upwork."
          },
          {
            "type": "paragraph",
            "text": "Accordingly, CalderForge will not ask an Upwork-originated client to pay CalderForge directly, through another marketplace, by bank transfer, card, crypto, PayPal or any other off-platform method during an applicable non-circumvention period unless Upwork has expressly authorised the arrangement. The client must not request such circumvention either."
          },
          {
            "type": "paragraph",
            "text": "This is a contractual platform-compliance requirement; describing it as “illegal” in all jurisdictions would be inaccurate. A breach can nevertheless be serious and may cause account suspension, platform charges/fees, loss of payment protection and other contractual consequences."
          },
          {
            "type": "paragraph",
            "text": "Hourly and fixed-price work may be performed through Upwork where offered and agreed. For a relationship that originated outside Upwork, the parties may use an eligible Upwork direct-contract/bring-your-own arrangement only if the current Upwork rules permit it; features and protections may differ from marketplace contracts."
          }
        ]
      },
      {
        "id": "s2-13",
        "number": "2.13",
        "heading": "Fiverr-originated relationships and off-platform transactions",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a client relationship originates through Fiverr, all communications, contracting and payments must comply with Fiverr’s then-current Terms, Payment Terms and Community Standards."
          },
          {
            "type": "paragraph",
            "text": "Fiverr policy can prohibit directing clients/freelancers to external platforms, suggesting alternative payment systems, offering external contracts or sharing personal contact details for off-platform business. CalderForge will not ask a Fiverr-originated client to bypass Fiverr where doing so would violate those rules."
          },
          {
            "type": "paragraph",
            "text": "If a relationship originated directly with CalderForge, the parties may choose to use Fiverr only where such use is legitimate, permitted by Fiverr’s current rules and not intended to manipulate reviews, fees, platform metrics or marketplace safeguards."
          }
        ]
      },
      {
        "id": "s2-14",
        "number": "2.14",
        "heading": "Marketplace terms control marketplace transactions",
        "blocks": [
          {
            "type": "paragraph",
            "text": "For any Upwork, Fiverr or other marketplace project, the marketplace may have mandatory rules regarding fees, escrow, milestones, hourly logs, payment protection, disputes, refunds, chargebacks, communication and account conduct. Those rules control to the extent they apply to the marketplace transaction."
          },
          {
            "type": "paragraph",
            "text": "CalderForge website policies do not expand or reduce marketplace rights that the marketplace itself controls."
          }
        ]
      },
      {
        "id": "s2-15",
        "number": "2.15",
        "heading": "Failed, reversed or late payments",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a payment fails, is reversed, becomes overdue or is disputed without a good-faith basis, CalderForge may pause new work, deployments, support or handover until the payment issue is resolved, subject to applicable law and platform rules."
          },
          {
            "type": "paragraph",
            "text": "A pause caused by payment issues extends delivery dates. CalderForge will provide reasonable notice where practical. We may require cleared funds before resuming work when prior payments have failed or been reversed."
          }
        ]
      },
      {
        "id": "s2-16",
        "number": "2.16",
        "heading": "Third-party costs",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Domains, hosting, premium themes, paid plugins/apps, software licenses, stock assets, API usage, email/SMS costs, ad spend, platform fees and similar third-party charges are the client’s responsibility unless expressly included."
          },
          {
            "type": "paragraph",
            "text": "Third-party purchases may be non-refundable once ordered or activated. CalderForge is not responsible for changes to third-party pricing, APIs, policies, availability or licensing."
          }
        ]
      },
      {
        "id": "s2-17",
        "number": "2.17",
        "heading": "Intellectual property: client materials",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The client retains ownership of materials it owned before the project. The client grants CalderForge a limited licence to use, copy, modify and process those materials as reasonably necessary to perform the services."
          },
          {
            "type": "paragraph",
            "text": "The client represents that supplied materials and instructions do not knowingly infringe third-party rights or violate law."
          }
        ]
      },
      {
        "id": "s2-18",
        "number": "2.18",
        "heading": "Intellectual property: CalderForge background materials",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge retains ownership of pre-existing tools, frameworks, libraries, templates, utilities, know-how, methodologies, generic components and improvements that are not uniquely created for the client (“Background Materials”)."
          },
          {
            "type": "paragraph",
            "text": "To the extent Background Materials are embedded in a paid deliverable and needed to use it, CalderForge grants the client a non-exclusive, perpetual licence to use those embedded materials as part of the deliverable, unless another licence is stated."
          }
        ]
      },
      {
        "id": "s2-19",
        "number": "2.19",
        "heading": "Intellectual property: custom deliverables",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unless the SOW states otherwise, after full payment of all amounts due for the applicable deliverable, CalderForge assigns to the client the transferable intellectual-property rights in custom work product specifically created for and paid for by the client, excluding Background Materials, third-party materials, open-source components and any rights that cannot legally be assigned."
          },
          {
            "type": "paragraph",
            "text": "No transfer of ownership is effective until the relevant fees are paid in full. Before full payment, the client receives only the limited access/use needed for review and testing."
          }
        ]
      },
      {
        "id": "s2-20",
        "number": "2.20",
        "heading": "Open-source and third-party software",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Deliverables may incorporate open-source packages, platform components, APIs, themes, libraries or third-party services governed by their own licences and terms. Those third-party terms remain applicable and are not transferred/overridden by CalderForge."
          },
          {
            "type": "paragraph",
            "text": "Where a material licence imposes obligations relevant to the client’s use or distribution, CalderForge will use reasonable efforts to identify it in project documentation."
          }
        ]
      },
      {
        "id": "s2-21",
        "number": "2.21",
        "heading": "Confidentiality",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Each party should protect the other party’s non-public business, technical, customer and commercial information using reasonable care and use it only for the project or another authorised purpose."
          },
          {
            "type": "paragraph",
            "text": "Confidentiality obligations do not apply to information that is public through no breach, already lawfully known without restriction, independently developed, lawfully received from a third party or required to be disclosed by law (subject to legally permitted notice)."
          },
          {
            "type": "paragraph",
            "text": "A separate NDA or confidentiality clause in a signed contract prevails if it provides more specific terms."
          }
        ]
      },
      {
        "id": "s2-22",
        "number": "2.22",
        "heading": "Data protection and client-controlled personal data",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If CalderForge processes personal information on behalf of a client, the client is responsible for establishing a lawful basis and providing required notices to its own users unless the parties agree otherwise. CalderForge will process such data only for the project and documented instructions, subject to law."
          },
          {
            "type": "paragraph",
            "text": "Where required by GDPR/UK GDPR or other law, the parties will enter an appropriate data processing agreement covering confidentiality, security, sub-processors, assistance, deletion/return, audits and international transfers."
          }
        ]
      },
      {
        "id": "s2-23",
        "number": "2.23",
        "heading": "Security and production access",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge uses reasonable safeguards but cannot guarantee that any system is immune from attack, third-party compromise, software vulnerability or user error. Security scope depends on the service purchased."
          },
          {
            "type": "paragraph",
            "text": "The client remains responsible for account ownership, MFA, privileged-user management, payment/merchant settings, legally required security programmes and post-handover operations unless specifically included in a managed-service agreement."
          }
        ]
      },
      {
        "id": "s2-24",
        "number": "2.24",
        "heading": "AI-assisted work",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge may use AI-assisted development or productivity tools where appropriate. Human review remains part of professional delivery where reasonably required. The client must disclose if project data is subject to special contractual, regulatory or confidentiality restrictions that would prohibit particular tools."
          },
          {
            "type": "paragraph",
            "text": "Unless expressly agreed, CalderForge does not warrant that a deliverable contains no AI-assisted contribution, nor that output from a third-party AI system is exclusively protectable under intellectual-property law."
          }
        ]
      },
      {
        "id": "s2-25",
        "number": "2.25",
        "heading": "Service warranties",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge warrants that it will perform services with reasonable professional care and skill consistent with the agreed scope. If the client promptly reports a material scope defect, CalderForge’s first remedy is normally to correct or re-perform the affected work within a reasonable period."
          },
          {
            "type": "paragraph",
            "text": "Except for express written warranties and warranties that cannot legally be excluded, services and deliverables are provided without implied warranties of merchantability, fitness for a particular purpose, uninterrupted availability or error-free operation."
          }
        ]
      },
      {
        "id": "s2-26",
        "number": "2.26",
        "heading": "No guarantee of sales, revenue, rankings or investment outcomes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Design, software, e-commerce, SEO, automation, marketing technology and consulting can influence performance but depend on factors outside CalderForge’s control, including product-market fit, pricing, traffic quality, inventory, fulfilment, ad spend, customer service, competition and third-party algorithms."
          },
          {
            "type": "paragraph",
            "text": "Statements such as “conversion-focused,” “built for growth,” “launch-ready” or similar marketing language describe design objectives, not a guarantee of sales, profit, traffic, rankings, funding or any specific business outcome."
          }
        ]
      },
      {
        "id": "s2-27",
        "number": "2.27",
        "heading": "Prohibited and high-risk uses",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Clients must not knowingly use CalderForge deliverables for unlawful fraud, malware, unauthorised surveillance, infringement, exploitation, deceptive practices, unlawful discrimination, prohibited goods/services or other activity that would expose CalderForge to material legal or security risk."
          },
          {
            "type": "paragraph",
            "text": "CalderForge may refuse or suspend work where reasonably necessary to comply with law, sanctions, platform rules, safety obligations or professional standards."
          }
        ]
      },
      {
        "id": "s2-28",
        "number": "2.28",
        "heading": "Hosting, deployment, backups and domains",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unless expressly included, hosting, domain registration, backups, monitoring, disaster recovery, ongoing security patching and third-party account administration are not continuous CalderForge obligations after handover."
          },
          {
            "type": "paragraph",
            "text": "Where CalderForge assists with deployment, the client should ensure ownership or transferable administrative control of production accounts whenever practical."
          }
        ]
      },
      {
        "id": "s2-29",
        "number": "2.29",
        "heading": "Maintenance and support",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Post-launch support, bug-fix periods, maintenance hours and service levels are only included if stated in the scope. New features, compatibility changes caused by third-party updates, content changes and infrastructure work are generally separate unless expressly covered."
          },
          {
            "type": "paragraph",
            "text": "A bug means reproducible behaviour that materially departs from the agreed specification, not a new preference, changed business rule or later third-party platform change."
          }
        ]
      },
      {
        "id": "s2-30",
        "number": "2.30",
        "heading": "Subcontractors and team members",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge may use employees, contractors or specialist partners to perform portions of the work while remaining responsible for managing the agreed service. Appropriate confidentiality and data-protection obligations will be applied where relevant."
          },
          {
            "type": "paragraph",
            "text": "If a contract requires prior approval for named personnel or subcontractors, that specific contract controls."
          }
        ]
      },
      {
        "id": "s2-31",
        "number": "2.31",
        "heading": "Portfolio and publicity",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge will not knowingly publish confidential information. Public use of a client name, logo, testimonial, private dashboard or non-public project details should be based on client permission or information that is already lawfully public."
          },
          {
            "type": "paragraph",
            "text": "A project agreement may include a specific portfolio/publicity permission; that clause will control."
          }
        ]
      },
      {
        "id": "s2-32",
        "number": "2.32",
        "heading": "Suspension and termination",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Either party may terminate according to the applicable SOW/contract. If no specific rule exists, either party may request termination on reasonable written notice, subject to payment for work performed, committed third-party costs and other accrued obligations."
          },
          {
            "type": "paragraph",
            "text": "CalderForge may suspend or terminate for material non-payment, unlawful instructions, abusive conduct, security risk, material breach, platform-rule conflict or prolonged client non-response after reasonable attempts to obtain required input."
          }
        ]
      },
      {
        "id": "s2-33",
        "number": "2.33",
        "heading": "Effect of termination",
        "blocks": [
          {
            "type": "paragraph",
            "text": "On termination, the client must pay undisputed amounts for work performed and authorised non-cancellable costs. CalderForge will provide paid-for work product reasonably available at termination, subject to IP, security, technical feasibility and platform rules."
          },
          {
            "type": "paragraph",
            "text": "Clauses intended by nature to survive—such as confidentiality, payment, IP, limitations, indemnities and dispute terms—continue after termination."
          }
        ]
      },
      {
        "id": "s2-34",
        "number": "2.34",
        "heading": "Client delay and dormant projects",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If the client does not provide required feedback, assets, access or decisions for an extended period, CalderForge may pause/archive the project and release reserved capacity. Restart may require rescheduling and an updated estimate if costs, scope or availability changed."
          },
          {
            "type": "paragraph",
            "text": "Any restart/re-activation fee must be disclosed and agreed before being charged unless already stated in the accepted SOW."
          }
        ]
      },
      {
        "id": "s2-35",
        "number": "2.35",
        "heading": "Disputes and good-faith escalation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before formal proceedings, the parties should attempt in good faith to resolve a dispute through written notice identifying the issue and requested remedy, followed by a reasonable management-level discussion."
          },
          {
            "type": "paragraph",
            "text": "Marketplace disputes must follow the marketplace’s dispute process to the extent required by platform terms."
          }
        ]
      },
      {
        "id": "s2-36",
        "number": "2.36",
        "heading": "Governing law and forum",
        "blocks": [
          {
            "type": "paragraph",
            "text": "For direct CalderForge contracts, the governing law and forum must be stated here or in the applicable signed agreement. Mandatory consumer, privacy, employment, tax or public-law rules may apply regardless of contractual choice."
          },
          {
            "type": "paragraph",
            "text": "[GOVERNING LAW] and [COURTS/ARBITRATION FORUM]."
          }
        ]
      },
      {
        "id": "s2-37",
        "number": "2.37",
        "heading": "Limitation of liability",
        "blocks": [
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, neither party is liable to the other for indirect, incidental, special, exemplary or consequential losses, including loss of profit, revenue, goodwill, opportunity or data, except to the extent such exclusion is prohibited by law or the applicable signed agreement provides otherwise."
          },
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, CalderForge’s aggregate liability arising from a specific project will not exceed the fees actually paid to CalderForge for the services giving rise to the claim during the preceding twelve months (or, for a one-time project shorter than twelve months, the fees paid for that project)."
          },
          {
            "type": "paragraph",
            "text": "These limitations do not limit liability that cannot legally be limited, and a negotiated contract may state different caps/exclusions."
          }
        ]
      },
      {
        "id": "s2-38",
        "number": "2.38",
        "heading": "Indemnity",
        "blocks": [
          {
            "type": "paragraph",
            "text": "To the extent permitted by law, the client will defend/indemnify CalderForge against third-party claims arising from client-supplied content/data, unlawful client instructions, the client’s products/services, infringement by client materials or the client’s use of deliverables in violation of law or agreed restrictions, except to the extent caused by CalderForge’s own breach or misconduct."
          },
          {
            "type": "paragraph",
            "text": "Any negotiated mutual indemnity in a signed agreement supersedes this general clause."
          }
        ]
      },
      {
        "id": "s2-39",
        "number": "2.39",
        "heading": "Force majeure",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Neither party is responsible for delay or failure caused by events beyond reasonable control, such as widespread outages, natural disasters, war, terrorism, civil unrest, governmental action, labour disruption, major cyber incidents, provider failures or internet/cloud disruptions, provided the affected party uses reasonable efforts to mitigate and resume performance."
          }
        ]
      },
      {
        "id": "s2-40",
        "number": "2.40",
        "heading": "Compliance, sanctions and export controls",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Each party is responsible for complying with laws applicable to its own activities. CalderForge may refuse a transaction if required by sanctions, export controls, anti-money-laundering obligations, platform restrictions or payment-provider rules."
          }
        ]
      },
      {
        "id": "s2-41",
        "number": "2.41",
        "heading": "Notices",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Operational notices may be sent by email, project-management system or marketplace messaging. Legal notices should be sent to the addresses stated in the contract and to info@calderforge.com unless another legal-notice address is specified."
          }
        ]
      },
      {
        "id": "s2-42",
        "number": "2.42",
        "heading": "Assignment",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Neither party may assign a project agreement in a manner that materially prejudices the other party without required consent, except that CalderForge may assign to a successor in connection with a bona fide merger, restructuring or sale of substantially all relevant business assets, subject to applicable law and confidentiality."
          }
        ]
      },
      {
        "id": "s2-43",
        "number": "2.43",
        "heading": "Severability, waiver and entire agreement",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a provision is unenforceable, it will be modified or severed to the minimum extent necessary without invalidating the remainder. A failure to enforce a right is not a waiver. The accepted proposal/SOW, applicable marketplace contract, these Terms and incorporated policies constitute the agreement for the subject matter unless a signed contract states otherwise."
          }
        ]
      },
      {
        "id": "s2-44",
        "number": "2.44",
        "heading": "Changes to these Terms",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge may update website Terms prospectively. Changes do not retroactively rewrite a signed fixed-scope contract unless the parties agree or law requires. The current effective date appears at the top."
          }
        ]
      },
      {
        "id": "s2-45",
        "number": "2.45",
        "heading": "Contact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "General/legal contact: info@calderforge.com. Phone: +1 808 998 5302. Website: www.calderforge.com. Postal/legal address: [REGISTERED BUSINESS ADDRESS]."
          }
        ]
      },
      {
        "id": "s2-46",
        "number": "2.46",
        "heading": "Secure payment and platform-compliance matrix",
        "blocks": [
          {
            "type": "table",
            "head": [
              "How the relationship started",
              "Permitted payment approach",
              "Key rule"
            ],
            "rows": [
              [
                "Direct through CalderForge website/referral",
                "Invoice/bank/payment processor or mutually agreed eligible marketplace/escrow method.",
                "Use only legitimate, disclosed methods; platform rules apply if a marketplace is chosen."
              ],
              [
                "Upwork-originated",
                "Upwork payment methods unless Upwork expressly authorises an exception/conversion.",
                "Do not circumvent applicable Upwork non-circumvention/payment rules."
              ],
              [
                "Fiverr-originated",
                "Fiverr payment/contract flow as required by current Fiverr rules.",
                "Do not solicit off-platform payment or external contracting in violation of Fiverr policy."
              ],
              [
                "Other marketplace-originated",
                "Use that marketplace’s required methods unless it authorises another arrangement.",
                "Marketplace terms control the marketplace transaction."
              ],
              [
                "Direct client with payment difficulty",
                "Offer another direct compliant method or an eligible platform/escrow solution.",
                "Never move a marketplace-originated client off-platform merely to avoid fees or restrictions."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "cookie-policy",
    "title": "Cookie Policy",
    "description": "How CalderForge uses cookies, pixels, local storage and similar technologies, and how to change your choices.",
    "lead": "This Cookie Policy explains how CalderForge may use cookies, pixels, local storage, tags and similar storage/access technologies on www.calderforge.com. It should be read with the Privacy Policy.",
    "sections": [
      {
        "id": "s3-1",
        "number": "3.1",
        "heading": "What cookies and similar technologies are",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cookies are small data files stored on or read from a browser/device. Similar technologies include local storage, session storage, pixels, web beacons, tags, SDKs and device identifiers. They can support website operation, remember choices, measure usage and attribute advertising."
          },
          {
            "type": "paragraph",
            "text": "A “first-party” technology is set by CalderForge’s domain; a “third-party” technology is provided by another company. A “session” technology normally expires when the browsing session ends; a “persistent” technology remains for a configured period or until deleted."
          }
        ]
      },
      {
        "id": "s3-2",
        "number": "3.2",
        "heading": "Categories we may use",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Strictly necessary/security: required for core website operation, security, load balancing, form integrity, consent choices and fraud prevention.",
              "Preferences/functionality: remember language, display, form or user-interface preferences where enabled.",
              "Analytics/performance: help us understand visits, page performance, referral sources, errors and aggregated usage so we can improve the website.",
              "Advertising/measurement: support ad attribution, conversion measurement, frequency control, retargeting or audience suppression where permitted.",
              "Embedded content/integrations: technologies used by embedded scheduling, video, maps, chat, social or other external components when enabled."
            ]
          }
        ]
      },
      {
        "id": "s3-3",
        "number": "3.3",
        "heading": "Consent and regional rules",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where law requires prior consent for non-essential storage/access technologies, CalderForge will request consent before activating the relevant category. Strictly necessary technologies may be used without consent where the law permits because they are required for a requested service or security."
          },
          {
            "type": "paragraph",
            "text": "For UK/EEA visitors, advertising and many analytics technologies ordinarily require a consent/opt-out mechanism consistent with applicable ePrivacy/PECR and data-protection rules. The consent interface should make rejecting non-essential technologies reasonably as easy as accepting them."
          },
          {
            "type": "paragraph",
            "text": "Where laws provide an opt-out rather than prior-consent model, CalderForge will provide the required opt-out and honour recognised preference signals where applicable."
          }
        ]
      },
      {
        "id": "s3-4",
        "number": "3.4",
        "heading": "Changing or withdrawing choices",
        "blocks": [
          {
            "type": "paragraph",
            "text": "You can use the website’s cookie preferences control (when displayed) to change non-essential categories. You can also use browser/device controls to block or delete cookies, although doing so may affect website functionality."
          },
          {
            "type": "paragraph",
            "text": "Withdrawing consent does not make prior lawful processing unlawful. Some third-party services provide their own opt-out controls."
          }
        ]
      },
      {
        "id": "s3-5",
        "number": "3.5",
        "heading": "Analytics",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If CalderForge uses Google Analytics or another analytics provider, the provider may receive device, browser, page, referral and interaction information. CalderForge should configure analytics to minimise data, set appropriate retention and activate it only in accordance with applicable consent rules."
          },
          {
            "type": "paragraph",
            "text": "The exact analytics tools in production must be listed in the live cookie preference centre and/or cookie inventory."
          }
        ]
      },
      {
        "id": "s3-6",
        "number": "3.6",
        "heading": "Meta Pixel and Meta advertising technologies",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If enabled, Meta technologies may help measure actions taken after a Meta/Facebook/Instagram ad, create or suppress audiences and improve campaign measurement. Depending on configuration and applicable law, this can involve identifiers, browser/device data, page visits and conversion events."
          },
          {
            "type": "paragraph",
            "text": "Meta may act independently for some processing under its own terms/privacy notice. CalderForge will not intentionally transmit sensitive project content through advertising pixels."
          }
        ]
      },
      {
        "id": "s3-7",
        "number": "3.7",
        "heading": "LinkedIn Insight Tag",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If enabled, the LinkedIn Insight Tag may support campaign conversion measurement, website audience insights and retargeting. It may process device/browser identifiers and page/event information under LinkedIn’s terms."
          },
          {
            "type": "paragraph",
            "text": "The tag should be controlled through the consent mechanism where required."
          }
        ]
      },
      {
        "id": "s3-8",
        "number": "3.8",
        "heading": "Google Ads and related measurement",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If enabled, Google advertising/measurement technologies may support conversion tracking, remarketing and campaign attribution. CalderForge should use consent controls and Google consent-mode/configuration features as applicable to the visitor’s jurisdiction and implementation."
          }
        ]
      },
      {
        "id": "s3-9",
        "number": "3.9",
        "heading": "Scheduling, chat and embedded services",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Embedded scheduling, meeting, chat, map, video or social components may set their own cookies/technologies when loaded or used. CalderForge should avoid loading non-essential third-party embeds before required consent and should link to relevant third-party privacy information where practical."
          }
        ]
      },
      {
        "id": "s3-10",
        "number": "3.10",
        "heading": "Global Privacy Control and “Do Not Sell/Share”",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where applicable law treats certain advertising disclosures as a sale or sharing of personal information, CalderForge will provide a compliant opt-out mechanism and honour Global Privacy Control or another legally recognised opt-out preference signal to the extent required and technically applicable."
          }
        ]
      },
      {
        "id": "s3-11",
        "number": "3.11",
        "heading": "Do Not Track",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Browser “Do Not Track” signals are not interpreted uniformly across the industry. CalderForge will follow legally recognised opt-out signals such as GPC where required, while ordinary DNT settings may not independently change all website processing."
          }
        ]
      },
      {
        "id": "s3-12",
        "number": "3.12",
        "heading": "Retention",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cookie and similar-technology retention depends on purpose and provider configuration. CalderForge should use the shortest period reasonably necessary for the stated purpose and periodically review persistent identifiers. The live cookie inventory/consent manager should show the actual duration where technically available."
          }
        ]
      },
      {
        "id": "s3-13",
        "number": "3.13",
        "heading": "Changes and contact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We may update this Cookie Policy when website technologies or legal requirements change. Questions can be sent to info@calderforge.com."
          }
        ]
      },
      {
        "id": "s3-14",
        "number": "3.14",
        "heading": "Cookies and technologies used on this website",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The table below lists the cookies and similar technologies loaded by www.calderforge.com. Anything outside the strictly necessary category stays off until you allow it through the cookie banner."
          },
          {
            "type": "table",
            "head": [
              "Technology/provider",
              "Category",
              "Purpose",
              "When it loads"
            ],
            "rows": [
              [
                "CookieYes consent banner (cookieyes-consent cookie)",
                "Strictly necessary",
                "Stores your cookie choices so the banner does not ask again on every visit",
                "Always"
              ],
              [
                "Google Tag Manager",
                "Strictly necessary (tag management)",
                "Loads our measurement tags and passes your consent choices to them through Google Consent Mode",
                "Always; the tags it manages follow your choices"
              ],
              [
                "Google Analytics 4 (_ga and _ga_* cookies)",
                "Analytics",
                "Measures visits, page performance, referral sources and enquiry conversions",
                "Analytics cookies are set only after you accept analytics. Until then, Google Consent Mode sends cookieless signals only"
              ],
              [
                "Trustindex (reviews and Facebook feed widgets)",
                "Functional / embedded content",
                "Displays our verified reviews and recent Facebook posts on the home page",
                "Only after you allow functional cookies"
              ],
              [
                "Trustpilot invitation script",
                "Functional",
                "Supports Trustpilot review invitations",
                "Only after you allow functional cookies"
              ],
              [
                "Google Fonts",
                "Website infrastructure",
                "Serves the website typefaces. It sets no cookies, but your browser sends its IP address to Google to download the font files",
                "Always"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "You can change or withdraw your choices at any time using the “Cookie settings” link in the website footer."
          }
        ]
      }
    ]
  },
  {
    "slug": "refund-cancellation-policy",
    "title": "Refund & Cancellation Policy",
    "description": "How cancellations, refunds, project pauses and payment disputes are handled for CalderForge services.",
    "lead": "This Refund & Cancellation Policy explains how cancellations, refunds, project pauses and payment disputes are handled for CalderForge services. It is intended to be fair to clients while recognising that custom professional services consume specialist time and reserved capacity as work is performed.",
    "sections": [
      {
        "id": "s4-1",
        "number": "4.1",
        "heading": "Scope and priority of other agreements",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This Policy applies to direct CalderForge engagements unless a signed client agreement, SOW, proposal, order form or marketplace contract contains a different refund/cancellation rule."
          },
          {
            "type": "paragraph",
            "text": "For Upwork, Fiverr or another marketplace project, mandatory marketplace payment, escrow, dispute, cancellation and refund rules control to the extent they apply."
          }
        ]
      },
      {
        "id": "s4-2",
        "number": "4.2",
        "heading": "General principle",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge does not use an “all payments are always non-refundable” rule. Refund eligibility depends on whether work has begun, the amount of work performed, accepted milestones, non-cancellable third-party costs, reserved capacity, the reason for cancellation and any mandatory law."
          },
          {
            "type": "paragraph",
            "text": "Where a refund is due, CalderForge aims to refund the unearned portion of fees after deducting work already performed and authorised non-refundable third-party costs, subject to the applicable contract and law."
          }
        ]
      },
      {
        "id": "s4-3",
        "number": "4.3",
        "heading": "Fixed-price projects",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Fixed-price projects are normally divided into deliverables or milestones. Amounts allocated to completed/accepted milestones are generally not refundable except where law requires or CalderForge materially failed to deliver the agreed scope and did not cure after a reasonable opportunity."
          },
          {
            "type": "paragraph",
            "text": "If the client cancels a project mid-stage, CalderForge may calculate the earned amount based on completed deliverables, documented progress, time reasonably spent, committed resources and authorised third-party costs, but will not intentionally charge for substantial unperformed work merely because a project was cancelled."
          }
        ]
      },
      {
        "id": "s4-4",
        "number": "4.4",
        "heading": "Hourly work",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Fees for properly recorded hours already worked are generally non-refundable because the professional time has been delivered. A client may cancel future hourly work subject to any notice requirement and payment of accrued time/approved expenses."
          },
          {
            "type": "paragraph",
            "text": "For marketplace hourly contracts, the marketplace’s work-diary, review, dispute and payment-protection rules apply."
          }
        ]
      },
      {
        "id": "s4-5",
        "number": "4.5",
        "heading": "Retainers, maintenance and recurring services",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Recurring fees cover availability and services for the stated billing period. Unless a plan states otherwise, cancellation stops future renewal rather than retroactively refunding services/capacity already provided during the current period."
          },
          {
            "type": "paragraph",
            "text": "Unused included hours do not automatically roll over or create a cash refund unless the plan expressly allows it. Mandatory cancellation/refund rights remain unaffected."
          }
        ]
      },
      {
        "id": "s4-6",
        "number": "4.6",
        "heading": "Discovery, strategy, consultation and audits",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Discovery calls or consultations advertised as free are not charged. Paid strategy sessions, audits, workshops, architecture reviews and discovery work are generally non-refundable once performed or substantially prepared, because the analysis/time has been delivered."
          },
          {
            "type": "paragraph",
            "text": "If CalderForge cancels a paid session and cannot reasonably reschedule, the client will receive a refund for the cancelled session."
          }
        ]
      },
      {
        "id": "s4-7",
        "number": "4.7",
        "heading": "Deposits and project reservation payments",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A deposit may secure project capacity and fund initial discovery/setup. Whether a deposit is refundable depends on the proposal/SOW, work performed and applicable law."
          },
          {
            "type": "paragraph",
            "text": "If a proposal labels a booking amount as non-refundable, that designation applies only to the extent permitted by law and should reflect genuine reserved capacity, administrative setup, initial work or other legitimate costs—not a penalty disconnected from actual loss or performance."
          }
        ]
      },
      {
        "id": "s4-8",
        "number": "4.8",
        "heading": "Cancellation before work starts",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a direct client cancels before CalderForge has started substantive work or incurred non-cancellable costs, CalderForge will generally refund amounts paid, less any specifically disclosed/authorised non-refundable transaction or third-party cost to the extent lawful."
          },
          {
            "type": "paragraph",
            "text": "If specialist capacity was expressly reserved under a contract containing a lawful cancellation fee, that agreed fee may apply."
          }
        ]
      },
      {
        "id": "s4-9",
        "number": "4.9",
        "heading": "Cancellation after work starts",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If the client cancels after work begins, CalderForge will provide a closing statement showing, where reasonably practical, the work completed, amounts earned, authorised third-party costs and any refundable balance."
          },
          {
            "type": "paragraph",
            "text": "Paid-for work product available in a usable state will be supplied subject to full payment of earned amounts, IP/licensing restrictions, security and technical feasibility."
          }
        ]
      },
      {
        "id": "s4-10",
        "number": "4.10",
        "heading": "Revisions and dissatisfaction",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A refund is not automatically due because a client changes preference after approving a direction or because the client requests scope not included in the project. CalderForge will first determine whether the issue is a genuine scope defect, a revision within included rounds or a new request."
          },
          {
            "type": "paragraph",
            "text": "For a verified material defect against the agreed scope, CalderForge’s first remedy is normally correction/re-performance within a reasonable period. If cure is impossible or repeatedly unsuccessful, an appropriate partial or full refund may be considered depending on the affected deliverable and law."
          }
        ]
      },
      {
        "id": "s4-11",
        "number": "4.11",
        "heading": "“7-day” e-commerce or rapid-launch offers",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A “launch in as little as 7 days” offer is conditional on receiving required payment/funding, complete project brief, product data, images/content, access credentials, domain/platform access and timely approvals. It is not an unconditional guarantee that every project, integration or custom feature will be completed within seven calendar days."
          },
          {
            "type": "paragraph",
            "text": "Client delays, additional product uploads beyond the agreed package, custom integrations, third-party verification, payment-gateway approval, DNS propagation, app review, scope changes and force-majeure events extend the timetable and do not by themselves create a refund right."
          },
          {
            "type": "paragraph",
            "text": "If CalderForge materially misses a date that was expressly guaranteed in writing for reasons within CalderForge’s reasonable control, the parties will first agree a practical cure, revised delivery or proportionate remedy."
          }
        ]
      },
      {
        "id": "s4-12",
        "number": "4.12",
        "heading": "Client-provided content, access and delay",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If work cannot continue because required client content, approvals, credentials or decisions are missing, the project may be paused. The pause is not a cancellation by CalderForge and does not create an automatic refund of work already performed."
          },
          {
            "type": "paragraph",
            "text": "After prolonged inactivity and reasonable follow-up attempts, CalderForge may archive the project. Restart may require a new schedule and updated estimate if rates, third-party costs or scope have changed."
          }
        ]
      },
      {
        "id": "s4-13",
        "number": "4.13",
        "heading": "Third-party purchases and pass-through costs",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Domains, hosting, premium themes, software licenses, plugins/apps, stock assets, API credits, ad spend, platform fees, SMS/email usage, payment fees and other third-party items are refundable only if the third-party provider refunds them or the contract expressly states otherwise."
          },
          {
            "type": "paragraph",
            "text": "If ownership can be transferred to the client, CalderForge will reasonably assist with transfer after related costs are paid."
          }
        ]
      },
      {
        "id": "s4-14",
        "number": "4.14",
        "heading": "Payment failure and project suspension",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If a scheduled payment fails or becomes overdue, CalderForge may pause work and extend the schedule until payment is resolved. For a direct client, CalderForge may offer another compliant payment method."
          },
          {
            "type": "paragraph",
            "text": "Where the relationship originated on Upwork, Fiverr or another marketplace, payment alternatives must remain compliant with that marketplace. A payment problem does not justify circumvention."
          }
        ]
      },
      {
        "id": "s4-15",
        "number": "4.15",
        "heading": "Chargebacks and payment disputes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before filing a chargeback for a direct CalderForge payment, clients are encouraged to contact CalderForge with the disputed invoice and requested remedy so the matter can be investigated. This does not waive any legal right to dispute an unauthorised or incorrect charge."
          },
          {
            "type": "paragraph",
            "text": "Knowingly filing a false chargeback after receiving contracted services may constitute breach of contract and CalderForge may provide project records to the payment provider or pursue lawful recovery of earned fees. CalderForge will not retaliate against a good-faith payment dispute."
          }
        ]
      },
      {
        "id": "s4-16",
        "number": "4.16",
        "heading": "Refund method and timing",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Approved refunds are normally returned to the original payment method where practical. Processor, bank or marketplace settlement times are outside CalderForge’s control."
          },
          {
            "type": "paragraph",
            "text": "Where the original route cannot receive a refund, CalderForge may request verification before using another lawful method. The recipient is responsible for accurate refund details."
          }
        ]
      },
      {
        "id": "s4-17",
        "number": "4.17",
        "heading": "Currency and transaction charges",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If the client paid in a different currency, the amount received after exchange may differ from the amount originally debited because of bank, processor or exchange-rate movements. CalderForge does not control third-party foreign-exchange spreads or card/bank fees."
          },
          {
            "type": "paragraph",
            "text": "Refunds will be calculated in the contract/invoice currency unless law or the payment platform requires otherwise."
          }
        ]
      },
      {
        "id": "s4-18",
        "number": "4.18",
        "heading": "Marketplace-specific refunds",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Upwork-originated projects: refunds, milestone releases, hourly disputes, escrow, conversion and non-circumvention are subject to Upwork’s then-current Terms and escrow/payment rules. CalderForge will not offer an off-platform refund/payment arrangement that would violate those rules."
          },
          {
            "type": "paragraph",
            "text": "Fiverr-originated projects: cancellations, order disputes and refunds are handled within Fiverr as required by Fiverr’s Terms/Payment Terms. CalderForge will not ask the client to settle a Fiverr-originated transaction externally where prohibited."
          },
          {
            "type": "paragraph",
            "text": "Other marketplaces: the applicable platform’s rules control."
          }
        ]
      },
      {
        "id": "s4-19",
        "number": "4.19",
        "heading": "Consumer cancellation rights",
        "blocks": [
          {
            "type": "paragraph",
            "text": "CalderForge primarily provides business/professional services. If a client is legally a consumer and mandatory local law grants a cooling-off, cancellation, re-performance, refund or statutory-quality right, that mandatory right prevails over any conflicting clause in this Policy."
          },
          {
            "type": "paragraph",
            "text": "Where a consumer expressly asks CalderForge to begin a service during a statutory cancellation period, local law may allow CalderForge to charge a proportionate amount for work performed or may require specific consent/acknowledgements. CalderForge will apply those rules where applicable."
          }
        ]
      },
      {
        "id": "s4-20",
        "number": "4.20",
        "heading": "How to request cancellation or refund review",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Email info@calderforge.com with your name/business, invoice or project reference, the amount/payment date, the reason for the request and the remedy you are seeking. Marketplace projects should also use the platform’s required process."
          },
          {
            "type": "paragraph",
            "text": "CalderForge will review the request against the project record, completed work, applicable agreement, platform rules and mandatory law and will provide a reasoned response within a commercially reasonable period."
          }
        ]
      },
      {
        "id": "s4-21",
        "number": "4.21",
        "heading": "Changes to this Policy",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Changes apply prospectively and do not retroactively remove rights already fixed under a signed agreement, completed transaction or mandatory law. The effective date identifies the current public version."
          }
        ]
      }
    ]
  }
];
