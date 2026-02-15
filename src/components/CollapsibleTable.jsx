import React, { useEffect, useState } from 'react'
import { groups } from "../data";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CollapsibleTable = () => {
    const [expandedRows, setExpandedRows] = useState(new Set());
    const [selectedName, setSelectedName] = useState("All");
    const [selectedGroup, setSelectedGroup] = useState("All");
    const [filteredGroups, setFilteredGroups] = useState(groups);
    const groupNames = {
        A1: ["Mamun", "Neloy", "Sagar", "Shagato", "Mubin", "Samrat Ghosh"],
        A2: ["Fazle", "Larry", "Aminul", "Tahsin", "Topu", "Shohag Rana"],
        A3: ["Isfaque Jahan MD. Sakib", "Fazle Rabbi", "Naeem", "Jaber", "Ashikur Rahman"],
        A4: ["Nadim", "Tahseen", "Farhan", "Saiful", "Partha", "Imtiaz Shawn"],
        B1: ["Samrat Ghosh", "Shohel Rana", "Shohag", "Raihan", "Mehedi"],
        B2: ["Imtiaz", "Ashikur", "Jaminur", "Masum", "Tuhin"]
    }


    const toggleRow = (index) => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(index)) {
            newExpandedRows.delete(index);
        } else {
            newExpandedRows.add(index);
        }
        setExpandedRows(newExpandedRows);
    };

    const HistoryTable = ({ history, players }) => {
        console.log(history);
        if (!history || history.length === 0) {
            return <p style={{ color: '#666', fontSize: '13px' }}>Postponed/Walkover</p>;
        }

        return (
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Game</th>
                        <th>{players[0]}</th>
                        <th>{players[1]}</th>
                        <th>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {history.results.map((item, idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2] ? players[1] : players[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const handleGroupChange = (value) => {
        if (value === "All" || groupNames[value]) {
            setSelectedGroup(value);
            return;
        } else {
            console.log('Error');
        }
    };
    const handleNameChange = (value) => {
        console.log(value);
        setSelectedName(value);
    };

    useEffect(() => {
        let newFilteredGroups = groups;
        if (selectedGroup === "All" && selectedName === "All") {
            setFilteredGroups(groups);
            return;
        }
        if (selectedName !== "All") {
            newFilteredGroups = groups.filter((group) => {
                if (group.id < 0) {
                    return false;
                }
                return group.players.includes(selectedName);
            });
        }
        if (selectedGroup !== "All") {
            newFilteredGroups = newFilteredGroups.filter((group) => {
                if (group.id < 0) {
                    return false;
                }
                return group.group === selectedGroup;
            });
        }
        setFilteredGroups(newFilteredGroups);
    }, [selectedName, selectedGroup]);

    return (
        <div className="min-h-svh max-w-7xl mx-auto">


            <h1 className="text-7xl font-bold mb-6 text-[#00456b]">Table Tennis Singles 2026 (Unofficial)</h1>

            <section className="tablepress-responsive-container">
                <div className="grid gap-2 grid-cols-6 mb-6">
                    <Select name="group" id="" value={selectedName} onValueChange={handleNameChange}>
                        <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="Select a Name" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Names</SelectLabel>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Sagar">Sagar</SelectItem>
                                <SelectItem value="Md. Abdullah Al-Mubin">Md. Abdullah Al-Mubin</SelectItem>
                                <SelectItem value="Mamun">Mamun</SelectItem>
                                <SelectItem value="MD. Shahiduzzaman">MD. Shahiduzzaman</SelectItem>
                                <SelectItem value="Samrat Ghosh">Samrat Ghosh</SelectItem>
                                <SelectItem value="Neloy">Neloy</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select name="group" id="" value={selectedGroup} onValueChange={handleGroupChange}>
                        <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="Select a Group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Groups</SelectLabel>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="A1">A1</SelectItem>
                                <SelectItem value="A2">A2</SelectItem>
                                <SelectItem value="A3">A3</SelectItem>
                                <SelectItem value="A4">A4</SelectItem>
                                <SelectItem value="B1">B1</SelectItem>
                                <SelectItem value="B2">B2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {filteredGroups.length > 0 ? (<table id="tablepress-283" className="tablepress tablepress-id-283 tbody-has-connected-cells">
                    <thead>
                        <tr className="row-1">
                            <th className="column-0"></th>
                            <th className="column-1">Match</th>
                            <th className="column-2">Date</th>
                            <th className="column-3">Time (EST)</th>
                            <th className="column-5">Matchup</th>
                            <th className="column-6">Group</th>
                            <th className="column-7">Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGroups.map((group, index) => {
                            if (group.id < 0) {
                                return (
                                    <tr className="row-91" key={index}>
                                        <td colSpan="8" className="column-1"><b>Holiday</b></td>
                                    </tr>
                                )
                            }
                            return (
                                <React.Fragment key={index}>
                                    <tr className="row-2 cursor-pointer" onClick={() => toggleRow(index)}>
                                        <td className="column-0" style={styles.td}>
                                            <span style={styles.arrowCell} >
                                                <span style={{
                                                    ...styles.arrow,
                                                    transform: expandedRows.has(index) ? 'rotate(180deg)' : 'rotate(0deg)'
                                                }}></span>
                                            </span>
                                        </td>
                                        <td className="column-1">{index + 22}</td>
                                        <td className="column-2">{group.date}</td>
                                        <td className="column-3">{group.time}</td>
                                        <td className="column-5">{group.players[0]} vs. {group.players[1]}</td>
                                        <td className="column-6">{group.group}</td>
                                        {group.history && (
                                            <td className="column-7">{group.history.winner}</td>
                                        )}
                                    </tr>
                                    {expandedRows.has(index) && (
                                        <tr style={styles.detailsRow}>
                                            <td colSpan="5">
                                                <div style={styles.detailsContent}>
                                                    <div style={styles.historySection}>
                                                        <div style={styles.historyTitle}>History</div>
                                                        <HistoryTable history={group.history} players={group.players} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            )
                        })}

                        <tr className="row-91">
                            <td colSpan="8" className="column-1"><b>10 February 2026</b></td>
                        </tr>

                        <tr className="row-100">
                            <td colSpan="8" className="column-1"><b>Quarter-finals</b></td>
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
                            <td colSpan="8" className="column-1"><b>Semi-finals</b></td>
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
                            <td colSpan="8" className="column-1"><b>Third Place</b></td>
                        </tr>
                        <tr className="row-109">
                            <td className="column-1">103</td>
                            <td className="column-2">18-Feb-26</td>
                            <td className="column-3">18:05PM</td>
                            <td className="column-5">Match 101 Loser v Match 102 Loser</td>
                            <td className="column-6"></td>
                        </tr>
                        <tr className="row-110">
                            <td colSpan="8" className="column-1"><b>Final</b></td>
                        </tr>
                        <tr className="row-111">
                            <td className="column-1">104</td>
                            <td className="column-2">18-Feb-26</td>
                            <td className="column-3">18:15PM</td>
                            <td className="column-5">Match 101 Winner v Match 102 Winner</td>
                            <td className="column-6"></td>
                        </tr>
                    </tbody>
                </table>) : (<p>No data found</p>)}

            </section>
        </div>
    )
}

const styles = {

    arrowCell: {
        display: 'inline-block',
        width: '40px',
        textAlign: 'center'
    },
    arrow: {
        display: 'inline-block',
        width: '0',
        height: '0',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '6px solid #666',
        transition: 'transform 0.3s ease',
        marginRight: '8px'
    },
    detailsRow: {
        background: '#f9f9f9',
        borderBottom: '1px solid #e0e0e0'
    },
    detailsContent: {
        padding: '0 16px 16px 56px'
    },
    historySection: {
        marginTop: '12px'
    },
    historyTitle: {
        fontWeight: '600',
        color: '#333',
        marginBottom: '8px',
        fontSize: '14px'
    }
};


export default CollapsibleTable