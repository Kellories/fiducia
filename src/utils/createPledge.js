const db = require('../api/fireabaseConfig')
import { doc , setDoc, updateDoc, arrayUnion, arrayRemove, getDoc, deleteDoc} from "firebase/firestore"

const CreatePledge = async(id,uid) => {
    const docRef = doc(db,'LoanProposal', id)
    if(uid !== request){
        let docSnap = await getDoc(docRef)
        let oldAmount = 0
        let existingPledge = 0
        for(i in docSnap.data().Pledging){
            if(docSnap.data().Pledging[i].pledger === uid){
                existingPledge += docSnap.data().Pledging[i].amount
                oldAmount = docSnap.data().Pledging[i].amount
            }
        }
        let newValue = 0
        if(existingPledge != 0 && pledgeAmt != NaN){
            newValue = existingPledge + pledgeAmt
        }
        if(newValue != 0){

            await updateDoc(docRef,{
                Pledging: arrayRemove({'amount':oldAmount, 'pledger':uid })
            })
            await updateDoc(docRef,{
                Pledging: arrayUnion({'amount':newValue, 'pledger':uid})
            })
        }else{
          await updateDoc(docRef,{
            Pledging: arrayUnion({'amount':pledgeAmt, 'pledger':uid})
          })
        }
        let check = 0
        let lenders = []
        let lendAmounts = []
        docSnap = await getDoc(docRef)
        for(i in docSnap.data().Pledging){
            check += docSnap.data().Pledging[i].amount 
            lenders.push(docSnap.data().Pledging[i].pledger)
            lendAmounts.push((docSnap.data().Pledging[i].amount).toString())
        }
        console.log(docSnap.data().Title)
        console.log(lenders)
      
        console.log(lendAmounts)
        if(check >= docSnap.data().Loan){
            console.log(docSnap.data().UID)
            try{
                await fetch('http://13.212.100.69:5000/createLoanLedger',{
                    method:"POST",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        loanTitle:docSnap.data().Title,
                        borrower:docSnap.data().UID,
                        lenders:lenders,
                        lendAmounts:lendAmounts
                    })
                }).then(async (response)=>{
                    console.log(response.json())
                    try{
                        await deleteDoc(docRef)
                        alert("Pledged!")
                    }catch(err){
                        console.log(err)
                    }

                })
            }catch(err){
                console.log(err)
            }


        }
    }else{
        alert("Cannot Pledge To Own Proposal!")
    }

}

export default CreatePledge