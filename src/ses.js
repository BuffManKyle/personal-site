
      function Ses(output){
        let params = {
          Destination: {
            CcAddresses: ["Kylekatzenmaier@gmail.com"],
          },
          Message: {
            Body: {
              Text: {
                Data: output
              }
            },
            Subject: {
              Data: "New Inquiry"
            }
          },
          Source: "epsolfwd@gmail.com"
        };
        return ses.sendEmail(params).promise();
      };
    ;

export default Ses;