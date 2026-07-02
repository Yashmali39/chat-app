import Message from "./Message";

function MessageList({ messages, currentUser }) {
  return (
    <div className="h-[65vh] overflow-y-auto bg-gray-50 p-4 space-y-3">

      {messages.length === 0 ? (

        <div className="h-full flex justify-center items-center text-gray-400">

          No messages yet 👋

        </div>

      ) : (

        messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            currentUser={currentUser}
          />
        ))

      )}

    </div>
  );
}

export default MessageList;