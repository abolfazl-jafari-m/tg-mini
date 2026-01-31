import React from 'react';
import TelegramLogin from "../components/telegram-login.jsx";
import {LoginButton} from "@telegram-auth/react";

function Oauth() {
    const handleAuth = (response)=>{
        console.log(response);
    }
    return (
        <div>
            <TelegramLogin/>
            <LoginButton botUsername={"ajm_test_bot"} onAuthCallback={handleAuth}/>
        </div>
    );
}

export default Oauth;