import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../recoil/atom";
import { useEffect, useState } from "react";

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-color: #b9b7b7;
    padding: 0px 20px;

    font-size: 1.5em;
    font-weight: bold;
    
`;
const StyledLogo = styled.div`

`
const StyledNav = styled.div`
    margin-left: auto;
`;
const StyledNavLink = styled(Link)`
    margin-left: 15px;
    text-decoration: none;
    color: black;
    font-size: 14px;
`
const StyleProfileBtn = styled.button`
    background-color: #446FF6;
    width: 45px; height: 45px;
    border-radius: 50%;
`
const StyledMenu = styled.div`
    position: absolute;
    top: 91px; /* 버튼 아래 30px에 위치하도록 조절 */
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    padding: 5px;
    z-index: 1; /* 다른 요소 위에 나타나도록 설정 */
`;

const StyledMenuItem = styled.div`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const Header = () => {
    //로그인 상태 업데이트
    const [loginState, setLoginState] = useRecoilState(userState);
    useEffect(() => {
        const sessionUser = sessionStorage.getItem('userState');
        if (sessionUser) {
            const parseUser = JSON.parse(sessionUser);
            setLoginState(parseUser);
        }
    }, [setLoginState])
    
    
    //로그인 이후 메뉴바
    const [showMenu, setShowMenu] = useState(false);
    const MenuHandler = () => {
        setShowMenu((prev) => !prev);
    }
    //로그아웃
    const navigate = useNavigate();
    const LogOutHandler = () => {
        MenuHandler();
        sessionStorage.removeItem('userState');
        setLoginState({
            email: null,
            token: null,
        })
        navigate('/');
    }


    return (
        <StyledHeader>
            <StyledLogo>PROVIT</StyledLogo>
            <StyledNav>
                {loginState.email ? (
                    <>
                    <StyleProfileBtn onClick={MenuHandler}>프로필 버튼</StyleProfileBtn>
                    {showMenu && (
                        <StyledMenu>
                        <ul>
                            <StyledMenuItem>
                                <li><StyledNavLink to="/logout">유저 프로필</StyledNavLink></li>
                                <li><StyledNavLink to="/logout">계정 설정</StyledNavLink></li>
                                <li><StyledNavLink to="/" onClick={LogOutHandler}>로그아웃</StyledNavLink></li>
                            </StyledMenuItem>
                            </ul>
                        </StyledMenu>
                    )}
                    </>
                ) : (
                    <>
                    <StyledNavLink to={"/login"}>로그인</StyledNavLink>
                    <StyledNavLink to={"/signup"}>회원가입</StyledNavLink>
                    </>
                )}
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;