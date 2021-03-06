import React from "react"
import { Link } from "gatsby"
import { Card } from "@components/card"
import { Recent, Recommend } from "@components/panel"
import { Layout } from "@components/layout"
import { SEO } from "@components/seo"
import styled from "styled-components"
import { ReactTypes } from "@src/types"
import { Media } from "@theme"

export const ReactContainer = styled.div`
  display: flex;
`

export const AboutContainer = styled.div`
  width: 280px;
  margin-left: 10px;
  ${Media.lessThan(Media.small)} {
    display: none;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${Media.lessThan(Media.small)} {
    width: 100%;
  }
`

const ReactList: ReactTypes.CardList[] = [
  {
    createDate: "20200417",
    author: "maoguotao",
    title: "文章标题",
    flag: "/redux-saga",
    article:
      "使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
  {
    createDate: "20200416",
    author: "zhangshan",
    title: "文章标题",
    flag: "/redux-saga",
    article: "使用saga处理副作用",
    flagList: [
      {
        flag: "react-saga",
        text: "saga处理effect",
      },
      {
        flag: "react-thunk",
        text: "saga处理effect",
      },
    ],
  },
]
const SecondPage = () => (
  <Layout>
    <SEO title="react 相关文章，和实践总结" />
    <ReactContainer>
      <CardContainer>
        {ReactList.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </CardContainer>
      <AboutContainer>
        <Recent ReactList={ReactList}></Recent>
        <Recommend></Recommend>
      </AboutContainer>
    </ReactContainer>
  </Layout>
)

export default SecondPage
