import styled from "styled-components"

import { v } from "./variables"

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-radius: ${v.borderRadius};
    overflow: auto;
`

export const STHead = styled.thead`
    position: sticky;
    z-index: 100;
`

export const STHeadTR = styled.tr`
    background: #D0D7DEFF;
`

export const STH = styled.th`
    padding: ${v.smSpacing};
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid black;
`

export const STBody = styled.tbody``

export const STBodyTR = styled.tr`
    background: ${({ theme }) => theme.white};
  
    &:hover {
      background-color: #F0F2F5;
    }
`

export const STD = styled.td`
    padding: ${v.smSpacing};
    border: 1px solid ${({ theme }) => theme.bg2};
    font-size: 14px;
`