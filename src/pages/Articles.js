import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import board_content from "../data/board_content.json";
import './Articles.css';

const Articles = ()=>{  
    return(
        <div class = "board_wrap">
        <div class="board_title">
            <strong>여행 후기</strong>
            <p>행후에서 당신의 여행 이야기를 작성해보세요!</p>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div class="title">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title"><a href ="articles/2">글 제목</a></div>
                    <div class="writer">홍길동</div>
                    <div class="date">2023.01.15</div>
                    <div class="count">31</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><a href ="articles/1">글 제목1</a></div>
                    <div class="writer">박효리</div>
                    <div class="date">2023.01.14</div>
                    <div class="count">33</div>
                </div>
                {board_content.map((content)=>(
                    <div>
                        <div class="num">{content["number"]}</div>
                        <div class="title"><Link to={""+content["number"]}>{content["title"]}</Link></div>
                        <div class="writer">{content["author"]}</div>
                        <div class="date">{content["date"]}</div>
                        <div class="count">{content["count"]}</div>
                    </div>
                ))}
            </div>
            <div class="board_page">
                <a href="#" class="button first">@@</a>
                <a href="#" class="button prev">@</a>
                <a href="#" class = "num on">1</a>
                <a href="#" class = "num">2</a>
                <a href="#" class = "num">3</a>
                <a href="#" class = "num">4</a>
                <a href="#" class = "num">5</a>
                <a href="#" class="button last">@@</a>
                <a href="#" class="button next">@</a>
            </div>
            <div class="button_wrap">
                <a href="/write" class="on">등록</a>
                <a href="/" class="on">집으로</a>
            </div>
        </div>
    </div>
    )
    /*
        <div class = "board_wrap">
        <div class="board_title">
            <strong>여행 후기</strong>
            <p>행후에서 당신의 여행 이야기를 작성해보세요!</p>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div class="title">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title"><a href ="articles/2">글 제목</a></div>
                    <div class="writer">홍길동</div>
                    <div class="date">2023.01.15</div>
                    <div class="count">31</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><a href ="articles/1">글 제목1</a></div>
                    <div class="writer">박효리</div>
                    <div class="date">2023.01.14</div>
                    <div class="count">33</div>
                </div>
            </div>
            <div class="board_page">
                <a href="#" class="button first">@@</a>
                <a href="#" class="button prev">@</a>
                <a href="#" class = "num on">1</a>
                <a href="#" class = "num">2</a>
                <a href="#" class = "num">3</a>
                <a href="#" class = "num">4</a>
                <a href="#" class = "num">5</a>
                <a href="#" class="button last">@@</a>
                <a href="#" class="button next">@</a>
            </div>
            <div class="button_wrap">
                <a href="/write" class="on">등록</a>
            </div>
        </div>
    </div>
    )
    */

}

export default Articles;