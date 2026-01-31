import React, {useEffect, useRef} from 'react';

function TelegramLogin() {
    const ref = useRef(null);
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
        <div  ref={ref} id={"telegram-login-btn"} className={"p-2 hidden opacity-0 absolute -z-50"}></div>
        <button className={"text-white bg-sky-700 rounded-lg px-4 py-1 shadow"} onClick={()=>ref.current?.click()}>ورود با تلگرام</button>
        </>
    );
}

export default TelegramLogin;