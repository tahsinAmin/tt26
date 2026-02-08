import { Button } from "@/components/ui/button";
import { groups } from "./data";

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
          <strong>Group A3</strong>:  <span className="line-through">Ariful Islam</span>, Sakib, Fazle Rabbi, Naeem, Jaber, B-Qualifier 3</div>
        <div className="text-2xl">
          <strong>Group A4</strong>: Nadim, Tahseen, Farhan, Saiful, Partha, B-Qualifier 4</div>
        <div className="text-2xl">
          <strong>Group B1</strong>: Samrat Ghosh, Shohel Rana, Shohag, Raihan, Mehedi
        </div>
        <div className="text-2xl">
          <strong>Group B2</strong>: Imtiaz, Ashikur, Jaminur, Masum, Tuhin
        </div>
      </section>
      <section className="tablepress-responsive-container">
        <table id="tablepress-283" className="tablepress tablepress-id-283 tbody-has-connected-cells">
          <thead>
            <tr className="row-1">
              <th className="column-1">Match</th>
              <th className="column-2">Date</th>
              <th className="column-3">Time (EST)</th>
              <th className="column-5">Matchup</th>
              <th className="column-6">Group</th>
              <th className="column-7">Winner</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {

              if (group.id < 0) {
                return (
                  <tr className="row-91">
                    <td colspan="8" className="column-1"><b>Holiday</b></td>
                  </tr>
                )
              }
              return (
                <tr key={group.id} className="row-2">
                  <td className="column-1">{group.id}</td>
                  <td className="column-2">{group.date}</td>
                  <td className="column-3">{group.time}</td>
                  <td className="column-5">{group.matchup}</td>
                  <td className="column-6">{group.group}</td>
                  {group.history && (
                    <td className="column-7">{group.history.winner}</td>
                  )}
                </tr>
              )
            })}

            <tr className="row-91">
              <td colspan="8" className="column-1"><b>10 February 2026</b></td>
            </tr>

            <tr className="row-100">
              <td colspan="8" className="column-1"><b>Quarter-finals</b></td>
            </tr>
            <tr className="row-101">
              <td className="column-1">97</td>
              <td className="column-2">17-Feb-26</td>
              <td className="column-3">18:05</td>
              <td className="column-5">Match 89 Winner v Match 90 Winner</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-102">
              <td className="column-1">98</td>
              <td className="column-2">17-Feb-26</td>
              <td className="column-3">18:15</td>
              <td className="column-5">Match 93 Winner v Match 94 Winner</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-103">
              <td className="column-1">99</td>
              <td className="column-2">18-Feb-26</td>
              <td className="column-3">11:05</td>
              <td className="column-5">Match 91 Winner v Match 92 Winner</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-104">
              <td className="column-1">100</td>
              <td className="column-2">18-Feb-26</td>
              <td className="column-3">11:15</td>
              <td className="column-5">Match 95 Winner v Match 96 Winner</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-105">
              <td colspan="8" className="column-1"><b>Semi-finals</b></td>
            </tr>
            <tr className="row-106">
              <td className="column-1">101</td>
              <td className="column-2">18-Feb-26</td>
              <td className="column-3">14:40</td>
              <td className="column-5">Match 97 Winner v Match 98 Winner</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-107">
              <td className="column-1">102</td>
              <td className="column-2">18-Feb-26</td>
              <td className="column-3">14:50</td>
              <td className="column-5">Match 99 Winner v Match 100 Winner</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-108">
              <td colspan="8" className="column-1"><b>Third Place</b></td>
            </tr>
            <tr className="row-109">
              <td className="column-1">103</td>
              <td className="column-2">18-Feb-26</td>
              <td className="column-3">18:05PM</td>
              <td className="column-5">Match 101 Loser v Match 102 Loser</td>
              <td className="column-6"></td>
            </tr>
            <tr className="row-110">
              <td colspan="8" className="column-1"><b>Final</b></td>
            </tr>
            <tr className="row-111">
              <td className="column-1">104</td>
              <td className="column-2">18-Feb-26</td>
              <td className="column-3">18:15PM</td>
              <td className="column-5">Match 101 Winner v Match 102 Winner</td>
              <td className="column-6"></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
