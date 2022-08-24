import PropTypes from 'prop-types';
import { useState } from 'react';

export const GifItem = ({ title, id, url }) => {
  const link = `https://media.giphy.com/media/${id}/giphy.gif`
  
  const [ copiedLink, setCopiedLink ] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(true)
      setTimeout(() => {
        setCopiedLink(false)
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="card">
      <img src={url} alt={title} />
      <button onClick={copyLink} className={`${copiedLink ? 'card__copy-link--copy' : 'card__copy-link--no-copy'} card__copy-link`}>
        {!copiedLink && <i className="fa-solid fa-link"></i>}
        <p>{copiedLink ? 'Copied Link' : 'Copy Gif Link'}</p>
      </button>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}