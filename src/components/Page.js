import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  render() {
    const { year, photos } = this.props
    return (
      <div>
        <p>
          You has {photos.length} photos on {year} year
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
}
