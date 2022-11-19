import React, {useMemo} from 'react';
import {checkRank} from "./helpers";
import {useSelector} from "react-redux";
import {AppState} from "./store/store";
import InputSearch from "./components/InputSearch";
import Title from "./components/Title";
import TextField from "./components/TextField";
import WordList from "./components/WordList";

function App() {
    const { wordsMap, status, error } = useSelector(({data}: AppState) => data)

  return (
    <div className="App">
        <Title title={'Wiki Words Counter'}/>
        <InputSearch/>
        {
            status === 'SUCCESS' ? (
                <>
                    {
                        wordsMap ? (
                            <>
                                <TextField/>
                                <WordList/>
                            </>
                        ) : (
                            <div>Nothing to see</div>
                        )
                    }
                </>
            ) : null
        }
        {
            status === 'REQUEST' ? (<div>Loading...</div>) : null
        }
        {
            status === 'FAILURE' ? (<div>{error}</div>) : null
        }
        {
            status === 'INVALID' ? (<div>Waiting input text...</div>) : null
        }
    </div>
  );
}

export default App;
