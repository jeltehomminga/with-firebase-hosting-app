import App from "../components/App";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [call, setCall] = useState(0);

  useEffect(() => {
    const getData = async (call) => {
      const response = await fetch(`https://next-fb-host.web.app/api/${call}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        // body: JSON.stringify({ name: 'Jelte' }),
      });
      const rsult = await response.json();
      console.log(rsult);
    };

    // const callData = async () => {
    //   const result = await axios.get(
    //     `https://next-fb-host.web.app/api/${call}`
    //   );
    //   console.log(result);
    // };
    call && getData(call);
  }, [call]);
  return (
    <App>
      <p>Index lll Page</p>
      <button onClick={() => setCall("hello")}>Call hello</button>
      <button onClick={() => setCall("usertest")}>Call usertest</button>
      <button onClick={() => setCall("helloagain")}>Call helloagain</button>
    </App>
  );
}
