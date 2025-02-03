// greet.Greeter.Hello (Unary)

// Input:
// {
//   request: {  // HelloRequest
//     firstName: "",  // string
//   },
// }

function Hello(input) {
  return {
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
}
