const CommentsContainer = () => {
    const comments = [
      {
        name: "Alice Johnson",
        text: "This video was very helpful, thanks!",
        reply: [
          {
            name: "Bob Smith",
            text: "Agreed! Explained really well.",
            reply: [],
          },
          {
            name: "Charlie Lee",
            text: "Can someone help me with a doubt?",
            reply: [],
          },
        ],
      },
      {
        name: "David Brown",
        text: "Loved the part where you explained recursion.",
        reply: [
          {
            name: "Eva Green",
            text: "Same here! That part was brilliant.",
            reply: [
              {
                name: "Frank White",
                text: "I struggled with recursion before, this helped.",
                reply: [
                  {
                    name: "Grace Hall",
                    text: "Same, now recursion is much clearer!",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Hannah Adams",
        text: "Can you make a video on dynamic programming too?",
        reply: [],
      },
      {
        name: "Ian Thompson",
        text: "Subscribed! Waiting for more content!",
        reply: [],
      },
    ];
  
    const Comment = ({ comment }) => {
      const { name, text } = comment;
      return (
        <div className="bg-neutral-200 my-2 p-2 rounded">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      );
    };
  
    const CommentsList = ({ commentsList }) => {
      return (
        <div className="pl-4 ">
          {commentsList.map((comment, index) => (
            <div key={index} className="border-l-2 border-gray-400">
              <Comment comment={comment} />
              {comment.reply.length > 0 && (
                <CommentsList commentsList={comment.reply} />
              )}
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <div className="mt-8 pl-8">
        <p className="font-bold text-lg mb-4">Comments:</p>
        <CommentsList commentsList={comments} />
      </div>
    );
  };
  
  export default CommentsContainer;
  