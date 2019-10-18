const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'omFtRkaRs3Xu0pTW',
  accessKeySecret: 'a8LXFS3hXAU3vbtJqjEQh038j7iTDU',
  endpoint: "https://dysmsapi.aliyuncs.com",
  apiVersion: "2017-05-25"
});

var params = {
  "PhoneNumbers": "15034458360",
  "SignName": "jasonandjay",
  "TemplateCode": "SMS_144457028",
  "TemplateParam": JSON.stringify({code: ~~(Math.random()*899999 + 100000)})
}

var requestOption = {
  method: 'POST'
};

client.request('SendSms', params, requestOption).then((result) => {
  console.log(JSON.stringify(result));
}, (ex) => {
  console.log(ex);
})