import React, { useState, useCallback, useEffect } from "react";

const MESSAGE = {
  BLOCKED: 'You are blocked!',
  SUBSCRIBE: 'Subscribed!',
  UNSUBSCRIBE: 'Unsubscribed!',
};

const Message = () => {
  const [state, setState] = useState({
    message: sessionStorage.getItem('message') || 'Welcome Visitor',
    isSubscribed: JSON.parse(sessionStorage.getItem('isSubscribed')) || false,
    count: 0
  });

  const {message, isSubscribed, count} = state;

  useEffect(() => {
    sessionStorage.setItem('isSubscribed', isSubscribed);
    sessionStorage.setItem('message', message);
  }, [isSubscribed, message]);

  const toggleSubscription = useCallback(() => {
    let isConfirmed = true;

    if(isSubscribed) {
      isConfirmed = window.confirm('Are you sure you want to unsubscribe?')
    }

    if (isConfirmed) {
      setState(prevState => {
        let message;
        switch (prevState.count) {
          case 5:
            message = MESSAGE.BLOCKED;
            break;
          default:
            message = prevState.isSubscribed ? MESSAGE.UNSUBSCRIBE : MESSAGE.SUBSCRIBE;
        }
        return {
          ...prevState,
          isSubscribed: !prevState.isSubscribed,
          message: message,
          count: prevState.count + 1,
        };
      });
    }
  }, [isSubscribed]);

  return (<div>
    <h1>{message}</h1>
    <button onClick={toggleSubscription} disabled={count >= 6}>
      {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
    </button>
  </div>);
}

export default Message;