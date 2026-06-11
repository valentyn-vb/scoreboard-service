console.log("Arcade scoreboard online: player queue synced.");
setInterval(() => {
  console.log("Heartbeat: scoreboard service still running.");
  console.log("Player queue length: " + Math.floor(Math.random() * 100)); // Simulate player queue length
}, 30000);
