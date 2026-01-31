import {useEffect, useState} from "react";

export const useTelegram = ()=>{
    const [tg, setTg] = useState(null);

    useEffect(() => {
        if (typeof  window !== "undefined"  && window.Telegram){
            setTg(window.Telegram.WebApp)
        }
    }, []);
    return tg;
}