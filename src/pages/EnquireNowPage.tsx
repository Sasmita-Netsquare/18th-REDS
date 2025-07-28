import { useEffect } from "react";
import { InvestorMeetForm } from "../components";

export default function EnquireNowPage() {
    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);
  return (
     <div className="main-container text-white px-4 py-10 font-sans">
      <InvestorMeetForm/>
      </div>
  )
}
