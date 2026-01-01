/*
enum Months{
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
};

function isItSummer(month: Months): boolean{
  let isSummer: boolean;
  switch (month) {
    case Months.Jun:
    case Months.Jul:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(4));


enum ApprovalRequest{
  draft,
  pending,
  approved,
  rejected
};
const request = {
  id: 1,
  status: ApprovalRequest.approved,
  description: "Request for annual leave"
}

const requesForLeave = function (): void{
  if(request.status === ApprovalRequest.approved){
    console.log("Your leave request has been approved.");
  } else if(request.status === ApprovalRequest.rejected){
    console.log("Your leave request has been rejected.");
  } else if (request.status === ApprovalRequest.pending) {
    console.log("Your leave request is pending.");
  } else {
    console.log("Your leave request is in draft status.");
}
}

requesForLeave();

enum Directions{
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST"
};

function move(direction: Directions): void{
  console.log(`Moving towards ${direction}`);
}
move(Directions.South);

enum ResponseStatus{
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
function handleResponse(status: ResponseStatus): void{
  switch (status) {
    case ResponseStatus.Success:
      console.log(ResponseStatus.Success,"Request was successful.");
      break;
      case ResponseStatus.NotFound:
        console.log(ResponseStatus.NotFound + " Resource not found.");
        break;
        case ResponseStatus.ServerError:
          console.log(ResponseStatus.ServerError, "Internal server error.");
          break;
          default:
            console.log("Unknown status code.");
            break;
          }
        }
        
        handleResponse(ResponseStatus.NotFound);
*/
