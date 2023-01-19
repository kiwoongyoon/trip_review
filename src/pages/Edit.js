
import { useParams } from "react-router-dom";
const data = {
    1:{
        number:1,
        title:'글 제목1',
        author:'박효리',
        content:'아무 글',
        date:'2023-01-14',
        count: 33,
    },
    2:{
        number:2,
        title:'글 제목2',
        author:'홍길동',
        content:'아무 글',
        date:'2023-01-15',
        count: 31,
    },
};


const Edit = ()=>{
    return(
        <div class = "board_wrap">
        <div class="board_title">
            <strong>여행 후기</strong>
            <p>행후에서 당신의 여행 이야기를 작성해보세요!</p>
        </div>
        <div class="board_write_wrap">
            <div class="board_write">
                <div class="title">
                    <dl>
                        <dt>제목</dt><dd><input type="text" placeholder="제목 입력"/></dd>
                    </dl>
                </div>
                <div class="info">
                    <dl>
                        <dt>글쓴이</dt>
                        <dd><input type="text" placeholder="글쓴이 입력"/></dd>
                    </dl><dl>
                        <dt>비밀번호</dt>
                        <dd><input type="password" placeholder="비밀번호 입력"/></dd>
                    </dl>
                </div>
                <div class="cont"><textarea placeholder="내용 입력"></textarea></div>
            </div>
            <div class="button_wrap">
                <a href="/articles" class="on">등록</a>
                <a href="/articles">취소</a>
            </div>
        </div>
    </div>
    )
};

export default Edit;