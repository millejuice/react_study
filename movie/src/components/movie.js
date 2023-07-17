import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
//Link 이용하면 렌더링을 다시 하는게 아닌 페이지만 이동시켜준다 
function Movie({Id,ImageUrl,title,summary,genres}){
    return <div>
    <img src={ImageUrl}></img>
    <h2><Link to = {`/movie/${Id}`}>{title}</Link></h2>
    <p> {summary}</p>
    <ul>
    {genres.map((g)=><li key={g}>{g}</li>)}
    </ul>
    </div>
}
//{/* map은 genres에 있는 리스트들 한번씩 선택 가능하게 해준다 array가져와서 li로 구성된 새로운 array마드는 것이다 */}
 //genre는 array여서 또다른 map을 해줘야 한다
 //map여러번 사용해도 괜찮지만 꼭 key를 줘야 한다는 것 기억

Movie.propTypes={
    Id : PropTypes.number.isRequired,
    ImageUrl : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;