import { useState } from "react";
import "./App.css";

interface BillProps {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
}
interface TotalPayProps {
  bill: number;
}

export default function App() {
  const [bill, setBill] = useState(0);

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <ServiceTip />
      <ServiceFriendTip />
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
function ServiceTip() {
  return (
    <div>
      <p>How did you like the service?</p>
      <select name="" id="">
        <option>Disatisfied 0%</option>
        <option>It was okay 5%</option>
        <option>It was good 10%</option>
        <option>Absolutely amazing 20%</option>
      </select>
    </div>
  );
}
function ServiceFriendTip() {
  return (
    <div>
      <p>How did your friend like the service?</p>
      <select name="" id="">
        <option>Disatisfied 0%</option>
        <option>It was okay 5%</option>
        <option>It was good 10%</option>
        <option>Absolutely amazing 20%</option>
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
