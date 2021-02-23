//To print smart things to do
const toDoInTheAm = ["Read a Morning Mantra", "Stretch", "Drink Water", "Get Some Sun", "Go for a Walk", "Visualize Your Day", "Pray and Read the Bible/Quran", "Meditate", "Read an Inspirational Quote", "Smile"];
const toDoInTheNoon = ["eat a healthy snack", "check your emails", "CLEAN YOUR DESK SPACE", "FOCUS ON ONE THING", "take a snap", "take a fidgeting break", "Play a musical instrument", "not eat your lunch alone", "make a call", "reflect on the day"];
const toDoInTheNight = ["Prepare Your Breakfast", "Lay Out Your Clothes For the Next Day", "Put Everything You’ll Need by the Door", "Review Your Day", "be Gratitude", "Plan the Next Day", "Read for some Minutes", "go to bed early", "do your breathing exercises", "pray before bed"];
let today = new Date();
let hourNow = today.getHours();
let currentTime = today.toLocaleTimeString();
let randomArrNum = Math.floor(Math.random() * 10)
 const randomMessage = () => {
     if (hourNow > 18) {
            console.log(`The time is ${currentTime}: You should ${toDoInTheNight[randomArrNum].toLowerCase()}, to have a great tomorrow!`);
        } else if (hourNow <= 18 && hourNow >= 12) {
            console.log(`The time is ${currentTime}: You should ${toDoInTheNoon[randomArrNum].toLowerCase()}, for a more productive day!`);
        }
        else {
            console.log(`The time is ${currentTime}: You should ${toDoInTheAm[randomArrNum].toLowerCase()}, to become more active for the day!`)
        }
 }
 randomMessage()