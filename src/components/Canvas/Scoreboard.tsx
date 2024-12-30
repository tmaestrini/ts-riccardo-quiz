import React from "react";
import { AppContext } from "../../context/AppContext";
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import { AccessibilityQuestionMarkFilled } from "@fluentui/react-icons";

export const Scoreboard: React.FC = () => {
  const context = React.useContext(AppContext);
  const { scoreBoard, addPoint } = context;
  const navigate = useNavigate();

  return (
    <>
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        <table>
          <thead>
            <tr>
              <th>Platz</th>
              <th>Name</th>
              <th>Nickname</th>
              <th>Punkte</th>
            </tr>
          </thead>
          <tbody>
            {scoreBoard && scoreBoard.map((player, index) => (
              <tr key={player.number}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.nickname}</td>
                <td>{player.points} <Button appearance='primary' onClick={() => addPoint(player)}>Punkt +1</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="navigationControl">
        <Button appearance='primary' onClick={() => navigate("/")} icon={<AccessibilityQuestionMarkFilled/>} iconPosition="before">Questions</Button>
      </div>

    </>
  )
}