export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  iconName: string;
  keyOfferings: string[];
  conditionsAddressed: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
}

export const CLINIC_INFO = {
  name: "Mangai Clinic",
  tamilName: "மங்கை கிளினிக்",
  tagline: "Compassionate Care for Every Stage of Womanhood",
  doctor: {
    name: "Dr. R. M. Sornam Chokkalingam",
    qualifications: "MBBS, MD (Obstetrics & Gynecology), DNB (OBG)",
    title: "Consultant Obstetrician, Gynecologist & Fertility Specialist",
    registrationNotice: "Registered Medical Practitioner, Tamil Nadu Medical Council",
    experienceSummary: "Dedicated consultant obstetrician and gynecologist serving women and families across Salem with clinical precision and empathetic listening.",
    philosophy: "Healthcare for women is not merely transactional treatment; it is building a space of dignity, active listening, and evidence-based medicine where every patient feels completely heard, respected, and comforted.",
    areasOfPractice: [
      "Comprehensive Antenatal & High-Risk Pregnancy Care",
      "Painless Normal Delivery Counseling & Birth Planning",
      "General & Adolescent Gynecology",
      "PCOD / PCOS Metabolic & Hormonal Management",
      "Compassionate Fertility Evaluation & Preconception Care",
      "Cervical Cancer Screening (Pap Smear) & Preventive Women's Health",
      "Perimenopause & Menopause Transition Support",
    ],
  },
  contact: {
    primaryPhone: "+91 99444 66729",
    landline: "+91 427 4300678",
    phoneDisplay: "+91 99444 66729 / 0427-4300678",
    phoneHref: "tel:+919944466729",
    whatsappHref: "https://wa.me/919944466729?text=Hello%20Mangai%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation%20with%20Dr.%20R.%20M.%20Sornam%20Chokkalingam.",
    email: "care@mangaiclinic.com",
    address: {
      street: "188/M1, Guptha Nagar, Angammal Colony",
      locality: "Angammal Colony",
      city: "Salem",
      state: "Tamil Nadu",
      postalCode: "636009",
      country: "India",
      landmark: "Near Angammal Colony Main Road, Salem",
    },
    timings: {
      weekdays: "Monday – Saturday: 10:00 AM – 1:30 PM & 5:30 PM – 8:30 PM",
      sunday: "Sunday: Closed / Prior appointment for emergency obstetric guidance",
      note: "Timings may vary based on surgical schedules and hospital deliveries. Prior appointment is strongly recommended.",
    },
    healthplixBookingUrl: "https://book-appointment.healthplix.com/dr-r-m-sornam-chokkalingam-consultant-obstetrician-and-gynecologist-angammal-colony-salem",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Mangai+Clinic+188/M1+Guptha+Nagar+Angammal+Colony+Salem+Tamil+Nadu+636009",
  },
  seo: {
    siteUrl: "https://mangaiclinic.com",
    city: "Salem",
    district: "Salem District",
    state: "Tamil Nadu",
    geo: {
      latitude: 11.6643,
      longitude: 78.146,
    },
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pregnancy-care",
    slug: "pregnancy-care",
    title: "Pregnancy Care",
    tagline: "Thoughtful, gentle antenatal and postnatal care for mother and baby",
    shortDesc: "Comprehensive maternal healthcare from positive test through labor counseling and postpartum recovery, led by Dr. R. M. Sornam Chokkalingam.",
    fullDesc: "Pregnancy is a profound life transition. At Mangai Clinic in Salem, we provide reassuring, evidence-based antenatal care tailored to each mother's unique health profile. Dr. R. M. Sornam Chokkalingam prioritizes attentive listening, meticulous growth monitoring, nutritional guidance, and clear explanations at every ultrasound and consultation.",
    iconName: "Baby",
    keyOfferings: [
      "First Trimester Assessment & Early Viability Counseling",
      "High-Risk Pregnancy Screening (Gestational Diabetes, Hypertension, Preeclampsia)",
      "Routine Antenatal Check-ups & Fetal Growth Tracking",
      "Painless Normal Delivery Guidance & Labor Education",
      "Twin / Multiple Pregnancy Management",
      "Postnatal Maternal Checkups & Lactation Counseling",
    ],
    conditionsAddressed: [
      "Gestational Diabetes Mellitus (GDM)",
      "Pregnancy-Induced Hypertension (PIH / Preeclampsia)",
      "Maternal Anemia & Nutritional Deficiencies",
      "History of Recurrent Pregnancy Loss",
      "Thyroid Dysfunction in Pregnancy",
      "Intrauterine Growth Restriction (IUGR) Monitoring",
    ],
    whatToExpect: [
      "Unhurried consultations where questions from both parents are welcomed and answered.",
      "Clear explanation of all lab investigations, scans, and nutritional adjustments.",
      "A compassionate birth plan centered on mother and baby's safety, encouraging normal birth while remaining vigilant for emergencies.",
    ],
    faqs: [
      {
        question: "When should I book my first pregnancy consultation?",
        answer: "As soon as you receive a positive home pregnancy test or miss your menstrual period. An early consultation (usually between 6 and 8 weeks) helps confirm gestational sac location, viability, and initiates critical folic acid and maternal health support."
      },
      {
        question: "How does Dr. R. M. Sornam Chokkalingam manage high-risk pregnancies in Salem?",
        answer: "High-risk pregnancies—such as those with hypertension, gestational diabetes, thyroid disorders, or previous surgical deliveries—receive closely spaced clinical reviews, individualized monitoring protocols, and coordination with trusted tertiary hospital facilities in Salem for delivery."
      },
      {
        question: "Do you offer counseling for painless normal delivery?",
        answer: "Yes. Dr. Sornam Chokkalingam actively encourages natural labor pathways when medically safe, offering education on labor physiology, breathing techniques, pelvic floor readiness, and pain relief options such as epidural analgesia."
      }
    ]
  },
  {
    id: "gynecology",
    slug: "gynecology",
    title: "Gynecological Care",
    tagline: "Empathetic, confidential care for menstrual, pelvic, and hormonal health",
    shortDesc: "Complete gynecological solutions for adolescent girls, reproductive-age women, and mature women facing menstrual issues, PCOS, infections, or pelvic pain.",
    fullDesc: "Gynecological concerns are deeply personal. Mangai Clinic offers a private, non-judgmental clinical environment in Salem where women can openly discuss menstrual irregularities, pelvic pain, PCOD, hormonal imbalances, and intimate health concerns. Our focus is addressing the root cause with sustainable medical and lifestyle management.",
    iconName: "HeartPulse",
    keyOfferings: [
      "Menstrual Irregularity & Heavy Bleeding (AUB) Diagnostics",
      "PCOD / PCOS Multidisciplinary Management & Cycle Regulation",
      "Pelvic Pain, Endometriosis & Adenomyosis Evaluation",
      "Uterine Fibroid Evaluation & Conservative Management",
      "Recurrent Vaginal Infections, Vaginitis & Pelvic Inflammatory Disease (PID)",
      "Adolescent Puberty Counseling & Gentle Guidance",
    ],
    conditionsAddressed: [
      "Polycystic Ovary Syndrome (PCOS / PCOD)",
      "Dysmenorrhea (Severe Period Pain)",
      "Menorrhagia (Prolonged or Heavy Menstrual Flow)",
      "Bacterial & Fungal Vaginal Infections",
      "Pelvic Floor Discomfort & Prolapse Screening",
      "Premenstrual Dysphoric Disorder (PMDD)",
    ],
    whatToExpect: [
      "Gentle, respectful clinical examinations conducted with strict patient dignity and privacy.",
      "Transparent breakdown of ultrasound findings and hormonal blood tests.",
      "Evidence-based treatment plans that emphasize conservative medical therapy before surgical consideration.",
    ],
    faqs: [
      {
        question: "Why should I consult a gynecologist for irregular periods?",
        answer: "Irregular cycles often stem from hormonal variations, thyroid irregularities, hyperprolactinemia, or PCOD/PCOS. Identifying the underlying cause early protects reproductive health, bone density, and long-term metabolic wellness."
      },
      {
        question: "How is PCOS treated at Mangai Clinic?",
        answer: "We avoid one-size-fits-all prescriptions. Treatment is personalized based on your symptoms (irregular periods, hirsutism, acne, weight struggles, or fertility desires), combining insulin-sensitizing approaches, balanced lifestyle changes, and targeted medical regulation."
      },
      {
        question: "Is clinical consultation confidential?",
        answer: "Absolute privacy and patient confidentiality are fundamental ethics at Mangai Clinic. Every discussion, test, and consultation remains strictly between you and the doctor."
      }
    ]
  },
  {
    id: "fertility-care",
    slug: "fertility-care",
    title: "Fertility Care & Preconception",
    tagline: "Compassionate, medically grounded fertility evaluation with no false promises",
    shortDesc: "Empathetic fertility assessments, ovulation tracking, hormonal balancing, and evidence-based guidance for couples planning their family in Salem.",
    fullDesc: "The path to parenthood can sometimes bring emotional strain and uncertainty. At Mangai Clinic, we approach fertility care with honesty, empathy, and scientific discipline. We do not make misleading promises or push aggressive interventions unnecessarily. Instead, Dr. R. M. Sornam Chokkalingam conducts meticulous preliminary evaluations for couples to understand ovulation, uterine health, and reproductive markers.",
    iconName: "Sparkles",
    keyOfferings: [
      "Preconception Health & Genetic Counseling for Couples",
      "Ovulation Tracking & Follicular Monitoring by Ultrasound",
      "Basic Hormonal & Ovarian Reserve Evaluation (AMH, FSH, LH, Thyroid, Prolactin)",
      "Lifestyle, Nutritional & Metabolic Optimization for Fertility",
      "Ovulation Induction with Controlled Medical Guidance",
      "Ethical Referral & Guidance for Advanced Reproductive Care when indicated",
    ],
    conditionsAddressed: [
      "Anovulation & Irregular Ovulatory Cycles",
      "PCOS-Related Subfertility",
      "Tubal Factor Inquiries & Pelvic Health Assessments",
      "Couples Facing Difficulty Conceiving after 12 Months",
      "Recurrent Early Pregnancy Loss",
      "Pre-existing Maternal Medical Conditions Prior to Pregnancy",
    ],
    whatToExpect: [
      "A compassionate, guilt-free consultation where both partners' questions are treated with utmost sensitivity.",
      "Step-by-step diagnostic roadmap starting with non-invasive, affordable assessments.",
      "Ethical medicine: Realistic counseling with zero exaggerated success guarantees or commercial pressure.",
    ],
    faqs: [
      {
        question: "When should a couple seek a fertility consultation?",
        answer: "If a couple has been trying to conceive for 12 months with regular unprotected intercourse (or 6 months if the female partner is 35 years or older), a consultation is recommended to understand baseline reproductive factors."
      },
      {
        question: "Does Mangai Clinic guarantee pregnancy outcomes?",
        answer: "No ethical medical practice can guarantee pregnancy. At Mangai Clinic, we promise thorough diagnostic diligence, scientific integrity, empathetic counseling, and clear direction without false expectations."
      },
      {
        question: "What happens during the first fertility visit?",
        answer: "Dr. Sornam Chokkalingam reviews both partners' medical, menstrual, and lifestyle histories. Basic baseline tests—such as hormonal profiling, pelvic ultrasound, and semen analysis referral—are discussed to formulate an initial roadmap."
      }
    ]
  },
  {
    id: "womens-health",
    slug: "womens-health",
    title: "Women's Health & Preventive Care",
    tagline: "Proactive health screening, cervical cancer prevention, and menopause support",
    shortDesc: "Annual gynecological checkups, cervical cancer screening (Pap smears), breast health awareness, and perimenopause transition support for women in Salem.",
    fullDesc: "A woman's wellness evolves through life—from the active reproductive years through perimenopause and post-menopause. Mangai Clinic provides comprehensive preventive healthcare so women in Salem can detect subtle changes early and sustain vitality, bone health, and hormonal harmony.",
    iconName: "ShieldCheck",
    keyOfferings: [
      "Routine Cervical Cancer Screening (Pap Smear & HPV Guidance)",
      "Clinical Breast Examinations & Mammogram Guidance",
      "Perimenopause & Menopause Symptom Management",
      "Bone Density Counseling & Osteoporosis Prevention",
      "Premarital Health Counseling & Guidance",
      "Urinary Incontinence & Pelvic Floor Health Evaluation",
    ],
    conditionsAddressed: [
      "Cervical Dysplasia / Precancerous Changes (Early Detection)",
      "Vasomotor Symptoms (Hot Flashes, Night Sweats, Sleep Disturbances)",
      "Hormonal Mood Changes & Perimenopausal Brain Fog",
      "Postmenopausal Bleeding Evaluation",
      "Postmenopausal Vaginal Dryness & Discomfort",
      "Metabolic Changes & Midlife Weight Fluctuations",
    ],
    whatToExpect: [
      "A proactive, preventive approach to avoid long-term chronic complications.",
      "Clear explanation of why Pap smears and annual screenings save lives.",
      "Supportive, practical guidance for navigating midlife transitions with grace and physical comfort.",
    ],
    faqs: [
      {
        question: "How frequently should women get a Pap smear test?",
        answer: "Generally, women aged 21 to 65 are advised to have routine cervical cancer screening (every 3 years for Pap smear alone, or every 5 years when combined with HPV co-testing, depending on clinical recommendations)."
      },
      {
        question: "What is perimenopause, and how can Mangai Clinic help?",
        answer: "Perimenopause is the natural transition leading up to menopause, often marked by irregular periods, hot flashes, mood shifts, and sleep changes. We provide personalized symptom relief, lifestyle adjustments, and protective bone and cardiovascular guidance."
      },
      {
        question: "Is bleeding after menopause normal?",
        answer: "Any bleeding or spotting occurring a year or more after menopause is abnormal and warrants immediate clinical evaluation to determine the cause and rule out uterine lining concerns."
      }
    ]
  }
];

