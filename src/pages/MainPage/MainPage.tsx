import { ClientFilter } from "../../components/ClientFilter";
import { AllDataTable } from "./components/AllDataTable";
import { CallsLineChat } from "./components/CallsLineChat";
import { CallsPieChart } from "./components/CallsPieChart";
import OccurrencesBarChart from "./components/OccurrencesBarChart";
import { DateFilter } from "../../components/DateFilter"



export function MainPage() {
  return (
    <>
      <div className="col-start-2 col-end-6 row-start-1 row-end-2">
        <div className="flex col-start-2 col-end-4 row-start-1 h-11">
          <ClientFilter />
          <div className="mt-6">
            <DateFilter />
          </div>
        </div>
        <div className="mt-12 bg-slate-50 rounded-lg">
          <CallsLineChat />
        </div>
      </div>


      <div className="col-start-6 ml-2 col-end-9 rounded-lg scale-90 row-start-1 row-end-2">
        <CallsPieChart />
      </div>


      <div className="col-start-9 mr-1 col-end-13 row-start-1 row-end-2">
        <div className="mt-24 bg-slate-50 rounded-lg">
          <OccurrencesBarChart />
        </div>
      </div>


      <div className="bg-slate-50 mt-3 mr-1 rounded-lg col-start-2 col-end-13 row-start-2 row-end-3">

        <AllDataTable />
      </div>
    </>
  )
}
