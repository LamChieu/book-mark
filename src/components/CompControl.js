import React from 'react'
import ControlSort from './ControlSort'
import ControlSearch from './ControlSearch'
import CategoryList from './CategoryList'
class CompForm extends React.Component {
    render() {
        return (
            <div className="category__content">
                <div className="category__top">
                    <div className="form-group">
                        < ControlSort />
                        <div className="add">
                            <i className="fa fa-star"></i>
                            <p>Add</p>
                        </div>
                    </div>
                </div>
                <ControlSearch />
                <CategoryList 
                    todos={this.props.todos}
                />
            </div>
        );
    }
};
export default CompForm