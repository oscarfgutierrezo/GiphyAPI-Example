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
      <div className='card__btn-container'>
        <button onClick={copyLink} className={`${copiedLink ? 'card__copy-link--copy' : 'card__copy-link--no-copy'} card__copy-link`}>
          {!copiedLink && <i className="fa-solid fa-link"></i>}
          <p>{copiedLink ? 'Link Copied!' : 'Copy Link'}</p>
        </button>
        <a href={url} target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i>Visit Page</a>
      </div>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}