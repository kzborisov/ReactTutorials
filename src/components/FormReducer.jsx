import { useReducer } from "react";

function formReducer(state, action) {
  // TODO: Implement the reducer function
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(formReducer, {
    // TODO: Add the initial state
  });

  const handleChange = (e) => {
    // TODO: implement the handle change logic
  };

  const handleReset = (e) => {
    // TODO: implement the reset logic
  };

  return (
    <div className='form-container'>
      <div className='form-card'>
        <h4 className='form-title'>
          A More Complex Example with <span>useReducer</span>
        </h4>
        <form className='form'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={state.username}
            onChange={handleChange}
            className='form-input'
            placeholder='Enter your username'
          />
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
            className='form-input'
            placeholder='Enter your email'
          />
          <button type='button' onClick={handleReset} className='form-button'>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
