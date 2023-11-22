const headerHTML = `
        <header>
        <nav class="nav-bar">
            <div class="logo">
                <img src="assets/images/logo.png" alt="logo">
            </div>
            <ul class="nav-links">
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="faculty.html">FACULTY</a></li>
                <li><a href="research-groups.html">RESEARCH GROUPS</a></li>
                <li><a href="events.html">EVENTS</a></li>  
            </ul>
            <div class="nav-icon" id="menu-btn">
                <img src="assets/images/menu-icon.svg" alt="menu-icon">
            </div>
            <div class="mobile-nav-links-list mobile-nav-links" id="mobile-nav-links-list">
                <div class="mobile-nav-img-container">
                    <div>
                        <img class="menu-close" id="close-btn" src="assets/images/menu-close.svg" alt="close-icon">
                    </div>
                </div>
                <ul class="mobile-list">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="faculty.html">FACULTY</a></li>
                    <li><a href="research-groups.html">RESEARCH GROUPS</a></li>
                    <li><a href="events.html">EVENTS</a></li>
                </ul>
            </div>
        </nav>
    </header>
`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);
