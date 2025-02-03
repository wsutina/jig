// greet.Greeter.HelloServerStream (Server streaming)

// Input:
// {
//   request: {  // HelloRequest
//     firstName: "",  // string
//   },
// }

function HelloServerStream(input) {
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