export const PATIENT_EXPERIENCES = [
  {
    id: "exp-1",
    author: "Priya S.",
    location: "Salem",
    context: "Antenatal & Delivery Care",
    quote: "Dr. Sornam Chokkalingam is unlike any doctor I've visited in Salem. She listened patiently to every small worry during my pregnancy and never rushed me out of the room. Her calm reassurance gave my husband and me immense peace of mind.",
    highlight: "Calm, unhurried listening",
  },
  {
    id: "exp-2",
    author: "Kavitha M.",
    location: "Fairlands, Salem",
    context: "PCOD & Menstrual Health",
    quote: "I struggled with painful, irregular cycles for years. Rather than just handing me pills, Dr. Sornam explained what was happening in my body and helped me create a realistic routine. The clinic environment is exceptionally clean, private, and welcoming.",
    highlight: "Clear explanations & sustainable solutions",
  },
  {
    id: "exp-3",
    author: "Deepa & Anand",
    location: "Angammal Colony, Salem",
    context: "Preconception & Fertility Counseling",
    quote: "We were feeling so anxious about starting our family. Mangai Clinic provided honest, gentle guidance without making false promises or pushing unnecessary procedures. We felt respected and supported as a couple every step of the way.",
    highlight: "Ethical, honest guidance",
  },
];

export const CLINIC_VALUES = [
  {
    title: "Patient-First Listening",
    description: "Every appointment begins with hearing your story without interruption, understanding your lifestyle and emotional context.",
  },
  {
    title: "Evidence-Based Ethics",
    description: "We prescribe and recommend only what is clinically substantiated, avoiding unnecessary investigations or commercial pressures.",
  },
  {
    title: "Dignity & Absolute Privacy",
    description: "From consultations to clinical examinations, your privacy, modesty, and comfort are fiercely guarded at all times.",
  },
  {
    title: "Transparent Communication",
    description: "Medical terms are translated into simple, everyday language so you are always an informed partner in your own healthcare.",
  },
];

