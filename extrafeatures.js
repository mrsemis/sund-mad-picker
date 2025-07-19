// Smooth scrolling på hele siden (for anchor links mm)
document.documentElement.style.scrollBehavior = 'smooth';

// Custom cursor - basic (kan ændres eller fjernes)
document.body.style.cursor = 'default';

// Kan smide flere random features her senere, bro!
const quotes = [
  "Stay hungry, stay foolish. – Steve Jobs",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Dream big and dare to fail. – Norman Vaughan",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Do one thing every day that scares you. – Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
];

// Funktion der viser et random quote i et fixed element
function showQuoteOfTheDay() {
  let quoteBox = document.getElementById("quoteBox");
  if (!quoteBox) {
    quoteBox = document.createElement("div");
    quoteBox.id = "quoteBox";
    quoteBox.style.position = "fixed";
    quoteBox.style.bottom = "20px";
    quoteBox.style.left = "50%";
    quoteBox.style.transform = "translateX(-50%)";
    quoteBox.style.background = "rgba(0, 0, 0, 0.7)";
    quoteBox.style.color = "white";
    quoteBox.style.padding = "10px 20px";
    quoteBox.style.borderRadius = "15px";
    quoteBox.style.fontFamily = "'Poppins', sans-serif";
    quoteBox.style.fontWeight = "600";
    quoteBox.style.fontSize = "1rem";
    quoteBox.style.zIndex = "1000";
    quoteBox.style.userSelect = "none";
    quoteBox.style.boxShadow = "0 0 10px rgba(255,255,255,0.2)";
    document.body.appendChild(quoteBox);
  }
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = `Quote of the Day: "${quotes[randomIndex]}"`;
}

// Kald funktionen når siden loader
window.addEventListener("load", showQuoteOfTheDay);
