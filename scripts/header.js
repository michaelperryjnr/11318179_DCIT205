const headerHTML = `
        <header>
        <nav class="nav-bar">
            <div class="logo">
                <img src="assets/images/logo.png" alt="logo">
            </div>
            <div class="nav-links">
                    <a href="index.html">HOME</a>
                    <a href="about.html">ABOUT</a>
                    <a href="faculty.html">FACULTY</a>
                    <a href="research-groups.html">RESEARCH GROUPS</a>
                    <a href="events.html">EVENTS</a>
            </div>
            <div class="nav-icon">
                <img src="assets/images/menu-icon.svg" alt="menu-icon" >
            </div>
        </nav>     
    </header>
`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);
