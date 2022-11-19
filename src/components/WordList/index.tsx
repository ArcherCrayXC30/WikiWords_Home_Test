import React, {useMemo, FC} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {checkRank} from "../../helpers";
import {ReactComponent as Star} from './star.svg'

interface WordElementProp {
    word: string
    rating: number
}

const WordElementStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  svg {
    path {
      fill: greenyellow;
      stroke: greenyellow;
    }
  }
`

export const WordElement: FC<WordElementProp> = ({word, rating}) => {
    const starArr = new Array(rating).fill(0)
    return (
        <WordElementStyled>
            <p>{word}</p>
            <div>
                {
                    starArr.map((_, idx) => {
                        return (
                            <Star key={`star_${idx}`} className={'Star'}/>
                        )
                    })
                }
            </div>
        </WordElementStyled>
    )

}

const WordsListStyled = styled.article`

  
  h3 {
    margin-bottom: 20px;
  }
  .List {
    padding-left: 24px;
    width: 50%;
  }
`

const WordList = () => {
    const { wordsMap, ranks } = useSelector(({data}: AppState) => data)
    const wordList = useMemo(() => {
        return [...(wordsMap || new Map<string, number>()).keys()]
    }, [wordsMap])
    return (
        <WordsListStyled>
            <h3>Word Rank List</h3>
            <div className={'List'}>
                {wordList.map((key, idx) => {
                    const value = wordsMap?.get(key) as unknown as number
                    const rank = checkRank(value, ranks)
                    return <WordElement word={key} rating={rank} key={`${key}_${idx}`}/>
                })}
            </div>
        </WordsListStyled>
    )
}

export default WordList