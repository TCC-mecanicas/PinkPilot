import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div

          key={index}
          className={`flex items-start py-2 px-4 rounded-lg ${
            message.type === "user"
              ? "bg-gray-100 text-gray-800"
              : "bg-rosinha text-black"
          }`}
        >
          {message.type === "user" && (
            <span className="align-left mr-2 font-bold text-margentinha">Você:</span>
          )}

          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

ChatHistory.propTypes = {
    chatHistory: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['user', 'system']).isRequired,
        message: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ChatHistory;