import { useState } from "react";
import "./App.css";

interface BillProps {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
}
interface TotalPayProps {
  bill: number;
}
interface ServiceTip {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}
interface ServiceFriendTip {
  tipFriend: number;
  setTipFriend: React.Dispatch<React.SetStateAction<number>>;
}

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipFriend, setTipFriend] = useState(0);

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <ServiceTip tip={tip} setTip={setTip} />
      <ServiceFriendTip tipFriend={tipFriend} setTipFriend={setTipFriend} />
      <TotalPay bill={bill} />
      <ResetButton />
    </>
  );
}

function Bill({ bill, setBill }: BillProps) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="bill..."
        value={bill}
        onChange={(event) => setBill(parseFloat(event.target.value))}
      ></input>
    </div>
  );
}
function ServiceTip({ tip, setTip }: ServiceTip) {
  return (
    <div>
      <p>How did you like the service?</p>
      <select
        name=""
        id=""
        value={tip}
        onChange={(event) => setTip(Number(event.target.value))}
      >
        <option value={0} key={0}>
          Disatisfied 0%
        </option>
        <option value={5} key={5}>
          It was okay 5%
        </option>
        <option value={10} key={10}>
          It was good 10%
        </option>
        <option value={20} key={20}>
          Absolutely amazing 20%
        </option>
      </select>
    </div>
  );
}
function ServiceFriendTip({ tipFriend, setTipFriend }: ServiceFriendTip) {
  return (
    <div>
      <p>How did your friend like the service?</p>
      <select
        name=""
        id=""
        value={tipFriend}
        onChange={(event) => setTipFriend(Number(event.target.value))}
      >
        <option value={0} key={0}>
          Disatisfied 0%
        </option>
        <option value={5} key={5}>
          It was okay 5%
        </option>
        <option value={10} key={10}>
          It was good 10%
        </option>
        <option value={20} key={20}>
          Absolutely amazing 20%
        </option>
      </select>
    </div>
  );
}
function TotalPay({ bill }: TotalPayProps) {
  return (
    <div>
      <h2>
        You pay ${bill} ( ${bill} + $000 tip )
      </h2>
    </div>
  );
}
function ResetButton() {
  return (
    <>
      <button>Reset</button>
    </>
  );
}
