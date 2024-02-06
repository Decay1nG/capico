function headerAdaptive() {

    const headerPanel = document.querySelector('.header__text--mobile');

    if (window.innerWidth <= 570) {
        headerPanel.style.cssText = 'display:none'

        let elem = document.createElement('section');
        elem.classList.add('header__row');

        elem.innerHTML = `
        <p class="header__description">Trade for free on your favorite exchanges</p>
        <ul class="header__sponsors--row">

                        <li class="header__sponsors--item">
                            <a href="#" class="sponsor__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="21" viewBox="0 0 82 21"
                                     fill="none">
                                    <path d="M12.8117 14.618H7.32402V20.0943H12.8117V14.618Z" fill="white"/>
                                    <path d="M7.31328 7.30898V12.7854H18.2993V7.30898H7.31328Z" fill="white"/>
                                    <path d="M23.7977 0H7.32402V5.47638H23.7977V0Z" fill="white"/>
                                    <path d="M5.48764 7.30898H0V12.7854H5.48764V7.30898Z" fill="white"/>
                                    <path d="M29.2853 20.0943H33.538V11.7887H41.7319V8.28423H33.538V3.50445H42.6125V0H29.2853V20.0943Z"
                                          fill="white"/>
                                    <path d="M44.7173 3.50445H50.8815V20.0943H55.0912V3.50445H61.2554V0H44.7173V3.50445Z"
                                          fill="white"/>
                                    <path d="M67.978 0H63.1455L69.3312 10.0525L63.0274 20.1051H67.9029L72.0374 13.2462H72.1985L76.333 20.1051H81.23L74.9477 10.0525L81.0797 0H76.2686L72.1877 6.84815H72.0266L67.978 0Z"
                                          fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li class="header__sponsors--item">
                            <a href="#" class="sponsor__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="26" viewBox="0 0 84 26"
                                     fill="none">
                                    <path d="M30.9808 13.337H23.9614V7.17045C23.9614 6.66366 23.5512 6.25255 23.0455 6.25255H20.6691V23.2034C20.6691 23.7102 21.0793 24.1213 21.585 24.1213H23.9614V16.2147H30.9843V23.1999C30.9772 23.7067 31.3804 24.1249 31.886 24.132H34.2765V7.17045C34.2765 6.66366 33.8663 6.25255 33.3606 6.25255H30.9808V13.337ZM44.9206 10.6861V19.181C44.9276 19.9536 44.5245 20.673 43.8597 21.07C41.9996 22.1473 40.0724 20.7971 40.0724 19.0251V11.604C40.0724 11.0972 39.6622 10.6861 39.1565 10.6861H36.7802V19.3299C36.7872 22.1154 39.0363 24.3694 41.8158 24.3836H43.1666C45.9496 24.3765 48.2057 22.1154 48.2128 19.3263V11.604C48.2128 11.0972 47.8026 10.6861 47.2969 10.6861H44.9206Z"
                                          fill="white"/>
                                    <path d="M83.2497 24.132V12.0967C83.2497 11.5899 82.8395 11.1788 82.3338 11.1788H79.9574V23.2071C79.9539 23.7139 80.3606 24.1285 80.8662 24.132H83.2497Z"
                                          fill="#676767"/>
                                    <path d="M83.2998 8.77105C83.6877 7.83252 83.243 6.75654 82.3065 6.36778C81.3701 5.97902 80.2964 6.4247 79.9085 7.36323C79.5206 8.30176 79.9653 9.37773 80.9018 9.76649C81.8383 10.1553 82.9119 9.70958 83.2998 8.77105Z"
                                          fill="#676767"/>
                                    <path d="M56.7068 10.6787C53.259 10.6787 50.4371 13.1488 50.4371 16.6042V18.4719C50.4371 21.9273 53.259 24.3832 56.7068 24.3832C60.1546 24.3832 62.9765 21.9273 62.9765 18.4719V16.6042C62.9801 13.1488 60.1581 10.6787 56.7068 10.6787ZM59.6702 18.6952C59.6702 20.3289 58.337 21.4169 56.7033 21.4169C55.0695 21.4169 53.7399 20.3289 53.7399 18.6952V16.3632C53.7399 14.7294 55.0731 13.6414 56.7033 13.6414C58.3335 13.6414 59.6702 14.7294 59.6702 16.3632V18.6952Z"
                                          fill="white"/>
                                    <path d="M71.4705 10.6782C70.4379 10.6711 69.4195 10.905 68.4895 11.3551V7.18738C68.4895 6.68059 68.0793 6.26948 67.5736 6.26948H65.1973V18.4714C65.1973 21.9268 68.0192 24.3828 71.467 24.3828C74.9148 24.3828 77.7367 21.9268 77.7367 18.4714V16.6037C77.7402 13.1484 74.9254 10.6782 71.4705 10.6782ZM74.4374 18.6947C74.4374 20.3285 73.1043 21.4165 71.4705 21.4165C69.8403 21.4165 68.5072 20.3285 68.5072 18.6947V16.3628C68.5072 14.729 69.8403 13.641 71.4705 13.641C73.1007 13.641 74.4374 14.729 74.4374 16.3628V18.6947Z"
                                          fill="#676767"/>
                                    <path d="M10.7182 7.71906C10.7182 4.11837 8.96778 1.01739 7.63462 0.010896C7.63462 0.010896 7.53207 -0.0458078 7.54268 0.0994956C7.43306 7.05634 3.88622 8.94174 1.93777 11.4792C-2.56031 17.341 1.61951 23.7662 5.88419 24.9535C8.26053 25.6197 5.33254 23.7769 4.95416 19.8891C4.49092 15.1969 10.7182 11.6104 10.7182 7.71906Z"
                                          fill="white"/>
                                    <path d="M12.7621 10.0896C12.7339 10.0719 12.695 10.0577 12.6702 10.1038C12.5959 10.9792 11.7048 12.8504 10.5732 14.5728C6.73642 20.4062 8.92181 23.2201 10.1524 24.7334C10.8667 25.6087 10.1524 24.7334 11.9347 23.8368C14.1377 22.4971 15.5664 20.1794 15.7785 17.6064C16.1286 13.46 13.6462 10.8481 12.7621 10.0896Z"
                                          fill="#676767"/>
                                </svg>
                            </a>
                        </li>
                        <li class="header__sponsors--item">
                            <a href="#" class="sponsor__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="29" viewBox="0 0 70 29"
                                     fill="none">
                                    <path d="M20.2629 4.16538H0.462536C0.401974 4.16512 0.342027 4.17733 0.286411 4.20125C0.230795 4.22518 0.180731 4.26029 0.139334 4.30441C0.0958686 4.346 0.0615068 4.39616 0.038483 4.45169C0.0154592 4.50721 0.0042471 4.56689 0.00555742 4.62697V24.3806C0.00481983 24.4409 0.0161204 24.5008 0.0387551 24.5568C0.0613897 24.6128 0.0949221 24.6637 0.13743 24.7067C0.179937 24.7496 0.230568 24.7837 0.286377 24.8069C0.342186 24.8302 0.402053 24.8422 0.462536 24.8422H20.2629C20.3234 24.8422 20.3832 24.8302 20.4391 24.8069C20.4949 24.7837 20.5455 24.7496 20.588 24.7067C20.6305 24.6637 20.6641 24.6128 20.6867 24.5568C20.7093 24.5008 20.7206 24.4409 20.7199 24.3806V4.63254C20.7185 4.51151 20.67 4.39577 20.5848 4.30967C20.4996 4.22357 20.3842 4.17382 20.2629 4.17094V4.16538ZM13.8151 17.5124C13.8146 17.6333 13.7665 17.7491 13.6814 17.835C13.6385 17.8787 13.5874 17.9136 13.531 17.9375C13.4745 17.9613 13.4139 17.9737 13.3525 17.974H7.36731C7.24606 17.9711 7.13064 17.9214 7.0454 17.8353C6.96016 17.7492 6.91174 17.6334 6.91033 17.5124V11.5174C6.91033 11.4575 6.92216 11.3982 6.94513 11.3429C6.96809 11.2876 7.00174 11.2373 7.04418 11.1949C7.08661 11.1526 7.137 11.119 7.19244 11.0961C7.24789 11.0732 7.3073 11.0614 7.36731 11.0614H13.3525C13.413 11.0606 13.4731 11.0719 13.5291 11.0945C13.5852 11.117 13.6363 11.1505 13.6793 11.193C13.7223 11.2354 13.7565 11.2859 13.7798 11.3416C13.8031 11.3973 13.8151 11.457 13.8151 11.5174V17.5124Z"
                                          fill="white"/>
                                    <path d="M61.7082 11.0614H55.7508C55.6291 11.0613 55.5123 11.1092 55.4257 11.1946C55.3391 11.2799 55.2897 11.3959 55.2883 11.5174V17.4902C55.2883 17.5508 55.3002 17.6108 55.3235 17.6668C55.3467 17.7228 55.3808 17.7737 55.4238 17.8166C55.4667 17.8594 55.5177 17.8934 55.5738 17.9166C55.6299 17.9398 55.6901 17.9518 55.7508 17.9518H61.7361C61.8578 17.9503 61.974 17.901 62.0595 17.8146C62.1451 17.7282 62.1931 17.6116 62.193 17.4902V11.5174C62.1932 11.4551 62.1805 11.3934 62.1558 11.3362C62.1311 11.279 62.0949 11.2274 62.0495 11.1847C62.0041 11.1419 61.9503 11.109 61.8916 11.0878C61.833 11.0666 61.7705 11.0576 61.7082 11.0614Z"
                                          fill="white"/>
                                    <path d="M54.7979 4.16537H48.8126C48.7519 4.16537 48.6917 4.17734 48.6356 4.20054C48.5795 4.22373 48.5285 4.25771 48.4855 4.30057C48.4426 4.34343 48.4086 4.39432 48.3853 4.45033C48.3621 4.50633 48.3501 4.56635 48.3501 4.62697V10.5998C48.3501 10.7222 48.3988 10.8396 48.4855 10.9262C48.5723 11.0127 48.6899 11.0614 48.8126 11.0614H54.7979C54.8583 11.0614 54.9182 11.0494 54.9741 11.0261C55.0299 11.0029 55.0805 10.9688 55.123 10.9258C55.1655 10.8829 55.199 10.832 55.2217 10.776C55.2443 10.72 55.2556 10.6601 55.2548 10.5998V4.63253C55.2563 4.57172 55.2456 4.51122 55.2233 4.4546C55.201 4.39799 55.1676 4.34641 55.125 4.30288C55.0824 4.25935 55.0315 4.22476 54.9753 4.20115C54.9192 4.17754 54.8588 4.16535 54.7979 4.16537Z"
                                          fill="white"/>
                                    <path d="M68.6074 4.16537H62.6222C62.5005 4.16684 62.3842 4.21613 62.2987 4.30254C62.2132 4.38894 62.1652 4.5055 62.1652 4.62697V10.5998C62.1652 10.7212 62.2132 10.8378 62.2987 10.9242C62.3842 11.0106 62.5005 11.0599 62.6222 11.0614H68.6074C68.7301 11.0614 68.8477 11.0127 68.9345 10.9262C69.0212 10.8396 69.07 10.7222 69.07 10.5998V4.63253C69.0707 4.57145 69.0593 4.51084 69.0364 4.4542C69.0134 4.39755 68.9795 4.34599 68.9365 4.30254C68.8934 4.25908 68.8422 4.22459 68.7857 4.20105C68.7292 4.1775 68.6686 4.16537 68.6074 4.16537Z"
                                          fill="white"/>
                                    <path d="M54.7979 17.9796H48.8126C48.6909 17.9796 48.5741 18.0274 48.4875 18.1128C48.4009 18.1982 48.3515 18.3141 48.3501 18.4356V24.4084C48.3501 24.5308 48.3988 24.6482 48.4855 24.7348C48.5723 24.8214 48.6899 24.87 48.8126 24.87H54.7979C54.8583 24.87 54.9182 24.858 54.9741 24.8348C55.0299 24.8115 55.0805 24.7774 55.123 24.7345C55.1655 24.6915 55.199 24.6406 55.2217 24.5846C55.2443 24.5287 55.2556 24.4687 55.2548 24.4084V18.4078C55.2477 18.2917 55.1965 18.1828 55.1115 18.1032C55.0266 18.0236 54.9144 17.9794 54.7979 17.9796Z"
                                          fill="white"/>
                                    <path d="M68.6074 17.9796H62.6222C62.5622 17.9796 62.5027 17.9914 62.4473 18.0143C62.3918 18.0372 62.3415 18.0708 62.299 18.1131C62.2566 18.1555 62.223 18.2058 62.2 18.2611C62.177 18.3164 62.1652 18.3757 62.1652 18.4356V24.4084C62.1652 24.5299 62.2132 24.6464 62.2987 24.7328C62.3842 24.8192 62.5005 24.8685 62.6222 24.87H68.6074C68.7301 24.87 68.8477 24.8214 68.9345 24.7348C69.0212 24.6482 69.07 24.5308 69.07 24.4084V18.4078C69.0615 18.2913 69.009 18.1822 68.9232 18.1028C68.8373 18.0233 68.7245 17.9793 68.6074 17.9796Z"
                                          fill="white"/>
                                    <path d="M44.4324 4.16537H38.475C38.4142 4.16537 38.3541 4.17734 38.298 4.20053C38.2419 4.22373 38.1909 4.2577 38.1479 4.30056C38.105 4.34343 38.0709 4.39432 38.0476 4.45032C38.0244 4.50632 38.0124 4.56635 38.0124 4.62696V10.5998C38.0124 10.7222 38.0612 10.8396 38.1479 10.9262C38.2346 11.0127 38.3523 11.0613 38.475 11.0613H44.4602C44.5819 11.0599 44.6982 11.0106 44.7837 10.9242C44.8692 10.8378 44.9172 10.7212 44.9172 10.5998V4.63253C44.918 4.56953 44.9059 4.50702 44.8817 4.44886C44.8574 4.3907 44.8214 4.33812 44.776 4.29435C44.7306 4.25059 44.6766 4.21657 44.6175 4.19439C44.5584 4.17221 44.4954 4.16233 44.4324 4.16537Z"
                                          fill="white"/>
                                    <path d="M44.4324 17.9796H38.475C38.3533 17.9796 38.2365 18.0274 38.1499 18.1128C38.0633 18.1982 38.0139 18.3142 38.0124 18.4356V24.4084C38.0124 24.5308 38.0612 24.6482 38.1479 24.7348C38.2346 24.8214 38.3523 24.87 38.475 24.87H44.4602C44.5819 24.8685 44.6982 24.8192 44.7837 24.7328C44.8692 24.6464 44.9172 24.5299 44.9172 24.4084V18.4078C44.9137 18.3479 44.8983 18.2892 44.872 18.2352C44.8457 18.1813 44.8089 18.133 44.7639 18.0932C44.7189 18.0534 44.6664 18.0229 44.6095 18.0034C44.5526 17.9839 44.4924 17.9758 44.4324 17.9796Z"
                                          fill="white"/>
                                    <path d="M37.9846 11.5118C37.9846 11.4515 37.9726 11.3917 37.9493 11.336C37.926 11.2803 37.8918 11.2298 37.8488 11.1874C37.8057 11.145 37.7547 11.1115 37.6986 11.0889C37.6425 11.0663 37.5825 11.0551 37.522 11.0558H31.0798V4.63254C31.0792 4.51169 31.0312 4.39588 30.9461 4.30998C30.9032 4.26621 30.8521 4.2314 30.7956 4.20753C30.7392 4.18367 30.6786 4.17122 30.6173 4.17094H24.632C24.5714 4.17069 24.5115 4.1829 24.4559 4.20682C24.4003 4.23074 24.3502 4.26586 24.3088 4.30998C24.2653 4.35156 24.231 4.40173 24.208 4.45725C24.185 4.51278 24.1737 4.57246 24.1751 4.63254V24.375C24.1743 24.4354 24.1856 24.4953 24.2082 24.5513C24.2309 24.6072 24.2644 24.6582 24.3069 24.7011C24.3494 24.744 24.4 24.7781 24.4558 24.8014C24.5117 24.8247 24.5715 24.8366 24.632 24.8366H30.6173C30.6782 24.8374 30.7387 24.8259 30.7952 24.803C30.8516 24.7801 30.9029 24.7461 30.946 24.7031C30.9891 24.6601 31.0231 24.6089 31.0461 24.5526C31.0691 24.4962 31.0805 24.4359 31.0798 24.375V17.9462H37.522C37.583 17.947 37.6435 17.9355 37.6999 17.9126C37.7564 17.8897 37.8077 17.8557 37.8508 17.8127C37.8939 17.7697 37.9279 17.7185 37.9509 17.6621C37.9739 17.6058 37.9853 17.5454 37.9846 17.4846V11.5118Z"
                                          fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li class="header__sponsors--item">
                            <a href="#" class="sponsor__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="21" viewBox="0 0 82 21"
                                     fill="none">
                                    <path d="M12.8117 14.618H7.32402V20.0943H12.8117V14.618Z" fill="white"/>
                                    <path d="M7.31328 7.30898V12.7854H18.2993V7.30898H7.31328Z" fill="white"/>
                                    <path d="M23.7977 0H7.32402V5.47638H23.7977V0Z" fill="white"/>
                                    <path d="M5.48764 7.30898H0V12.7854H5.48764V7.30898Z" fill="white"/>
                                    <path d="M29.2853 20.0943H33.538V11.7887H41.7319V8.28423H33.538V3.50445H42.6125V0H29.2853V20.0943Z"
                                          fill="white"/>
                                    <path d="M44.7173 3.50445H50.8815V20.0943H55.0912V3.50445H61.2554V0H44.7173V3.50445Z"
                                          fill="white"/>
                                    <path d="M67.978 0H63.1455L69.3312 10.0525L63.0274 20.1051H67.9029L72.0374 13.2462H72.1985L76.333 20.1051H81.23L74.9477 10.0525L81.0797 0H76.2686L72.1877 6.84815H72.0266L67.978 0Z"
                                          fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li class="header__sponsors--item">
                            <a href="#" class="sponsor__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="26" viewBox="0 0 84 26"
                                     fill="none">
                                    <path d="M30.9808 13.337H23.9614V7.17045C23.9614 6.66366 23.5512 6.25255 23.0455 6.25255H20.6691V23.2034C20.6691 23.7102 21.0793 24.1213 21.585 24.1213H23.9614V16.2147H30.9843V23.1999C30.9772 23.7067 31.3804 24.1249 31.886 24.132H34.2765V7.17045C34.2765 6.66366 33.8663 6.25255 33.3606 6.25255H30.9808V13.337ZM44.9206 10.6861V19.181C44.9276 19.9536 44.5245 20.673 43.8597 21.07C41.9996 22.1473 40.0724 20.7971 40.0724 19.0251V11.604C40.0724 11.0972 39.6622 10.6861 39.1565 10.6861H36.7802V19.3299C36.7872 22.1154 39.0363 24.3694 41.8158 24.3836H43.1666C45.9496 24.3765 48.2057 22.1154 48.2128 19.3263V11.604C48.2128 11.0972 47.8026 10.6861 47.2969 10.6861H44.9206Z"
                                          fill="white"/>
                                    <path d="M83.2497 24.132V12.0967C83.2497 11.5899 82.8395 11.1788 82.3338 11.1788H79.9574V23.2071C79.9539 23.7139 80.3606 24.1285 80.8662 24.132H83.2497Z"
                                          fill="#676767"/>
                                    <path d="M83.2998 8.77105C83.6877 7.83252 83.243 6.75654 82.3065 6.36778C81.3701 5.97902 80.2964 6.4247 79.9085 7.36323C79.5206 8.30176 79.9653 9.37773 80.9018 9.76649C81.8383 10.1553 82.9119 9.70958 83.2998 8.77105Z"
                                          fill="#676767"/>
                                    <path d="M56.7068 10.6787C53.259 10.6787 50.4371 13.1488 50.4371 16.6042V18.4719C50.4371 21.9273 53.259 24.3832 56.7068 24.3832C60.1546 24.3832 62.9765 21.9273 62.9765 18.4719V16.6042C62.9801 13.1488 60.1581 10.6787 56.7068 10.6787ZM59.6702 18.6952C59.6702 20.3289 58.337 21.4169 56.7033 21.4169C55.0695 21.4169 53.7399 20.3289 53.7399 18.6952V16.3632C53.7399 14.7294 55.0731 13.6414 56.7033 13.6414C58.3335 13.6414 59.6702 14.7294 59.6702 16.3632V18.6952Z"
                                          fill="white"/>
                                    <path d="M71.4705 10.6782C70.4379 10.6711 69.4195 10.905 68.4895 11.3551V7.18738C68.4895 6.68059 68.0793 6.26948 67.5736 6.26948H65.1973V18.4714C65.1973 21.9268 68.0192 24.3828 71.467 24.3828C74.9148 24.3828 77.7367 21.9268 77.7367 18.4714V16.6037C77.7402 13.1484 74.9254 10.6782 71.4705 10.6782ZM74.4374 18.6947C74.4374 20.3285 73.1043 21.4165 71.4705 21.4165C69.8403 21.4165 68.5072 20.3285 68.5072 18.6947V16.3628C68.5072 14.729 69.8403 13.641 71.4705 13.641C73.1007 13.641 74.4374 14.729 74.4374 16.3628V18.6947Z"
                                          fill="#676767"/>
                                    <path d="M10.7182 7.71906C10.7182 4.11837 8.96778 1.01739 7.63462 0.010896C7.63462 0.010896 7.53207 -0.0458078 7.54268 0.0994956C7.43306 7.05634 3.88622 8.94174 1.93777 11.4792C-2.56031 17.341 1.61951 23.7662 5.88419 24.9535C8.26053 25.6197 5.33254 23.7769 4.95416 19.8891C4.49092 15.1969 10.7182 11.6104 10.7182 7.71906Z"
                                          fill="white"/>
                                    <path d="M12.7621 10.0896C12.7339 10.0719 12.695 10.0577 12.6702 10.1038C12.5959 10.9792 11.7048 12.8504 10.5732 14.5728C6.73642 20.4062 8.92181 23.2201 10.1524 24.7334C10.8667 25.6087 10.1524 24.7334 11.9347 23.8368C14.1377 22.4971 15.5664 20.1794 15.7785 17.6064C16.1286 13.46 13.6462 10.8481 12.7621 10.0896Z"
                                          fill="#676767"/>
                                </svg>
                            </a>
                        </li>
                        <li class="header__sponsors--item">
                            <a href="#" class="sponsor__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="29" viewBox="0 0 70 29"
                                     fill="none">
                                    <path d="M20.2629 4.16538H0.462536C0.401974 4.16512 0.342027 4.17733 0.286411 4.20125C0.230795 4.22518 0.180731 4.26029 0.139334 4.30441C0.0958686 4.346 0.0615068 4.39616 0.038483 4.45169C0.0154592 4.50721 0.0042471 4.56689 0.00555742 4.62697V24.3806C0.00481983 24.4409 0.0161204 24.5008 0.0387551 24.5568C0.0613897 24.6128 0.0949221 24.6637 0.13743 24.7067C0.179937 24.7496 0.230568 24.7837 0.286377 24.8069C0.342186 24.8302 0.402053 24.8422 0.462536 24.8422H20.2629C20.3234 24.8422 20.3832 24.8302 20.4391 24.8069C20.4949 24.7837 20.5455 24.7496 20.588 24.7067C20.6305 24.6637 20.6641 24.6128 20.6867 24.5568C20.7093 24.5008 20.7206 24.4409 20.7199 24.3806V4.63254C20.7185 4.51151 20.67 4.39577 20.5848 4.30967C20.4996 4.22357 20.3842 4.17382 20.2629 4.17094V4.16538ZM13.8151 17.5124C13.8146 17.6333 13.7665 17.7491 13.6814 17.835C13.6385 17.8787 13.5874 17.9136 13.531 17.9375C13.4745 17.9613 13.4139 17.9737 13.3525 17.974H7.36731C7.24606 17.9711 7.13064 17.9214 7.0454 17.8353C6.96016 17.7492 6.91174 17.6334 6.91033 17.5124V11.5174C6.91033 11.4575 6.92216 11.3982 6.94513 11.3429C6.96809 11.2876 7.00174 11.2373 7.04418 11.1949C7.08661 11.1526 7.137 11.119 7.19244 11.0961C7.24789 11.0732 7.3073 11.0614 7.36731 11.0614H13.3525C13.413 11.0606 13.4731 11.0719 13.5291 11.0945C13.5852 11.117 13.6363 11.1505 13.6793 11.193C13.7223 11.2354 13.7565 11.2859 13.7798 11.3416C13.8031 11.3973 13.8151 11.457 13.8151 11.5174V17.5124Z"
                                          fill="white"/>
                                    <path d="M61.7082 11.0614H55.7508C55.6291 11.0613 55.5123 11.1092 55.4257 11.1946C55.3391 11.2799 55.2897 11.3959 55.2883 11.5174V17.4902C55.2883 17.5508 55.3002 17.6108 55.3235 17.6668C55.3467 17.7228 55.3808 17.7737 55.4238 17.8166C55.4667 17.8594 55.5177 17.8934 55.5738 17.9166C55.6299 17.9398 55.6901 17.9518 55.7508 17.9518H61.7361C61.8578 17.9503 61.974 17.901 62.0595 17.8146C62.1451 17.7282 62.1931 17.6116 62.193 17.4902V11.5174C62.1932 11.4551 62.1805 11.3934 62.1558 11.3362C62.1311 11.279 62.0949 11.2274 62.0495 11.1847C62.0041 11.1419 61.9503 11.109 61.8916 11.0878C61.833 11.0666 61.7705 11.0576 61.7082 11.0614Z"
                                          fill="white"/>
                                    <path d="M54.7979 4.16537H48.8126C48.7519 4.16537 48.6917 4.17734 48.6356 4.20054C48.5795 4.22373 48.5285 4.25771 48.4855 4.30057C48.4426 4.34343 48.4086 4.39432 48.3853 4.45033C48.3621 4.50633 48.3501 4.56635 48.3501 4.62697V10.5998C48.3501 10.7222 48.3988 10.8396 48.4855 10.9262C48.5723 11.0127 48.6899 11.0614 48.8126 11.0614H54.7979C54.8583 11.0614 54.9182 11.0494 54.9741 11.0261C55.0299 11.0029 55.0805 10.9688 55.123 10.9258C55.1655 10.8829 55.199 10.832 55.2217 10.776C55.2443 10.72 55.2556 10.6601 55.2548 10.5998V4.63253C55.2563 4.57172 55.2456 4.51122 55.2233 4.4546C55.201 4.39799 55.1676 4.34641 55.125 4.30288C55.0824 4.25935 55.0315 4.22476 54.9753 4.20115C54.9192 4.17754 54.8588 4.16535 54.7979 4.16537Z"
                                          fill="white"/>
                                    <path d="M68.6074 4.16537H62.6222C62.5005 4.16684 62.3842 4.21613 62.2987 4.30254C62.2132 4.38894 62.1652 4.5055 62.1652 4.62697V10.5998C62.1652 10.7212 62.2132 10.8378 62.2987 10.9242C62.3842 11.0106 62.5005 11.0599 62.6222 11.0614H68.6074C68.7301 11.0614 68.8477 11.0127 68.9345 10.9262C69.0212 10.8396 69.07 10.7222 69.07 10.5998V4.63253C69.0707 4.57145 69.0593 4.51084 69.0364 4.4542C69.0134 4.39755 68.9795 4.34599 68.9365 4.30254C68.8934 4.25908 68.8422 4.22459 68.7857 4.20105C68.7292 4.1775 68.6686 4.16537 68.6074 4.16537Z"
                                          fill="white"/>
                                    <path d="M54.7979 17.9796H48.8126C48.6909 17.9796 48.5741 18.0274 48.4875 18.1128C48.4009 18.1982 48.3515 18.3141 48.3501 18.4356V24.4084C48.3501 24.5308 48.3988 24.6482 48.4855 24.7348C48.5723 24.8214 48.6899 24.87 48.8126 24.87H54.7979C54.8583 24.87 54.9182 24.858 54.9741 24.8348C55.0299 24.8115 55.0805 24.7774 55.123 24.7345C55.1655 24.6915 55.199 24.6406 55.2217 24.5846C55.2443 24.5287 55.2556 24.4687 55.2548 24.4084V18.4078C55.2477 18.2917 55.1965 18.1828 55.1115 18.1032C55.0266 18.0236 54.9144 17.9794 54.7979 17.9796Z"
                                          fill="white"/>
                                    <path d="M68.6074 17.9796H62.6222C62.5622 17.9796 62.5027 17.9914 62.4473 18.0143C62.3918 18.0372 62.3415 18.0708 62.299 18.1131C62.2566 18.1555 62.223 18.2058 62.2 18.2611C62.177 18.3164 62.1652 18.3757 62.1652 18.4356V24.4084C62.1652 24.5299 62.2132 24.6464 62.2987 24.7328C62.3842 24.8192 62.5005 24.8685 62.6222 24.87H68.6074C68.7301 24.87 68.8477 24.8214 68.9345 24.7348C69.0212 24.6482 69.07 24.5308 69.07 24.4084V18.4078C69.0615 18.2913 69.009 18.1822 68.9232 18.1028C68.8373 18.0233 68.7245 17.9793 68.6074 17.9796Z"
                                          fill="white"/>
                                    <path d="M44.4324 4.16537H38.475C38.4142 4.16537 38.3541 4.17734 38.298 4.20053C38.2419 4.22373 38.1909 4.2577 38.1479 4.30056C38.105 4.34343 38.0709 4.39432 38.0476 4.45032C38.0244 4.50632 38.0124 4.56635 38.0124 4.62696V10.5998C38.0124 10.7222 38.0612 10.8396 38.1479 10.9262C38.2346 11.0127 38.3523 11.0613 38.475 11.0613H44.4602C44.5819 11.0599 44.6982 11.0106 44.7837 10.9242C44.8692 10.8378 44.9172 10.7212 44.9172 10.5998V4.63253C44.918 4.56953 44.9059 4.50702 44.8817 4.44886C44.8574 4.3907 44.8214 4.33812 44.776 4.29435C44.7306 4.25059 44.6766 4.21657 44.6175 4.19439C44.5584 4.17221 44.4954 4.16233 44.4324 4.16537Z"
                                          fill="white"/>
                                    <path d="M44.4324 17.9796H38.475C38.3533 17.9796 38.2365 18.0274 38.1499 18.1128C38.0633 18.1982 38.0139 18.3142 38.0124 18.4356V24.4084C38.0124 24.5308 38.0612 24.6482 38.1479 24.7348C38.2346 24.8214 38.3523 24.87 38.475 24.87H44.4602C44.5819 24.8685 44.6982 24.8192 44.7837 24.7328C44.8692 24.6464 44.9172 24.5299 44.9172 24.4084V18.4078C44.9137 18.3479 44.8983 18.2892 44.872 18.2352C44.8457 18.1813 44.8089 18.133 44.7639 18.0932C44.7189 18.0534 44.6664 18.0229 44.6095 18.0034C44.5526 17.9839 44.4924 17.9758 44.4324 17.9796Z"
                                          fill="white"/>
                                    <path d="M37.9846 11.5118C37.9846 11.4515 37.9726 11.3917 37.9493 11.336C37.926 11.2803 37.8918 11.2298 37.8488 11.1874C37.8057 11.145 37.7547 11.1115 37.6986 11.0889C37.6425 11.0663 37.5825 11.0551 37.522 11.0558H31.0798V4.63254C31.0792 4.51169 31.0312 4.39588 30.9461 4.30998C30.9032 4.26621 30.8521 4.2314 30.7956 4.20753C30.7392 4.18367 30.6786 4.17122 30.6173 4.17094H24.632C24.5714 4.17069 24.5115 4.1829 24.4559 4.20682C24.4003 4.23074 24.3502 4.26586 24.3088 4.30998C24.2653 4.35156 24.231 4.40173 24.208 4.45725C24.185 4.51278 24.1737 4.57246 24.1751 4.63254V24.375C24.1743 24.4354 24.1856 24.4953 24.2082 24.5513C24.2309 24.6072 24.2644 24.6582 24.3069 24.7011C24.3494 24.744 24.4 24.7781 24.4558 24.8014C24.5117 24.8247 24.5715 24.8366 24.632 24.8366H30.6173C30.6782 24.8374 30.7387 24.8259 30.7952 24.803C30.8516 24.7801 30.9029 24.7461 30.946 24.7031C30.9891 24.6601 31.0231 24.6089 31.0461 24.5526C31.0691 24.4962 31.0805 24.4359 31.0798 24.375V17.9462H37.522C37.583 17.947 37.6435 17.9355 37.6999 17.9126C37.7564 17.8897 37.8077 17.8557 37.8508 17.8127C37.8939 17.7697 37.9279 17.7185 37.9509 17.6621C37.9739 17.6058 37.9853 17.5454 37.9846 17.4846V11.5118Z"
                                          fill="white"/>

                                </svg>
                            </a>
                        </li>
                    </ul>
    `;

        document.querySelector('main').prepend(elem);
    }

}

module.exports = headerAdaptive;