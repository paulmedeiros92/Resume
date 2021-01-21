import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: this.props.images[0]
    }
  }
  
  clickPreview(image) {
    this.setState({selectedImage: image});
  }

  isSelected(image) {
    return image === this.state.selectedImage ? "selected" : "";  
  }

  buildPreviews(images) {
    return images.map((image) => (
      <div className={"preview " + this.isSelected(image)} onClick={() => this.clickPreview(image)}>
        <img className="preview-image" src={image} alt="preview" />
      </div>
    ));
  }

  render() {
    const previews = this.buildPreviews(this.props.images);
    return (
      <div className="Gallery">
        <div className="sideBar">
          {previews}
        </div>
        <div className="view">
          <img className="selected-image" src={this.state.selectedImage} alt="selectedImage"></img>
        </div>
      </div>
    );
  };
};

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
