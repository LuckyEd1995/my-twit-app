import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../mainSlice';
import createTwit from '../../firebase/database';

export default function CreateTwit() {
  
  const dispatch = useDispatch();

  const input = React.createRef();

  function handleSubmit(event) {
    event.preventDefault();
    createTwit(input.current.value, 'user01');
    dispatch(toggle());
  };

  return (
    <div id='modal-wrap'>
      <div id='modal'>
        <div id='close-modal' onClick={() => dispatch(toggle())}>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 
                       0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 
                       1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 
                       1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 
                       5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z'>
              </path>
            </g>
          </svg>
        </div>
        <div id='create-twit-wrap'>
          <div id='create-twit-avatar'></div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <textarea id='textarea' 
                      rows={7} 
                      cols={35} 
                      ref={input} 
                      placeholder='Чем Вы хотите поделиться?'>
            </textarea>
            <input id='submit-btn' type='submit'/>
          </form>
        </div>
      </div>
    </div>
  )
}