// greet.Greeter.HelloBidiStream (Bidirectional streaming)

// Input:
// {
//   request: {  // HelloRequest
//     firstName: "",  // string
//   },
// }

function(input) {
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
