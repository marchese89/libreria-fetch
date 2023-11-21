"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import books from "./books/fantasy.json";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <>
    <MyNav />
    <Welcome />
    {/* <AllTheBooks genre={books} /> */}
    <BookList genre={books} />
    <MyFooter />
  </>
  )
}
