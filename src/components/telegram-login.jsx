import React, {useEffect, useRef} from 'react';

function TelegramLogin() {
    useEffect(() => {
        if (!containerRef.current) return ;
        containerRef.current.innerHTML = "";


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
    const containerRef = useRef(null);


    return (
        <>
            <div ref={containerRef} id={"telegram-login-btn"} className={"p-2 inset-0 absolute z-10"}></div>
            <button className={"bg-sky-700 rounded-md px-4 py-1 cursor-pointer text-white text-sm"}>ورود با تلگرام</button>
        </>
    );
}

export default TelegramLogin;