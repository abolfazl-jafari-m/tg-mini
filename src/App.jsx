import {useTelegram} from "./hooks/useTelegram.ts";
import {safe} from "./lib/helper.ts";

function App() {
  const tg = useTelegram();

  console.log(tg);


  return (
    <>
      <h1 className={"text-green-700"}>This is a Test for Tg mini</h1>
      <button onClick={()=>safe(tg.showPopup({title : "test" , message : "this is a test for popup"}) , null)}>show popup</button>
    </>
  )
}

export default App
