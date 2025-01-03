import React from "react";
import { AppContext } from "../../context/AppContext";
import { Avatar, Button, FluentProvider, Text, Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow, webDarkTheme } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import { AccessibilityQuestionMarkFilled, Circle32Filled } from "@fluentui/react-icons";

const PointBalls: React.FC<{ points: number }> = ({ points }) => {
  return (
    <div>
      <Text size={600} style={{ verticalAlign: 'top', marginRight: '1rem' }}>{points}</Text>
      {[...Array(points)].map((_, index) => (
        <span key={`ball-${index}`} className="pointBall"><Circle32Filled /></span>
      ))}
    </div>
  )
}

export const Scoreboard: React.FC = () => {
  const context = React.useContext(AppContext);
  const { scoreBoard, addPoint, removePoint } = context;
  const navigate = useNavigate();

  const columns = [
    { columnKey: "position", label: "Rang", minWidth: 100, maxWidth: 100 },
    { columnKey: "player", label: "Spieler" },
    { columnKey: "points", label: "Punkte" },
    { columnKey: "actions", label: "", minWidth: 100, idealWidth: 100 },
  ];

  return (
    <FluentProvider theme={webDarkTheme} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="scoreboard">
        <Table arial-label="Scoreboard table" >
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey}>
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {scoreBoard && scoreBoard.map((player, index) => (
              <TableRow key={`${player.nickname}-${player.points}`}
                style={{
                  transition: 'all 0.5s ease-in-out',
                  zIndex: scoreBoard.length - index,
                }}>
                <TableCell width={100}>{index=== 0 && <Text size={600}>{index + 1}</Text>}</TableCell>
                <TableCell>
                  <TableCellLayout
                    media={
                      <Avatar
                        aria-label={player.nickname}
                        name={player.nickname}
                      />
                    }
                  >
                    <Text size={600}>{player.nickname}</Text>
                  </TableCellLayout>
                </TableCell>
                <TableCell width={100}><PointBalls points={player.points} /></TableCell>
                <TableCell>
                  <Button appearance='primary' onClick={() => addPoint(player)}>+1</Button>&nbsp;
                  <Button appearance='primary' onClick={() => removePoint(player)} disabled={player.points == 0}>–1</Button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="navigationControl">
        <Button appearance='primary' onClick={() => navigate("/")} icon={<AccessibilityQuestionMarkFilled />} iconPosition="before">Questions</Button>
      </div>

    </FluentProvider>
  )
}