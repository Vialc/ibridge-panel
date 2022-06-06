import { Drawler } from "../../components/Drawler";
import { AllDataTable } from "./components/AllDataTable";
import { CallsLineChat } from "./components/CallsLineChat";
import { CallsPieChart } from "./components/CallsPieChart";
import OccurrencesBarChart from "./components/OccurrencesBarChart";



export function MainPage() {
  return (
    <>
      <div className="col-start-2 col-end-6 bg-orange-400 row-start-1 row-end-2">
        <CallsLineChat />
      </div>
      <div className="col-start-6 col-end-9 bg-amber-300 row-start-1 row-end-2">
        <CallsPieChart />
      </div>
      <div className="col-start-9 col-end-13 bg-green-500 row-start-1 row-end-2">
        <OccurrencesBarChart />
      </div>
      <div className="col-start-2 col-end-13 row-start-2 row-end-3">
        <AllDataTable />
      </div>
    </>
  )
}
