import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-svh max-w-7xl mx-auto">
      {/* <Button>Click me</Button> */}

      <h1 className="text-7xl font-bold mb-6 text-[#00456b]">Table Tennis Singles 2026 (Unofficial)</h1>
      <section>
        <div className="text-2xl">
          <strong>Group A1</strong>: Mamun, Neloy, Sagar, Shagato, Mubin, B-Qualifier 1
        </div>
        <div className="text-2xl">
          <strong>Group A2</strong>: Fazle, Larry, Aminul, Tahsin, Topu, B-Qualifier 2
        </div>
        <div className="text-2xl">
          <strong>Group A3</strong>:  Ariful Islam, Sakib, Fazle Rabbi, Naeem, Jaber, B-Qualifier 3</div>
        <div className="text-2xl">
          <strong>Group A4</strong>: Nadim, Tahseen, Farhan, Saiful, Partha, B-Qualifier 4</div>
        <div className="text-2xl">
          <strong>Group B1</strong>: Samrat Ghosh, Shohel Rana, Shohag, Raihan, Mehedi
        </div>
        <div className="text-2xl">
          <strong>Group B2</strong>: Imtiaz, Ashikur, Jaminur, Masum, Tuhin
        </div>
      </section>
    </div>
  );
}

export default App;
