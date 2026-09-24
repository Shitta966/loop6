 const socials = [
            {
                icon: "./img/googleplus.svg",
                text:"SIGN UP WITH GOOGLE",
            },
            {
                icon: "./img/facebook.svg",
                text:"SIGN UP WITH FACEBOOK",
            },
            {
                icon: "./img/twitter.svg",
                text:"SIGN UP WITH TWITTER",
            }
        ]
         let output = "";
        for (let i = 0; i < socials.length; i++) {
            output += `
                <div class="items">
                    <img src="${socials[i].icon}" alt="">
                    <p>${socials[i].text}</p>
                </div>`;
        }
        document.getElementById("social-buttons").innerHTML = output;