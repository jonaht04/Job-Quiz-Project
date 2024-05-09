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
        return <div className="finalReportSummary">{gptResponse}</div>
      }
    }

      return (
        <div>
            {/*Header Text*/}
            <h1>Your Results:</h1>

            <div className="finalReportSubheader"></div> {/** loading screen included in bootstrap*/}
            {isLoading ? <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div> : <ul className="finalReportSummary"> {generateReport()} </ul>}

            </div>
      );
    };  
    export default FinalReport;
