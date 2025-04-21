
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Direction = "up" | "down" | "left" | "right" | null;

const GRID_SIZE = 25;
const CELL_SIZE = 20;
const BOARD_SIZE = GRID_SIZE * CELL_SIZE;
const INITIAL_POS = { x: 12, y: 12 };

const color = "#8B5CF6"; // Paper.io purple

const PaperIoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [player, setPlayer] = useState(INITIAL_POS);
  const [direction, setDirection] = useState<Direction>(null);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([{ ...INITIAL_POS }]);
  const [resetGame, setResetGame] = useState(false);

  // Handle keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction !== "down") setDirection("up");
      if (e.key === "ArrowDown" && direction !== "up") setDirection("down");
      if (e.key === "ArrowLeft" && direction !== "right") setDirection("left");
      if (e.key === "ArrowRight" && direction !== "left") setDirection("right");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [direction]);

  // Main game loop
  useEffect(() => {
    if (!direction) return;

    const interval = setInterval(() => {
      setPlayer((prev) => {
        let next = { ...prev };
        if (direction === "up") next.y = Math.max(0, next.y - 1);
        if (direction === "down") next.y = Math.min(GRID_SIZE - 1, next.y + 1);
        if (direction === "left") next.x = Math.max(0, next.x - 1);
        if (direction === "right") next.x = Math.min(GRID_SIZE - 1, next.x + 1);

        setTrail((oldTrail) => {
          // Only add to trail if the player moves
          const last = oldTrail[oldTrail.length - 1];
          if (last.x !== next.x || last.y !== next.y) {
            return [...oldTrail, { x: next.x, y: next.y }];
          }
          return oldTrail;
        });
        return next;
      });
    }, 65);
    return () => clearInterval(interval);
  }, [direction]);

  // Draw effect
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, BOARD_SIZE, BOARD_SIZE);
    // Draw trail
    for (const cell of trail) {
      ctx.fillStyle = color;
      ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
    // Draw player head
    ctx.fillStyle = "#FEC6A1";
    ctx.fillRect(player.x * CELL_SIZE, player.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    // Draw grid
    ctx.strokeStyle = "#eee";
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, BOARD_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(BOARD_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }
  }, [trail, player, resetGame]);

  const handleReset = () => {
    setPlayer(INITIAL_POS);
    setTrail([{ ...INITIAL_POS }]);
    setDirection(null);
    setResetGame((v) => !v); // triggers useEffect draw
  };

  return (
    <div className="flex flex-col items-center py-8 min-h-screen bg-gradient-to-tr from-[#e5deff] via-[#f2fce2]/60 to-[#d3e4fd]/60">
      <h1 className="text-3xl font-bold mb-1 text-primary">Paper.io Mini</h1>
      <p className="mb-4 text-muted-foreground">Move with arrow keys &mdash; cover the board!</p>
      <canvas
        ref={canvasRef}
        width={BOARD_SIZE}
        height={BOARD_SIZE}
        className="border-2 border-primary rounded-lg shadow-xl bg-white animate-fade-in"
        tabIndex={0}
      />
      <div className="mt-4 flex gap-2">
        <Button onClick={handleReset}>Reset</Button>
        <span className="bg-gray-100 px-3 py-1 rounded text-sm">Trail: {trail.length}</span>
      </div>
    </div>
  );
};

export default PaperIoGame;
