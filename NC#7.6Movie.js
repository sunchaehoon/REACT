import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title} />  
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>   
            </h2>
            <p>{summary}</p>
            <ul>
            {genres.map(g => (
                <li key={g}>{g}</li>
            ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

//img 태그의 alt속성 : 이미지를 보여줄 수 없을 때 해당 이미지를 대체할 테스트를 명시
//<Link to

export default Movie;
