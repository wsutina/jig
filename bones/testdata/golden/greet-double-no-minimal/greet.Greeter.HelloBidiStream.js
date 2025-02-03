// greet.Greeter.HelloBidiStream (Bidirectional streaming)

// Input:
// {
//   request: {  // HelloRequest
//     firstName: "",  // string
//   },
// }

function HelloBidiStream(input) {
  return {
    stream: [
      {  // HelloResponse
        greeting: "",  // string
        foo: [  // map<int32, string>
          {
            key: 0,  // int32
            value: "",  // string
          }
        ],
      },
    ],
  }
}
