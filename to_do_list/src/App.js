import './App.css';
import React,{useState} from 'react'

function TodoList() {
  document.title = "To Do List"
const[First_Name,setFirst_Name] = useState("");
const[Last_Name,setLast_Name] = useState("");
const[Email,setEmail] = useState("");
const[Contact,setContact] = useState("");
const[Gender,setGender] = useState("Male");
const[Subject,setSubject] = useState({
English: true,
        Maths: false,
        Physics: false,})
const[File,setFile] = useState("");
const[URL,setURL] = useState("");
const[selectedOption,setChoice] = useState("");
const[About,setAbout] = useState("");

const handleSubjectChange = (sub) => {
        setSubject((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

const ResetHandler=()=>{
  setFirst_Name("")
  setLast_Name("")
  setEmail("")
  setContact("")
  setGender("")
  setSubject("")
  setFile("")
  setURL("")
  setChoice("")
  setAbout("")
  document.getElementById("First_Name").setAttribute("placeholder", "new text")
  document.getElementById("Last_Name").setAttribute("placeholder", "new text")
}
const SubmitHandler=(e)=>{
  e.preventDefault();
  console.log(Last_Name)
  console.log(First_Name)
    console.log(Email)
      console.log(Contact)
        console.log(Gender)
          console.log(Subject)
            console.log(File)
              console.log(URL)
                console.log(selectedOption)
                  console.log(About)
 //alert(First_Name+Last_Name)
  alert(`${First_Name} heloo ${Last_Name}`)
  //in alert popup we will get as per alert condition ,here operators not acceptable
}

function first_name(e){
setFirst_Name(e.target.value)}
  return (
    
    <div className="App">
    
       <h1>Form in React</h1>
       
       <fieldset>
      <form onSubmit={(e)=>SubmitHandler(e)}>
        {//when we are using onSubmit in form then only required will work if wre working with onclick
        //reuire not working empty data will accept broweser
        //onClick={(e)=>SubmitHandler(e)}// 
}
        
           <label for="First_Name">First Name:</label>
          <input type="text" id="First_Name"  value={First_Name} 
          onChange={first_name} name="First Name" placeholder="Enter First Name" required/>

             <label for ="Last_Name">Last Name:</label>
          <input name="Last Name" id="Last_Name" value={Last_Name} type="text"
          onChange={(e)=>{setLast_Name(e.target.value)  }} placeholder="Enter Last Name" required />

          <label >Enter Email:</label>
          <input type="email"  name="email" id="email"value={Email}
          onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" required />

             <label >Contact:</label>
          <input type="tel" name="Contact" id="Contact" value={Contact} 
          onChange={(e)=>{setContact(e.target.value)}} placeholder="Enter Mobile Number" required />

             <label >Gender:</label>
          <input value="Male" type="radio" name="gender" 
          checked={Gender==="Male"} onChange={(e)=>{setGender(e.target.value)}}
          />Male 

          <input value="FeMale" type="radio" name="gender" 
           checked={Gender==="FeMale"} onChange={(e)=>{setGender(e.target.value)}}/>FeMale 

          <input value="Other" type="radio" name="gender" 
           checked={Gender==="Other"} onChange={(e)=>{setGender(e.target.value)}}/>Other 



             <label >Your Best Subject:</label>
          <input 
          type="Checkbox" checked={Subject.English === true}
                        onChange={(e) =>
                            handleSubjectChange("English")
                        }/>English

           <input 
          type="Checkbox"  checked={Subject.Maths === true}
                        onChange={(e) =>
                            handleSubjectChange("Maths")}/>Maths

           <input  checked={Subject.Physics === true}
                        onChange={(e) =>
                            handleSubjectChange("Physics")} 
          type="Checkbox"/>Physics

            <label >Upload Resume:</label>
          <input  type="file" placeholder="Enter Upload File" 
          onChange={(e)=>{setFile(e.target.value)}} className="custom-file-label" required />

            <label >Enter URL:</label>
          <input value={URL} type="url" placeholder="Enter URL" 
          onChange={(e)=>{setURL(e.target.value)}} required />



            <label >Select your Choice</label>
         

 
                    <select   value={selectedOption}
                        onChange={(e) =>
                            setChoice(
                                e.target.value
                            )
                        }>
                      <optgroup label="Beginners">
                        <option>HTML</option>
                          <option>JavaScript</option>
                            <option>CSS</option>
                      </optgroup>
                      <optgroup label="Advanced">
                        <option>ReactJs</option>
                          <option>Node</option>
                            <option>MOngoDB</option>
                      </optgroup> </select>

           <label type="text-area">About</label>
          <textarea value={About} 
           onChange={(e)=>{setAbout(e.target.value)}} placeholder=" About Your Self" required ></textarea>

          

          <button type="reset" value="reset"onClick={()=>ResetHandler}>Reset</button>
          
          <button type="submit"  value="Submit">Submit</button>
      </form>
  </fieldset>
     
    </div>
  );
}

export default TodoList;
