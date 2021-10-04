import React from 'react';

const OurServices = () => {
    return (
        <div>
            <h2>Our Services</h2>
            <h5 className="ms-5 me-5">We provide several services that help international students to get them ready for the journey. Also we’ve got an agent program that benefits them to build a career with the name and work closely with our partnered university and help them, too, as well as the students.</h5>
            <div class="accordion text-start" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5><i>Services for students:</i></h5>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h5>We provide several services that help international students to get them ready for the journey.</h5>
                    <h5><i>Free counseling: </i></h5>
                    <p>To any student coming with queries, we offer counseling free of cost with our expert team of counselors. </p>
                    <h5><i>Free profile assessment:  </i></h5>
                    <p>We assess the student profile to see if they match the requirements set by UK universities. And considering it, we try to find the best matches that suit their profile. That way, we help students to narrow down the search and fasten the process.  </p>
                    <h5><i>Admission processing:</i></h5>
                    <p>After pre-selecting the universities, we provide a detailed report to students about the institution. Information like syllabus, internship, research, academic exchange, and all other stuff helps them evaluate the academy to help them in their career track. If they pick some admission options, we start helping with the admission process with all the paperwork.</p>
                    <h5><i>Communication:</i></h5>
                    <p>Universities will start responding to the student's interest in admission. We will keep them notified about the response in real-time. You never will miss any deadline. </p>
                    <h5><i>Interview preparation:</i></h5>
                    <p>We will prepare you for the interview to make the right impact to get yourself a desired university seat.</p>
                    <h5><i>Financial/Scholarship assistance:</i></h5>
                    <p>For candidates with good profiles, we help them find various scholarship opportunities to benefit their studies and relieve the financial burden. We try our best to help the student in need to get financial assistance to pursue their goals.</p>
                    <h5><i>Accommodation:</i></h5>
                    <p>We will then provide you with the university's accommodation options with the cost and additional information. Besides, we have partnerships with private accommodation providers if you want to find accommodations beyond those offered by the university.</p>
                    <h5><i>Visa process:</i></h5>
                    <p>We have a dedicated compliance team that guides and supports students to process for their Study visa. Our team will help you ready all the required documentation to send it to the United Kingdom Embassy to make things easier.</p>
                    <h5><i>Partnership University:</i></h5>
                    <p>Not only students but our service is also available for universities partnered with us. We help both the authority and the students to make the transitions smooth.</p>
                    <h5><i>End-to-End service:</i></h5>
                    <p>Unlike others, our service doesn't end once you get to your choice of university. Even after completing your courses, our team will be at your service to help you further assist in the UK.</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5><i>Services for Agent: </i></h5>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h5>We’ve got an agent program that benefits them to build a career with the name.</h5>
                    <ul>
                        <li>Provide proper training.</li>
                        <li>We update their roles after we get updated by their universities or the British Council.</li>
                        <li>Get them well-versed with our marketing, promotional, and business development policies to ensure they grasp things better.</li>
                        <li>Share promotional kits of institutions with the Agents.</li>
                        <li>With agent participation, we will research to understand the local market and the trends better.</li>
                        <li>Agents will be a mediator between the name and the international students to ensure we get feedback from the students to improve the service.</li>
                        <li>We provide our agents to manage all the applications using our agent login facilities.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h5><i>Services for institutions:</i></h5>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h5>We work closely with our partnered university and help them, too, as well as the students. What we offer:</h5>
                    <ul>
                        <li>Provide trends of the local market and send regular feedback.</li>
                        <li>Assist you in getting prospective students enrolled in your institution</li>
                        <li>Advise students about course materials within your university and help them apply for only the courses that they have required qualifications to take.</li>
                        <li>Provide additional course materials to candidates about the courses to get their interest.</li>
                        <li>Promote your institution using local adverts in the local dialect using newspapers, magazines, and targeted online ads.</li>
                        <li>We help on spot admissions in our office as well as set campaigns in different student admission fairs.</li>
                        <li>We make sure to follow all the policies of your university and the British Council’s codes of practice for student recruitment and admission.</li>
                        <li>Our team will ensure to meet the target of the agreed number of students to your institution every year.</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default OurServices;