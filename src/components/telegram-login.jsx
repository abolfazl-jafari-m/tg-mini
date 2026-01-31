import React, { useEffect, useRef } from "react";

function TelegramLogin() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ref = containerRef.current;
        if (!ref) return;

        ref.innerHTML = "";

        window.onTelegramAuth = (user) => {
            console.log("Telegram user:", user);
        };

        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;

        script.setAttribute("data-telegram-login", "ajm_test_bot");
        script.setAttribute("data-size", "small");
        script.setAttribute("data-userpic", "false");
        script.setAttribute("data-request-access", "write");
        script.setAttribute("data-onauth", "onTelegramAuth(user)");

        ref.appendChild(script);

        return () => {
            window.onTelegramAuth = undefined;
            ref.innerHTML = "";
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                type="button"
                className="bg-sky-700 rounded-md px-4 py-2 cursor-pointer text-white text-sm"
            >
                ورود با تلگرام
            </button>

            <div
                ref={containerRef}
                className="absolute inset-0 z-10 opacity-0"
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}

export default TelegramLogin;
