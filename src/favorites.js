import Tabletop from 'tabletop'

function fetchFavs(resolve, reject){
    Tabletop.init({
        key: '1db5X6Z-8aWJVCXs8nvDH0ZD2Mx8ckXgwz4RB1d0daVU',
        simpleSheet: true,
        callback: resolve
    });
}
function slugify(text){
  // credit to https://gist.github.com/mathewbyrne/1280286
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function parse_favs(favs){
  return favs.map((f, ix) => {
    f.slug = slugify(f.title);
    f.key = ix;
    return f;
  });
}

export default new Promise(fetchFavs).then(parse_favs);
