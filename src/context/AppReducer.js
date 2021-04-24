export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_MEETING":
        return {
          ...state,
          meetings: [...state.meetings, action.payload],
        };
  
      case "EDIT_MEETING":
        const updatedmeeting = action.payload;
  
        const updatedmeetings = state.meetings.map((meetings) => {
          if (meetings.id === updatedmeeting.id) {
            return updatedmeeting;
          }
          return meetings;
        });
  
        return {
          ...state,
          meetings: updatedmeetings,
        };
  
      case "REMOVE_MEETING":
        return {
          ...state,
          meetings: state.meetings.filter(
            (meetings) => meetings.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };