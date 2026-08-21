import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Header from './components/Header'

const books = [
{
  bookname: "Think and Grow Rich",
  image: "https://www.ajayonlinestall.com/wp-content/uploads/2026/01/9789389717426-1.jpg",
  author: "Napoleon Hill",
  price: 350,
  description: "A motivational book about developing a positive mindset, setting goals, and achieving success."
},
  {
    bookname: "Think and Grow Rich",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybHVMADCnNT0-ShSmzDeD8y_e77JSticcn_AlcvkUOh8wlGbV90qNBiu-&s=10",
    author: "Napoleon Hill",
    price: 250,
    description: "A classic self-development book focused on mindset, goals, persistence, and financial success."
  },
 
  {
    bookname: "Rich Dad Poor Dad",
    image: "https://i.pinimg.com/736x/be/0f/5f/be0f5f961304a28dc37623394d5eb5cd.jpg",
    author: "Robert Kiyosaki",
    price: 350,
    description: "A personal finance book that explores different approaches to money, investing, and wealth."
  },
  {
    bookname: "The Psychology of Money",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/9/548660480/QT/AT/OG/245166085/20250927-000616.jpg",
    author: "Morgan Housel",
    price: 280,
    description: "Explores how emotions and behavior influence financial decisions and wealth building."
  },
  {
    bookname: "Ikigai",
    image: "https://ikkadukka.com/cdn/shop/products/ikigai-the-japanese-secret-to-a-long-and-happy-life-book-books-house-home-lifestyle-newarrivals-product-type-ikkadukka-store-ikka-dukka-eclectic-online_580.jpg?v=1584737493",
    author: "Héctor García & Francesc Miralles",
    price: 499,
    description: "An exploration of the Japanese concept of finding purpose, meaning, and fulfillment in life."
  },
 {
    bookname: "Atomic Habits",
    image: "https://m.media-amazon.com/images/I/51U+wsHHOVL.jpg",
    author: "James Clear",
    price: 799,
    description: "A practical guide to building good habits and breaking bad ones through small changes."
  },
  {
    bookname: "The 7 Habits of Highly Effective People",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvox1YVmw5mhFo-YizVlLeGoJ6jVQf6WMc5ccLqGsFw&s=10",
    author: "Stephen R. Covey",
    price: 750,
    description: "A framework for improving personal effectiveness, relationships, leadership, and productivity."
  },
  {
    bookname: "Deep Work",
    image: "https://bookfupanda.com/wp-content/uploads/2024/03/1632472336.jpg",
    author: "Cal Newport",
    price: 350,
    description: "Explains how focused, distraction-free work can improve productivity and professional success."
  },
  {
    bookname: "The Power of Now",
    image: "https://bookspringindia.in/cdn/shop/products/thepowerofnow.jpg?v=1631285354",
    author: "Eckhart Tolle",
    price: 2050,
    description: "A spiritual guide encouraging readers to live more fully in the present moment."
  },
  {
    bookname: "Sapiens",
    image: "https://www.bbassets.com/media/uploads/p/xl/40342212-6_1-vintage-sapiens.jpg",
    author: "Yuval Noah Harari",
    price:500,
    description: "A broad history of humanity, exploring how humans developed societies, cultures, and civilizations."
  },
  {
    bookname: "The Great Gatsby",
    image: "https://oxfordbookstore.com/cdn/shop/files/61L1cg-URsL.jpg?v=1764184425&width=1200",
    author: "F. Scott Fitzgerald",
    price: 250,
    description: "A classic American novel about wealth, love, ambition, and the American Dream."
  },
  {
    bookname: "1984",
    image: "https://m.media-amazon.com/images/I/71Wepyt1HuL._AC_UF1000,1000_QL80_.jpg",
    author: "George Orwell",
    price: 199,
    description: "A dystopian novel about surveillance, political control, propaganda, and individual freedom."
  },
  {
    bookname: "To Kill a Mockingbird",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4dCANKsUe04H6LeQudFaDoOHo3yF8-JHpjtze24X8Q&s=10",
    author: "Harper Lee",
    price: 400,
    description: "A coming-of-age story exploring justice, racism, morality, and compassion."
  },
  {
    bookname: "The Hobbit",
    image: "https://m.media-amazon.com/images/I/41TuZlE161L._AC_UF1000,1000_QL80_.jpg",
    author: "J.R.R. Tolkien",
    price: 700,
    description: "A fantasy adventure following Bilbo Baggins on an unexpected journey with dwarves and a wizard."
  },
  {
    bookname: "Harry Potter and the Philosopher's Stone",
    image: "https://www.crossword.in/cdn/shop/products/crosswordonline-books-default-title-harry-potter-and-the-philosopher-s-stone-j-k-rowling-40421717704921.jpg?v=1775121176",
    author: "J.K. Rowling",
    price: 600,
    description: "A young wizard discovers his magical heritage and begins his extraordinary journey at Hogwarts."
  }
];




function App() {

  return (
    <>
      <Header/>
      <Home mydata={books}/>
      <Footer/>
    </>
  )
}

export default App
