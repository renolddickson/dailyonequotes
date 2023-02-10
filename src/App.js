import './App.css';
import Note from './Note';
import Top from './Top';
import Quotes from './quotes.png'

function App() {
  const quotes=["Whatever you do in life, surround yourself with smart people who'll argue with you.",
"Everything you look at can become a fairy tale and you can get a story from everything you touch.",
"Time is inversly proposional to love ",
"Positive anything is better than negative nothing."
]
const bgcolor=["#2ab7ca" , "#fed766" , "#e6e6ea" , "#f4f4f8","pink","white","bisque","#82eedd","#c9ee82","#8293ee","#66cdaa","#86A3B8","#F5EFEF","#F2C6C6	","#FFE5E5","#F3F2F1	","#CDB2A5","#CAC8AE","#FFF68F","#E9FBA6","#DBECE0","#A6DBFF","#ACC4E0","#F5E5FF","#D3BED7","#E8A8C4","#FFC4D8"]
var bgrand= bgcolor[(Math.random() * bgcolor.length) | 0]
const author="smart Dickson"
var rand = quotes[(Math.random() * quotes.length) | 0]
document.body.style.backgroundColor = bgrand;
  return (
    <div className="App">
      <Top quotestext={rand} author={author}/>
    <Note />
    <div className="mobilequotes">
      <img src={Quotes} alt='"' />
      <h2>
        {rand} ✨
      </h2>      
      <div className="author">- {author}</div>
    </div>
      
    </div>
  );
}

export default App;
