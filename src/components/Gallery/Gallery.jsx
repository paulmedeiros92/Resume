import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.state = {
      selectedImage: images[0],
    };
  }

  clickPreview(image) {
    this.setState({ selectedImage: image });
  }

  isSelected(image) {
    const { selectedImage } = this.state;
    return image === selectedImage ? 'selected' : '';
  }

  buildPreviews(images) {
    return images.map((image) => (
      <div
        className={`preview ${this.isSelected(image)}`}
        onClick={() => this.clickPreview(image)}
        role="button"
        tabIndex={0}
        onKeyDown={() => this.clickPreview(image)}
      >
        <img className="preview-image" src={image} alt="preview" />
      </div>
    ));
  }

  render() {
    const { selectedImage } = this.state;
    const { images } = this.props;
    const previews = this.buildPreviews(images);
    return (
      <div className="Gallery">
        <div className="sideBar">
          {previews}
        </div>
        <div className="view">
          <img className="selected-image" src={selectedImage} alt="selectedImage" />
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Gallery.defaultProps = {
};

export default Gallery;
