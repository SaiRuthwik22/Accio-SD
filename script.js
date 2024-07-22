function openingCeremony(race){
    let count = 3
    let interval = setInterval(()=>{
        console.log(count)
        count -=1
        if(count<0){
            clearInterval(interval)
            let score = {red:0,blue:0,green:0}
            console.log("game start")
            race(score,longJump)
        }
    },1000)
}
function race(score,longJump){

    setTimeout(()=>{
        let times = {
            red:(Math.random()*6)+10,
            blue:(Math.random()*6)+10,
            green:(Math.random()*6)+10
        }
        let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
        score[sortedTimes[0][0]] += 50;
        score[sortedTimes[1][0]] += 25;
        score[sortedTimes[2][0]] += 10;
        console.log("score",score)
        longJump(score,highJump)
    },3000)

}
function longJump(score,highJump){
    setTimeout(()=>{
        let colors = ["red","blue","green"]
        let winner = colors[Math.floor(Math.random()*colors.length)]
        score[winner] +=150
        console.log("score",score)
        highJump(score,awardCeremony)
    },2000)
}
function highJump(score,awardCeremony){
    let winner = prompt("Enter the winner of the High Jump (red, blue, green):");
    if (winner && score.hasOwnProperty(winner)) {
        score[winner] += 100;
        console.log(`High Jump winner is ${winner}`);
        awardCeremony(score)
    } else {
       highJump(score,awardCeremony)
    }
}
function awardCeremony(score){
    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log("Final scores:", sortedScores);
    console.log("Final Winner is",sortedScores[0][0])
    console.log(`1st place: ${sortedScores[0][0]} with ${sortedScores[0][1]} points`);
    console.log(`2nd place: ${sortedScores[1][0]} with ${sortedScores[1][1]} points`);
    console.log(`3rd place: ${sortedScores[2][0]} with ${sortedScores[2][1]} points`);
}
openingCeremony(race)