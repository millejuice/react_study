import React from "react";
import styled from 'styled-components';
import CommentListItem from './PostListItem';

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;

    & {
        :not(:last-child){
            margin-bottom : 16px;
        }
    }
`;

function CommentList(props){
    const {coments} = props;
//coments배열을 받는다
//map을 이용해서 각 댓글 객체를 ComentListItem으로 컴포넌트로 넘긴다
    return (
        <Wrapper>
            {CommentList.map((coment,index)=>{
                return <CommentListItem 
                key={coment.id}
                coment = {coment}
                />
            })}
        </Wrapper>
    );
}
export default CommentList;