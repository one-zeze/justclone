import React from 'react'
import useModal from '../../hook/modal';
import { CloseButton, ModalBackground, ModalContainer, ModalContent, ModalHeader, ModalTitle, StyledLabel } from '../../styles/modal';
import styled from 'styled-components';
import { CommonInput } from '../../styles/input/commonInput';
import { CommonBtn } from '../../styles/button/commonBtn';

interface StyledSelectProp {
    width?: string;
    height?: string;
};
const StyledSelect = styled.select<StyledSelectProp>`
    width: ${(props) => props.width};
    height: ${(props) => props.height || '48px'};
    background-color: #3A3A3C;
    color: #8E8E93;
    font-weight: bold;
    padding: 8px;
    border: none;
    border-radius: 6px;
    margin: 0px 12px 0px 3px;
`;
const StyledCheckBox = styled.input`
    width: 1.0rem;
    height: 1.0rem;
    border-radius: 50%;
    border: 2px solid #999;
    appearance: none;
    cursor: pointer;
    margin: 0px 7px 0px 16px;

    &:checked::before {
        content: '✔';
        color: white;
        position: relative;
        top: -4px;
        left: 1px;
    }
`;
const StyledText = styled.span`
    position: relative;
    top: 1px;
    font-size: 12px;
`;
const StyledCheckboxContainer = styled.div`
    display: flex;
    text-align: left;
    /* align-items: center; */
    width: 100%;
    margin-top: 16px;
`;
const StyledSpan = styled.span`
    color: #636366;
    margin-left: 8px;
    size: 12px;
`
const StyledDiv = styled.div`
    text-align: left;
    margin: 40px 0px 16px 10px;
`

const RegistScheduleModal = () => {
    const {closeModal} = useModal();
    const handleBackroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget){
            closeModal();
        }
    }


    return (
        <ModalBackground onClick={handleBackroundClick}>
        <ModalContainer width='640px' height='583px'>

            <ModalHeader>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <ModalTitle>새로운 일정 등록</ModalTitle>
            </ModalHeader>

            <ModalContent>
                <StyledDiv>
                <StyledSelect id='category' width='96px' height='32px'>
                    <option value="">분류</option>
                </StyledSelect>
                <StyledSelect id='start' width='102px' height='32px'>
                    <option value="">2024.01.19</option>
                </StyledSelect>
                <StyledSelect id='end' width='102px' height='32px'>
                    <option value=""></option>
                </StyledSelect>
                </StyledDiv>
                
                <StyledLabel padding='0px 0px 8px 0px' margin='0px 16px'>제목</StyledLabel>
                <CommonInput
                    width='592px' height='48px' type="text" placeholder='일정 이름을 입력해주세요.' margin='0px 16px 0px 0px'
                />
                <StyledLabel padding='0px 0px 8px 0px' margin='0px 16px'>상세 설명(선택)</StyledLabel>
                <CommonInput
                    width='592px' height='176px' type="text" placeholder='일정에 대한 설명을 적어주세요. 없다면 비워주셔도 됩니다.'
                />

                <StyledCheckboxContainer>
                    <StyledCheckBox type="checkbox"/>
                    <StyledText>나만 보기<StyledSpan>나만 보기를 체크하시면 다른 사람은 확인할 수 없어요.</StyledSpan></StyledText>
                </StyledCheckboxContainer>

                <CommonBtn width='592px' height='56px' margin='32px 0px 0px 14px'>등록하기</CommonBtn>

            </ModalContent>

        </ModalContainer>
    </ModalBackground>
    )
}

export default RegistScheduleModal