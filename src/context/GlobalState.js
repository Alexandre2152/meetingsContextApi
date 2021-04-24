import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  meetings: [
    {
      id: 1,
      titulo: "Reunião Um",
      hora: "12:00",
      colaboradores: "Pessoa 1, pessoa 2, pessoa 3"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function AddMeetings(meetings) {
    dispatch({
      type: "ADD_MEETING",
      payload: meetings
    });
  }

  function editMeeting(meetings) {
    dispatch({
      type: "EDIT_MEETING",
      payload: meetings
    });
  }

  function removeMeeting(id) {
    dispatch({
      type: "REMOVE_MEETING",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        meetings: state.meetings,
        AddMeetings,
        editMeeting,
        removeMeeting
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};