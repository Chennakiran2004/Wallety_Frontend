import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export const SignUpContainer = styled.div`
    height: 100vh;
    width: 100%;
`

export const SignUpSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 24px;
`

export const HeaderContainer = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    align-items:center;
    position: relative;
`

export const IconContianer = styled(IoIosArrowRoundBack)`
    position: fixed;
`

export const SignUpHeading = styled.h1`
    font-size: 24px;
    text-align: center;
    width: 100%;
`

export const FieldsContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 56px;
    gap: 24px;
`

export const InputField = styled.input`
    width: 90%;
    margin: auto;
    border: 1px solid #F1F1FA;
    height: 48px;
    border-radius: 16px;
    padding-left: 12px;
    color: #91919F;
    font-size: 16px;
`

export const InputFieldContainerWrapper = styled.div`
    display: flex;
    position: relative;
    align-items:center;
`

export const EyeIconContainer = styled(IoEyeOutline)`
    position: fixed;
    right: 30px;
    color: #91919F;
`

export const GenderIconContainer = styled(IoIosArrowDown)`
    position: fixed;
    right: 30px;
    color: black;
`

export const GenderContainer = styled.div`
    width: 90%;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: auto;
    border: 1px solid #F1F1FA;
    border-radius: 16px;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
`

export const ParaElement = styled.p`
    font-size: 16px;
    color: #91919F;
`

export const GenderHeadingContainer=  styled.div`
    display: flex;
    align-items: center;
`

export const GenderContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const GenderButton = styled.button`
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    font-size: 16px;
    color: #91919F;
`