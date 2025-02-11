document.addEventListener("DOMContentLoaded", function () {
    let introText = "Hello! I'm Hardik Verma, a passionate developer studying Software Engineering (SENGAH) in second year. This is my application for the Devsoc training program.";
    let i = 0;
    let typingSpeed = 50;

    function typeWriter() {
        if (i < introText.length) {
            document.getElementById("intro-text").innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();

    document.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        let rotation = scrollPosition * 2;
        document.querySelector(".car").style.transform = `rotate(${rotation}deg)`;
    });
});
