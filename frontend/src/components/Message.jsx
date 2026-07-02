function Message({ message, currentUser }) {

  const isCurrentUser = message.sender === currentUser;

  return (

    <div
      className={`flex ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2 shadow ${
          isCurrentUser
            ? "bg-blue-600 text-white"
            : "bg-white border"
        }`}
      >

        <p className="text-xs font-semibold mb-1">

          {isCurrentUser ? "You" : message.sender}

        </p>

        <p>{message.text}</p>

        <p
          className={`text-[10px] mt-2 text-right ${
            isCurrentUser
              ? "text-blue-100"
              : "text-gray-500"
          }`}
        >

          {message.time}

        </p>

      </div>

    </div>

  );

}

export default Message;