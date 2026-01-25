import React from 'react';
import './ServiceDetails.css';

export default function ServiceDetails() {
    return (
        <div className='service-details-container'>
            <a href="/service" className='back-link'>&larr; Back to Services</a>
            <div className='details-header'>
                <h1>Our Medical <span className='text-highlight'>Specialties</span></h1>
                <p>In-depth look at our world-class treatments and facilities.</p>
            </div>

            <div className='details-content'>

                {/* General Medicine Section */}
                <section id="general-medicine" className='detail-section'>
                    <div className='detail-text'>
                        <h2>General Medicine</h2>
                        <p>
                            Our General Medicine department is dedicated to the prevention, diagnosis, and non-surgical treatment of various health conditions.
                            We serve as the first point of contact for many patients, providing comprehensive physical examinations and treating acute and chronic illnesses.
                        </p>
                        <ul className='feature-list'>
                            <li>Preventive Healthcare & Check-ups</li>
                            <li>Management of chronic diseases (Diabetes, Hypertension)</li>
                            <li>Infectious disease treatment</li>
                            <li>Geriatric care</li>
                        </ul>
                    </div>
                </section>

                {/* Cardiology Section */}
                <section id="cardiology" className='detail-section'>
                    <div className='detail-text'>
                        <h2>Intervention Cardiology</h2>
                        <p>
                            Our Cardiology department offers advanced cardiac care with a focus on intervention and recovery.
                            Equipped with the latest technology, our team ensures the best outcomes for heart patients.
                        </p>

                        <div className='sub-detail-grid'>
                            <div className='sub-detail-card'>
                                <h3>Cath Lab</h3>
                                <p>Our sophisticated Catheterization Lab performs complex procedures including angiograms and angioplasties 24/7, supported by a dedicated intensive care unit.</p>
                            </div>
                            <div className='sub-detail-card'>
                                <h3>ECHO (Echocardiography)</h3>
                                <p>Advanced imaging to assess heart valve function and heart pumping capability, helping in accurate diagnosis of heart conditions.</p>
                            </div>
                            <div className='sub-detail-card'>
                                <h3>ECG (Electrocardiogram)</h3>
                                <p>Quick and precise heart rhythm monitoring to detect irregularities and potential heart attacks immediately.</p>
                            </div>
                            <div className='sub-detail-card'>
                                <h3>EECP (Enhanced External Counterpulsation)</h3>
                                <p>A non-invasive procedure to treat angina and heart failure, improving blood flow to the heart muscle without surgery.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dialysis Section */}
                <section id="dialysis" className='detail-section'>
                    <div className='detail-text'>
                        <h2>Dialysis & Renal Care</h2>
                        <p>
                            We provide life-sustaining dialysis support for patients with acute or chronic kidney failure.
                            Our center is equipped with modern hemodialysis machines and is managed by specialized staff to ensure patient safety and comfort.
                        </p>
                        <ul className='feature-list'>
                            <li>24/7 Hemodialysis support</li>
                            <li>Dedicated infection control protocols</li>
                            <li>Comfortable reclining beds for patients</li>
                            <li>Dietary counseling for renal patients</li>
                        </ul>
                    </div>
                </section>

                {/* Emergency Care Section */}
                <section id="emergency" className='detail-section'>
                    <div className='detail-text'>
                        <h2>Emergency Care</h2>
                        <p>
                            Our 24/7 Emergency Department is staffed by a multidisciplinary team of specialists trained to handle medical, surgical, and cardiac emergencies with speed and precision.
                        </p>
                        <ul className='feature-list'>
                            <li>Round-the-clock fully equipped ambulance service</li>
                            <li>Advanced life support systems</li>
                            <li>Immediate triage and stabilization</li>
                            <li>Dedicated trauma and cardiac emergency protocols</li>
                        </ul>
                    </div>
                </section>

                {/* Diagnostics Section */}
                <section id="diagnostics" className='detail-section'>
                    <div className='detail-text'>
                        <h2>Advanced Diagnostics</h2>
                        <p>
                            Accurate diagnosis is the first step to effective treatment. Our diagnostic center is equipped with cutting-edge technology to provide precise and timely results.
                        </p>
                        <ul className='feature-list'>
                            <li>Full-service Clinical Laboratory (Biochemistry, Pathology, Microbiology)</li>
                            <li>Digital X-Ray and Imaging</li>
                            <li>Computerized ECG and Treadmill Test (TMT)</li>
                            <li>Pulmonary Function Test (PFT)</li>
                        </ul>
                    </div>
                </section>

                {/* Health Checkup Section */}
                <section id="health-checkup" className='detail-section'>
                    <div className='detail-text'>
                        <h2>Master Health Checkup</h2>
                        <p>
                            Prevention is better than cure. Our Master Health Checkup packages are designed to screen for lifestyle diseases and detect potential health issues at an early stage.
                        </p>
                        <ul className='feature-list'>
                            <li>Comprehensive Physical Examination</li>
                            <li>Cardiac Screening (ECG, ECHO, Lipid Profile)</li>
                            <li>Diabetes Screening (HbA1c, Blood Sugar)</li>
                            <li>Kidney and Liver Function Tests</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
}
