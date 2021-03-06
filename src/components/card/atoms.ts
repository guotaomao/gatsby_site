import styled from "styled-components"
import { color, typography, Media } from "@src/theme"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  ${Media.lessThan(Media.small)} {
    width: 100%;
  }
`

export const Title = styled.h4`
  height: 30px;
  line-height: 30px;
  margin: 0px;
  font-size: ${typography.h4};
  :hover {
    color: ${color.primary};
  }
`

export const Article = styled.article`
  flex: 1;
  height: 60px;
  padding-right: 20px;
  margin: 15px 0;
  font-size: ${typography.textSmall};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  ${Media.lessThan(Media.small)} {
    -webkit-line-clamp: 3;
    margin: 10px 0;
  }
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
  font-size: ${typography.textThin};
`

export const Img = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-bottom: 0px;
`

export const Author = styled.span`
  margin: 0 10px;
`
export const Date = styled.span`
  margin: 0 10px;
`
export const Flag = styled.span`
  cursor: pointer;
  height: 26px;
  padding: 0 5px;
  line-height: 26px;
  margin: 0 10px;
  border: 1px solid ${color.prompt};
  border-radius: 13px;
  font-size: ${typography.textThin};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
