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
