// greet.Greeter.HelloClientStream (Client streaming)

// Input:
// {
//   stream: [
//     {  // HelloRequest
//       firstName: "",  // string
//     },
//   ],
// }

function(input) {
  response: {  // HelloResponse
    greeting: "",  // string
    foo: [  // map<int32, string>
      {
        key: 0,  // int32
        value: "",  // string
      }
    ],
  },
}
