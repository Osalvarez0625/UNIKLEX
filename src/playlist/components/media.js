
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

// clase JSX
class Media extends Component {
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media">
                <div>
                    <img
                        src={this.props.image} 
                        alt=""
                        width={260}
                        height={160}
                        className="Media/image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>)
        
    }
}
Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}



export default Media;