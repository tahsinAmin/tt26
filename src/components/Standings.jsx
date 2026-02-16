import React from 'react'
import { standingsA1, standingsA2, standingsA3, standingsA4, standingsB1, standingsB2 } from '../data'


const Standings = () => {

    return (

        <div>

            {/* <section>
                        <div className="text-2xl">
                            <strong>Group A1</strong>: Mamun, Neloy, Sagar, Md. Shahiduzzaman, Md. Abdullah Al-Mubin, Samrat Ghosh
                        </div>
                        <div className="text-2xl">
                            <strong>Group A2</strong>: Fazle Rabbi Biswas, Luscious Larry Das, Md. Aminul Islam, Tahsin, Md. Ashfiqul Alam Chowdhury, Shohag Rana
                        </div>
                        <div className="text-2xl">
                            <strong>Group A3</strong>:  <span className="line-through">Ariful Islam</span>, Isfaque Jahan Md. Sakib, Fazle Rabbi, Shah Riya Naeem, Md. Jaber Al Saleh, Ashikur Rahman</div>
                        <div className="text-2xl">
                            <strong>Group A4</strong>: Abdul Awal Nadim, Md. Tahseen Rahman, Farhan, Md. Saiful Islam, Partha, Imtiaz Shawn</div>
                        <div className="text-2xl">
                            <strong>Group B1</strong>: Samrat Ghosh, Shohel Rana, Shohag, Raihan, Mehedi Hasan
                        </div>
                        <div className="text-2xl">
                            <strong>Group B2</strong>: Imtiaz Shawn, Ashikur, Jaminur, Mahmudul Hasan Masum, "Tariquzzaman Tuhin
                        </div>
                    </section> */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-6">
                <div>
                    <h1 className="text-2xl font-bold">Group A1</h1>
                    <table className="tablepress">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>P</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsA1.map((player, idx) => (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.P}</td>
                                    <td>{player.W}</td>
                                    <td>{player.L}</td>
                                    <td>{player.Pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Group A2</h1>
                    <table className="tablepress">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>P</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsA2.map((player, idx) => (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.P}</td>
                                    <td>{player.W}</td>
                                    <td>{player.L}</td>
                                    <td>{player.Pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Group A3</h1>
                    <table className="tablepress">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>P</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsA3.map((player, idx) => (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.P}</td>
                                    <td>{player.W}</td>
                                    <td>{player.L}</td>
                                    <td>{player.Pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Group A4</h1>
                    <table className="tablepress">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>P</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsA4.map((player, idx) => (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.P}</td>
                                    <td>{player.W}</td>
                                    <td>{player.L}</td>
                                    <td>{player.Pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Group B1</h1>
                    <table className="tablepress">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>P</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsB1.map((player, idx) => (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.P}</td>
                                    <td>{player.W}</td>
                                    <td>{player.L}</td>
                                    <td>{player.Pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Group B2</h1>
                    <table className="tablepress">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>P</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsB2.map((player, idx) => (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.P}</td>
                                    <td>{player.W}</td>
                                    <td>{player.L}</td>
                                    <td>{player.Pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Standings