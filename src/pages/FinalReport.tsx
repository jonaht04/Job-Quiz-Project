import "./Questions.css";


interface Props {
    gptResponse: string;
    isLoading: boolean;
  }
   


  const FinalReport: React.FC<Props> = ({ gptResponse, isLoading }) => {

    /** Generates the report from GPT*/
    const generateReport = () =>{ 
      if (gptResponse.includes("Error")){// Handles if there is an error
        return <span style={{color:"#d20f39"}}>{gptResponse}</span>
      }
      else { // can be used to format the response in the near future.
        return gptResponse
      }
    }

      return (
        <div>
            {/*Header Text*/}
            <h1>General Field: INSERT VARIABLE HERE</h1>
            <div className="finalReportSummary">Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit eget mi sit amet laoreet. Nam fringilla est a fringilla egestas. Donec vitae fermentum odio, a imperdiet tortor. Phasellus sed quam dui. Curabitur tortor dui, pulvinar sed auctor eget, hendrerit eget ex. Pellentesque maximus ipsum id lacinia convallis. Pellentesque aliquam eu velit in placerat. Morbi dapibus nibh mi, quis tempor magna cursus sit amet. </div>
            
            <div className="finalReportSubheader">Attributes of User:</div>
            <ul className="finalReportSummary">
                <li>Job Number One</li>
                <li>Job Number Two</li>
                <li>Job Number Three</li>
            </ul>

            <div className="finalReportSubheader">Possible Jobs:</div> {/** loading screen included in bootstrap*/}
            {isLoading ? <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div> : <ul className="finalReportSummary"> {generateReport()} </ul>}

            </div>
      );
    };  
    export default FinalReport;
