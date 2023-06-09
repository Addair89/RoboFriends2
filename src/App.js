import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredrobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc bg-light-red mg0'>
                <h1>ROBOFRIENDS 2.0</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots ={filteredrobots}/>
            </div>
        )

    }
}

export default App;