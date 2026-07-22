import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All"
        };
    }

    onSearch = (event) => {
        this.setState({
            search: event.target.value.toLowerCase()
        });
    };

    onFilter = (event) => {
        this.setState({
            type: event.target.value
        });
    };

    filterItem = (item) => {
        const matchesSearch =
            item.name.toLowerCase().search(this.state.search) !== -1;

        const matchesType =
            this.state.type === "All" || item.type === this.state.type;

        return matchesSearch && matchesType;
    };

    render() {
        const filteredItems = this.props.items.filter(this.filterItem);

        return (
            <div className="filtered-list">
                <h2>Produce List</h2>

                <input
                    type="text"
                    placeholder="Search produce..."
                    onChange={this.onSearch}
                />

                <select value={this.state.type} onChange={this.onFilter}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetables</option>
                </select>

                <List items={filteredItems} />
            </div>
        );
    }
}

export default FilteredList;
