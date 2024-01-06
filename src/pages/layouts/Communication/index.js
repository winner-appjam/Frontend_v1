import React from 'react';
import * as S from './style'
import Footer from '../Footer';

const Communication = () => {

  const 게시글 = [{
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  },
  {
    "Title": "스터디 플래너 추천 좀",
    "Name": "뽕짝이",
    "Time": "10분전"
  }
  ]

  return (
    <S.Layout>
      <S.Header>커뮤니케이션</S.Header>
      <S.ContentLayout>
        <S.Content>
          {
            게시글.map((item, index) => (
              <S.BoxLayout key={index} >
                <S.Title>{item.Title}</S.Title>
                <S.Name>{item.Name}</S.Name>
                <S.Time>{item.Time}</S.Time>
              </S.BoxLayout>
            ))
          }
        </S.Content>
      </S.ContentLayout>
      <Footer />
    </S.Layout>
  );
};

export default Communication;