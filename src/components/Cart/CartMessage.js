import React, { useContext, Suspense } from "react";
import { Link } from 'react-router-dom';
import { context } from '../../context/context';
const MessageModal = React.lazy(()=>import('../Modal/MessageModal'))

export const CartMessage = () => {
  const {  openMsg, setMsgModal } = useContext(context);

  return (
     <>
      {
          openMsg && (
            <Suspense fallback="Loading...">
              <MessageModal open={openMsg} onClose={() => setMsgModal(false)} />
            </Suspense>
          )
      }
     
      
     </>
  );
};
