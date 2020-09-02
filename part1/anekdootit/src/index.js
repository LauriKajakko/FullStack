import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const randomState = () => setSelected(Math.floor(Math.random() * 6))
  const votes = new Uint8Array(anecdotes.length)
  const copy = votes
  const addVote = () => (
    copy[selected]+=1
  )

  return (
    <div>
      <p>
        {props.anecdotes[selected]}
        <Votes votes ={votes[selected]}/>
      </p>
      <p>
        <Button handleClick = {randomState} text = {'next anecdote'}/>
        <Button handleClick = {addVote} text = {'vote'}/>
      </p>
      
    </div>
  )
}

const Votes = (props) => (
  <p>
    has {props.votes} votes
  </p>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)