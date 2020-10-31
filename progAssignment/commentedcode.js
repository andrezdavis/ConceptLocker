//   const filterByKeyword = () => {
//     axios
//       .post("https://api.monkeylearn.com/v3/extractors/ex_YCya9nrn/extract/", {
//         "data": ["Elon Musk has shared a photo of the spacesuit designed by SpaceX. This is the second image shared of the new design and the first to feature the spacesuit’s full-body look."]

//           }, {
//         headers: {
//             Authorization:"Token df54194010c9c38f93075ca244fe4ff57b165c23",
//             "Content-Type": "application/json"
//         }
//       }
//       )
//       .then(function (response) {
//         keywordResponse = []
//         response.data[0]['extractions'].forEach( (keyword) => {
//             // if (parseFloat(keyword['relevance']) >= .8) {
//                 keywordResponse.push(keyword)
//             // }
//         })
//       })
//       .catch(function (error) {
//         console.log("Not working", error);
//       });
//   }
 // const submitFirestore = () => {
  //   axios
  //     .post("http://localhost:9000/setup/", {
  //       field1: value1,
  //       field2: value2,
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Not working", error);
  //     });
  // };

  // //Displays the data in server console
  // const getFirestore = () => {
  //   axios
  //     .get("http://localhost:9000/data")
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     // .then(({ data }) => {
  //     //   setData(data)
  //     // })
  //     .catch(function (error) {
  //       console.log("Not working", error);
  //     });
  // };

  // const getTextSummarization = () => {
  //   axios
  //     .post("https://api.deepai.org/api/summarization", {
  //       text: "Summarize this text. I am writing text in here and I want it summarized. Please don't make this look terrible please."
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Not working", error);
  //     });
  // }