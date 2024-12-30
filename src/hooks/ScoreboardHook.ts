
import { useMemo, useState } from 'react';
import { Contestant } from '../types/Contestant';

export default function ScoreboardHook() {
  const [players, setPlayers] = useState<Contestant[]>([]);
  const [scoreBoard, setScoreBoard] = useState<Contestant[]>([]);

  useMemo(() => {
    async function loadContestantsFromCSV() {
      const contestantsData = await fetch('../data/contestants.csv');
      const csvText = await contestantsData.text();
      const rows = csvText.split('\n').filter(row => row.trim());
      rows.shift(); // remove header
      const contestants: Contestant[] = rows.map(row => {
        const [number, name, nickname, pointsAtStart] = row.split(';');
        return {
          number: parseInt(number.trim()),
          name: name.trim(),
          nickname: nickname.trim(),
          points: parseInt(pointsAtStart.trim())
        } as Contestant;
      });
      setPlayers(contestants);
      setScoreBoard(contestants.sort((a, b) => b.points - a.points));
    }

    loadContestantsFromCSV();
  }, []);


  function addPointForPlayer(player: Contestant): Contestant[] {
    player.points++;
    setScoreBoard([...players.filter(p => p.number !== player.number), player].sort((a, b) => b.points - a.points));
    return scoreBoard;
  }

  return {
    scoreBoard,
    addPoint: addPointForPlayer,
  };
}