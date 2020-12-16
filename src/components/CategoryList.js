import React from 'react';
import CategoryItem from './CategoryItem'
class CategoryList extends React.Component {
    render() {
        return (
            <div className="category__bottom">
                <h4>My Collections</h4>
                <div className="category-list">
                    {this.props.todos.map(todo => (
                        <CategoryItem key={todo.id} todo={todo} />
                    ))}

                </div>
            </div>
        );
    }
};
export default CategoryList