const footerHTML = `
<footer class="footer">
    <div class="ft-rw-container">
        <div class="ft-rw-cols">
            <h2>Academics</h2>
            <ul class="ft-ul">
                <li><a href="undergrad.html">Undergraduate</a></li>
                <li><a href="msc-mphil.html">Graduate Courses(MPhil Computer Science)</a></li>
                <li><a href="msc-mphil.html">Graduate Courses(MSc Computer Science)</a></li>
                <li><a href="phd.html">Graduate Courses(PhD Computer Science)</a></li>
                <li><a href="https://wwww.ug.edu.gh" target="_blank" rel="noopener">Academic Calender</a></li>
                <li><a href="https://wwww.timetableapp.sts.ug.edu.gh" target="_blank" rel="noopener">Timetable</a></li>
                <li><a href="https://dcs.ug.edu.gh" target="_blank" rel="noopener">Placement for Level 200</a></li>
                <li><a href="undergrad.html">Student Complaint Form</a></li>
            </ul>
        </div>
        <div class="ft-rw-cols">
            <h2>Admissions</h2>
            <ul class="ft-ul">
                <li><a href="undergrad.html">Undergraduate</a></li>
                <li><a href="msc-mphil.html">Graduate</a></li>
                <li><a href="undergrad.html">International Students</a></li>
                <li><a href="https://www.ug.edu.gh">Entry Requirements</a></li>
                <li><a href="about.html">Contact Us</a></li>
            </ul>
        </div>
        <div class="ft-rw-cols">
            <h2>Research</h2>
            <ul class="ft-ul">
                <li><a href="research-groups.html">Research at DCS</a></li>
                <li><a href="research-groups.html">Research Impacts</a></li>
                <li><a href="research-groups.html">Libraries</a></li>
            </ul>
        </div>
        <div class="ft-rw-cols">
            <h2>About the Department</h2>
            <ul class="ft-ul">
                <li><a href="index.html">Introducing DCS</a></li>
                <li><a href="index.html">Head of Department's Office</a></li>
                <li><a href="faculty.html">Faculty</a></li>
                <li><a href="events.html">Events</a></li>
            </ul>
        </div>
    </div>
    <div class="ft-rw-container">
        <div class="ft-rw-cols">
            <h2>Newsletter</h2>
            <p class="nwl-p">Stay updated with us</p>
            <div class="col-content">
                <form action="" id="newsletter">
                    <input type="email" required placeholder="Enter your email" required autocomplete="email" id="newsletter-mail">
                    <button type="button" class="submit-btn">
                        &#8594;
                    </button>
                </form>
            </div>
        </div>
        <div class="ft-rw-cols">
            <h2>Contact Us</h2>
            <ul class="ft-ul">
                <li><a href="">Introducing DCS</a></li>
                <li><a href="">Head of Department's Office</a></li>
                <li><a href="">Faculty</a></li>
                <li><a href="">Events</a></li>
            </ul>
        </div>
        <div class="ft-rw-cols">
            <h2>Location</h2>
            <ul class="ft-ul">
                <li><a href="">Introducing DCS</a></li>
                <li><a href="">Head of Department's Office</a></li>
                <li><a href="">Faculty</a></li>
                <li><a href="">Events</a></li>
            </ul>
        </div>
    </div>
    <div class="ft-rw-copy">
        <p>Department Of Computer Science</p>
        <p>&copy;2023</p>
        <p>All rights Reserved</p>
    </div>
</footer>
`;

document.body.insertAdjacentHTML("beforeend", footerHTML);
