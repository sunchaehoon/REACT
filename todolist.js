import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, } from 'react-icons/md';
import * as S from './Styled';
import cn from 'classnames';

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <S.TodoListItem>
            <S.Checkbox className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <S.Text>{text}</S.Text>
            </S.Checkbox>
            <S.Remove>
                <MdRemoveCircleOutline />
            </S.Remove>
        </S.TodoListItem>
    );
};

export default TodoListItem;
