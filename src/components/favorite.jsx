import FavThumbnail from './fav_thumbnail.jsx';

function Favorite(props){
  return (
    <div class="favorite" id="{props.slug}">
      <a href="{props.url}"><h4>{props.title}</h4></a>
      <p>{props.notes}</p>
    </div>
  );
}

export default Favorite;
/*
<FavThumbnail
  media_type={props.media_type}
  image_url={props.image_url} />
*/
