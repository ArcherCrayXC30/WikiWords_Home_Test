import React, {ChangeEvent, useCallback} from 'react';
import {useDispatch} from "react-redux";
import {getTextFromWiki, resetState} from "../../reducers/data";
import {debounce} from "../../helpers";
import {InputSearchStyled} from "./style";

const InputSearch = () => {
  const dispatch = useDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value) {
      // @ts-ignore
      dispatch(getTextFromWiki(value))
    } else {
      dispatch(resetState())
    }

  }
  const handleInput = useCallback(debounce(handleChange, 700), [])
  return (
      <InputSearchStyled
          type={'text'}
          placeholder={'input search text'}
          onChange={handleInput}
      />
  )
}

export default InputSearch