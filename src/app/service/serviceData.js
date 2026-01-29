export const services = [
    {
        id: 'angiogram',
        title: 'Angiogram',
        description: 'A diagnostic imaging test that uses X-rays to view your heart\'s blood vessels and chambers.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        category: 'diagnostic',
        video: '/angio.mp4',
        details: {
            overview: "An angiogram is a diagnostic test that uses X-ray imaging and a special dye (contrast material) to view your heart's blood vessels. It helps doctors pinpoint the location and severity of blockages in the arteries.",
            duration: "30-60 Mins",
            hospitalStay: "Day Procedure",
            recovery: "4-6 Hours",
            anesthesia: "Local",
            procedure: [
                "A thin tube (catheter) is inserted into a blood vessel in your arm or groin.",
                "The catheter is guided to the heart or coronary arteries.",
                "Contrast dye is injected through the catheter.",
                "X-ray images (angiograms) are taken as the dye flows through the blood vessels."
            ],
            benefits: [
                "Accurately diagnoses coronary artery disease.",
                "Identifies the exact location of blockages.",
                "Helps determine the best treatment plan (medication, angioplasty, or surgery)."
            ]
        }
    },
    {
        id: 'angioplasty',
        title: 'Angioplasty',
        description: 'A procedure to open blocked or narrowed coronary arteries using a balloon catheter and stent.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        ),
        category: 'interventional',
        details: {
            overview: "Angioplasty is a minimally invasive procedure used to open clogged heart arteries. It involves temporarily inserting and inflating a tiny balloon where your artery is clogged to help widen the artery.",
            duration: "1-2 Hours",
            hospitalStay: "1-2 Days",
            recovery: "1 Week",
            anesthesia: "Local + Sedation",
            procedure: [
                "A small incision is made in the groin or wrist.",
                "A catheter is threaded through the blood vessels to the blocked coronary artery.",
                "A balloon at the tip of the catheter is inflated to push the plaque against the artery wall.",
                "Often, a stent (small wire mesh tube) is placed to keep the artery open."
            ],
            benefits: [
                "Restores blood flow to the heart.",
                "Relieves chest pain (angina).",
                "Improves shortness of breath.",
                "Can stop a heart attack in progress."
            ]
        }
    },
    {
        id: 'congenital-heart',
        title: 'Congenital Heart Defects',
        subtitle: 'ASD / VSD Closure',
        description: 'Surgical correction of heart defects present from birth, including hole-in-heart repairs.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        category: 'interventional',
        video: '/ASD.mp4',
        details: {
            overview: "Congenital heart defects are structural problems with the heart present at birth. Common types include Atrial Septal Defect (ASD) and Ventricular Septal Defect (VSD), often referred to as 'holes in the heart'.",
            duration: "3-5 Hours",
            hospitalStay: "5-7 Days",
            recovery: "4-6 Weeks",
            anesthesia: "General",
            procedure: [
                "Diagnosis via echocardiogram or cardiac catheterization.",
                "Transcatheter device closure: A device is inserted via a catheter to plug the hole (less invasive).",
                "Surgical repair: Open-heart surgery to patch or stitch the hole closed (if device closure isn't suitable)."
            ],
            benefits: [
                "Prevents heart failure and pulmonary hypertension.",
                "Improves oxygen circulation.",
                "Allows for normal growth and activity levels in children."
            ]
        }
    },
    {
        id: 'balloon-valvuloplasty',
        title: 'Balloon Valvuloplasty',
        subtitle: 'PTMC – Valve Opening Procedure',
        description: 'A minimally invasive procedure to open narrowed heart valves using a balloon catheter.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        category: 'interventional',
        details: {
            overview: "Balloon valvuloplasty is a procedure to widen a narrowed heart valve (stenosis). It improves blood flow through the heart valve and reduces symptoms.",
            duration: "1-2 Hours",
            hospitalStay: "1 Day",
            recovery: "1 Week",
            anesthesia: "Local + Sedation",
            procedure: [
                "A catheter with a deflated balloon is guided to the narrowed valve.",
                "The balloon is inflated to stretch the valve opening and separate fused valve leaflets.",
                "The balloon is deflated and removed."
            ],
            benefits: [
                "Relieves symptoms like fatigue and shortness of breath.",
                "Avoids or delays the need for open-heart valve replacement surgery.",
                "Faster recovery compared to surgery."
            ]
        }
    },
    {
        id: 'pacemaker',
        title: 'Pacemaker Implantation',
        description: 'Implantation of a small device that helps regulate abnormal heart rhythms.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        category: 'interventional',
        details: {
            overview: "A pacemaker is a small device placed under the skin in the chest to help control your heartbeat. It is used to treat arrhythmias, particularly bradycardia (slow heartbeat).",
            duration: "1-2 Hours",
            hospitalStay: "1 Day",
            recovery: "1 Week",
            anesthesia: "Local",
            procedure: [
                "Minor surgery performed under local anesthesia.",
                "Leads (wires) are guided through veins into the heart.",
                "The pacemaker generator is implanted under the skin near the collarbone.",
                "The leads are connected to the generator."
            ],
            benefits: [
                "Ensures the heart beats at a normal rate.",
                "Relieves symptoms like dizziness, fainting, and fatigue.",
                "Improves overall quality of life."
            ]
        }
    },
    {
        id: 'holter-monitoring',
        title: '24-Hour Holter Monitoring',
        subtitle: 'Continuous Heart Rhythm Recording',
        description: 'Continuous ECG monitoring for 24-48 hours to detect irregular heartbeats and arrhythmias.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        category: 'diagnostic',
        details: {
            overview: "A Holter monitor is a wearable device that records your heart's rhythm for 24 to 48 hours. It helps doctors pinpoint heart rhythm problems that may not show up during a standard ECG.",
            duration: "24-48 Hours",
            hospitalStay: "None",
            recovery: "Immediate",
            anesthesia: "None",
            procedure: [
                "Electrodes are attached to your chest.",
                "The monitor is connected to the electrodes and worn on a belt or strap.",
                "You go about your normal daily activities while the device records.",
                "You keep a diary of any symptoms you experience."
            ],
            benefits: [
                "Detects transient arrhythmias.",
                "Correlates symptoms (like palpitations) with heart activity.",
                "Non-invasive and painless."
            ]
        }
    },
    {
        id: 'echocardiogram',
        title: 'Echocardiogram (ECHO)',
        description: 'Ultrasound imaging of the heart to assess its structure, function, and blood flow.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        category: 'diagnostic',
        details: {
            overview: "An echocardiogram uses sound waves (ultrasound) to create moving pictures of your heart. It allows doctors to see your heart beating and pumping blood.",
            duration: "30-45 Mins",
            hospitalStay: "None",
            recovery: "Immediate",
            anesthesia: "None",
            procedure: [
                "Gel is applied to your chest.",
                "A transducer (wand) is moved across your chest.",
                "Sound waves create images on a monitor.",
                "Different modes (Doppler, Color Flow) assess blood flow speed and direction."
            ],
            benefits: [
                "Assesses overall heart function.",
                "Detects valve problems, heart defects, and damage from heart attacks.",
                "No radiation exposure."
            ]
        }
    },
    {
        id: 'tmt',
        title: 'TMT (Treadmill Stress Test)',
        description: 'Exercise-based test to evaluate heart function under physical stress conditions.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 4v16M7 4v16M3 8h4M17 8h4M3 12h18M3 16h4M17 16h4" />
            </svg>
        ),
        category: 'diagnostic',
        details: {
            overview: "A Treadmill Stress Test (TMT) measures how well your heart works during physical activity. It helps diagnose coronary artery disease and determine safe exercise levels.",
            duration: "30-45 Mins",
            hospitalStay: "None",
            recovery: "Immediate",
            anesthesia: "None",
            procedure: [
                "ECG electrodes are attached to your chest.",
                "You walk on a treadmill that slowly increases in speed and incline.",
                "Your heart rate, blood pressure, and ECG are constantly monitored.",
                "The test stops when you reach a target heart rate or develop symptoms."
            ],
            benefits: [
                "Detects blockages that may not be apparent at rest.",
                "Evaluates the effectiveness of heart medications.",
                "Helps plan a safe exercise program."
            ]
        }
    },
    {
        id: 'cardiac-icu',
        title: 'Cardiac Intensive Care Unit (ICU)',
        description: '24/7 specialized critical care unit equipped with advanced monitoring for cardiac patients.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                <path d="M3 21h18M9 7h6M9 11h6M9 15h4" />
            </svg>
        ),
        category: 'care',
        details: {
            overview: "Our Cardiac ICU provides 24/7 specialized care for patients with life-threatening heart conditions. It is staffed by a dedicated team of cardiologists, intensivists, and critical care nurses.",
            duration: "Continuous",
            hospitalStay: "Variable",
            recovery: "Variable",
            anesthesia: "N/A",
            features: [
                "Advanced hemodynamic monitoring systems.",
                "Ventilator support and intra-aortic balloon pumps (IABP).",
                "Immediate access to the cath lab and operating theatre.",
                "1:1 nursing ratio for critical patients."
            ]
        }
    },
    {
        id: 'heart-checkup',
        title: 'General Heart Checkup and Treatment',
        description: 'Comprehensive cardiac evaluation including consultation, tests, and personalized treatment plans.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        ),
        category: 'care',
        details: {
            overview: "Regular heart checkups are essential for early detection and prevention of heart disease. We offer comprehensive heart health packages tailored to your age and risk factors.",
            duration: "2-3 Hours",
            hospitalStay: "None",
            recovery: "Immediate",
            anesthesia: "None",
            includes: [
                "Cardiologist consultation.",
                "ECG, Echo, and TMT.",
                "Lipid profile and blood sugar tests.",
                "Lifestyle and dietary counseling."
            ]
        }
    },
    {
        id: 'dialysis',
        title: 'Dialysis Facility Available',
        description: 'State-of-the-art dialysis services for patients requiring kidney function support.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        category: 'care',
        details: {
            overview: "We offer comprehensive dialysis services for patients with acute or chronic kidney failure. Our unit is equipped with advanced dialysis machines and adheres to strict infection control protocols.",
            duration: "4 Hours",
            hospitalStay: "Day Procedure",
            recovery: "Immediate",
            anesthesia: "None",
            features: [
                "Hemodialysis and Peritoneal Dialysis support.",
                "Experienced nephrologists and dialysis technicians.",
                "Comfortable treatment environment.",
                "Emergency dialysis services."
            ]
        }
    },
    {
        id: 'eecp',
        title: 'EECP Therapy',
        subtitle: 'Enhanced External Counter Pulsation',
        description: 'A non-invasive outpatient treatment for angina and heart failure that improves blood flow and heart function.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                <path d="M12 5v2" />
                <path d="M12 17v2" />
                <path d="M5 12h2" />
                <path d="M17 12h2" />
                <circle cx="12" cy="12" r="9" strokeOpacity="0.5" />
            </svg>
        ),
        category: 'care',
        details: {
            overview: "EECP (Enhanced External Counter Pulsation) is a non-invasive treatment for patients with chronic stable angina or heart failure. It uses inflatable cuffs on the legs to increase blood flow to the heart.",
            duration: "1 Hour",
            hospitalStay: "Outpatient",
            recovery: "Immediate",
            anesthesia: "None",
            procedure: [
                "Cuffs are wrapped around your calves, thighs, and buttocks.",
                "The cuffs inflate and deflate in sync with your heartbeat (ECG synchronized).",
                "This pumping action increases blood supply to the heart muscle.",
                "Treatment is usually 1 hour per day for 35 sessions."
            ],
            benefits: [
                "Reduces angina frequency and intensity.",
                "Improves exercise tolerance.",
                "Non-surgical and medication-free mechanism."
            ]
        }
    }
];
