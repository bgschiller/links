import FavThumbnail from './fav_thumbnail.jsx';

function Favorite(props){
  return (
    <li className="item" id={props.slug}>
      <FavThumbnail
        media_type={props.media_type}
        image_url={props.image_url} />
      <a href={props.url}><h4>{props.title}</h4></a>
      <p>{props.notes}</p>
    </li>
  );
}

export default Favorite;
