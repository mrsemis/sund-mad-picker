// Smooth scrolling på hele siden (for anchor links mm)
document.documentElement.style.scrollBehavior = 'smooth';

// Custom cursor - basic (kan ændres eller fjernes)
document.body.style.cursor = 'default';

// Kan smide flere random features her senere, bro!
// ...existing code...
const quotes = [
  "Stay hungry, stay foolish. – Steve Jobs",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Dream big and dare to fail. – Norman Vaughan",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Do one thing every day that scares you. – Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "Act as if what you do makes a difference. It does. – William James",
  "What we think, we become. – Buddha",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
  "The only limit to our realization of tomorrow is our doubts of today. – F.D. Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Everything you can imagine is real. – Pablo Picasso",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Little by little, a little becomes a lot. – Tanzanian Proverb",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  "Don’t limit your challenges. Challenge your limits.",
  "Difficult roads often lead to beautiful destinations.",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "You are capable of amazing things.",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "If you want to achieve greatness stop asking for permission.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The best view comes after the hardest climb.",
  "Don’t wish it were easier. Wish you were better. – Jim Rohn",
  "If you can dream it, you can do it. – Walt Disney",
  "The secret of getting ahead is getting started. – Mark Twain",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Opportunities don’t happen. You create them. – Chris Grosser",
  "Success is what happens after you have survived all your mistakes.",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "If you’re going through hell, keep going. – Winston Churchill",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "Don’t count the days, make the days count. – Muhammad Ali",
  "If you want something you never had, you have to do something you’ve never done.",
  "Doubt whom you will, but never yourself. – Christian Nestell Bovee",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "If opportunity doesn’t knock, build a door. – Milton Berle",
  "You don’t find the happy life. You make it. – Camilla Eyring Kimball",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Don’t wait for opportunity. Create it.",
  "The best way out is always through. – Robert Frost",
  "You get what you give.",
  "The future depends on what you do today. – Mahatma Gandhi",
  "The best revenge is massive success. – Frank Sinatra",
  "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
  "You are stronger than you think.",
  "The journey of a thousand miles begins with one step. – Lao Tzu",
  "Don’t let what you cannot do interfere with what you can do. – John Wooden",
  "You can if you think you can. – George Reeves",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
  "You are the artist of your own life. Don’t hand the paintbrush to anyone else.",
  "If you fell down yesterday, stand up today. – H.G. Wells",
  "You can’t cross the sea merely by standing and staring at the water. – Rabindranath Tagore",
  "The only thing standing between you and your goal is the story you keep telling yourself.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "The best preparation for tomorrow is doing your best today. – H. Jackson Brown, Jr.",
  "You are enough just as you are. – Meghan Markle",
  "Don’t let small minds convince you that your dreams are too big.",
  "You are your only limit.",
  "The comeback is always stronger than the setback.",
  "You don’t have to see the whole staircase, just take the first step. – Martin Luther King Jr.",
  "If you want to fly, give up everything that weighs you down.",
  "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
  "Don’t be afraid to start over. It’s a chance to build something better.",
  "You are the author of your own story.",
  "Don’t quit. Suffer now and live the rest of your life as a champion. – Muhammad Ali",
  "You are not a drop in the ocean. You are the entire ocean in a drop. – Rumi",
  "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
  "You can’t go back and change the beginning, but you can start where you are and change the ending. – C.S. Lewis",
  "Don’t let the fear of losing be greater than the excitement of winning. – Robert Kiyosaki",
  "You are what you do, not what you say you’ll do. – Carl Jung",
  "The best dreams happen when you’re awake.",
  "You are never too small to make a difference. – Greta Thunberg",
  "Don’t be afraid to give yourself everything you’ve ever wanted in life.",
  "You are the CEO of your own life.",
  "Don’t let your dreams be dreams.",
  "You are the sky. Everything else is just the weather. – Pema Chödrön",
  "Don’t let your struggle become your identity.",
  "You are the master of your fate, the captain of your soul. – William Ernest Henley",
  "Don’t let anyone dull your sparkle.",
  "You are the light in the darkness.",
  "Don’t let your fears decide your future.",
  "You are the change you wish to see in the world. – Mahatma Gandhi",
  "Don’t let your past define your future.",
  "You are the hero of your own story.",
  "Don’t let your circumstances define you.",
  "You are the architect of your own destiny.",
  "Don’t let your doubts stop you from reaching your goals.",
  "You are the creator of your own happiness.",
  "Don’t let your failures define you.",
  "You are the designer of your own life.",
  "Don’t let your mistakes hold you back.",
  "You are the author of your own success.",
  "Don’t let your fears hold you back from achieving your dreams.",
  "You are the builder of your own future.",
  "Don’t let your insecurities stop you from being your best self.",
  "You are the driver of your own destiny.",
  "Don’t let your worries consume you.",
  "You are the pilot of your own life.",
  "Don’t let your challenges defeat you.",
  "You are the captain of your own ship.",
  "Don’t let your setbacks discourage you.",
  "You are the leader of your own journey.",
  "Don’t let your obstacles stop you from moving forward.",
  "You are the navigator of your own path.",
  "Don’t let your fears control your life.",
  "You are the director of your own story.",
  "Don’t let your doubts overshadow your dreams.",
  "You are the painter of your own canvas.",
  "Don’t let your past mistakes define your future.",
  "You are the composer of your own symphony.",
  "Don’t let your fears keep you from living your best life.",
  "You are the sculptor of your own destiny.",
  "Don’t let your worries hold you back from achieving your goals.",
  "You are the gardener of your own happiness.",
  "Don’t let your challenges stop you from growing.",
  "You are the author of your own adventure.",
  "Don’t let your setbacks stop you from reaching your potential.",
  "You are the creator of your own opportunities.",
  "Don’t let your fears stop you from chasing your dreams.",
  "You are the architect of your own success.",
  "Don’t let your doubts stop you from believing in yourself.",
  "You are the builder of your own dreams.",
  "Don’t let your insecurities stop you from shining.",
  "You are the driver of your own happiness.",
  "Don’t let your worries stop you from enjoying life.",
  "You are the pilot of your own dreams.",
  "Don’t let your challenges stop you from achieving greatness.",
  "You are the captain of your own happiness.",
  "Don’t let your setbacks stop you from moving forward.",
  "You are the leader of your own destiny.",
  "Don’t let your obstacles stop you from reaching your goals.",
  "You are the navigator of your own dreams.",
  "Don’t let your fears stop you from living your best life.",
  "You are the director of your own future.",
  "Don’t let your doubts stop you from achieving your dreams.",
  "You are the painter of your own future.",
  "Don’t let your past mistakes stop you from moving forward.",
  "You are the composer of your own future.",
  "Don’t let your fears stop you from being your best self.",
  "You are the sculptor of your own future.",
  "Don’t let your worries stop you from achieving your goals.",
  "You are the gardener of your own future.",
  "Don’t let your challenges stop you from reaching your potential.",
  "You are the author of your own future."
];
// ...existing code...
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

