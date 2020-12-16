import React from 'react'
class CategoryItem extends React.Component {
    render() {
        return (
            <div className="category-item">
                <div className="item-img">
                </div>
                <div className="item-content">
                    <p className="title">{this.props.todo.title}</p>
                    <p className="description">Search for icons from Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minima nihil accusamus, dolorum impedit distinctio  </p> <br />
                    <p className="collection">Bookmark</p>
                    <p className="time">Today, 6:31 PM</p>
                </div>
            </div>
        );
    }
}
export default CategoryItem