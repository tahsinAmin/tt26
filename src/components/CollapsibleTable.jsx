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
    SelectSeparator
} from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field"
import Standings from './Standings';

const CollapsibleTable = () => {
    const [expandedRows, setExpandedRows] = useState(new Set());
    const [selectedName, setSelectedName] = useState("All");
    const [selectedGroup, setSelectedGroup] = useState("All");
    const [filteredGroups, setFilteredGroups] = useState(groups);
    const groupNames = {
        A1: ["Mamun", "Mohammad Nabiluzzaman Neloy", "Sagar", "Md. Shahiduzzaman", "Md. Abdullah Al-Mubin", "Samrat Ghosh"],
        A2: ["Fazle Rabbi Biswas", "Luscious Larry Das", "Md. Aminul Islam", "Tahsin", "Md. Ashfiqul Alam Chowdhury", "Shohag Rana"],
        A3: ["Isfaque Jahan Md. Sakib", "Fazle Rabbi", "Shah Riya Naeem", "Md. Jaber Al Saleh", "Ashikur Rahman"],
        A4: ["Abdul Awal Nadim", "Md. Tahseen Rahman", "Farhan", "Md. Saiful Islam", "Partha", "Imtiaz Shawn"],
        B1: ["Samrat Ghosh", "Shohel Rana", "Shohag Rana", "Raihan", "Mehedi Hasan"],
        B2: ["Imtiaz Shawn", "Ashikur Rahman", "Jaminur", "Mahmudul Hasan Masum", "Tariquzzaman Tuhin"]
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
            return <p style={{ color: '#666', fontSize: '13px' }}>Not Applicable</p>;
        }

        return (
            <table className="tablepress history-table">
                <thead style={{ background: '#ffffff' }}>
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
        setExpandedRows(new Set());
    }, [selectedName, selectedGroup]);

    return (
        <div className="min-h-svh max-w-[1660px] mx-auto px-4">
            <h1 className="text-2xl md:text-7xl font-bold  my-12 md:my-26 text-[#00456b]">Table Tennis Singles 2026 (Unofficial)</h1>

            <Standings />

            <section className="tablepress-responsive-container mb-40">
                <div className="grid gap-2 sm:grid-cols-6 mb-6">
                    <Field>
                        <FieldLabel>Player</FieldLabel>

                        <Select name="players" id="" value={selectedName} onValueChange={handleNameChange}>
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a Name" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Player</SelectLabel>
                                    <SelectItem value="All">All</SelectItem>

                                    <SelectGroup>
                                        <SelectLabel>Group A1</SelectLabel>
                                        <SelectItem value="Sagar">Sagar</SelectItem>
                                        <SelectItem value="Md. Abdullah Al-Mubin">Md. Abdullah Al-Mubin</SelectItem>
                                        <SelectItem value="Mamun">Mamun</SelectItem>
                                        <SelectItem value="Md. Shahiduzzaman">Md. Shahiduzzaman</SelectItem>
                                        <SelectItem value="Samrat Ghosh">Samrat Ghosh</SelectItem>
                                        <SelectItem value="Mohammad Nabiluzzaman Neloy">Mohammad Nabiluzzaman Neloy</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />

                                    <SelectGroup>
                                        <SelectLabel>Group A2</SelectLabel>
                                        <SelectItem value="Fazle Rabbi Biswas">Fazle Rabbi Biswas</SelectItem>
                                        <SelectItem value="Luscious Larry Das">Luscious Larry Das</SelectItem>
                                        <SelectItem value="Md. Aminul Islam">Md. Aminul Islam</SelectItem>
                                        <SelectItem value="Tahsin">Tahsin</SelectItem>
                                        <SelectItem value="Md. Ashfiqul Alam Chowdhury">Md. Ashfiqul Alam Chowdhury</SelectItem>
                                        <SelectItem value="Shohag Rana">Shohag Rana</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />

                                    <SelectGroup>
                                        <SelectLabel>Group A3</SelectLabel>
                                        <SelectItem value="Isfaque Jahan Md. Sakib">Isfaque Jahan Md. Sakib</SelectItem>
                                        <SelectItem value="Fazle Rabbi">Fazle Rabbi</SelectItem>
                                        <SelectItem value="Shah Riya Naeem">Shah Riya Naeem</SelectItem>
                                        <SelectItem value="Md. Jaber Al Saleh">Md. Jaber Al Saleh</SelectItem>
                                        <SelectItem value="Ashikur Rahman">Ashikur Rahman</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />

                                    <SelectGroup>
                                        <SelectLabel>Group A4</SelectLabel>
                                        <SelectItem value="Abdul Awal Nadim">Abdul Awal Nadim</SelectItem>
                                        <SelectItem value="Md. Tahseen Rahman">Md. Tahseen Rahman</SelectItem>
                                        <SelectItem value="Farhan">Farhan</SelectItem>
                                        <SelectItem value="Md. Saiful Islam">Md. Saiful Islam</SelectItem>
                                        <SelectItem value="Partha">Partha</SelectItem>
                                        <SelectItem value="Imtiaz Shawn">Imtiaz Shawn</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />

                                    <SelectGroup>
                                        <SelectLabel>Group B1</SelectLabel>
                                        <SelectItem value="Shohel Rana">Shohel Rana</SelectItem>
                                        <SelectItem value="Raihan">Raihan</SelectItem>
                                        <SelectItem value="Mehedi Hasan">Mehedi Hasan</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />

                                    <SelectGroup>
                                        <SelectLabel>Group B2</SelectLabel>
                                        <SelectItem value="Jaminur">Jaminur</SelectItem>
                                        <SelectItem value="Mahmudul Hasan Masum">Mahmudul Hasan Masum</SelectItem>
                                        <SelectItem value="Tariquzzaman Tuhin">Tariquzzaman Tuhin</SelectItem>
                                    </SelectGroup>
                                    <SelectSeparator />
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>

                    <Field>
                        <FieldLabel>Group</FieldLabel>
                        <Select name="group" id="" value={selectedGroup} onValueChange={handleGroupChange}>
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a Group" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Group</SelectLabel>
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
                    </Field>
                </div>
                <div style={styles.tableWrapper}>
                    {filteredGroups.length > 0 ? (<table id="tablepress-283" className="tablepress tablepress-id-283 tbody-has-connected-cells" style={styles.table}>
                        <thead style={styles.thead}>
                            <tr className="row-1">
                                <th style={{ ...styles.th, ...styles.thFirst }} className="column-0"></th>
                                <th style={styles.th} className="column-1">Match</th>
                                <th style={styles.th} className="column-2">Date</th>
                                <th style={styles.th} className="column-3">Time (EST)</th>
                                <th style={styles.th} className="column-5">Matchup</th>
                                <th style={styles.th} className="column-6">Group</th>
                                <th style={styles.th} className="column-7">Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredGroups.map((group, index) => {
                                if (group.id < 0) {
                                    return (
                                        <tr className="row-91" key={index}>
                                            <td style={{...styles.td, ...styles.tdFirst}} colSpan="8" className="column-1"><b>{group.matchup}</b></td>
                                        </tr>
                                    )
                                }
                                return (
                                    <React.Fragment key={index}>
                                        <tr className="row-2 cursor-pointer" onClick={() => toggleRow(index)}>
                                            <td className="column-0" style={{...styles.td, ...styles.tdFirst}}>
                                                <span style={styles.arrowCell} >
                                                    <span style={{
                                                        ...styles.arrow,
                                                        transform: expandedRows.has(index) ? 'rotate(180deg)' : 'rotate(0deg)'
                                                    }}></span>
                                                </span>
                                            </td>
                                            <td className="column-1" style={styles.td}>{group.id}</td>
                                            <td className="column-2" style={styles.td}>{group.date}</td>
                                            <td className="column-3" style={styles.td}>{group.time}</td>
                                            <td className="column-5" style={styles.td}>{group.players[0]} vs. {group.players[1]}</td>
                                            <td className="column-6" style={styles.td}>{group.group}</td>
                                            {group.history && (
                                                <td className="column-7">{group.history.winner}</td>
                                            )}
                                        </tr>
                                        {expandedRows.has(index) && (
                                            <tr style={styles.detailsRow}>
                                                <td colSpan="7">
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
                        </tbody>
                    </table>) : (<p>No data found</p>)}
                </div>

            </section>
        </div>
    )
}

const styles = {

    tableWrapper: {
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
    },
    table: {
        width: '100%',
        minWidth: '700px', // Prevents content from breaking on small screens
        borderCollapse: 'collapse'
    },
    thead: {
        background: '#f8f9fa',
        borderBottom: '2px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 10
    },
    th: {
        padding: '16px',
        textAlign: 'left',
        fontWeight: '600',
        color: '#333',
        fontSize: '14px',
        background: '#f8f9fa',
        whiteSpace: 'nowrap'
    },
    // thFirst: {
    //     minWidth: '25px'
    // },
    td: {
        padding: '16px',
        color: '#333',
        fontSize: '14px',
        whiteSpace: 'nowrap'
    },
    // tdFirst: {
    //     minWidth: '25px'
    // },
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