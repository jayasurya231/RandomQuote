// declaring variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let author=document.querySelector('.author');

const quotes=[{
    quote:`"I went for years not finishing anything. Because, of course, when you finish something you can be judged."`,
    author:`Erica Jong `
},{
    quote:`“My mother always used to say: The older you get, the better you get, unless you’re a banana.”`,
    author:`Rose`
},{
    quote:`“Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.”`,
    author:`Jerry`
},{
   quote:` “Happiness is having a large, caring, close-knit family in another city.”`,
   author:`George Burns` 
},{
  quote:`“If you think dogs can’t count, try putting three dog biscuits in your pocket and then giving Fido only two of them.”`,
  author:`Phil Pastoret`  
},{
    quote:`“The Bible tells us to love our neighbors, and also to love our enemies; probably because they are generally the same people.” `,
    author:`G.K. Chesterton`
},{
    quote:` “Before borrowing money from a friend, decide which you need most.”`,
    author:`Addison H. Hallock`
},{
    quote:`“I like work; it fascinates me. I can sit and look at it for hours.”`,
    author:`Jerome K. Jerome`
},{
    quote:`“A gossip is a person who creates the smoke in which other people assume there’s fire.” `,
    author:`Dan Bennett`
},{
    quote:` “Always go to other people’s funerals; otherwise they won’t come to yours.”`,
    author:`Yogi Berra`
},{
    quote:`"If a book about failures doesn't sell, is it a success?"`,
    author:` Jerry Seinfeld`
},{
    quote:`"My bed is a magical place where I suddenly remember everything I forgot to do." `,
    author:` Unknown`
}];



btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * quotes.length);
 
    quote.innerText=quotes[random].quote;
    author.innerText=quotes[random].author;
});