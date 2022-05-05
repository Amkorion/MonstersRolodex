import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  console.log({ searchField });

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      {/*<CardList monsters={filteredMonsters} />*/}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("1. Constructor");
//   }
//
//   componentDidMount() {
//     console.log("3. componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//       response.json().then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       )
//     );
//   }
//
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
//
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//
//   render() {
//     console.log("2. Render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

export default App;
