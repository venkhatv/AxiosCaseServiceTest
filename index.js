const axios  = require("axios");

const get1 = async (userContext, url, params) => {
  const securityContext = {};
  const jwtToken = "1bacdd";
  console.log({
    msg: "case service get",
    data: { url, params, securityContext }
  });

  return axios
    .get(url, {
      params,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "security-context": securityContext
      }
    })
    .then(result => { console.log(result.data); })
    .catch(err => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      console.log('\n');
      console.log(err);
    });
};

url = "https://case-service.dev.saas.nutanix.com/v1/support/cases";
function callApi(){
  try {
    get1({}, url, {});
  } catch (err) {
    console.log(err);
  }
}
callApi();