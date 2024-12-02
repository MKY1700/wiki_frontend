import "./WikiPage.css"
import { useParams }  from "react-router-dom";

function WikiPage() {
    const {searchQuery} = useParams();
    return (
        <div className="container">
            <h1>{searchQuery}</h1>
            <div className="article-container">
                <h2>내용을 입력해주세요.</h2>
            </div>
        </div>
    )
}
export default WikiPage;