import React, {useEffect, useRef} from 'react';

function TelegramLogin() {
    useEffect(() => {
        window.onTelegramAuth = async (user) => {
            console.log("Telegram user:", user);
        }
        if (document.getElementById("telegram-login-script")) return;

        const script = document.createElement("script");
        script.id = "telegram-login-script"
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;

        script.setAttribute("data-telegram-login", "ajm_test_bot");
        script.setAttribute("data-size", "small");
        script.setAttribute("data-userpic", "true");
        script.setAttribute("data-request-access", "write");
        script.setAttribute("data-onauth", "onTelegramAuth(user)");

        document.getElementById("telegram-login-btn")?.appendChild(script);

        return () => {
            window.onTelegramAuth = undefined;
        }
    }, []);
    return (
        <>
        <div   id={"telegram-login-btn"} className={"p-2"}></div>
        </>
    );
}

export default TelegramLogin;