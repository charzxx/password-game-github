// This code is provided by a human who did brute force knowledgement
// Licenced code use Bab.FGHpE1
// Part of The password game code
document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("submit");
    const input = document.getElementById("passwordInput");
    const passLabel = document.getElementById("pass");

    submit.addEventListener("click", function () {
        const password = input.value;
        let score = 0;
        let sm = 0;

        if (password.length >= 8) score++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
        if (/\d/.test(password)) score++;
        if (/[^a-zA-Z0-9]/.test(password)) score++;
        if (/[\x80-\xFF]/.test(password)) score++; // checks for extended ASCII / ALT chars
        
        if (password == "Apasswordgame2025gg") sm = 1
        if (password == "ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{") sm = 2;
        if (password == "pneumonoultramicroscopicsilicovolcanoconiosis") sm = 3
        if (password == "this sucks") sm = 4

        let strength = "very useless";
        if (score >= 4) strength = "stronger than ever";
        if (sm === 1) strength = "... Secret lifes of all time came to this life, ... ... .. .. .. .. ... ... .. .. Rebirthing for goodness ... World turned back.. Finally died... .. .. Now in a vast deep space constellation, Forever humanly impossible to revive back. ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]\][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{ the king who only can beat your mama and everybody else. If you ever paste that big thing and click submit, Your entire and everybody else's life will change.";
        else if (sm === 2) strength = "...................................................................................................................................................................................................................................................................... You finally back? well then you deserve a chance to contact me about this when you come back..................youre still here reading this? well i found out that if you say 'horn the bell watshicke then get up' in contacting me then you will get a secret even nobody knows, DO IT NOW OR ITS OVER !!"
        else if (score === 3) strength = "decent";
        else if (score === 2) strength = "useless";
        else if (sm === 3) strength = "hippopotomonstrosesquippadaliaphobia supercalifragilisticexpialidocious pseudopseudohypoparathydroism makangalitigalletadumannefengarialisticallinacobassonametolaskimenkajai you thought huh??"
        else if (sm === 4) strength = "ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}♀)EÜ╞{ewfwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww98098098098098090809ababcdcdefefghghijijlmlmnonopqpqrsrstutuvwvwxyxyzz123123456456789789000[]][!@#$!@@@#$!@#$%^&*%^&*%^&*%^&*()))Z∞5⌂£:E`4∞ô}♀)EÜ╞{Z∞5⌂£:E`4∞ô}╞{Z∞5⌂£:E`4∞ô"

        passLabel.textContent = "Password is " + strength;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fbsub = document.getElementById("fbsub");
    const input = document.getElementById("feedback");

    fbsub.addEventListener("click", function () {
        const feed = input.value;
        alert("Thanks for rating us a " + feed + "/5. Your support helps the dev stay motivated!");
    });
});
