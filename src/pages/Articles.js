import { useParams } from "react-router-dom";
import './Articles.css';
const data = [
    {
        number:1,
        title:'글 제목1',
        author:'박효리',
        content:'아무 글',
        date:'2023-01-14',
        count: 33,
    },
    {
        number:2,
        title:'글 제목2',
        author:'홍길동',
        content:'아무 글',
        date:'2023-01-15',
        count: 31,
    },
];



const Articles = ()=>{
    return(
        <div class = "board_wrap">
        <div class="board_title">
            <div class="button_wrap">
                <a href="/write" class="on">작성하기</a>
            </div>
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
                    <div class="title"><a href ="articles/2">글 제목2</a></div>
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
                <a href="#" class="button first">&lt;&lt;</a>
                <a href="#" class="button prev">&lt;</a>
                <a href="#" class = "num on">1</a>
                <a href="#" class = "num">2</a>
                <a href="#" class = "num">3</a>
                <a href="#" class = "num">4</a>
                <a href="#" class = "num">5</a>
                <a href="#" class="button last">&gt;</a>
                <a href="#" class="button next">&gt;&gt;</a>
            </div>
        </div>
        <div class="search_field">
                    <input type="text" placeholder="제목으로 검색해보세요."></input> 
                    <button>검색</button>
        </div>
    </div>
    )

}

export default Articles;