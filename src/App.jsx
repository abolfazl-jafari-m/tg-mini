import {useTelegram} from "./hooks/useTelegram.ts";
import {safe} from "./lib/helper.ts";
import UserInfo from "./components/userInfo.tsx";

function App() {
  const tg = useTelegram();

  const handleContact =async ()=>{
      if (!tg) return;
      try {
        const contact = await tg.requestContact();
      }catch {
          tg.showAlert("permission denied");
      }
  }


  return (
    <>
      <h1 className={"text-green-700"}>This is a Test for Tg mini</h1>
      <button className={"text-white"} onClick={()=>safe(tg.showPopup({title : "test" , message : "this is a test for popup"}) , null)}>show popup</button>
        <button className={"border-white rounded-2xl px-4 py-0.5 bg-rose-800 text-white"} onClick={handleContact}>request Contacts</button>
        <br/>
        <UserInfo />
    </>
  )
}

export default App
