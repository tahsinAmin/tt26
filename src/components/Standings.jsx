import React, { useState } from 'react';

const isLarge = window.innerWidth >= 960;

const Standings = () => {
  const standingsData = {
    'Group A1': [
      { name: "Sagar", P: 5, W: 4, L: 1, Pts: 4 },
      { name: "Md. Shahiduzzaman", P: 4, W: 3, L: 1, Pts: 3 },
      { name: "Mamun", P: 4, W: 3, L: 1, Pts: 3 },
      { name: "Md. Abdullah Al-Mubin", P: 5, W: 2, L: 3, Pts: 2 },
      { name: "Samrat Ghosh", P: 4, W: 1, L: 3, Pts: 1 },
      { name: "Md. Nabiluzzaman Neloy", P: 4, W: 0, L: 4, Pts: 0 }
    ],
    'Group A2': [
      { name: "Tahsin", P: 5, W: 4, L: 1, Pts: 4 },
      { name: "Shohag Rana", P: 5, W: 4, L: 1, Pts: 4 },
      { name: "Md. Aminul Islam", P: 5, W: 3, L: 2, Pts: 3 },
      { name: "Luscious Larry Das", P: 5, W: 3, L: 2, Pts: 3 },
      { name: "Fazle Rabbi Biswas", P: 5, W: 1, L: 4, Pts: 1 },
      { name: "Md. Ashfiqul Alam Chowdhury", P: 5, W: 0, L: 5, Pts: 0 },
    ],
    'Group A3': [
      { name: "Fazle Rabbi", P: 4, W: 4, L: 0, Pts: 4 },
      { name: "Isfaque Jahan Md. Sakib", P: 3, W: 2, L: 2, Pts: 2 },
      { name: "Ashikur Rahman", P: 3, W: 1, L: 2, Pts: 1 },
      { name: "Shah Riya Naeem", P: 4, W: 1, L: 3, Pts: 1 },
      { name: "Md. Jaber Al Saleh", P: 4, W: 1, L: 3, Pts: 1 },
    ],
    'Group A4': [
      { name: "Abdul Awal Nadim", P: 4, W: 4, L: 0, Pts: 4 },
      { name: "Md. Saiful Islam", P: 5, W: 3, L: 2, Pts: 3 },
      { name: "Md. Tahseen Rahman", P: 4, W: 2, L: 2, Pts: 2 },
      { name: "Imtiaz Shawn", P: 5, W: 2, L: 3, Pts: 2 },
      { name: "Partha", P: 5, W: 2, L: 3, Pts: 2 },
      { name: "Farhan", P: 5, W: 1, L: 4, Pts: 1 },
    ],
    'Group B1': [
      { name: "Samrat Ghosh", P: 3, W: 3, L: 0, Pts: 3 },
      { name: "Shohag Rana", P: 3, W: 2, L: 1, Pts: 2 },
      { name: "Shohel Rana", P: 3, W: 2, L: 1, Pts: 2 },
      { name: "Mehedi Hasan", P: 3, W: 1, L: 2, Pts: 1 },
      { name: "Raihan", P: 3, W: 0, L: 3, Pts: 0 }
    ],
    'Group B2': [
      { name: "Ashikur Rahman", P: 4, W: 4, L: 0, Pts: 4 },
      { name: "Imtiaz Shawn", P: 4, W: 3, L: 1, Pts: 3 },
      { name: "Jaminur", P: 3, W: 2, L: 1, Pts: 2 },
      { name: "Mahmudul Hasan Masum", P: 3, W: 0, L: 3, Pts: 0 },
      { name: "Tariquzzaman Tuhin", P: 3, W: 0, L: 3, Pts: 0 }
    ]
  };

  const recentMatches = [
    {
      "id": 78,
      "date": "16-Feb-26",
      "time": "11:00",
      "players": ["Imtiaz Shawn", "Md. Tahseen Rahman"],
      "group": "A4",
      history: {
        winner: "Imtiaz Shawn",
        results: [[11, 2, 0], [14, 12, 0]]
      }
    },
    {
      "id": 80,
      "date": "16-Feb-26",
      "time": "11:15",
      "players": ["Fazle Rabbi", "Ashikur Rahman"],
      "group": "A3",
      history: {
        winner: "Fazle Rabbi",
        results: [[12, 10, 0], [11, 6, 0]]
      }
    },
    {
      id: 81,
      date: "16-Feb-26",
      time: "11:20",
      players: ["Shohag Rana", "Luscious Larry Das"],
      group: "A2",
      history: {
        winner: "Shohag Rana",
        results: [[11, 8, 0], [5, 11, 1], [14, 12, 0]]
      }
    },
    {
      "id": 82,
      "date": "16-Feb-26",
      "time": "14:00",
      "players": ["Md. Shahiduzzaman", "Md. Abdullah Al-Mubin"],
      "group": "A1",
      history: {
        winner: "Md. Shahiduzzaman",
        results: [[8, 11, 1], [11, 9, 0], [14, 12, 0]]
      }
    },
    {
      "id": 83,
      "date": "16-Feb-26",
      "time": "14:30",
      "players": ["Partha", "Imtiaz Shawn"],
      "group": "A4",
      history: {
        winner: "Partha",
        results: [[12, 10, 0], [11, 9, 0]]
      }
    },
    {
      id: 84,
      date: "16-Feb-26",
      time: "14:35",
      players: ["Abdul Awal Nadim", "Imtiaz Shawn"],
      group: "A4",
      history: {
        winner: "Abdul Awal Nadim",
        results: [[11, 8, 0], [11, 8, 0]]
      }
    },
    {
      "id": 85,
      "date": "16-Feb-26",
      "time": "14:45",
      "players": ["Md. Saiful Islam", "Partha"],
      "group": "A4",
      history: {
        winner: "Md. Saiful Islam",
        results: [[11, 3, 0], [11, 7, 0]]
      }
    },
    {
      "id": 86,
      "date": "16-Feb-26",
      "time": "14:50",
      "players": ["Md. Tahseen Rahman", "Md. Saiful Islam"],
      "group": "A4",
      history: {
        winner: "Md. Tahseen Rahman",
        results: [[10, 12, 1], [11, 8, 0], [12, 10, 0]]
      }
    },
    {
      "id": 87,
      "date": "16-Feb-26",
      "time": "14:55",
      "players": ["Shohag Rana", "Fazle Rabbi Biswas"],
      "group": "A2",
      history: {
        winner: "Shohag Rana",
        results: [[7, 0, 0], [7, 0, 0]]
      }
    },
    {
      "id": 88,
      "date": "16-Feb-26",
      "time": "18:05",
      "players": ["Abdul Awal Nadim", "Farhan"],
      "group": "A4",
      history: {
        winner: "Abdul Awal Nadim",
        results: [[11, 6, 0], [11, 2, 0]]
      }
    },
    {
      "id": 89,
      "date": "16-Feb-26",
      "time": "18:10",
      "players": ["Imtiaz Shawn", "Farhan"],
      "group": "A4",
      history: {
        winner: "Imtiaz Shawn",
        results: [[11, 8, 0], [6, 11, 1], [11, 7, 0]]
      }
    },
    {
      "id": 90,
      "date": "16-Feb-26",
      "time": "18:15",
      "players": ["Shohag Rana", "Md. Ashfiqul Alam Chowdhury"],
      "group": "A2",
      history: {
        winner: "Shohag Rana",
        results: [[7, 0, 0], [7, 0, 0]]
      }
    },
    {
      "id": 91,
      "date": "16-Feb-26",
      "time": "19:00",
      "players": ["Mamun", "Sagar"],
      "group": "A1",
      history: {
        winner: "Mamun",
        results: [[12, 10, 0], [4, 11, 1], [11, 8, 0]]
      }
    },
    {
      "id": 92,
      "date": "16-Feb-26",
      "time": "19:10",
      "players": ["Mamun", "Samrat Ghosh"],
      "group": "A1",
      history: {
        winner: "Mamun",
        results: [[11, 8, 0], [11, 8, 0]]
      }
    },
    {
      "id": 93,
      "date": "17-Feb-26",
      "time": "10:00",
      "players": ["Luscious Larry Das", "Fazle Rabbi Biswas"],
      "group": "A2",
      history: {
        winner: "Luscious Larry Das",
        results: [[7, 0, 0], [7, 0, 0]]
      }
    },
  ];

  const upcomingMatches = [
    { time: "11:00", players: ["Samrat Ghosh", "Mohammad Nabiluzzaman Neloy"], group: "A1" },
    { time: "11:05", players: ["Abdul Awal Nadim", "Md. Tahseen Rahman"], group: "A4" },
    { time: "11:10", players: ["Mamun", "Md. Shahiduzzaman"], group: "A1" },

    // Quarter-finals
    { time: "11:15", players: ["Top of Group A1", "Runner-up of Group A3"], group: "QF1" },
    { time: "14:30", players: ["Top of Group A2", "Runner-up of Group A4"], group: "QF2" },
    { time: "14:35", players: ["Top of Group A3", "Runner-up of Group A1"], group: "QF3" },
    { time: "14:40", players: ["Top of Group A4", "Runner-up of Group A2"], group: "QF4" },

    // Semi-finals
    { time: "14:45", players: ["Winner QF 1", "Winner QF 2"], group: "SF1" },
    { time: "14:50", players: ["Winner QF 3", "Winner QF 4"], group: "SF2" },

    // Third Place
    { time: "14:55", players: ["Loser SF 1", "Loser SF 2"], group: "Third Place" },

    // Final
    { time: "18:10", players: ["Winner SF 1", "Winner SF 2"], group: "Final" }
  ];

  const [standingsIndex, setStandingsIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);

  const groups = Object.keys(standingsData);
  const matchesPerSlide = 3;
  const recentSlides = [];
  for (let i = 0; i < recentMatches.length; i += matchesPerSlide) {
    recentSlides.push(recentMatches.slice(i, i + matchesPerSlide));
  }

  const handleStandingsChange = (direction) => {
    const newIndex = standingsIndex + direction;
    if (newIndex >= 0 && newIndex < groups.length) {
      setStandingsIndex(newIndex);
    }
  };

  const handleRecentChange = (direction) => {
    const newIndex = recentIndex + direction;
    if (newIndex >= 0 && newIndex < recentSlides.length) {
      setRecentIndex(newIndex);
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          // background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #00456b;
          border-radius: 3px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #00456b;
        }
      `}</style>

      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Table Tennis Tournament</h1>
        <p style={styles.headerSubtitle}>Group Stage Standings & Matches</p>
      </div>

      <div style={styles.cardsGrid}>
        {/* Card 1: Standings */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.cardTitle}>
              <div style={styles.cardTitleBar}></div>
              Standings
            </div>
            <div style={styles.sliderControls}>
              <button
                style={{ ...styles.sliderBtn, ...(standingsIndex === 0 ? styles.sliderBtnDisabled : {}) }}
                onClick={() => handleStandingsChange(-1)}
                disabled={standingsIndex === 0}
              >
                ‹
              </button>
              <button
                style={{ ...styles.sliderBtn, ...(standingsIndex === groups.length - 1 ? styles.sliderBtnDisabled : {}) }}
                onClick={() => handleStandingsChange(1)}
                disabled={standingsIndex === groups.length - 1}
              >
                ›
              </button>
            </div>
          </div>
          <div style={styles.cardContent}>
            <div key={standingsIndex} style={styles.slideAnimation}>
              <div style={styles.groupLabel}>{groups[standingsIndex]}</div>
              <table style={styles.standingsTable}>
                <thead>
                  <tr>
                    <th style={{ ...styles.th, width: '30px' }}>Pos</th>
                    <th style={styles.th}>Team</th>
                    <th style={styles.th}>P</th>
                    <th style={styles.th}>W</th>
                    <th style={styles.th}>L</th>
                    <th style={styles.th}>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {[...standingsData[groups[standingsIndex]]].sort((a, b) => b.Pts - a.Pts || b.W - a.W).map((team, idx) => (
                    <tr key={idx} style={styles.tableRow}>
                      <td style={styles.posCell}>{idx + 1}</td>
                      <td style={styles.playerName}>{team.name}</td>
                      <td style={styles.statCell}>{team.P}</td>
                      <td style={styles.statCell}>{team.W}</td>
                      <td style={styles.statCell}>{team.L}</td>
                      <td style={styles.pointsCell}>{team.Pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Card 2: Recent Matches */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.cardTitle}>
              <div style={styles.cardTitleBar}></div>
              Recent Matches
            </div>
            <div style={styles.sliderControls}>
              <button
                style={{ ...styles.sliderBtn, ...(recentIndex === 0 ? styles.sliderBtnDisabled : {}) }}
                onClick={() => handleRecentChange(-1)}
                disabled={recentIndex === 0}
              >
                ‹
              </button>
              <button
                style={{ ...styles.sliderBtn, ...(recentIndex === recentSlides.length - 1 ? styles.sliderBtnDisabled : {}) }}
                onClick={() => handleRecentChange(1)}
                disabled={recentIndex === recentSlides.length - 1}
              >
                ›
              </button>
            </div>
          </div>
          <div style={styles.cardContent}>
            <div key={recentIndex} style={styles.slideAnimation}>
              {recentSlides[recentIndex].map(match => {
                const winner = match.history.winner;
                const player1Won = winner === match.players[0];
                return (
                  <div key={match.id} style={styles.matchCard}>
                    <div style={styles.matchHeader}>
                      <div style={styles.matchDateTime}>
                        <span style={styles.matchDate}>{match.date}</span>
                        <span style={styles.matchTime}>{match.time}</span>
                      </div>
                      <div style={styles.matchGroup}>Group {match.group}</div>
                    </div>
                    <div style={styles.matchPlayers}>
                      <div style={{ ...styles.player, ...(player1Won ? styles.playerWinner : {}) }}>
                        {match.players[0]}
                      </div>
                      <div style={styles.vsSeparator}>VS</div>
                      <div style={{ ...styles.player, ...(!player1Won ? styles.playerWinner : {}) }}>
                        {match.players[1]}
                      </div>
                    </div>
                    <div style={styles.matchScore}>
                      {match.history.results.map((set, idx) => {
                        const [score1, score2, winner] = set;
                        return (
                          <div key={idx} style={{ ...styles.setScore, ...(winner === 0 ? styles.setScoreWon : {}) }}>
                            {score1}-{score2}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 3: Upcoming Matches */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.cardTitle}>
              <div style={styles.cardTitleBar}></div>
              Upcoming Matches
            </div>
          </div>
          <div style={{ ...styles.cardContent, ...styles.scrollableContent }} className="scrollbar-custom">
            {upcomingMatches.map((match, idx) => (
              <div key={idx} style={styles.upcomingMatch}>
                <div style={styles.upcomingHeader}>
                  <div style={styles.upcomingTime}>{match.time}</div>
                  <div style={styles.upcomingGroup}>Group {match.group}</div>
                </div>
                <div style={styles.upcomingPlayers}>
                  {match.players[0]} <span style={styles.upcomingVs}>vs.</span> {match.players[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Rajdhani', sans-serif",
    // background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1428 100%)',
    minHeight: '100vh',
    padding: '30px 20px',
    color: '#ffffff',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '35px',
    animation: 'fadeInDown 0.8s ease-out',
  },
  headerTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    letterSpacing: '0.1em',
    background: 'linear-gradient(135deg, #00456b, #4a9eff)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textTransform: 'uppercase',
    marginBottom: '8px',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: '1rem',
    color: '#00456b',
    fontWeight: 600,
    letterSpacing: '0.05em',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
    animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
  },
  card: {
    // background: 'rgba(20, 25, 45, 0.95)',
    borderRadius: '16px',
    border: '1px solid #00456b',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  cardHeader: {
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #00456b',
  },
  cardTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.4rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#000',
  },
  cardTitleBar: {
    width: '3px',
    height: '22px',
    background: '#00456b',
    borderRadius: '2px',
  },
  sliderControls: {
    display: 'flex',
    gap: '6px',
  },
  sliderBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    background: 'rgb(20 11 11 / 8%)',
    border: '1px solid #000',
    color: '#000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    transition: 'all 0.2s ease',
    fontFamily: "'Rajdhani', sans-serif",
  },
  sliderBtnDisabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  cardContent: {
    padding: '20px',
    height: isLarge ? '470px' : '552px',
    overflow: 'hidden',
  },
  scrollableContent: {
    overflowY: 'auto',
  },
  slideAnimation: {
    animation: 'slideIn 0.4s ease-out',
  },
  groupLabel: {
    display: 'inline-block',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.2rem',
    letterSpacing: '0.1em',
    color: '#000',
    marginBottom: '12px',
    padding: '6px 12px',
    background: 'rgb(248, 249, 250)',
    borderRadius: '6px',
    border: '1px solid rgba(248, 249, 25, 0.2)',
  },
  standingsTable: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 6px',
    fontSize: '0.9rem',
  },
  th: {
    textAlign: 'left',
    padding: '8px 10px',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '0.9rem',
    letterSpacing: '0.08em',
    color: '#000',
    fontWeight: 400,
    borderBottom: '1px solid #00456b',
  },
  tableRow: {
    background: 'rgb(248, 249, 250)',
    transition: 'all 0.2s ease',
  },
  posCell: {
    padding: '10px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '6px 0 0 6px',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.1rem',
    color: '#000',
    textAlign: 'center',
  },
  playerName: {
    padding: '10px',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#00456b',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statCell: {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#000',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  pointsCell: {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#000',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    borderRight: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '0 6px 6px 0',
  },
  matchCard: {
    background: 'rgb(248, 249, 250)',
    borderRadius: '10px',
    padding: '14px 16px',
    marginBottom: '12px',
    border: '1px solid rgb(248, 249, 250)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  matchHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  matchDateTime: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  matchDate: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1rem',
    color: '#000',
    letterSpacing: '0.05em',
  },
  matchTime: {
    fontWeight: 600,
    color: '#000',
    fontSize: '0.85rem',
  },
  matchGroup: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '0.85rem',
    color: '#000',
    border: '1px solid black',
    padding: '3px 10px',
    borderRadius: '5px',
    letterSpacing: '0.08em',
  },
  matchPlayers: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  player: {
    fontSize: '0.95rem',
    fontWeight: 600,
    flex: 1,
    color: '#000',
  },
  playerWinner: {
    color: '#00456b',
  },
  vsSeparator: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.1rem',
    color: '#000',
    padding: '0 12px',
  },
  matchScore: {
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
  },
  setScore: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '4px 10px',
    borderRadius: '5px',
    fontWeight: 700,
    fontSize: '0.85rem',
    minWidth: '50px',
    textAlign: 'center',
    color: '#000',
  },
  setScoreWon: {
    background: 'rgba(0, 69, 107, 0.15)',
    color: '#00456b',
  },
  upcomingMatch: {
    background: 'rgb(248, 249, 250)',
    borderRadius: '10px',
    padding: '12px 14px',
    marginBottom: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    // borderLeft: '3px solid #4a9eff',
    transition: 'all 0.2s ease',
  },
  upcomingHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  upcomingTime: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.1rem',
    color: '#000',
    letterSpacing: '0.05em',
  },
  upcomingGroup: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '0.8rem',
    color: '#000',
    border: '1px solid black',
    padding: '3px 8px',
    borderRadius: '5px',
    letterSpacing: '0.08em',
  },
  upcomingPlayers: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#00456b',
  },
  upcomingVs: {
    color: '#a0a8c8',
    margin: '0 6px',
  },
};

export default Standings;