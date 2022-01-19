import { useState } from "react";
import {
  sortByString,
  sortByNumberDescending,
  sortByNumberAscending,
} from "../scripts/list-sorter";
export default function SortControl({ list, setList }) {
  const [activeSort, setActiveSort] = useState("");
  const [sortAscending, setSortAscending] = useState(false);
  const toggleSortAscending = () => setSortAscending(!sortAscending);

  function sortListByName(list, key) {
    const sortedList = sortByString(list, key);
    setActiveSort("name");
    setList(sortedList);
  }

  function sortListByPriceDescending(list, key) {
    const sortedList = sortByNumberDescending(list, key);
    setActiveSort("price");
    setList(sortedList);
  }

  function sortListByPriceAscending(list, key) {
    const sortedList = sortByNumberAscending(list, key);
    setActiveSort("price");
    setList(sortedList);
  }

  function sortListByDateDescending(list, key) {
    const sortedList = sortByNumberDescending(list, key);
    setActiveSort("date");
    setList(sortedList);
  }

  function sortListByDateAscending(list, key) {
    const sortedList = sortByNumberAscending(list, key);
    setActiveSort("date");
    setList(sortedList);
  }

  return (
    <section className="sort-controls">
     <span className="box">
        <button
          className={`button-toggler ${activeSort === "name" ? "active" : ""}`}
          onClick={() => sortListByName(list, "name")}
        >
          Name
        </button>

        <button
          className={`button-toggler ${activeSort === "price" ? "active" : ""}`}
          onClick={() => {
            toggleSortAscending();
            sortAscending
              ? sortListByPriceDescending(list, "price")
              : sortListByPriceAscending(list, "price");
          }}
        >
          <span>Price</span>
        </button>

      </span>
    </section>
  );
}
